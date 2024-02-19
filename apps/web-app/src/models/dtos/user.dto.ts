import { type User } from '@/models'

export interface UserSignInDTO extends Pick<User, 'email' | 'password' > {}

export interface UserSignUpDTO extends Pick<User, 'email' | 'password' | 'username'> {}

