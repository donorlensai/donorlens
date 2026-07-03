# ADR 0003: Adopt Initial Microservices Monorepo Structure

## Status

Accepted

## Date

2026-07-03

## Owner

Project architecture

## Context

Donorlens is a microservices-first enterprise platform. The repository needs a starting structure that supports independently owned services while keeping local development and shared contracts manageable.

## Decision

Adopt a monorepo with:

- `apps/web` for the user-facing web application
- `apps/api-gateway` for edge routing and request policy
- `services/*` for independently owned business services
- `packages/contracts` for shared API and event contract primitives
- `packages/config`, `packages/database`, `packages/observability`, `packages/testing`, and `packages/ui` for narrowly scoped shared packages
- `docker-compose.yml` for local PostgreSQL, Keycloak, Kafka, and Redis infrastructure

## Alternatives Considered

- Multiple repositories from day one
- One application with internal modules
- Shared database-first structure

## Trade-offs

A monorepo simplifies local coordination and contract evolution. The risk is accidental coupling, so each service must keep its own ownership, contracts, and data boundary.

## Consequences

New code should be placed in the owning service or package. Shared packages must stay narrow and must not become hidden domain layers.
