import { Item as DefaultItem, type DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu'

interface ItemProps extends DropdownMenuItemProps {
  clickable?: boolean
}

export type ItemPropsPartial = Partial<ItemProps>

export const Item: React.FC<ItemProps> = ({ className, children, clickable = true, ...props }) => {
  if (clickable) {
    return (
      <DefaultItem
        className={
          [
            'leading-none flex items-center p-2 relative select-none outline-none hover:bg-neutral-800',
            className
          ].join(' ')
        }
        {...props}
      >
        {children}
      </DefaultItem>
    )
  }

  return (
    <div
      className={
        [
          'leading-none flex items-center p-2 relative select-none outline-none hover:bg-neutral-800',
          className
        ].join(' ')
      }
    >
      {children}
    </div>
  )
}
