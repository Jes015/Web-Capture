import { type BaseComponentProps } from '@/models'
import { TextFieldLabel } from './components'

export const TextField = ({ children, className }: BaseComponentProps) => {
  return (
        <label className={
            [
              'inline-flex items-center gap-2',
              className
            ].join(' ')
        }>
            {children}
        </label>
  )
}

TextField.Label = TextFieldLabel
