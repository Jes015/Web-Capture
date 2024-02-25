import { Button, Sheet } from '@/components/ui'
import { type BaseComponentProps } from '@/models'
import { Content, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu'
import { Item } from './components'

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
                <Content
                    align='end'
                    className='mt-[0.1rem]'
                    style={{
                      zIndex: 1000000000000
                    }}
                >
                    <Sheet
                        className='rounded-sm text-white text-xs'
                    >
                        {children}
                    </Sheet>
                </Content>
            </Portal>
        </Root>
  )
}

DropdownMenu.Item = Item

export default DropdownMenu
