import { forwardRef, type HTMLAttributes } from 'react'

interface SheetProps extends HTMLAttributes<HTMLDivElement> {
  as: keyof JSX.IntrinsicElements
}

export type SheetPropsPartial = Partial<SheetProps>

export const Sheet = forwardRef<HTMLDivElement, SheetProps>(
  ({ as, children, className, ...props }, ref) => {
    const Element = as ?? 'div'
    return (
      // @ts-expect-error TYPE ERROR EXPECTED
      <Element
        className={
          [
            'border border-neutral-800 bg-neutral-900',
            className
          ].join(' ')
        }
        // @ts-expect-error TYPE ERROR EXPECTED
        {...{ ...props, ref }}
      >
        {children}
      </Element>
    )
  }
)
