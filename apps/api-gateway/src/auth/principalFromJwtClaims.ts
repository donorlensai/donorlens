import type { AuthPrincipal } from "@donorlens/contracts";
import type { KeycloakJwtClaims } from "./jwtTypes.ts";

export function principalFromJwtClaims(
  claims: KeycloakJwtClaims
): AuthPrincipal {
  const realmRoles = claims.realm_access?.roles ?? [];
  const resourceRoles = Object.values(claims.resource_access ?? {}).flatMap(
    (access) => access.roles ?? []
  );
  const principal: AuthPrincipal = {
    subjectId: claims.sub,
    roles: [...new Set([...realmRoles, ...resourceRoles])],
    permissions: claims.permissions ?? [],
    tokenIssuer: "keycloak"
  };

  const organizationId = claims.organization_id ?? claims.org_id;

  if (organizationId) {
    principal.organizationId = organizationId;
  }

  if (claims.email) {
    principal.email = claims.email;
  }

  return principal;
}
