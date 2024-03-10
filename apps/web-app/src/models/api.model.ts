import { type PublicUser } from '@/models'

export interface AuthSuccessApi {
  token: string
  user: PublicUser
}

export interface NotFoundApi {
  code: 404
}

export type ApiOK = 'OK'

export const StatusCodes = {
  Conflict: 409,
  NotFound: 404,
  Forbidden: 401,
  TooManyRequests: 429
}

export type CheckUserTypeParams = 'email' | 'username'
