import type { OrganizationRole } from "./organizationRole.ts";

export const organizationPermissions = [
  "organization.manage",
  "member.invite",
  "member.revoke",
  "donor.read",
  "donor.write",
  "giving.read",
  "giving.write",
  "campaign.read",
  "campaign.write",
  "analytics.read"
] as const;

export type OrganizationPermission =
  (typeof organizationPermissions)[number];

export const rolePermissions: Record<
  OrganizationRole,
  OrganizationPermission[]
> = {
  org_admin: [...organizationPermissions],
  fundraiser: [
    "donor.read",
    "donor.write",
    "giving.read",
    "giving.write",
    "campaign.read",
    "campaign.write"
  ],
  analyst: [
    "donor.read",
    "giving.read",
    "campaign.read",
    "analytics.read"
  ]
};

export function permissionsForRole(
  role: OrganizationRole
): OrganizationPermission[] {
  return rolePermissions[role];
}
