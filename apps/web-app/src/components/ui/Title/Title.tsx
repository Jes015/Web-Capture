import { type BaseComponentProps } from '@/models'
import clsx from 'clsx'

interface TitleProps extends BaseComponentProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

export const Title: React.FC<TitleProps> = ({ as, className, ...props }) => {
  const Component = as ?? 'h1'

  return (
        <Component
            className={
                clsx(
                  { 'text-4xl': Component === 'h1' },
                  className
                )
            }
            {...props}
        />
  )
}
