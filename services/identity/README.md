# Identity Service

The identity service owns Donorlens identity integration and organization membership context.

## Business Purpose

Provide the platform boundary around Keycloak-backed identity, organizations, memberships, roles, and authenticated principals.

## Owned Data

- Organization records
- Membership records
- Service-local identity projections
- Audit metadata for identity-sensitive actions

## External Systems

- Keycloak is the enterprise identity provider and token issuer.

## Public Contracts

- Authenticated principal contract
- Organization membership contract
- Role and permission lookup contract

## Domain Events

- `OrganizationCreated`
- `MembershipGranted`
- `MembershipRevoked`

## Notes

Keycloak remains the source of identity truth. This service owns Donorlens business context around identity and organization access.
