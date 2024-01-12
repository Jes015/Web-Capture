import { type BaseComponentType } from '@/models'

export const InputElementLabel: BaseComponentType = ({ children, className }) => {
  return (
        <span
            className={className}
        >
            {children}
        </span>
  )
}
