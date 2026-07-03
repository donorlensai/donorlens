# Non-Functional Requirements

Non-functional requirements define how the system must behave beyond feature correctness. They guide architecture, infrastructure, service boundaries, testing, and operational work.

## Required Targets

Maintain concrete values for each production-facing capability as the product matures:

| Requirement | Target | Notes |
| --- | --- | --- |
| Availability target | TBD | Define per service or user-facing journey. |
| Latency target | TBD | Define p50, p95, and p99 where relevant. |
| Security level | High by default | Increase for payment, identity, donor, and compliance workflows. |
| Expected users | TBD | Track current and projected active users. |
| Expected transactions | TBD | Track requests, donations, payments, events, jobs, and reports. |
| Data retention | TBD | Define per data category. |
| Compliance needs | TBD | Capture privacy, financial, nonprofit, and regional obligations. |
| Recovery objectives | TBD | Define RTO and RPO per critical service. |
| Performance budget | TBD | Define API, page, job, and reporting budgets. |
| Operational ownership | TBD | Define owner and escalation path. |

## Rules

- Do not design services without explicit reliability, latency, security, and compliance expectations.
- Critical user journeys should have SLOs.
- Security-sensitive and payment-related workflows need stricter review, audit logging, and recovery planning.
- Data retention must be intentional and documented before storing sensitive donor, payment, or identity data.
