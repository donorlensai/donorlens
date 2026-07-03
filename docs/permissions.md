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
| `organization.manage` | identity | `org_admin` | Yes | Manage organization settings. |
| `member.invite` | identity | `org_admin` | Yes | Invite members to an organization. |
| `member.revoke` | identity | `org_admin` | Yes | Revoke organization membership. |
| `donor.read` | donors | `org_admin`, `fundraiser`, `analyst` | No | Read donor profile data. |
| `donor.write` | donors | `org_admin`, `fundraiser` | Yes | Create or update donor profile data. |
| `giving.read` | giving | `org_admin`, `fundraiser`, `analyst` | No | Read giving activity. |
| `giving.write` | giving | `org_admin`, `fundraiser` | Yes | Record or update giving activity. |
| `campaign.read` | campaigns | `org_admin`, `fundraiser`, `analyst` | No | Read campaign data. |
| `campaign.write` | campaigns | `org_admin`, `fundraiser` | Yes | Manage campaigns. |
| `analytics.read` | analytics | `org_admin`, `analyst` | No | Read dashboards and reports. |

## Rules

- Do not rely on frontend-only permission checks.
- Backend services must enforce authorization.
- Sensitive actions should produce audit logs.
- Permission names should be explicit and domain-oriented.
