import { type BaseComponentType } from '@/models'

export const TextFieldLabel: BaseComponentType = ({ children, className }) => {
  return (
        <span
            className={className}
        >
            {children}
        </span>
  )
}
