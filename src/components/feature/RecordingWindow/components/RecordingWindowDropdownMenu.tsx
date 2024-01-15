import { DropdownMenu, InputElement, SwitchInput } from '@/components/ui'
import { type WindowData } from '@/models'
import { useWindowSystemStore } from '@/services/store/zustand'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useRecorderWindowContext } from '../services/context'

interface RecordingWindowDropdownMenuProps {
  windowData: WindowData
}
export const RecordingWindowDropdownMenu: React.FC<RecordingWindowDropdownMenuProps> = ({ windowData }) => {
  const { isDisplayingVideo, toggleVideoVisibility } = useRecorderWindowContext()
  const { removeWindow } = useWindowSystemStore()

  const handleOnClickForDisplayVideo = (newValue: boolean) => {
    toggleVideoVisibility(newValue)
  }

  const handleOnClickForCloseWindow = () => {
    removeWindow(windowData.id)
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
      <DropdownMenu.Item
        onClick={handleOnClickForCloseWindow}
      >
        Close
        </DropdownMenu.Item>
    </DropdownMenu>
  )
}
