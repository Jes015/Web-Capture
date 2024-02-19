import { defaultUserValues, type AuthContext } from '@/models'
import { createContext, useContext } from 'react'

export const authContext = createContext<AuthContext>(defaultUserValues)

export const useAuthContext = () => useContext(authContext)
