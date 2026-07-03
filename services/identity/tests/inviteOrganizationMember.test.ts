import test from "node:test";
import assert from "node:assert/strict";
import { inviteOrganizationMember } from "../src/application/inviteOrganizationMember.ts";
import { permissionsForRole } from "../src/domain/organizationPermission.ts";

test("creates a pending organization member invitation", () => {
  const now = new Date("2026-07-03T00:00:00.000Z");

  const result = inviteOrganizationMember({
    invitationId: "inv_123",
    organizationId: "org_123",
    email: "Member@Example.com",
    role: "fundraiser",
    invitedBy: "user_admin",
    now
  });

  assert.equal(result.eventName, "OrganizationMemberInvited");
  assert.equal(result.invitation.email, "member@example.com");
  assert.equal(result.invitation.status, "pending");
  assert.equal(result.invitation.role, "fundraiser");
});

test("maps organization roles to permissions", () => {
  assert.deepEqual(permissionsForRole("analyst"), [
    "donor.read",
    "giving.read",
    "campaign.read",
    "analytics.read"
  ]);
});
