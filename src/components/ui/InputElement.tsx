import { type BaseComponentType } from '@/models'

export const InputElement: BaseComponentType = ({ children, className }) => {
  return (
        <label className={
            [
              'flex items-center pr-2',
              className
            ].join(' ')
        }>
            {children}
        </label>
  )
}
