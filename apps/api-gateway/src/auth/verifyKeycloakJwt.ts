import { createPublicKey, verify } from "node:crypto";
import { decodeBase64UrlBytes } from "./base64Url.ts";
import { decodeJwt } from "./decodeJwt.ts";
import type { JsonWebKey, KeycloakJwtClaims } from "./jwtTypes.ts";

export type KeycloakJwtVerifierConfig = {
  issuer: string;
  audience?: string;
  jwksUri: string;
};

export class KeycloakJwtVerifier {
  private jwks: JsonWebKey[] | null = null;
  private readonly config: KeycloakJwtVerifierConfig;

  constructor(config: KeycloakJwtVerifierConfig) {
    this.config = config;
  }

  async verify(token: string): Promise<KeycloakJwtClaims> {
    const decoded = decodeJwt(token);

    if (decoded.header.alg !== "RS256") {
      throw new Error("JWT algorithm must be RS256.");
    }

    if (!decoded.header.kid) {
      throw new Error("JWT key id is required.");
    }

    this.verifyClaims(decoded.claims);

    const key = await this.findKey(decoded.header.kid);
    const publicKey = createPublicKey({ key, format: "jwk" });
    const valid = verify(
      "RSA-SHA256",
      Buffer.from(decoded.signingInput),
      publicKey,
      decodeBase64UrlBytes(decoded.signature)
    );

    if (!valid) {
      throw new Error("JWT signature is invalid.");
    }

    return decoded.claims;
  }

  private verifyClaims(claims: KeycloakJwtClaims): void {
    const now = Math.floor(Date.now() / 1000);

    if (claims.iss !== this.config.issuer) {
      throw new Error("JWT issuer is invalid.");
    }

    if (claims.exp <= now) {
      throw new Error("JWT is expired.");
    }

    if (claims.nbf && claims.nbf > now) {
      throw new Error("JWT is not active yet.");
    }

    if (this.config.audience && !this.hasAudience(claims)) {
      throw new Error("JWT audience is invalid.");
    }
  }

  private hasAudience(claims: KeycloakJwtClaims): boolean {
    const audience = claims.aud;
    return Array.isArray(audience)
      ? audience.includes(this.config.audience ?? "")
      : audience === this.config.audience;
  }

  private async findKey(kid: string): Promise<JsonWebKey> {
    const keys = await this.getJwks();
    const key = keys.find((candidate) => candidate.kid === kid);

    if (!key) {
      throw new Error("JWT signing key was not found.");
    }

    return key;
  }

  private async getJwks(): Promise<JsonWebKey[]> {
    if (this.jwks) {
      return this.jwks;
    }

    const response = await fetch(this.config.jwksUri);
    const body = (await response.json()) as { keys?: JsonWebKey[] };
    this.jwks = body.keys ?? [];
    return this.jwks;
  }
}
