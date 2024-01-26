import { ChevronDownIcon } from '@radix-ui/react-icons'
import { SelectIcon, SelectValue } from '@radix-ui/react-select'

interface SelectCurrentValueProps {
  placeholder: string
}

export const SelectCurrentValue: React.FC<SelectCurrentValueProps> = ({ placeholder }) => {
  return (
        <>
            <SelectValue className='text-xs font-bold' {...{ placeholder }} />
            <SelectIcon>
                <ChevronDownIcon />
            </SelectIcon>
        </>
  )
}
