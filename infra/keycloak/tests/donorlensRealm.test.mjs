import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const realm = JSON.parse(
  readFileSync(new URL("../donorlens-realm.json", import.meta.url), "utf8")
);

test("local realm issues API gateway audience and organization claims", () => {
  const scopeNames = realm.clientScopes.map((scope) => scope.name);
  assert.ok(scopeNames.includes("donorlens-api-audience"));
  assert.ok(scopeNames.includes("donorlens-organization-claims"));

  const webClient = realm.clients.find(
    (client) => client.clientId === "donorlens-web"
  );

  assert.ok(webClient.defaultClientScopes.includes("donorlens-api-audience"));
  assert.ok(
    webClient.defaultClientScopes.includes("donorlens-organization-claims")
  );
});

test("local admin user has org context and enterprise roles", () => {
  const admin = realm.users.find(
    (user) => user.username === "platform.admin@donorlens.local"
  );

  assert.deepEqual(admin.attributes.organization_id, ["org_local_demo"]);
  assert.ok(admin.realmRoles.includes("platform_admin"));
  assert.ok(admin.realmRoles.includes("org_admin"));
  assert.ok(admin.attributes.permissions.includes("member.invite"));
});
