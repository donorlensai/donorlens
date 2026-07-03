# Context Index

This index tells humans and AI agents where to find the canonical project context.

## Canonical Files

- `AGENTS.md`: operating manual for agents and contributors.
- `docs/architecture.md`: architecture style, service boundaries, DDD rules, and repository shape.
- `docs/golden-paths.md`: repeatable workflows for common engineering tasks.
- `docs/technology-stack.md`: canonical technology stack candidates and adoption rules.
- `docs/non-functional-requirements.md`: availability, latency, security, scale, retention, and compliance targets.
- `docs/environment-strategy.md`: local, development, staging, and production environment rules.
- `docs/api-gateway.md`: routing, auth verification, rate limiting, logging, and versioning rules.
- `docs/data-consistency.md`: eventual consistency, outbox pattern, sagas, and cross-service data rules.
- `docs/migration-path.md`: microservices-first delivery and boundary evolution path.
- `docs/ai-agent-workflow.md`: required AI agent workflow before, during, and after code changes.
- `docs/security.md`: security expectations and review checklist.
- `docs/testing.md`: testing strategy and required coverage by risk.
- `docs/events.md`: event ownership, schema, and reliability rules.
- `docs/permissions.md`: role and permission modeling rules.
- `docs/runbook.md`: local run, deploy, rollback, recovery, and troubleshooting guidance.
- `docs/decisions/`: Architecture Decision Records.

## Source of Truth Rule

Each important topic should have one canonical document. Other documents may link to it and summarize it briefly, but should not duplicate detailed rules.

When changing architecture, update `AGENTS.md`, the relevant canonical doc, and an ADR when the decision is meaningful or irreversible.
