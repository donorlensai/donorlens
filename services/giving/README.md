# Giving Service

The giving service owns donations, pledges, recurring gifts, and giving lifecycle state.

## Business Purpose

Record and manage donor giving activity.

## Owned Data

- Donation records
- Pledge records
- Recurring gift records
- Giving status transitions

## Public Contracts

- Record donation
- Retrieve donation
- List giving activity
- Manage recurring gift

## Domain Events

- `DonationReceived`
- `PledgeCreated`
- `RecurringGiftStarted`
- `RecurringGiftCanceled`

## Boundaries

Payment processing belongs to the payments service. Receipt issuance belongs to the receipts service.
