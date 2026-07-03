export type OrganizationCreatedPayload = {
  organizationId: string;
  name: string;
  slug: string;
};

export type OrganizationMemberInvitedPayload = {
  invitationId: string;
  organizationId: string;
  email: string;
  role: "org_admin" | "fundraiser" | "analyst";
  invitedBy: string;
  expiresAt: string;
};

export type MembershipGrantedPayload = {
  membershipId: string;
  organizationId: string;
  keycloakUserId: string;
  role: "org_admin" | "fundraiser" | "analyst";
};

export type MembershipRevokedPayload = {
  membershipId: string;
  organizationId: string;
  revokedBy: string;
};
