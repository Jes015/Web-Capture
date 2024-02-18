import { type UUID } from 'crypto'

export interface User {
  id: UUID
  email: string
  username: string
  password: string
  isActive: boolean
  roles: string[]
}

export interface PublicUser extends Omit<User, 'password'> {}
