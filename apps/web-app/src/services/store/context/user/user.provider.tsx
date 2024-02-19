import { useLocalAuth } from '@/hooks/private'
import { type BaseComponentType } from '@/models'
import { authContext } from './user.context'


export const UserProvider: BaseComponentType = ({ children }) => {
  const values = useLocalAuth()

  return (
        <authContext.Provider value={values}>
            {children}
        </authContext.Provider>
  )
}
