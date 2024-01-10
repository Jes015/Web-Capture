import { type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const Button: React.FC<ButtonProps> = ({ children, className, disabled, ...props }) => {
  return (
        <button
            className={
                [
                  disabled === true ? 'opacity-65 cursor-not-allowed' : '',
                  'border border-neutral-800 rounded-sm p-1 hover:bg-neutral-800 hover:border-neutral-700 hover:drop-shadow-sm [transition-duration:0.1s]',
                  className
                ].join(' ')
            }
            {...{ ...props, disabled }}
        >
            {children}
        </button>
  )
}
