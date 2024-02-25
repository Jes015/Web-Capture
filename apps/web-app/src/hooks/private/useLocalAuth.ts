import { appConfig } from '@/config'
import { useRouting } from '@/hooks'
import { defaultUserValue, type AuthSuccessApi, type PublicUser, type UserSignInDTO, type UserSignUpDTO } from '@/models'
import { frontRoutes } from '@/routing'
import { signInService, signUpService, verifyEmailService } from '@/services/others'
import { getFromStorage, removeFromStorage, setToStorage } from '@/utils/others'
import { type AxiosResponse } from 'axios'
import { useLayoutEffect, useState } from 'react'

// Private to use it in context
export const useLocalAuth = () => {
  const [user, setUser] = useState<PublicUser>(defaultUserValue)
  const { goTo } = useRouting()

  useLayoutEffect(() => {
    const userData = getFromStorage<PublicUser>(appConfig.localStorageKeys.token, 'localStorage')

    if (userData == null) return

    setUser(userData)
  }, [])

  const signIn = async (userSignInDTO: UserSignInDTO) => {
    const userData: AxiosResponse<AuthSuccessApi> = await signInService(userSignInDTO)

    setUserAndRedirectToHome(userData)
  }

  const signUp = async (userSignUpDTO: UserSignUpDTO) => {
    await signUpService(userSignUpDTO)
  }

  const signOut = () => {
    setUser(defaultUserValue)
    removeFromStorage(appConfig.localStorageKeys.token, 'localStorage')
  }

  const verifyEmail = async (token: string) => {
    const userData: AxiosResponse<AuthSuccessApi> = await verifyEmailService(token)

    setUserAndRedirectToHome(userData)
  }

  const setUserAndRedirectToHome = (userRequest: AxiosResponse<AuthSuccessApi>) => {
    const user = userRequest.data.user
    setUser(user)
    setToStorage(appConfig.localStorageKeys.token, JSON.stringify(user), 'localStorage')
    goTo(frontRoutes.home)
  }

  return { user, signIn, signUp, signOut, verifyEmail } as const
}
