import { type BaseComponentType } from '@/models'
import clsx from 'clsx'

export const TableRow: BaseComponentType = ({ className, ...props }) => {
  return (
    <tr
      className={
        clsx(
          'border-b border-b-neutral-700',
          className
        )
      }
      {...props}
    />
  )
}
