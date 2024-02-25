import { type BaseComponentType } from '@/models'
import { UserProvider } from '@/services/store/context/user'
import { Outlet } from 'react-router-dom'

const RootPage: BaseComponentType = () => {
  return (
        <UserProvider>
            <Outlet />
        </UserProvider>
  )
}

export default RootPage
