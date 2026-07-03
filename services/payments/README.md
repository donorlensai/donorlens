# Payments Service

The payments service owns payment intents, settlement state, refunds, and payment provider integration.

## Business Purpose

Isolate payment processing and settlement concerns from donor and giving domain logic.

## Owned Data

- Payment intent
- Payment transaction
- Refund
- Settlement status
- Provider references

## Public Contracts

- Create payment intent
- Confirm payment
- Refund payment
- Retrieve payment status

## Domain Events

- `PaymentAuthorized`
- `PaymentSettled`
- `PaymentFailed`
- `RefundIssued`

## Boundaries

Giving records belong to the giving service. Payment provider APIs are infrastructure dependencies of this service.
