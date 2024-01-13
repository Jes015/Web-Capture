import { IconVideoCam } from '@/assets/Icons'
import { Button, Window } from '@/components/ui'
import { type WatchRecordingWindowData } from '@/models'
import { useWindowSystemStore } from '@/services/store/zustand'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useEffect, useRef } from 'react'

interface WatchRecordingWindowProps {
  windowData: WatchRecordingWindowData
}

export const WatchRecordingWindow: React.FC<WatchRecordingWindowProps> = ({ windowData }) => {
  const videoElementRef = useRef<HTMLVideoElement>(null)
  const { removeWindow } = useWindowSystemStore(state => ({ removeWindow: state.removeWindow }))

  useEffect(() => {
    if (videoElementRef.current == null || windowData.videoAndAudioBlob == null) return
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
      title='Watch Recording'
      className='overflow-hidden'
      icon={<IconVideoCam className="text-red-400 text-base" />}
      rightNode={
        <Button
          onClick={handleOnClickForCloseWindow}
        >
          <Cross1Icon />
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
      {
        windowData.videoAndAudioBlob == null && <h1>No source found. This window will be displayed by the recording window when the recording ends.</h1>
      }
      {
        windowData.videoAndAudioBlob != null &&
        (
          <video
            ref={videoElementRef}
            className='h-full w-full'
            controls
          ></video>
        )
      }
    </Window>
  )
}
