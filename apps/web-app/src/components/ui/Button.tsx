import clsx from 'clsx'
import { forwardRef, type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'base' | 'resizable'
  color?: 'default' | 'light'
}

export const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, size = 'resizable', color = 'default', ...props }, ref) => {
    return (
      <button
        className={
          clsx(
            disabled === true ? 'opacity-65 cursor-not-allowed' : '',
            'border rounded-sm p-1 [transition-duration:0.1s] relative hover:drop-shadow-sm',
            className,
            size === 'sm' || size === 'base' ? '!flex items-center justify-center' : '',
            size === 'sm' ? 'h-[1.5625rem]' : '',
            size === 'base' ? 'h-[2rem]' : '',
            { 'hover:bg-neutral-800 hover:border-neutral-700 border-neutral-800': color === 'default' },
            { 'bg-neutral-800 border-neutral-700 hover:bg-neutral-700 hover:border-neutral-600': color === 'light' }
          )
        }
        {...{ ...props, disabled, ref }}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
