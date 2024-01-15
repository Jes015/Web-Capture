import { IconRecording } from '@/assets/Icons'
import { Window } from '@/components/ui'
import { type RecordWindowData } from '@/models'
import { recordingStatusType } from '../models'
import { useRecorderContext } from '../services/context'
import { RecordControls, RecordData, RecordVideo, RecordingWindowDropdownMenu } from './'

interface RecordingWindowWrapProps {
  windowData: RecordWindowData
}

export const RecordingWindowWrap: React.FC<RecordingWindowWrapProps> = ({ windowData }) => {
  const { recordingStatus } = useRecorderContext()

  return (
        <Window
            title="Recording Window"
            icon={
                <IconRecording
                    className={
                        [
                          'text-red-400 text-base',
                          recordingStatus === recordingStatusType.on ? 'animate-pulse-fast' : ''
                        ].join(' ')
                    }
                />
            }
            rightNode={<RecordingWindowDropdownMenu />}
            className='overflow-hidden'
            {...{ windowData }}
        >
            <div
                className="relative overflow-hidden h-full"
            >
                <RecordVideo />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col p-1 gap-1 pt-2 z-10'>
                    <RecordData />
                    <RecordControls />
                </div>
            </div>
        </Window>
  )
}
