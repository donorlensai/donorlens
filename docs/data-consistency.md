# Data Consistency

Microservices require deliberate consistency choices. Strong consistency inside a service is normal. Cross-service consistency should usually be eventual.

## Rules

- Use eventual consistency where needed.
- Do not use distributed transactions unless absolutely necessary.
- Distributed transactions require an ADR that explains why alternatives are not sufficient.
- Use the outbox pattern for reliable event publishing from database changes.
- Event consumers must be idempotent.
- Commands that may be retried should be idempotent.
- Reconciliation workflows should exist for critical cross-service processes.

## Outbox Pattern

When a service changes its database and needs to publish an event, write the domain change and the outbound event record in the same local transaction.

A background publisher should read unpublished outbox records, publish them to the broker, and mark them as published.

This avoids losing events when a database commit succeeds but event publishing fails.

## Cross-Service Workflows

Use sagas or process managers for workflows that span services.

Prefer compensating actions and explicit state transitions over cross-service locks.

## Read Models

Queries that join data across services should use API composition or materialized read models. Avoid direct cross-service database joins.
