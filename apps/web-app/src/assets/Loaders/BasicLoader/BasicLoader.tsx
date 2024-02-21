import { type BaseComponentType } from '@/models'
import clsx from 'clsx'

export const BasicLoader: BaseComponentType = ({ className, ...props }) => {
  return (
    <div
      className={
        clsx(
          'inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-neutral-100 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
          className
        )
      }
      role="status"
      {...props}
    >
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >
        Loading...
      </span>
    </div>
  )
}
