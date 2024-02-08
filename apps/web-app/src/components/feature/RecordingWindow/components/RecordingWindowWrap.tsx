import { IconRecording } from '@/assets/Icons'
import { Window } from '@/components/ui'
import { type RecordWindowData } from '@/models'
import { recordingStatusType } from '../models'
import { useRecorderContext } from '../services/context'
import {
  RecordControls,
  RecordData,
  RecordVideo,
  RecordingWindowDropdownMenu
} from './'

interface RecordingWindowWrapProps {
  windowData: RecordWindowData
}

export const RecordingWindowWrap: React.FC<RecordingWindowWrapProps> = ({
  windowData
}) => {
  const { recordingStatus } = useRecorderContext()

  return (
    <Window
      rndconfig={{
        minWidth: 210,
        minHeight: 123,
        maxWidth: 300,
        enableResizing: true,
        lockAspectRatio: false,
        default: {
          height: 123,
          width: 210,
          x: 0,
          y: 0
        }
      }}
      {...{ windowData }}
    >
      <Window.Header
        title={windowData.name}
        icon={
          <IconRecording
            className={[
              'text-red-400 text-base',
              recordingStatus === recordingStatusType.on
                ? 'animate-pulse-fast'
                : ''
            ].join(' ')}
          />
        }
        rightNode={<RecordingWindowDropdownMenu />}
        {...{ windowData }}
      />
      <Window.Content className='!p-0 !pt-0'>
        <div className="relative h-full w-full">
          <RecordVideo />
          <div className="w-full h-full flex flex-col gap-1 p-1 z-10">
            <RecordData />
            <RecordControls />
          </div>
        </div>
      </Window.Content>
    </Window>
  )
}
