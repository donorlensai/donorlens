# Keycloak Local Realm

This folder contains the local Donorlens Keycloak realm import.

## Local Admin

- URL: `http://localhost:8080`
- Admin username: `admin`
- Admin password: `admin`

## Realm

- Realm: `donorlens`
- Web client: `donorlens-web`
- API gateway client: `api-gateway`
- Local platform admin: `platform.admin@donorlens.local`
- Local platform password: `LocalPass123!`

The identity service owns Donorlens organization and membership context. Keycloak remains the enterprise identity provider and token issuer.

## Local Token Smoke Test

Start infra:

```bash
pnpm dev:infra
```

Request a local access token:

```bash
curl -sS \
  -d "client_id=donorlens-web" \
  -d "username=platform.admin@donorlens.local" \
  -d "password=LocalPass123!" \
  -d "grant_type=password" \
  http://localhost:8080/realms/donorlens/protocol/openid-connect/token
```

Use the returned `access_token` against the gateway:

```bash
KEYCLOAK_AUDIENCE=api-gateway pnpm --filter @donorlens/api-gateway start
curl -H "Authorization: Bearer $ACCESS_TOKEN" http://localhost:3001/v1/me
```

The local realm maps `organization_id` and `permissions` user attributes into access tokens so `/v1/me` can show the current org context. Production membership and permissions remain owned by the identity service.
