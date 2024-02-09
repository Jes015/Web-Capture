export const CValidRoles = {
  user: 'user',
  admin: 'admin',
} as const;

export type TValidRole = (typeof CValidRoles)[keyof typeof CValidRoles];

export type TValidRoleArray = TValidRole[];
