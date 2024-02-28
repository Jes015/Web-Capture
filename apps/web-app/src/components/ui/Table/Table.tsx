import { type BaseComponentProps } from '@/models'
import clsx from 'clsx'
import { TableBody, TableCell, TableHead, TableRow } from './components'

export const Table = ({ className, ...props }: BaseComponentProps) => {
  return (
        <table
            className={
                clsx(
                  'border border-neutral-700 rounded-lg border-b-0',
                  className
                )
            }
            {...props}
        />
  )
}

Table.Body = TableBody
Table.Cell = TableCell
Table.Head = TableHead
Table.Row = TableRow
