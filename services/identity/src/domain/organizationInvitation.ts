import { isOrganizationRole } from "./organizationRole.ts";
import type { OrganizationRole } from "./organizationRole.ts";

export type InvitationStatus = "pending" | "accepted" | "revoked" | "expired";

export type OrganizationInvitation = {
  id: string;
  organizationId: string;
  email: string;
  role: OrganizationRole;
  status: InvitationStatus;
  invitedBy: string;
  expiresAt: Date;
  createdAt: Date;
};

export type CreateInvitationInput = {
  id: string;
  organizationId: string;
  email: string;
  role: string;
  invitedBy: string;
  now: Date;
  expiresAt: Date;
};

export function createOrganizationInvitation(
  input: CreateInvitationInput
): OrganizationInvitation {
  if (!input.email.includes("@")) {
    throw new Error("Invitation email must be valid.");
  }

  if (!isOrganizationRole(input.role)) {
    throw new Error("Invitation role must be an organization role.");
  }

  if (input.expiresAt <= input.now) {
    throw new Error("Invitation expiry must be in the future.");
  }

  return {
    id: input.id,
    organizationId: input.organizationId,
    email: input.email.toLowerCase(),
    role: input.role,
    status: "pending",
    invitedBy: input.invitedBy,
    expiresAt: input.expiresAt,
    createdAt: input.now
  };
}
