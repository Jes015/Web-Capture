import { type BaseComponentType } from '@/models'
import { CheckServerStatus } from './CheckServerStatus/CheckServerStatus'

export const OnStartComponents: BaseComponentType = () => {
  return (
        <>
            <CheckServerStatus />
        </>
  )
}
