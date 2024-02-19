import z from 'zod'

export const userValidations = {
  email: z.string().email().max(50).refine((email) => email.endsWith('@gmail.com'), { message: 'Only gmail directions are allowed' }),
  password: z.string().min(5).max(40).regex(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'The password must have an uppercase, lowercase letter, and a number'
  })
} as const
