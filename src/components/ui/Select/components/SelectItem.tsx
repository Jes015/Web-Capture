import { CheckIcon } from '@radix-ui/react-icons'
import { SelectItem as DefaultSelectItem, SelectItemIndicator, SelectItemText, type SelectItemProps } from '@radix-ui/react-select'
import { forwardRef } from 'react'

export const SelectItem = forwardRef<HTMLElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <DefaultSelectItem
        className='text-[13px] leading-none text-violet11 rounded-[3px] py-2 px-4 flex items-center relative select-none hover:bg-neutral-800 outline-none'
        {...props}
        ref={forwardedRef as React.Ref<HTMLDivElement>}
      >
        <SelectItemText>{children}</SelectItemText>
        <SelectItemIndicator className="w-[25px] inline-flex items-center justify-center">
          <CheckIcon />
        </SelectItemIndicator>
      </DefaultSelectItem>
    )
  })
