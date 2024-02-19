import { forwardRef, type DetailedHTMLProps, type InputHTMLAttributes } from 'react'

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  size2?: 'sm' | 'base' | 'resizable' | 'lg'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, readOnly = false, size2, ...props }, ref) => {
    return (
      <input
        autoComplete='off'
        className={
          [
            'flex items-center gap-2 border border-neutral-800 bg-neutral-900 [transition-duration:0.1s] relative p-2 py-1 outline-none',
            readOnly ? '' : 'focus-within:bg-neutral-800 focus-within:border-neutral-700 hover:bg-neutral-800 hover:border-neutral-700 hover:drop-shadow-sm',
            className,
            size2 === 'sm' ? 'h-[1.5625rem]' : '',
            size2 === 'base' ? 'h-[2rem]' : '',
            size2 === 'lg' ? 'h-[2.5rem]' : ''
          ].join(' ')
        }
        {...{ ...props, readOnly, ref }}
      />
    )
  }
)
