import { Sheet } from '@/components/ui'
import { type BaseComponentProps } from '@/models'
import { forwardRef } from 'react'
import { SectionLayoutContent, SectionLayoutHeader } from './components'

export const SectionLayout = forwardRef<HTMLDivElement, BaseComponentProps>(
  ({ children, className }, ref) => {
    return (
      <Sheet
        as="section"
        className={
          [
            'rounded-md',
            className
          ].join(' ')
        }
        {...{ ref }}
      >
        {children}
      </Sheet>
    )
  }
)

SectionLayout.displayName = 'SectionLayout'

export { SectionLayoutContent, SectionLayoutHeader }
