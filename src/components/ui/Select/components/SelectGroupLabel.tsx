import { type BaseComponentType } from '@/models'
import { SelectLabel } from '@radix-ui/react-select'

export const SelectGroupLabel: BaseComponentType = ({ children, className }) => {
  return (
    <SelectLabel
      className={
        ['text-xs leading-[20px] text-mauve11 font-bold px-[5px]', className].join()
      }
    >
      {children}
    </SelectLabel>
  )
}
