import { Sheet } from '@/components/ui'
import { type BaseComponentProps } from '@/models'
import { SectionLayoutContent, SectionLayoutHeader } from './components'

export const SectionLayout = ({ children, className }: BaseComponentProps) => {
  return (
    <Sheet
      as="section"
      className={
        [
          'rounded-md',
          className
        ].join(' ')
      }
    >
      {children}
    </Sheet>
  )
}

SectionLayout.Header = SectionLayoutHeader
SectionLayout.Content = SectionLayoutContent
