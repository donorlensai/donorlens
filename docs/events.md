# Events

Events represent business facts that already happened.

## Naming

Use past-tense names:

- `DonationReceived`
- `PaymentSettled`
- `ReceiptIssued`
- `DonorMerged`
- `OrganizationMemberInvited`

Avoid command-like event names such as `SendReceipt`.

## Event Contract

Every event must document:

- Name
- Version
- Publisher
- Subscribers
- Payload schema
- Idempotency key
- Retry behavior
- Dead-letter behavior
- Privacy or compliance notes

## Reliability Rules

Consumers must be idempotent. Do not assume exactly-once delivery.

Event payloads must be versioned. Breaking changes require a migration plan.

Events should not expose another service's internal persistence model.

## Initial Identity Events

| Event | Publisher | Purpose |
| --- | --- | --- |
| `OrganizationCreated` | identity service | A new organization was created. |
| `OrganizationMemberInvited` | identity service | A member was invited to an organization with a role. |
| `MembershipGranted` | identity service | A user gained organization membership. |
| `MembershipRevoked` | identity service | A user lost organization membership. |
