export const getRoutes = () => {
  const frontRoutes = {
    home: '/',
    signIn: '/sign-in',
    signUp: '/sign-up',
    emailVerification: {
      route: '/email-verification',
      paramName: ''
    }
  }

  return { frontRoutes }
}
