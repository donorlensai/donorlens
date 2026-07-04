import { randomUUID } from "node:crypto";
import { createServer } from "node:http";
import { extractBearerToken } from "../auth/extractBearerToken.ts";
import { principalFromJwtClaims } from "../auth/principalFromJwtClaims.ts";
import { KeycloakJwtVerifier } from "../auth/verifyKeycloakJwt.ts";
import type { GatewayConfig } from "../config/readGatewayConfig.ts";
import { sendJson } from "./sendJson.ts";

export function createGatewayServer(config: GatewayConfig) {
  const verifier = new KeycloakJwtVerifier(config.auth);

  return createServer(async (request, response) => {
    const correlationId = getHeader(request.headers["x-correlation-id"]);
    response.setHeader("x-correlation-id", correlationId ?? randomUUID());

    if (request.method === "GET" && request.url === "/health") {
      sendJson(response, 200, { status: "ok" });
      return;
    }

    if (request.method === "GET" && request.url === "/ready") {
      sendJson(response, 200, { status: "ready" });
      return;
    }

    if (request.method === "GET" && request.url === "/v1/me") {
      await handleMe(request.headers.authorization, response, verifier);
      return;
    }

    sendJson(response, 404, { code: "NOT_FOUND", message: "Route not found." });
  });
}

async function handleMe(
  authorization: string | string[] | undefined,
  response: Parameters<typeof sendJson>[0],
  verifier: KeycloakJwtVerifier
): Promise<void> {
  const token = extractBearerToken(authorization);

  if (!token) {
    sendJson(response, 401, {
      code: "UNAUTHORIZED",
      message: "Bearer token is required."
    });
    return;
  }

  try {
    const claims = await verifier.verify(token);
    sendJson(response, 200, { principal: principalFromJwtClaims(claims) });
  } catch {
    sendJson(response, 401, {
      code: "UNAUTHORIZED",
      message: "Bearer token is invalid."
    });
  }
}

function getHeader(value: string | string[] | undefined): string | null {
  return Array.isArray(value) ? value[0] ?? null : value ?? null;
}
