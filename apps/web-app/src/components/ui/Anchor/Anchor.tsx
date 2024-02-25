import { type FC } from '@/models'
import clsx from 'clsx'
import { type AnchorHTMLAttributes } from 'react'

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> { }

export const Anchor: FC<AnchorProps> = ({ className, ...props }) => {
  return (
    <a
      className={
        clsx(
          'text-blue-500 underline',
          className
        )
      }
      rel='noopener noreferrer'
      {...props}
    />
  )
}
