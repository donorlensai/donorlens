# Testing Strategy

Testing should scale with risk and blast radius.

## Required Test Types

- Unit tests for domain rules and application use cases
- Integration tests for database, queues, external adapters, and API handlers
- Contract tests for service APIs and events
- End-to-end tests for critical user workflows

## Defaults

Every meaningful change should include tests or a clear reason why tests are not practical.

Prefer focused tests that explain business behavior. Do not rely only on broad end-to-end coverage.

## Service Boundary Tests

Any public API or event contract should have tests that catch breaking changes.

Event consumers must be tested for idempotency.

## Fixtures

Fixtures should model real domain scenarios and use explicit names. Avoid opaque fixtures like `testData1`.
