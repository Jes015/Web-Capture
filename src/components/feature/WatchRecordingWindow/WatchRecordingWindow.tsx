import { IconVideoCam } from '@/assets/Icons'
import { Button, Window } from '@/components/ui'
import { type WatchRecordingWindowData } from '@/models'
import { useWatchRecording } from './hooks'

interface WatchRecordingWindowProps {
  windowData: WatchRecordingWindowData
}

export const WatchRecordingWindow: React.FC<WatchRecordingWindowProps> = ({ windowData }) => {
  const { videoElementRef, downloadRecording } = useWatchRecording(windowData)

  const handleOnClickForDownloadRecording = () => {
    downloadRecording()
  }

  return (
    <Window
      title='Watch Recording'
      {...{ windowData }}
      icon={<IconVideoCam className="text-red-400 text-base" />}
      rightNode={
        <div
          className='flex items-center gap-1'
        >
          {
            windowData.videoAndAudioBlob != null && (
              <Button
                size='sm'
                className='text-xs gap-[0.3125rem] overflow-hidden'
                onClick={handleOnClickForDownloadRecording}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                </span>
                Download
              </Button>
            )
          }
        </div>
      }
      rndconfig={{
        enableResizing: true,
        default: {
          x: 0,
          y: 0,
          width: 500,
          height: 320
        },
        minWidth: 251,
        maxWidth: 500,
        maxHeight: 400,
        lockAspectRatio: true
      }}
    >
      {
        windowData.videoAndAudioBlob == null && <h1 className='p-3 pt-1'>No source found. This window will be displayed by the recording window when the recording ends.</h1>
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

export default WatchRecordingWindow
