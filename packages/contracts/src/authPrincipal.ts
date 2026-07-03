export type AuthPrincipal = {
  subjectId: string;
  organizationId?: string;
  email?: string;
  roles: string[];
  permissions: string[];
  tokenIssuer: "keycloak";
};
