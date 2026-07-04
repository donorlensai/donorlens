# API Gateway

The API gateway is the edge entry point for client traffic into backend services.

## Ownership

- Area: edge API
- Stack: Node.js HTTP now; NestJS with Fastify remains the target framework when route complexity justifies it
- Canonical rules: `docs/api-gateway.md`

## Responsibilities

- Routing
- Authentication verification
- Rate limiting
- Request logging
- API versioning
- Correlation ID propagation
- `GET /health`
- `GET /ready`
- `GET /v1/me` protected by Keycloak JWT verification

## Boundaries

The gateway must not own domain business logic. Domain authorization and business decisions belong in the owning service.

## Local Auth Configuration

- `KEYCLOAK_ISSUER`: defaults to `http://localhost:8080/realms/donorlens`
- `KEYCLOAK_JWKS_URI`: defaults to `${KEYCLOAK_ISSUER}/protocol/openid-connect/certs`
- `KEYCLOAK_AUDIENCE`: set to `api-gateway` to require an access-token audience
