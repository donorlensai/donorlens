export const organizationRoles = [
  "org_admin",
  "fundraiser",
  "analyst"
] as const;

export type OrganizationRole = (typeof organizationRoles)[number];

export function isOrganizationRole(value: string): value is OrganizationRole {
  return organizationRoles.includes(value as OrganizationRole);
}
