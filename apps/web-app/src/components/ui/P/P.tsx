import { type BaseComponentProps, type FC } from '@/models'
import clsx from 'clsx'

interface PProps extends BaseComponentProps {
  level?: 'primary' | 'secondary'
}

export const P: FC<PProps> = ({ className, level = 'primary', ...props }) => {
  return (
        <p
            className={
                clsx(
                  'flex items-center gap-1',
                  { 'text-neutral-100': level === 'primary' },
                  { 'text-neutral-300': level === 'secondary' },
                  className
                )
            }
            {...props}
        />
  )
}
