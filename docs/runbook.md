# Runbook

This runbook should explain how to operate Donorlens locally and in production.

The repository is currently at architecture-foundation stage. Fill in concrete commands as apps and services are added.

## Local Development

Document:

- Required runtime versions
- Environment variables
- Dependency installation
- Database setup
- Service startup commands
- Test commands

## Deployment

Document:

- Build command
- Release command
- Migration process
- Rollback process
- Required secrets
- Smoke tests

## Recovery

Document:

- Backup restore process
- Secret rotation process
- Failed deployment recovery
- Queue replay or dead-letter handling
- Incident escalation path

## Troubleshooting

Each service should document:

- Health check endpoint
- Readiness check endpoint
- Main logs
- Main metrics
- Common failure modes
- Owner or escalation contact
