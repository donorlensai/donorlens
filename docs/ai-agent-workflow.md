# AI Agent Workflow

This workflow defines how AI coding agents should operate in Donorlens.

## Before Changing Code

1. Read `AGENTS.md`.
2. Read `docs/context-index.md`.
3. Locate the owning module or service.
4. Check relevant contracts, schemas, events, and permissions.
5. Understand existing tests and local patterns.

## While Changing Code

1. Keep edits inside the owning boundary where possible.
2. Preserve existing conventions.
3. Keep controllers thin and business logic in domain/application layers.
4. Avoid direct cross-service database access.
5. Add or update tests with the change.
6. Update API, event, permission, or runbook docs when behavior changes.

## Before Finishing

Run available verification commands:

1. Format
2. Lint
3. Typecheck
4. Test
5. Build

If a command does not exist yet, state that clearly in the final response. Do not pretend verification happened.

## Final Response

Summarize:

- What changed
- Where it changed
- What verification ran
- Any remaining risks or missing follow-up
