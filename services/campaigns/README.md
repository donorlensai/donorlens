# Campaigns Service

The campaigns service owns campaigns, appeals, attribution, and campaign performance inputs.

## Business Purpose

Manage fundraising campaigns and connect giving activity to campaign intent.

## Owned Data

- Campaign records
- Appeal records
- Attribution rules
- Campaign status

## Public Contracts

- Create campaign
- Update campaign
- Retrieve campaign
- Attribute gift to campaign

## Domain Events

- `CampaignCreated`
- `CampaignActivated`
- `GiftAttributedToCampaign`

## Boundaries

Donation records belong to the giving service. Aggregated reporting belongs to the analytics service.
