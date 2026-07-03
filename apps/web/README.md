# Web App

The web app is the Donorlens user-facing product interface.

## Ownership

- Area: frontend
- Stack: React, Next.js, TanStack
- Runtime: browser and Next.js server runtime

## Responsibilities

- Product UI
- Authentication redirects and session ergonomics
- Calling the API gateway
- Rendering donor, giving, campaign, analytics, and administration workflows

## Boundaries

The web app must not contain backend domain rules. Business rules belong in the owning service.
