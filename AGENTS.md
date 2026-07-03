# Donorlens Agent Operating Manual

This file is the canonical operating manual for AI coding agents and human contributors working in this repository.

The project should be built as a production-grade system that is human-friendly, AI-agent-friendly, secure, testable, observable, and maintainable over time. Prefer clarity, strong boundaries, and safe evolution over short-term speed.

## Core Philosophy

A senior engineer or AI coding agent should understand the system quickly without relying on tribal knowledge.

The system should make these questions easy to answer:

- Where does this feature belong?
- Which service owns this data?
- Which business rule applies here?
- How do I change this safely?
- How do I test and operate it?

Every important concept must have one canonical source of truth. Other docs may reference it, but should not duplicate it.

## Architecture Standard

Use Domain-Driven Design and microservice architecture as the primary architecture style.

Donorlens is an enterprise microservices platform. Services should be designed as independently owned, independently deployable business capabilities from the beginning.

Use a monorepo for coordination and local developer experience, but do not collapse service boundaries into a modular monolith. Local development may run services together through Docker Compose or equivalent tooling, while preserving independent service ownership, contracts, and data boundaries.

Avoid creating a distributed monolith.

## Domain-Driven Design

Organize the system around business domains, not technical layers.

Each bounded context should define:

- Its business purpose
- Its language and terminology
- Its owned entities
- Its aggregates
- Its domain events
- Its permissions
- Its APIs
- Its data ownership

Use tactical DDD where useful:

- Entities for objects with identity
- Value objects for immutable descriptive values
- Aggregates for transactional consistency boundaries
- Domain services for business logic that does not belong to one entity
- Domain events for important business facts

Do not force heavy DDD patterns onto simple CRUD areas.

## Microservice Principles

Each microservice must have a clear business capability.

A service should:

- Own its data
- Expose behavior through APIs or events
- Hide its database from other services
- Be independently testable
- Be independently deployable when needed
- Have clear runtime ownership
- Have health, readiness, logging, metrics, and tracing

Services must not share database tables directly.

Use API contracts for synchronous communication. Use events for cross-service business facts. Use sagas or process managers for workflows that span multiple services.

## Data Consistency

Keep the canonical data consistency strategy in `docs/data-consistency.md`.

Use eventual consistency where needed.

Do not use distributed transactions unless absolutely necessary and explicitly justified by an ADR.

Use the outbox pattern for publishing reliable events from database changes.

Prefer idempotent commands, idempotent event consumers, compensating actions, and clear reconciliation workflows over fragile cross-service locking.

## Repository Structure

Prefer a monorepo for coordinated product development.

Expected top-level structure:

```text
apps/
  web/
  api-gateway/

services/
  identity/
  donors/
  giving/
  campaigns/
  payments/
  notifications/
  analytics/

packages/
  contracts/
  config/
  database/
  observability/
  testing/
  ui/

docs/
  architecture.md
  context-index.md
  golden-paths.md
  technology-stack.md
  non-functional-requirements.md
  environment-strategy.md
  api-gateway.md
  data-consistency.md
  migration-path.md
  ai-agent-workflow.md
  decisions/
  runbook.md
```

Boundaries should evolve through real product learning, not guesses.

## Technology Stack

Keep the canonical technology stack in `docs/technology-stack.md`.

Adopted stack direction:

- Frontend: React / Next.js / TanStack
- Backend: NestJS with Fastify where appropriate
- Database: PostgreSQL
- ORM: Prisma
- Queue: Kafka for cross-service domain events; BullMQ for service-local background jobs when useful
- Auth: Keycloak as the enterprise identity provider; Auth.js only as an optional frontend/session integration if needed
- Infra: Docker / Kubernetes
- CI/CD: GitHub Actions

Technology choices should be explicit and documented. Once a technology is adopted, prefer consistency over introducing parallel tools without an ADR.

## Non-Functional Requirements

Every meaningful product or architecture decision should account for non-functional requirements. Keep the canonical requirements in `docs/non-functional-requirements.md`.

Define and maintain:

- Availability target
- Latency target
- Security level
- Expected users
- Expected transactions
- Data retention
- Compliance needs
- Recovery objectives
- Performance budget
- Operational ownership

Do not design services in the abstract. Design them against explicit reliability, performance, security, and compliance expectations.

## Environment Strategy

Keep the canonical environment strategy in `docs/environment-strategy.md`.

Support these environments:

- `local`: individual developer machine, fast feedback, safe defaults
- `development`: shared integration environment for active work
- `staging`: production-like validation before release
- `production`: live user-facing environment

Environment differences must be explicit. Secrets, URLs, data retention, observability, and destructive operations must be handled differently by environment.

## API Gateway Rules

When microservices are exposed through an API gateway, keep the canonical rules in `docs/api-gateway.md`.

The gateway may own:

- Routing
- Authentication verification
- Rate limiting
- Request logging
- API versioning
- Request correlation IDs
- Edge-level request size limits
- Coarse-grained abuse protection

The gateway must not own domain business logic. Domain authorization and business decisions belong in the owning service.

## Microservices Delivery Path

Keep the canonical migration path in `docs/migration-path.md`.

Start with independently deployable services and strong contracts:

1. Define bounded contexts.
2. Create service ownership and data ownership.
3. Define API and event contracts.
4. Give each service its own database ownership boundary.
5. Run services together locally for developer speed.
6. Deploy services independently in shared environments.
7. Add observability, health checks, and runbooks per service.
8. Evolve service boundaries only through ADR-backed decisions.

Never build hidden in-process coupling that prevents independent deployment later.

## Service Structure

Each service should follow a consistent structure:

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

- `domain/` contains business concepts and rules.
- `application/` contains use cases.
- `infrastructure/` contains database, queues, external APIs, and framework adapters.
- `api/` contains controllers, routes, schemas, and request/response mapping.

Business logic must not live in controllers.

## Naming Rules

Use explicit names. Avoid vague files like:

- `utils.ts`
- `helpers.ts`
- `common.ts`
- `misc.ts`

Prefer names like:

- `verifyJwtToken.ts`
- `calculateDonationTotal.ts`
- `issueReceipt.ts`
- `publishDonationReceived.ts`

Keep files focused. A file over 300 lines needs a good reason.

Prefer boring, predictable code over clever abstractions.

## File Size Rules

Files should be small and focused.

Default target:

- 50-150 lines per file

Soft limit:

- 300 lines maximum

If a file needs to exceed 300 lines, the agent must:

1. Explain why splitting is not appropriate.
2. Suggest a split plan.
3. Get approval before keeping it large.

No file should exceed 500 lines unless it is generated code, schema output, migration, or a clearly documented exception.

Large files must be split by responsibility, not randomly.

## Required Engineering Practices

Every service should include:

- Typed contracts
- Input validation
- Consistent error handling
- Structured logging
- Metrics
- Distributed tracing
- Health checks
- Readiness checks
- Unit tests
- Integration tests
- Contract tests for service boundaries
- OpenAPI or equivalent API documentation

Critical services should also include:

- Threat model
- Performance budget
- Load testing plan
- Backup and restore procedure
- Incident runbook
- Rollback strategy

## Reliability Rules

All service-to-service calls must define:

- Timeout
- Retry policy
- Circuit breaker behavior
- Idempotency rules
- Error mapping
- Fallback behavior where appropriate

Async event consumers must be idempotent.

Events must have versioned schemas.

Do not assume events are delivered exactly once.

## Documentation Rules

Use Architecture Decision Records for meaningful decisions. Store them in `docs/decisions/`.

Each ADR should include:

- Context
- Decision
- Alternatives considered
- Trade-offs
- Consequences
- Date
- Owner

Do not document everything equally. Document what helps future humans and agents avoid mistakes.

## Golden Paths

When adding or changing behavior, follow `docs/golden-paths.md`.

At minimum, every meaningful change should answer:

- Which bounded context owns this?
- Which API, event, or job is affected?
- What data ownership or migration changes are required?
- What tests verify the behavior?
- What logs, metrics, or traces help operate it?
- What docs or ADRs need to change?

## AI Agent Workflow

Before changing code, every AI coding agent must:

1. Read `AGENTS.md`.
2. Read `docs/context-index.md`.
3. Locate the owning module or service.
4. Check relevant contracts, schemas, events, and permissions.
5. Add or update tests.
6. Run lint, typecheck, test, and build commands when available.
7. Update docs if behavior, contracts, operations, or architecture changed.

If commands do not exist yet, document that honestly in the final response and avoid inventing verification.

## Forbidden Practices

Avoid:

- Business logic in controllers
- Direct database access across service boundaries
- Shared tables between services
- Hidden cross-module dependencies
- Circular dependencies
- Vague naming
- Unversioned external contracts
- Non-idempotent event consumers
- New infrastructure without docs or ownership
- Large shared dumping-ground folders

## Final Standard

The architecture should make change safe.

A good implementation is easy to locate, easy to understand, easy to test, easy to monitor, easy to roll back, hard to misuse, clear to humans, and clear to AI agents.

The goal is not maximum ceremony. The goal is a system whose boundaries, behavior, and operational reality are obvious.
