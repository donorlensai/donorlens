# Database Package

Shared database helpers and conventions belong here.

## Rules

- Do not create a shared cross-service data access layer.
- Each service owns its schema and migrations.
- Shared helpers must not hide service ownership boundaries.
