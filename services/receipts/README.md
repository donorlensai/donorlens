# Receipts Service

The receipts service owns receipt issuance, tax document generation, and receipt delivery state.

## Business Purpose

Generate and manage compliant donor receipt records.

## Owned Data

- Receipt records
- Tax document metadata
- Delivery status
- Receipt template version references

## Public Contracts

- Issue receipt
- Retrieve receipt
- Reissue receipt
- Track receipt delivery

## Domain Events

- `ReceiptIssued`
- `ReceiptDelivered`
- `ReceiptDeliveryFailed`

## Boundaries

Donation records belong to the giving service. Notification transport belongs to the notifications service.
