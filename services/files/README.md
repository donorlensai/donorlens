# Files Service

The files service owns uploads, storage metadata, scanning status, and file access policy.

## Business Purpose

Provide secure file handling for documents, imports, exports, and generated assets.

## Owned Data

- File metadata
- Storage object references
- Virus scan status
- Access policy metadata

## Public Contracts

- Create upload intent
- Confirm upload
- Retrieve file metadata
- Authorize download

## Domain Events

- `FileUploaded`
- `FileScanCompleted`
- `FileQuarantined`

## Boundaries

This service owns file metadata and storage access. Domain services own the business records that reference files.
