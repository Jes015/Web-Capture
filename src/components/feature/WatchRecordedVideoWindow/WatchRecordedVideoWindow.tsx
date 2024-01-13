import { IconClose, IconVideoCam } from '@/assets/Icons'
import { Button, Window } from '@/components/ui'
import { type WindowData } from '@/models'
import { useWindowSystemStore } from '@/services/store/zustand'

interface WatchRecordedVideoWindowProps {
  windowData: WindowData
}

export const WatchRecordedVideoWindow: React.FC<WatchRecordedVideoWindowProps> = ({ windowData }) => {
  const { removeWindow } = useWindowSystemStore(state => ({ removeWindow: state.removeWindow }))

  const handleOnClickForCloseWindow = () => {
    removeWindow(windowData.name)
  }

  return (
    <Window
      title='Watch Recorded'
      className='overflow-hidden'
      icon={<IconVideoCam className="text-red-400 text-base" />}
      rightNode={
        <Button
          onClick={handleOnClickForCloseWindow}
        >
          <IconClose />
        </Button>
      }
    >
      <video className='h-full w-full' controls></video>

    </Window>
  )
}
