# Donors Service

The donors service owns donor profiles, lifecycle state, segmentation attributes, and donor-facing domain language.

## Business Purpose

Maintain the canonical donor profile and lifecycle model for fundraising workflows.

## Owned Data

- Donor profile
- Contact preferences
- Segmentation attributes
- Donor lifecycle state

## Public Contracts

- Create donor
- Update donor profile
- Retrieve donor profile
- Search donors

## Domain Events

- `DonorCreated`
- `DonorUpdated`
- `DonorMerged`

## Boundaries

Donation history belongs to the giving service. Campaign attribution belongs to the campaigns service.
