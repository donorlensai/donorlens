# Environment Strategy

Donorlens should support distinct environments with explicit purpose, data, secrets, and operational rules.

## Environments

| Environment | Purpose | Data | Notes |
| --- | --- | --- | --- |
| `local` | Individual development and fast feedback | Local or synthetic data | Safe defaults, no production secrets. |
| `development` | Shared integration for active work | Synthetic or disposable shared data | Used for feature integration. |
| `staging` | Production-like release validation | Sanitized or production-like test data | Mirrors production config as closely as possible. |
| `production` | Live user-facing system | Real user and business data | Strict access, auditing, backups, monitoring. |

## Rules

- Secrets must be environment-specific.
- Production data must not be copied into lower environments unless sanitized and approved.
- Destructive operations must require stronger safeguards in staging and production.
- Observability should exist in every shared environment.
- Staging should validate migrations, API contracts, event contracts, background jobs, and rollback paths before production release.

## Configuration

Configuration should be explicit and externally supplied by environment. Avoid hardcoded environment-specific behavior.

When behavior must differ by environment, document the reason and keep the difference narrow.
