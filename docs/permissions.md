# Permissions

Permissions protect business actions, not implementation details.

## Permission Model

Each bounded context owns its permissions.

Every permission should define:

- Action
- Resource
- Owning service
- Allowed roles
- Conditions or scopes
- Audit requirement

## Permission Matrix

Maintain the permission matrix here as roles and actions become concrete.

| Permission | Owning service | Roles | Audit required | Notes |
| --- | --- | --- | --- | --- |
| TBD | TBD | TBD | TBD | Add concrete permissions as features are implemented. |

## Rules

- Do not rely on frontend-only permission checks.
- Backend services must enforce authorization.
- Sensitive actions should produce audit logs.
- Permission names should be explicit and domain-oriented.
