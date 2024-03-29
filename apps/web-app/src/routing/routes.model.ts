import { type CheckUserTypeParams } from '@/models'
import { getEnv } from '@/services/others'

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
    home: baseRoute as string,
    signIn: baseRoute + 'auth/signIn',
    signUp: baseRoute + 'auth/signUp',
    emailVerification: (token: string) => baseRoute + 'email-verification/' + token,
    checkUserData: (key: CheckUserTypeParams) => baseRoute + `auth/check/${key}/`
  })
})()
