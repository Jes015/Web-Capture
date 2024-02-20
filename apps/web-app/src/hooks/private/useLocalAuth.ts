import { defaultUserValue, type AuthSuccessApi, type PublicUser, type UserSignInDTO, type UserSignUpDTO } from '@/models'
import { signInService, signUpService, verifyEmailService } from '@/services/others'
import { type AxiosResponse } from 'axios'
import { useState } from 'react'

// Private to use it in context
export const useLocalAuth = () => {
  const [user] = useState<PublicUser>(defaultUserValue)

  const signIn = async (userSignInDTO: UserSignInDTO) => {
    const userData: AxiosResponse<AuthSuccessApi> = await signInService(userSignInDTO)

    console.log({ userData })
  }

  const signUp = async (userSignUpDTO: UserSignUpDTO) => {
    const userData: AxiosResponse<AuthSuccessApi> = await signUpService(userSignUpDTO)

    console.log({ userData })
  }

  const signOut = () => {}

  const verifyEmail = async (token: string) => {
    const userData: AxiosResponse<AuthSuccessApi> = await verifyEmailService(token)

    console.log({ userData })
  }

  return { user, signIn, signUp, signOut, verifyEmail } as const
}