# Notifications Service

The notifications service owns notification templates, delivery preferences, and outbound communication workflows.

## Business Purpose

Deliver platform communications across channels while respecting preferences and audit requirements.

## Owned Data

- Notification template
- Delivery attempt
- Channel preference projection
- Provider references

## Public Contracts

- Send notification
- Render template
- Retrieve delivery status
- Manage communication preference projection

## Domain Events

- `NotificationQueued`
- `NotificationSent`
- `NotificationFailed`

## Boundaries

This service sends messages. It does not decide business eligibility for donor, payment, or receipt workflows.
