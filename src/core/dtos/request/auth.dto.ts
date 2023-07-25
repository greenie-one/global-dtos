export enum UserRoles {
  DEFAULT = 'default',
  INTERNAL = 'internal',
}

export class TokenClaims {
  email: string;
  session_id: string;
  firstName: string;
  lastName: string;
  roles: UserRoles[];
  iat?: number;
  iss?: string;
  is_refresh?: boolean;
  sub: string;
}

