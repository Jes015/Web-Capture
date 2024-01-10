import { SectionLayout } from '@/layouts'
import { type SectionLayoutHeaderPropsPartial } from '@/layouts/SectionLayout/components'
import { type BaseComponentProps } from '@/models'

interface WindowProps extends BaseComponentProps, SectionLayoutHeaderPropsPartial {
}

export const Window: React.FC<WindowProps> = ({ children, className, icon, title }) => {
  return (
        <SectionLayout
            {...{ className }}
        >
            <SectionLayout.Header
                {...{ icon, title }}
            />
            <SectionLayout.Content>
                {children}
            </SectionLayout.Content>
        </SectionLayout>
  )
}
