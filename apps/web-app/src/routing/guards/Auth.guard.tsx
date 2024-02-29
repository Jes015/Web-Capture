import { useGlobalAuth } from '@/hooks'
import { testUserRole, type BaseComponentType } from '@/models'
import { frontRoutes } from '@/routing'
import { Navigate, Outlet } from 'react-router-dom'

export const AuthGuard: BaseComponentType = () => {
  const { user } = useGlobalAuth()

  if (user.roles?.[0] !== testUserRole) {
    return <Navigate to={frontRoutes.home} />
  }

  return <Outlet />
}
