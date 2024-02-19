import { type AuthSuccessApi } from '@/models'
import { type UserSignInDTO, type UserSignUpDTO } from '@/models/dtos'
import { backRoutes } from '@/routing'
import axios from 'axios'

export const signInService = async (userSignInDTO: UserSignInDTO) => {
  return await axios.post<AuthSuccessApi>(backRoutes.signIn, userSignInDTO)
}

export const signUpService = async (userSignUpDTO: UserSignUpDTO) => {
  return await axios.post<AuthSuccessApi>(backRoutes.signUp, userSignUpDTO)
}
