import { Sheet } from '@/components/ui'
import { type BaseComponentProps, type BaseComponentType } from '@/models'
import { SectionLayoutHeader } from './components'

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

export const SectionLayoutContent: BaseComponentType = ({ children, className }) => {
  return (
        <div
            className={
                [
                  'p-1',
                  className
                ].join(' ')
            }
        >
            {children}
        </div>
  )
}
export const SectionLayoutFooter = () => { }

SectionLayout.Header = SectionLayoutHeader
SectionLayout.Content = SectionLayoutContent
SectionLayout.Footer = SectionLayoutFooter
