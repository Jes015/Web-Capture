import { Sheet } from '@/components/ui'
import { type BaseComponentProps, type FC } from '@/models'
import { Content as DefaultContent } from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import { forwardRef } from 'react'

interface ContentProps extends BaseComponentProps {
  contentStyles?: 'default' | 'main-menu'
}

export const Content: FC<ContentProps> = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, contentStyles = 'default' }, ref) => {
    return (
      <DefaultContent
        {...{ ref }}
        align='end'
        className='mt-[0.1rem]'
        style={{
          zIndex: 1000000000000
        }}
      >
        <Sheet
          className={
            clsx(
              { 'rounded-sm text-white text-xs': contentStyles === 'default' },
              { 'text-white border rounded-xl font-medium !bg-neutral-800 text-xs !border-neutral-700 overflow-hidden drop-shadow-md': contentStyles === 'main-menu' }
            )
          }
        >
          {children}
        </Sheet>
      </DefaultContent>
    )
  }
)
