import { Sheet } from '@/components/ui'
import { forwardRef, type HTMLAttributes } from 'react'

interface SectionLayoutHeaderProps extends HTMLAttributes<HTMLDivElement> {
  name?: React.ReactNode
  icon?: React.ReactNode
  rightNode?: React.ReactNode
}

export type SectionLayoutHeaderPropsPartial = Partial<SectionLayoutHeaderProps>

export const SectionLayoutHeader = forwardRef<HTMLDivElement, SectionLayoutHeaderProps>(
  ({ name, icon, children, className, rightNode, ...props }, ref) => {
    return (
      <Sheet
        as="header"
        className={
          [
            '[border-inline:none] [border-top:none] bg-neutral-900 p-1 border-neutral-800',
            className
          ].join(' ')
        }
        {...{ ...props, ref }}
      >
        {
          name != null || icon != null
            ? (
              <div
                className='flex items-center justify-between gap-1'
              >
                <div
                  className="flex items-center gap-1 flex-grow"
                >
                  <div className='flex items-center justify-center flex-shrink-0'>
                    {icon}
                  </div>
                  <div className="font-bold flex-grow text-sm">
                    {name}
                  </div>
                </div>
                <div className='flex justify-end flex-shrink-0 items-center'>
                  {rightNode}
                </div>
              </div>
              )
            : children
        }
      </Sheet>
    )
  }
)

SectionLayoutHeader.displayName = 'SectionLayoutHeader'
