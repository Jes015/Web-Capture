export interface BaseComponentProps extends React.HTMLAttributes<HTMLElement> {
}

export type BaseComponentType = React.FC<BaseComponentProps>

export type FC <T> = React.FC<T>

export type ComponentIcon = React.FC<React.SVGProps<SVGSVGElement>>
