import { Button, Sheet } from '@/components/ui'
import { type BaseComponentProps } from '@/models'
import { Content, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import { Item } from './components'

interface DropdownMenuProps extends BaseComponentProps {
  triggerContent: React.ReactNode
  triggerClassName?: string
  contentStyles?: 'default' | 'main-menu'
}

export const DropdownMenu = ({ children, triggerContent, triggerClassName, contentStyles = 'default', id }: DropdownMenuProps) => {
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
                    <Sheet // FIXME:REFACTOR ALL THE DROPDOWN MENU COMPONENT. ADD THE CONTENT COMPONENT TO "DROPDOWNMENU.CONTENT". THAT WAY THE COMPONENT WILL BE MUCH MORE BEAUTIFUL
                        className={
                            clsx(
                              { 'rounded-sm text-white text-xs': contentStyles === 'default' },
                              { 'text-white border rounded-xl font-medium !bg-neutral-800 text-xs !border-neutral-700 overflow-hidden drop-shadow-md': contentStyles === 'main-menu' }
                            )
                        }
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
