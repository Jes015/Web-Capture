import { type PublicUser } from '@/models'

export interface AuthSuccessApi {
  accessToken: string
  user: PublicUser
}
