import { ChevronDownIcon } from '@radix-ui/react-icons'
import { SelectIcon, SelectValue } from '@radix-ui/react-select'

interface SelectCurrentValueProps {
  placeholder?: string
}

export const SelectCurrentValue: React.FC<SelectCurrentValueProps> = ({ placeholder }) => {
  return (
        <>
            <SelectValue className='font-bold' {...{ placeholder }} />
            <SelectIcon>
                <ChevronDownIcon />
            </SelectIcon>
        </>
  )
}
