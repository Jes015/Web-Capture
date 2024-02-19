import { P } from '@/components/ui'
import { type BaseComponentType } from '@/models'
import clsx from 'clsx'

export const TextFieldError: BaseComponentType = ({ className, ...props }) => {
  return (
    <P
      color2='error'
      className={
        clsx(
          'text-sm',
          className
        )
      }
      {...props}
    />
  )
}
