# Microservices Delivery Path

Donorlens is a microservices-first enterprise platform. Start with independently owned services and evolve boundaries through explicit architectural decisions.

Use a monorepo and local orchestration for developer experience, but preserve service ownership, data ownership, contracts, and deployment boundaries from the beginning.

## Step 1: Define Bounded Contexts

Define services around business capabilities, not technical layers.

Each service should document:

- Business purpose
- Owned entities
- Owned data
- Public APIs
- Domain events
- Permissions
- Dependencies
- Operational owner

## Step 2: Create Service Ownership

Each service must have:

- Clear source directory
- Own build/test commands
- Own runtime configuration
- Own health and readiness checks
- Own logs, metrics, and traces
- Own runbook section

## Step 3: Define Data Ownership

Each service owns its persistence boundary. Other services must access its data through APIs, events, or read models.

Do not share database tables across services.

## Step 4: Define API and Event Contracts

Each service exposes behavior through versioned APIs and domain events.

Contracts should be typed, tested, and documented before they are consumed by other services.

## Step 5: Run Together Locally

For developer speed, services may run together through Docker Compose or equivalent local orchestration.

Local co-running must not create hidden in-process coupling or shared persistence.

## Step 6: Deploy Independently

In shared environments, each service should be independently buildable, releasable, deployable, observable, and rollbackable.

## Step 7: Add Operational Maturity Per Service

Each service should have:

- Health check
- Readiness check
- Structured logs
- Metrics
- Traces
- Dashboards
- Alerts
- Runbook
- Backup and restore notes when it owns persistent data

## Step 8: Evolve Boundaries Through ADRs

Service boundaries may evolve as the product learns.

Changes such as splitting a service, merging services, moving database ownership, or changing event ownership require an ADR.

## Rule

Never build hidden coupling that prevents independent service deployment later.
