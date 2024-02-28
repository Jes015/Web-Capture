import { type BaseComponentProps, type FC } from '@/models'
import clsx from 'clsx'

interface TableCellProps extends BaseComponentProps {
  as: 'th' | 'td'
}

export const TableCell: FC<TableCellProps> = ({ className, as, ...props }) => {
  const Component = as

  return (
    <Component
      className={
        clsx(
          { 'border-b border-b-neutral-700': as === 'th' },
          { 'text-sm': as === 'td' },
          'p-1',
          className
        )
      }
      scope="col"
      {...props}
    />
  )
}
