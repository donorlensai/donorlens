import { decodeBase64Url } from "./base64Url.ts";
import type { JwtHeader, KeycloakJwtClaims } from "./jwtTypes.ts";

export type DecodedJwt = {
  header: JwtHeader;
  claims: KeycloakJwtClaims;
  signingInput: string;
  signature: string;
};

export function decodeJwt(token: string): DecodedJwt {
  const parts = token.split(".");

  if (parts.length !== 3 || !parts[0] || !parts[1] || !parts[2]) {
    throw new Error("JWT must have header, payload, and signature.");
  }

  return {
    header: JSON.parse(decodeBase64Url(parts[0])) as JwtHeader,
    claims: JSON.parse(decodeBase64Url(parts[1])) as KeycloakJwtClaims,
    signingInput: `${parts[0]}.${parts[1]}`,
    signature: parts[2]
  };
}
