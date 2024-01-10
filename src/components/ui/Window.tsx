import { SectionLayout } from "@/layouts"
import { SectionLayoutHeaderPropsPartial } from "@/layouts/SectionLayout/components"
import { BaseComponentProps } from "@/models"

interface WindowProps extends BaseComponentProps, SectionLayoutHeaderPropsPartial {
}

export const Window: React.FC<WindowProps> = ({ children, className, icon, title }) => {
    return (
        <SectionLayout
            {...{ className }}
        >
            <SectionLayout.Header
                {...{icon, title}}
            />
            <SectionLayout.Content>
                {children}
            </SectionLayout.Content>
        </SectionLayout>
    )
}
