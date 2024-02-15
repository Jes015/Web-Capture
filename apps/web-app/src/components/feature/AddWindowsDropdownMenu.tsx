import { DropdownMenu } from '@/components/ui'
import { CWindowType } from '@/models'
import { useWindowSystemStore } from '@/services/store/zustand'

export const AddWindowsDropdownMenu = () => {
  const [addWindow] = useWindowSystemStore((state) => [state.addWindow])

  const handleOnClickToAddScreenRecordingWindow = () => {
    addWindow({ id: crypto.randomUUID(), name: 'Screen recording', type: CWindowType.record, recordingCoreType: 'screen' })
  }

  const handleOnClickToAddWebcamRecordingWindow = () => {
    addWindow({ id: crypto.randomUUID(), name: 'Webcam recording', type: CWindowType.record, recordingCoreType: 'web-cam' })
  }

  return (
        <div
            className='fixed top-4 right-4'
            id='addWindows'
        >
            <DropdownMenu
                triggerContent={
                    <span className='size-6 rounded text-sm'>Windows</span>
                }
            >
                <DropdownMenu.Item
                    onClick={handleOnClickToAddScreenRecordingWindow}
                >
                    Screen | Tab | Window
                </DropdownMenu.Item>
                <DropdownMenu.Item
                    onClick={handleOnClickToAddWebcamRecordingWindow}
                >
                    Web cam
                </DropdownMenu.Item>
            </DropdownMenu>
        </div>
  )
}
