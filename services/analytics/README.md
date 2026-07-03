# Analytics Service

The analytics service owns reporting read models, dashboards, and analytical projections.

## Business Purpose

Provide query-optimized insights across donor, giving, campaign, and operational workflows.

## Owned Data

- Reporting projections
- Dashboard read models
- Aggregated metrics

## Public Contracts

- Retrieve dashboard metrics
- Retrieve campaign analytics
- Retrieve donor analytics
- Export report

## Domain Events

- `AnalyticsProjectionUpdated`
- `ReportExportRequested`
- `ReportExportCompleted`

## Boundaries

The analytics service consumes events and builds read models. It must not become the write authority for source domains.
