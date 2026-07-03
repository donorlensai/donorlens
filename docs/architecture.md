# Architecture

Donorlens follows an enterprise agent-friendly architecture standard:

- Domain-Driven Design where the domain complexity justifies it
- Microservices-first architecture organized around business capabilities
- Independently owned, independently deployable services from the beginning
- Monorepo structure for coordinated product development
- Explicit contracts, tests, docs, observability, and ownership
- Explicit non-functional requirements for availability, latency, security, scale, retention, and compliance
- Explicit technology stack choices documented in `docs/technology-stack.md`

The goal is not maximum ceremony. The goal is a system whose boundaries, behavior, and operational reality are obvious.

## Domain Model

Organize around business domains, not technical layers.

Potential bounded contexts:

- `identity`: users, authentication, organizations, memberships
- `donors`: donor profiles, segmentation, lifecycle
- `giving`: donations, pledges, recurring gifts
- `campaigns`: campaigns, appeals, attribution
- `payments`: payment intents, refunds, settlement
- `receipts`: receipts, tax documents, delivery
- `notifications`: email, SMS, templates, preferences
- `analytics`: read models, reports, dashboards
- `files`: uploads, storage, scanning, metadata

These boundaries are candidates. Let them evolve through real product learning.

## Service Principles

Each service must have a clear business capability, own its data, and expose behavior through APIs or events.

Services must not share database tables directly. A service database is an implementation detail of that service.

Use:

- API contracts for synchronous communication
- Domain events for cross-service business facts
- Sagas or process managers for workflows spanning multiple services
- Versioned schemas for events and external contracts

## API Gateway

Use an API gateway for edge concerns when services are exposed behind one entry point.

The gateway may own routing, authentication verification, rate limiting, request logging, API versioning, request correlation IDs, and coarse-grained abuse protection.

The gateway must not own domain business logic. Domain authorization and business decisions belong in the owning service.

See `docs/api-gateway.md`.

## Data Consistency

Use eventual consistency where needed. Avoid distributed transactions unless absolutely necessary and justified by an ADR.

Use the outbox pattern for reliable event publishing from database changes.

Prefer sagas, process managers, idempotent consumers, compensating actions, and reconciliation workflows for cross-service processes.

See `docs/data-consistency.md`.

## Microservices Delivery Path

Start with explicit services and strong contracts. Use the monorepo and local orchestration for developer speed, but preserve service ownership, data ownership, and independent deployment boundaries.

The delivery path is: define bounded contexts, create service ownership and data ownership, define API/events, run services together locally, deploy services independently, add observability and runbooks per service, then evolve boundaries only through ADR-backed decisions.

See `docs/migration-path.md`.

## Standard Service Shape

```text
src/
  domain/
  application/
  infrastructure/
  api/
  events/
  permissions/
  tests/
```

`domain/` contains business concepts and rules. `application/` contains use cases. `infrastructure/` contains database, queues, external APIs, and framework adapters. `api/` contains controllers, routes, schemas, and request/response mapping.

Business logic must not live in controllers.

## Dependency Direction

Prefer this dependency direction inside a service:

```text
api -> application -> domain
infrastructure -> application/domain through explicit interfaces
```

The domain should not depend on framework adapters, databases, queues, or HTTP libraries.

## Reliability

All service-to-service calls must define timeouts, retry policy, circuit breaker behavior, idempotency rules, error mapping, and fallback behavior where appropriate.

Async event consumers must be idempotent. Do not assume events are delivered exactly once.
