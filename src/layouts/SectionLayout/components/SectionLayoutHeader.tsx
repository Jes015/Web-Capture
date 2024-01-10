import { Sheet } from '@/components/ui'
import { forwardRef, type HTMLAttributes } from 'react'

interface SectionLayoutHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  icon?: React.ReactNode
}

export type SectionLayoutHeaderPropsPartial = Partial<SectionLayoutHeaderProps>

export const SectionLayoutHeader = forwardRef<HTMLDivElement, SectionLayoutHeaderProps>(
  ({ title, icon, children, className, ...props }, ref) => {
    return (
      <Sheet
        as="header"
        className={
          [
            '[border-inline:none] [border-top:none] bg-neutral-900 p-1 pt-2 border-neutral-800',
            className
          ].join(' ')
        }
        {...{ ...props, ref }}
      >
        {
          title != null || icon != null
            ? <div
              className="flex items-center gap-1"
            >
              {icon}
              <h2 className="font-bold text-sm">
                {title}
              </h2>
            </div>
            : children
        }
      </Sheet>
    )
  }
)

SectionLayoutHeader.displayName = 'SectionLayoutHeader'
