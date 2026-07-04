export type JwtHeader = {
  alg: string;
  kid?: string;
  typ?: string;
};

export type KeycloakJwtClaims = {
  sub: string;
  iss: string;
  aud?: string | string[];
  exp: number;
  nbf?: number;
  email?: string;
  organization_id?: string;
  org_id?: string;
  permissions?: string[];
  realm_access?: {
    roles?: string[];
  };
  resource_access?: Record<string, { roles?: string[] }>;
};

export type JsonWebKey = {
  kid?: string;
  kty: string;
  alg?: string;
  use?: string;
  n?: string;
  e?: string;
};
