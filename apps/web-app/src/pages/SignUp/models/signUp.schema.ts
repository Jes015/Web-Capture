import { userValidations } from '@/models/validations'
import { z } from 'zod'

export const signUpSchema = z.object({
  email: userValidations.email,
  password: userValidations.password,
  username: userValidations.username
})
