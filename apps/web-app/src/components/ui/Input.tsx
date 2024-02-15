import { type DetailedHTMLProps, type InputHTMLAttributes } from 'react'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

export const Input: React.FC<InputProps> = ({ className, readOnly = false, ...props }) => {
  return (
        <input
            className={
                [
                  'flex items-center gap-2 border border-neutral-800 bg-neutral-900 rounded-sm [transition-duration:0.1s] relative p-2 py-1 outline-none',
                  readOnly ? '' : 'focus-within:bg-neutral-800 focus-within:border-neutral-700 hover:bg-neutral-800 hover:border-neutral-700 hover:drop-shadow-sm',
                  className
                ].join(' ')
            }
            {...{ ...props, readOnly }}
        />
  )
}
