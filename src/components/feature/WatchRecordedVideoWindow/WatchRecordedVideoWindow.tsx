import { IconClose, IconVideoCam } from '@/assets/Icons'
import { Button, Window } from '@/components/ui'
import { type WatchRecordedWindowData } from '@/models'
import { useWindowSystemStore } from '@/services/store/zustand'
import { useEffect, useRef } from 'react'

interface WatchRecordedVideoWindowProps {
  windowData: WatchRecordedWindowData
}

export const WatchRecordedVideoWindow: React.FC<WatchRecordedVideoWindowProps> = ({ windowData }) => {
  const videoElementRef = useRef<HTMLVideoElement>(null)
  const { removeWindow } = useWindowSystemStore(state => ({ removeWindow: state.removeWindow }))

  useEffect(() => {
    if (videoElementRef.current == null) return
    const videoURL = URL.createObjectURL(windowData.videoAndAudioBlob)

    videoElementRef.current.src = videoURL

    return () => {
      URL.revokeObjectURL(videoURL)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOnClickForCloseWindow = () => {
    removeWindow(windowData.id)
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
      rndconfig={{
        enableResizing: true,
        default: {
          x: 0,
          y: 0,
          width: 500,
          height: 320
        },
        maxWidth: 500,
        maxHeight: 400,
        lockAspectRatio: true
      }}
    >
      <video
        ref={videoElementRef}
        className='h-full w-full'
        controls
      ></video>

    </Window>
  )
}
