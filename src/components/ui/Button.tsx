import { type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'base' | 'resizable'
  color?: 'default'
}

export const Button: React.FC<ButtonProps> = ({ children, className, disabled, size = 'resizable', color = 'default', ...props }) => {
  return (
        <button
            className={
                [
                  disabled === true ? 'opacity-65 cursor-not-allowed' : '',
                  'border border-neutral-800 rounded-sm p-1 hover:bg-neutral-800 hover:border-neutral-700 hover:drop-shadow-sm [transition-duration:0.1s] relative',
                  className,
                  size === 'sm' || size === 'base' ? '!flex items-center justify-center' : '',
                  size === 'sm' ? 'h-[1.5625rem]' : '',
                  size === 'base' ? 'h-[2rem]' : ''
                ].join(' ')
            }
            {...{ ...props, disabled }}
        >
            {children}
        </button>
  )
}
