import { AppLogo } from '@/components/feature'
import { type BaseComponentType } from '@/models'
import clsx from 'clsx'

export const DividedLayout: BaseComponentType = ({ children, className, ...props }) => {
  return (
    <div
      className='w-screen h-dvh flex'
    >
      <div
        className={
          clsx(
            'z-50 flex-grow h-full [flex-basis:50vw] flex-shrink-0 flex flex-col justify-center px-5 sm:px-20 lg:px-10 xl:px-36 pb-10 bg-neutral-900 border-r border-r-neutral-800',
            className
          )
        }
        {...props}
      >
        {children}
      </div>
      <div className='[display:none] h-full flex-shrink-0 [flex-basis:50vw] flex-grow lg:grid place-items-center'>
        <AppLogo />
      </div>
    </div>
  )
}
