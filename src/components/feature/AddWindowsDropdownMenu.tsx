import { DropdownMenu } from '@/components/ui'
import { CWindowType } from '@/models'
import { useWindowSystemStore } from '@/services/store/zustand'

export const AddWindowsDropdownMenu = () => {
  const [addWindow] = useWindowSystemStore((state) => [state.addWindow])

  const handleOnClickToAddRecordWindow = () => {
    addWindow({ id: crypto.randomUUID(), name: 'new recording window', type: CWindowType.record })
  }

  const handleOnClickToAddWatchRecordingWindow = () => {
    addWindow({ id: crypto.randomUUID(), name: 'new watch recording window', type: CWindowType.watchRecord, videoAndAudioBlob: null })
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
                    onClick={handleOnClickToAddRecordWindow}
                >
                    Recording
                </DropdownMenu.Item>
                <DropdownMenu.Item
                    onClick={handleOnClickToAddWatchRecordingWindow}
                >
                    Watch Recording
                </DropdownMenu.Item>
            </DropdownMenu>
        </div>
  )
}
