import { Sheet } from "@/components/ui"
import { BaseComponentProps } from "@/models"

interface SectionLayoutHeaderProps extends BaseComponentProps {
    title?: string
    icon?: React.ReactNode
}

export type SectionLayoutHeaderPropsPartial = Partial<SectionLayoutHeaderProps>

export const SectionLayoutHeader: React.FC<SectionLayoutHeaderProps> = ({ title, icon, children, className }) => {
    return (
        <Sheet
            as="header"
            className={
                [
                    '[border-inline:none] [border-top:none] bg-neutral-800 p-1 pt-2 border-neutral-700 cursor-pointer active:cursor-move',
                    className
                ].join(' ')
            }
        >
            {
                title || icon
                    ?
                    <div
                        className="flex items-center gap-1"
                    >
                        {icon}
                        <h2 className="font-bold text-sm">
                            {title}
                        </h2>
                    </div>
                    :
                    children
            }
        </Sheet>
    )
}