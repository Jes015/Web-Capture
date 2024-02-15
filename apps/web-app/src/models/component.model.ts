export interface BaseComponentProps extends React.HTMLAttributes<HTMLElement> {
}

export type BaseComponentType = React.FC<BaseComponentProps>

export type ComponentIcon = React.FC<React.SVGProps<SVGSVGElement>>
