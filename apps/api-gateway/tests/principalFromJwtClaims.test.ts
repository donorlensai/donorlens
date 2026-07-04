import test from "node:test";
import assert from "node:assert/strict";
import { principalFromJwtClaims } from "../src/auth/principalFromJwtClaims.ts";

test("builds auth principal from Keycloak claims", () => {
  const principal = principalFromJwtClaims({
    sub: "user_123",
    iss: "http://localhost:8080/realms/donorlens",
    exp: 9999999999,
    email: "member@example.com",
    organization_id: "org_123",
    permissions: ["member.invite"],
    realm_access: {
      roles: ["org_admin"]
    },
    resource_access: {
      "api-gateway": {
        roles: ["gateway_user"]
      }
    }
  });

  assert.deepEqual(principal, {
    subjectId: "user_123",
    organizationId: "org_123",
    email: "member@example.com",
    roles: ["org_admin", "gateway_user"],
    permissions: ["member.invite"],
    tokenIssuer: "keycloak"
  });
});
