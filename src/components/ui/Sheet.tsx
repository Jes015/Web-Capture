import { BaseComponentProps } from "@/models"

interface SheetProps extends BaseComponentProps {
    as: keyof JSX.IntrinsicElements
}

export type SheetPropsPartial = Partial<SheetProps>

export const Sheet: React.FC<SheetProps> = ({ as, children, className }) => {
    const Element = as || 'div'
    return (
        <Element
            className={
                [
                    'border border-neutral-800 bg-neutral-900',
                    className
                ].join(' ')
            }
        >
            {children}
        </Element>
    )
}
