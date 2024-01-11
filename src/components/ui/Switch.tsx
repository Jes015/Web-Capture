import { Root, Thumb } from '@radix-ui/react-switch'
import { useId } from 'react'

interface SwitchProps {
  className?: React.HTMLAttributes<HTMLElement>['className']
  labelProps: {
    children?: React.ReactNode
    className?: string
  }
  switchProps?: {
    className?: string
    thumb?: {
      className?: string
    }
    onChange?: (e: boolean) => void
  }
}

export const Switch: React.FC<SwitchProps> = ({ className, labelProps, switchProps }) => {
  const id = useId()

  return (
    <div className={
      [
        'flex items-center pr-2',
        className
      ].join(' ')
    }>
      <label
        htmlFor={id}
        className={labelProps.className}
      >
        {labelProps.children}
      </label>
      <Root
        id={id}
        className={
          [
            'bg-neutral-800 w-[42px] h-[17px] bg-blackA6 rounded-full relative shadow-blackA4 shadow-[0_0_0_1px] shadow-neutral-700 data-[state=checked]:bg-green-400 outline-none cursor-default',
            switchProps?.className
          ].join(' ')
        }
        onCheckedChange={switchProps?.onChange}
      >
        <Thumb
          className={
            [
              'block w-[21px] h-[13px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px] data-[state=checked]:drop-shadow-2xl',
              switchProps?.thumb?.className
            ].join(' ')
          }
        />
      </Root>
    </div>
  )
}
