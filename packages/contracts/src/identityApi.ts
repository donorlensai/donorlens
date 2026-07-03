export type OrganizationSummary = {
  id: string;
  name: string;
  slug: string;
  status: "active" | "suspended";
};

export type OrganizationMembershipSummary = {
  id: string;
  organizationId: string;
  email: string;
  role: "org_admin" | "fundraiser" | "analyst";
  status: "active" | "revoked";
};

export type OrganizationInvitationSummary = {
  id: string;
  organizationId: string;
  email: string;
  role: "org_admin" | "fundraiser" | "analyst";
  status: "pending" | "accepted" | "revoked" | "expired";
  expiresAt: string;
};
