import { type BaseComponentProps } from '@/models'
import { Root, Thumb } from '@radix-ui/react-switch'

interface SwitchInputProps extends BaseComponentProps {
  onChange?: (e: boolean) => void
  defaultChecked?: boolean
  thumbClassName?: string
}

export const SwitchInput = ({ className, onChange, defaultChecked = false, thumbClassName }: SwitchInputProps) => {
  return (
    <Root
        className={
          [
            'bg-neutral-800 w-[40px] h-[17px] bg-blackA6 rounded-full relative shadow-blackA4 shadow-[0_0_0_1px] shadow-neutral-700 data-[state=checked]:bg-green-400 outline-none cursor-default',
            className
          ].join(' ')
        }
        onCheckedChange={onChange}
        defaultChecked={defaultChecked}
      >
        <Thumb
          className={
            [
              'block w-[19px] h-[13px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px] data-[state=checked]:drop-shadow-2xl',
              thumbClassName
            ].join(' ')
          }
        />
      </Root>
  )
}
