import { type useLocalAuth } from '@/hooks/private'
import { type UUID } from 'crypto'

export interface User {
  id: UUID
  email: string
  username: string
  password: string
  isActive: boolean
  roles: string[]
}

export interface PublicUser extends Omit<User, 'password'> { }

export type AuthContext = ReturnType<typeof useLocalAuth>

export const testUserRole = 'default'

export const defaultUserValue = { email: 'user@gmail.com', id: crypto.randomUUID(), isActive: true, roles: [testUserRole], username: 'default' }

export const defaultUserValues: AuthContext = {
  user: defaultUserValue,
  signIn: async () => { return new Promise(() => {}) },
  signUp: async () => { return new Promise(() => {}) },
  signOut: () => {},
  verifyEmail: async () => { return new Promise(() => {}) }
}
