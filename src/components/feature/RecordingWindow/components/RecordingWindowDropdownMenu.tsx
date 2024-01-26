import { DropdownMenu, InputElement, SwitchInput } from '@/components/ui'
import { type BaseComponentType } from '@/models'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useRecorderWindowContext } from '../services/context'

export const RecordingWindowDropdownMenu: BaseComponentType = () => {
  const { isDisplayingVideo, toggleVideoVisibility } = useRecorderWindowContext()

  const handleOnClickForDisplayVideo = (newValue: boolean) => {
    toggleVideoVisibility(newValue)
  }

  return (
    <DropdownMenu triggerContent={<HamburgerMenuIcon className=' text-base' />}>
      <DropdownMenu.Item
        className='!p-0'
        clickable={false}
      >
        <InputElement
          className='p-2'
        >
          <InputElement.Label>
            Display Video
          </InputElement.Label>
          <SwitchInput
            onChange={handleOnClickForDisplayVideo}
            defaultChecked={isDisplayingVideo}
          />
        </InputElement>
      </DropdownMenu.Item>
    </DropdownMenu>
  )
}
