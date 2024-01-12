import { Sheet } from '@/components/ui'
import { type BaseComponentProps } from '@/models'
import { Content, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu'
import { Item } from './components'

interface DropdownMenuProps extends BaseComponentProps {
  triggerContent?: React.ReactNode
}

export const DropdownMenu = ({ children, triggerContent }: DropdownMenuProps) => {
  return (
        <Root>
            <Trigger asChild>
                <button // If you use base components radix UI will not give you problems ;)
                    className='border border-neutral-800 rounded-sm p-[0.20rem] hover:bg-neutral-800 hover:border-neutral-700 hover:drop-shadow-sm [transition-duration:0.1s]'
                    aria-label="Customise options"
                >
                    {triggerContent}
                </button>
            </Trigger>

            <Portal>
                <Content
                    align='end'
                    className='mt-[0.1rem]'
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
