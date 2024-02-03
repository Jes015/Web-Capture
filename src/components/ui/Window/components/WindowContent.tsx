import { SectionLayout } from '@/layouts'
import { type BaseComponentType } from '@/models'

export const WindowContent: BaseComponentType = ({ className, children }) => {
  return (
        <SectionLayout.Content className={['flex-grow w-full h-auto pt-2 p-1', className].join(' ')}>
            {children}
        </SectionLayout.Content>
  )
}
