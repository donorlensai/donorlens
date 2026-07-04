import type { KeycloakJwtVerifierConfig } from "../auth/verifyKeycloakJwt.ts";

export type GatewayConfig = {
  host: string;
  port: number;
  auth: KeycloakJwtVerifierConfig;
};

export function readGatewayConfig(): GatewayConfig {
  const issuer =
    process.env.KEYCLOAK_ISSUER ?? "http://localhost:8080/realms/donorlens";
  const auth: GatewayConfig["auth"] = {
    issuer,
    jwksUri:
      process.env.KEYCLOAK_JWKS_URI ??
      `${issuer}/protocol/openid-connect/certs`
  };

  if (process.env.KEYCLOAK_AUDIENCE) {
    auth.audience = process.env.KEYCLOAK_AUDIENCE;
  }

  return {
    host: process.env.API_GATEWAY_HOST ?? "0.0.0.0",
    port: Number(process.env.API_GATEWAY_PORT ?? "3001"),
    auth
  };
}
