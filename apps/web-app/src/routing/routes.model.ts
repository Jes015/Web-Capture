import { getEnv } from '@/services/env.service'

export const frontRoutes = {
  home: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  emailVerification: {
    route: '/email-verification',
    paramName: 'verificationToken'
  }
}

export const backRoutes = (() => {
  const baseRoute = getEnv('VITE_BACK_HOST')
  return ({
    home: baseRoute,
    signIn: baseRoute + 'auth/signIn',
    signUp: baseRoute + 'auth/signUp'
  })
})()
