import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import { SelectContent, SelectGroup, SelectPortal, Root as SelectRoot, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectViewport, type SelectProps } from '@radix-ui/react-select'
import { SelectCurrentValue, SelectGroupLabel, SelectItem } from './components'

interface CustomSelectProps extends SelectProps {
  triggerContent: React.ReactNode
}

export const Select = ({ children, triggerContent, ...props }: CustomSelectProps) => {
  return (
        <SelectRoot {...props}>
            <SelectTrigger
                className="flex items-center gap-2 border border-neutral-800 bg-neutral-900 rounded-sm hover:bg-neutral-800 hover:border-neutral-700 hover:drop-shadow-sm [transition-duration:0.1s] relative p-2 py-1 outline-none"
            >
                {triggerContent}
            </SelectTrigger>
            <SelectPortal>
                <SelectContent className="text-white overflow-hidden z-[1001010101010101001] border border-neutral-800 bg-neutral-900 rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                    <SelectScrollUpButton className="flex items-center justify-center h-[25px] bg-white cursor-default">
                        <ChevronUpIcon />
                    </SelectScrollUpButton>
                    <SelectViewport className="p-1 z-[100101010101010100103]">
                        {children}
                    </SelectViewport>
                    <SelectScrollDownButton className="flex items-center justify-center h-[25px] bg-white cursor-default">
                        <ChevronDownIcon />
                    </SelectScrollDownButton>
                </SelectContent>
            </SelectPortal>
        </SelectRoot>
  )
}


Select.Item = SelectItem
Select.GroupLabel = SelectGroupLabel
Select.TriggerContent = SelectCurrentValue
Select.Group = SelectGroup
Select.Separator = SelectSeparator
