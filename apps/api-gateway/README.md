# API Gateway

The API gateway is the edge entry point for client traffic into backend services.

## Ownership

- Area: edge API
- Stack: NestJS with Fastify where appropriate
- Canonical rules: `docs/api-gateway.md`

## Responsibilities

- Routing
- Authentication verification
- Rate limiting
- Request logging
- API versioning
- Correlation ID propagation

## Boundaries

The gateway must not own domain business logic. Domain authorization and business decisions belong in the owning service.
