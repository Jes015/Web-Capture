import { type BaseComponentType } from '@/models'

export const Modal: BaseComponentType = ({ children, ...props }) => {
  return (
        <div
            {...props}
        >
            {children}
        </div>
  )
}
