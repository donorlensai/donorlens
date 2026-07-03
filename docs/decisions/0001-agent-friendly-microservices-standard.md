# ADR 0001: Agent-Friendly Microservices Architecture Standard

## Status

Accepted

## Date

2026-07-03

## Owner

Project architecture

## Context

Donorlens needs an enterprise microservices architecture that remains understandable and safe to evolve for both human engineers and AI coding agents. The project should avoid tribal knowledge, unclear ownership, shared data ownership, and accidental distributed-monolith patterns.

## Decision

Adopt an enterprise agent-friendly architecture standard based on:

- Domain-Driven Design for meaningful business complexity
- Microservices-first architecture organized around business capabilities
- Independently owned, independently deployable services from the beginning
- Service-owned data with no direct cross-service table access
- Explicit API and event contracts
- Explicit non-functional requirements for availability, latency, security, scale, retention, and compliance
- Environment strategy for local, development, staging, and production
- API gateway rules for routing, auth verification, rate limiting, logging, and versioning
- Eventual consistency by default for cross-service workflows
- Outbox pattern for reliable event publishing
- Microservices-first delivery path with local orchestration for developer experience
- Required AI agent workflow before code changes
- Golden paths, runbooks, ADRs, testing, security, and observability docs
- `AGENTS.md` as the canonical operating manual for agents and contributors

## Alternatives Considered

- Start with a modular monolith and extract services later.
- Keep all guidance informal.
- Use technical layers as primary architecture boundaries.

## Trade-offs

This standard adds documentation and structure early. The trade-off is more upfront service, contract, and operational design, accepted because Donorlens is intended to be an enterprise platform.

## Consequences

Future changes should identify bounded context ownership, data ownership, consistency needs, non-functional requirements, environment impact, API gateway impact, test strategy, operational impact, and documentation impact. Meaningful architectural decisions should be recorded as ADRs.
