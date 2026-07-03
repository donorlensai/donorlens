import {
  createOrganizationInvitation,
  type OrganizationInvitation
} from "../domain/organizationInvitation.ts";

export type InviteOrganizationMemberInput = {
  invitationId: string;
  organizationId: string;
  email: string;
  role: string;
  invitedBy: string;
  now: Date;
};

export type InviteOrganizationMemberResult = {
  invitation: OrganizationInvitation;
  eventName: "OrganizationMemberInvited";
};

export function inviteOrganizationMember(
  input: InviteOrganizationMemberInput
): InviteOrganizationMemberResult {
  const expiresAt = new Date(input.now.getTime() + 7 * 24 * 60 * 60 * 1000);

  const invitation = createOrganizationInvitation({
    id: input.invitationId,
    organizationId: input.organizationId,
    email: input.email,
    role: input.role,
    invitedBy: input.invitedBy,
    now: input.now,
    expiresAt
  });

  return {
    invitation,
    eventName: "OrganizationMemberInvited"
  };
}
