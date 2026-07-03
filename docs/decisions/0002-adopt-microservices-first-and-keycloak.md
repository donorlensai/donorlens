# ADR 0002: Adopt Microservices-First Architecture and Keycloak

## Status

Accepted

## Date

2026-07-03

## Owner

Project architecture

## Context

Donorlens is intended to be an enterprise platform. The architecture should prioritize strong service boundaries, independent deployment, service-owned data, enterprise identity, observability, and long-term maintainability.

The previous draft allowed a modular monolith during early discovery. The product direction now requires microservices architecture from the beginning.

## Decision

Adopt microservices-first architecture as the primary architecture style.

Adopt Keycloak as the enterprise identity provider.

Auth.js may be used only as an optional frontend/session integration if useful. Keycloak remains the authority for identity, SSO, clients, realms, roles, and token issuance.

## Alternatives Considered

- Start as a modular monolith and extract later.
- Use Auth.js as the primary identity provider.
- Delay service boundaries until later product discovery.

## Trade-offs

Microservices-first architecture increases upfront operational and contract design. This is accepted because the platform has enterprise goals and should avoid costly boundary rewrites later.

Keycloak adds identity infrastructure complexity, but provides stronger enterprise identity capabilities than an app-only auth approach.

## Consequences

Services must preserve independent ownership, data boundaries, contracts, deployability, and observability from the start.

Architecture work must include API gateway rules, event contracts, data consistency strategy, environment strategy, and per-service operational readiness.
