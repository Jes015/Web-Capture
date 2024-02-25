import { Button } from '@/components/ui'
import { type BaseComponentProps } from '@/models'
import { Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu'
import { Content, Item } from './components'

interface DropdownMenuProps extends BaseComponentProps {
  triggerContent: React.ReactNode
  triggerClassName?: string
}

export const DropdownMenu = ({ children, triggerContent, triggerClassName, id }: DropdownMenuProps) => {
  return (
        <Root>
            <Trigger
                asChild
                className='outline-none'
                {...{ id }}
            >
                <Button
                    className={triggerClassName}
                    aria-label="Open menu"
                >
                    {triggerContent}
                </Button>
            </Trigger>

            <Portal>
                {children}
            </Portal>
        </Root>
  )
}

DropdownMenu.Item = Item
DropdownMenu.Content = Content

export default DropdownMenu
