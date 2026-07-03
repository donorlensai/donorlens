# Security Standard

Security is a default property, not a cleanup task.

## Required Practices

- Authenticate every protected endpoint.
- Authorize every protected action.
- Validate input at trust boundaries.
- Avoid leaking internal errors to users.
- Use structured audit logging for sensitive actions.
- Keep secrets out of source control.
- Rate limit public or abuse-prone endpoints.
- Scan uploaded files before trusted use.
- Use least privilege for service credentials.
- Document threat models for critical services.

## Review Checklist

For every sensitive change, check:

- What user or service can perform this action?
- What data can be accessed or changed?
- Is the permission model explicit?
- Is the action auditable?
- Are inputs validated and outputs encoded?
- Are secrets, tokens, and credentials handled safely?
- What is the abuse case?

## Ownership

Each service owns its own security rules for domain actions. Shared security libraries may provide primitives, but the owning service decides what a user or caller is allowed to do.
