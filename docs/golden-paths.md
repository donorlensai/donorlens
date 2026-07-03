# Golden Paths

Golden paths keep humans and AI agents from guessing. Use these workflows for common changes.

## AI Agent Preflight

Before changing code:

1. Read `AGENTS.md`.
2. Read `docs/context-index.md`.
3. Locate the owning module or service.
4. Check relevant contracts, schemas, events, and permissions.
5. Add or update tests.
6. Run lint, typecheck, test, and build commands when available.
7. Update docs if behavior, contracts, operations, or architecture changed.

See `docs/ai-agent-workflow.md` for the full workflow.

## Add a Feature

1. Identify the owning bounded context.
2. Add or update the feature README if the behavior introduces new domain language.
3. Model business rules in `domain/` when they are meaningful and stable.
4. Add the use case in `application/`.
5. Add framework adapters in `api/` or `infrastructure/`.
6. Add or update typed contracts and validation schemas.
7. Add unit tests for domain/application behavior.
8. Add integration or contract tests for service boundaries.
9. Add logs, metrics, or traces if the behavior is operationally important.
10. Update docs or create an ADR when the decision affects architecture.

## Add an API

1. Confirm the service owns the behavior and data.
2. Define request and response schemas.
3. Document authentication, authorization, rate limits, and error responses.
4. Keep controllers thin.
5. Map HTTP concerns to application use cases.
6. Update OpenAPI or equivalent contract documentation.
7. Add contract tests.

## Add a Migration

1. Confirm the owning service.
2. Keep the migration backwards compatible when possible.
3. Document data ownership changes.
4. Add seed or fixture changes if needed.
5. Add rollback notes for risky migrations.
6. Update database docs when relationships, indexes, or naming conventions change.

## Add an Event

1. Name the event as a business fact in past tense, such as `DonationReceived`.
2. Define the publisher and subscribers.
3. Version the payload schema.
4. Make consumers idempotent.
5. Document retry and dead-letter behavior.
6. Add contract tests for the event schema.
7. Update `docs/events.md`.

## Add a Permission

1. Identify the protected action and owning bounded context.
2. Add the permission to the service permission model.
3. Update the permission matrix in `docs/permissions.md`.
4. Add tests for allowed and denied access.
5. Ensure audit logging exists for sensitive actions.

## Review Code

Check:

- Correct bounded context ownership
- Clear names and small focused files
- File size target is 50-150 lines, soft limit is 300 lines, and anything larger has an approved split rationale
- No business logic in controllers
- No direct cross-service database access
- Input validation and output contracts
- Security, permissions, and audit logging
- Tests appropriate to risk
- Logs, metrics, traces, and runbook updates where needed
- Docs or ADRs for meaningful decisions
