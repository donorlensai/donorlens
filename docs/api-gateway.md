# API Gateway Rules

The API gateway is the edge entry point for client traffic into backend services.

## Responsibilities

The gateway may own:

- Routing to the correct service
- Authentication verification
- Rate limiting
- Request logging
- API versioning
- Request correlation IDs
- Request size limits
- Coarse-grained abuse protection

## Non-Responsibilities

The gateway must not own domain business logic.

The gateway should not become a hidden shared service layer. Domain authorization, business validation, persistence, and workflow decisions belong in the owning service.

## Routing

Routes should map clearly to bounded contexts and service ownership.

Prefer stable public API paths that do not expose internal deployment details.

## Authentication and Authorization

The gateway may verify identity and reject obviously invalid requests.

Owning services must still enforce domain authorization for protected actions.

## Versioning

Public APIs must have an explicit versioning strategy. Breaking changes require contract migration guidance and compatibility planning.

## Observability

Every gateway request should have a correlation ID that propagates to downstream services, logs, metrics, and traces.
