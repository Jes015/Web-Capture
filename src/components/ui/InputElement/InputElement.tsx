import { type BaseComponentProps } from '@/models'
import { InputElementLabel } from './components/'

export const InputElement = ({ children, className }: BaseComponentProps) => {
  return (
        <label className={
            [
              'flex items-center gap-2',
              className
            ].join(' ')
        }>
            {children}
        </label>
  )
}

InputElement.Label = InputElementLabel
