import { userValidations } from '@/models/validations'
import { z } from 'zod'

export const signInSchema = z.object({
  email: userValidations.email,
  password: userValidations.password
})
