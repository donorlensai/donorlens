# Technology Stack

This document records the canonical technology stack for Donorlens.

Technology choices should be explicit, boring where possible, and aligned with the architecture standard in `AGENTS.md`.

## Adopted Stack Direction

| Area | Technology | Status | Notes |
| --- | --- | --- | --- |
| Frontend | React / Next.js / TanStack | Adopted | Use for product UI, routing, server rendering, data fetching, and client state where appropriate. |
| Backend | NestJS with Fastify where appropriate | Adopted | Use for service APIs, dependency boundaries, validation, and request handling. |
| Database | PostgreSQL | Adopted | Primary relational data store. Each service owns its data boundary. |
| ORM | Prisma | Adopted | Database schema, migrations, and typed data access inside service boundaries. |
| Domain events | Kafka | Adopted | Cross-service domain events and event-driven workflows. |
| Service-local jobs | BullMQ | Candidate | Use for service-local background work when Kafka is not the right abstraction. |
| Auth | Keycloak | Adopted | Enterprise identity provider, SSO, realms, clients, roles, and token issuance. |
| Frontend auth integration | Auth.js | Candidate | Optional integration for frontend/session ergonomics only; Keycloak remains the authority. |
| Infra | Docker / Kubernetes | Adopted | Docker for local and service packaging; Kubernetes for production orchestration. |
| CI/CD | GitHub Actions | Adopted | Pull request checks, build, test, release, and deployment workflows. |

## Adoption Rules

- Do not introduce a second tool for the same responsibility without an ADR.
- Prefer consistency over novelty.
- Choose the simplest tool that satisfies enterprise requirements without weakening service boundaries.
- Revisit candidate technologies when non-functional requirements become concrete.
- Document adopted technologies, owners, operational notes, and migration implications.

## Status Values

Use these status values:

- `Candidate`: proposed default, not yet committed by implementation.
- `Adopted`: actively used and preferred for new work.
- `Deprecated`: still present but should not be used for new work.
- `Rejected`: considered and intentionally not used.
