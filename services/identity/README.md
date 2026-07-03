# Identity Service

The identity service owns Donorlens identity integration and organization membership context.

## Business Purpose

Provide the platform boundary around Keycloak-backed identity, organizations, invitations, memberships, roles, permissions, and authenticated principals.

## Owned Data

- Organization records
- Invitation records
- Membership records
- Service-local identity projections
- Audit metadata for identity-sensitive actions

## External Systems

- Keycloak is the enterprise identity provider and token issuer.

## Public Contracts

- Authenticated principal contract
- Organization membership contract
- Organization invitation contract
- Role and permission lookup contract

## Domain Events

- `OrganizationCreated`
- `OrganizationMemberInvited`
- `MembershipGranted`
- `MembershipRevoked`

## Notes

Keycloak remains the source of identity truth. This service owns Donorlens business context around identity and organization access.

## Invitation Rules

Organization administrators can invite members by email with a specific organization role:

- `org_admin`
- `fundraiser`
- `analyst`

Invitations start as `pending`, expire after seven days by default, and must become memberships only after acceptance.
