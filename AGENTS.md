# Donorlens Agent Operating Manual

This file is the required starting point for AI coding agents and human contributors.

Donorlens is an enterprise microservices-first platform. Build for clear service ownership, strong contracts, service-owned data, reliable operations, and safe evolution.

## Required Reading

Before changing code:

1. Read this file.
2. Read `docs/context-index.md`.
3. Read the canonical doc for the area you are changing.
4. Locate the owning app, service, or package.
5. Check relevant contracts, events, permissions, and tests.

## Canonical Docs

- `docs/architecture.md`: architecture style, DDD, service boundaries.
- `docs/technology-stack.md`: adopted stack and tool rules.
- `docs/golden-paths.md`: repeatable development workflows.
- `docs/api-gateway.md`: gateway responsibilities and limits.
- `docs/data-consistency.md`: eventual consistency, outbox, sagas.
- `docs/migration-path.md`: microservices delivery and boundary evolution.
- `docs/environment-strategy.md`: local, development, staging, production.
- `docs/non-functional-requirements.md`: availability, latency, scale, retention.
- `docs/security.md`: security defaults and review checklist.
- `docs/testing.md`: test strategy.
- `docs/events.md`: event contracts.
- `docs/permissions.md`: permission model.
- `docs/runbook.md`: local and operational guidance.
- `docs/decisions/`: ADRs.

## Architecture Standard

Use Domain-Driven Design and microservice architecture as the primary architecture style.

Services are independently owned, independently deployable business capabilities. The monorepo exists for coordination and developer experience, not to weaken service boundaries.

Avoid distributed-monolith behavior:

- No shared database tables across services.
- No hidden in-process coupling between services.
- No business logic in the API gateway.
- No vague shared domain layer.
- No cross-service data access except through APIs, events, or read models.

## Service Rules

Each service must define:

- Business purpose
- Owned data
- Public APIs
- Domain events
- Permissions
- Runtime configuration
- Health and readiness checks
- Logs, metrics, traces
- Runbook notes

Standard service shape:

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

Business logic belongs in `domain/` or `application/`, not controllers.

## Technology Stack

Adopted direction:

- Frontend: React / Next.js / TanStack
- Backend: NestJS with Fastify where appropriate
- Database: PostgreSQL
- ORM: Prisma
- Domain events: Kafka
- Service-local jobs: BullMQ when useful
- Auth: Keycloak as enterprise identity provider
- Frontend auth integration: Auth.js only if useful
- Infra: Docker / Kubernetes
- CI/CD: GitHub Actions

Do not introduce a second tool for the same responsibility without an ADR.

## Data and Reliability

- Use eventual consistency where needed.
- Avoid distributed transactions unless absolutely necessary and ADR-approved.
- Use the outbox pattern for reliable event publishing.
- Make async consumers idempotent.
- Define timeout, retry, circuit breaker, idempotency, error mapping, and fallback behavior for service-to-service calls.

## File Size Rules

Files should be small and focused.

- Default target: 50-150 lines.
- Soft limit: 300 lines.
- Files over 300 lines require explanation, split plan, and approval.
- No file should exceed 500 lines unless generated, schema output, migration, or documented exception.
- Split large files by responsibility, not randomly.

## Naming Rules

Avoid vague names:

- `utils.ts`
- `helpers.ts`
- `common.ts`
- `misc.ts`

Prefer explicit names:

- `verifyJwtToken.ts`
- `calculateDonationTotal.ts`
- `issueReceipt.ts`
- `publishDonationReceived.ts`

Prefer boring, predictable code over clever abstractions.

## AI Agent Workflow

Before finishing a change:

1. Add or update tests when behavior changes.
2. Run format, lint, typecheck, test, and build commands when available.
3. Update docs when behavior, contracts, operations, or architecture changes.
4. Create an ADR for meaningful architectural decisions.
5. Report commands that could not be run.

## Forbidden Practices

Avoid:

- Business logic in controllers or gateway routes.
- Direct database access across service boundaries.
- Shared tables between services.
- Circular dependencies.
- Unversioned external contracts.
- Non-idempotent event consumers.
- New infrastructure without ownership docs.
- Large dumping-ground folders or packages.

The goal is not ceremony. The goal is a system whose boundaries, behavior, and operational reality are obvious.
