import { IconRecording } from '@/assets/Icons'
import { Window } from '@/components/ui'

import { type RecordWindowData } from '@/models'
import { RecordContent, RecordingWindowDropdownMenu } from './components'
import { recordingStatusType } from './models'
import { RecorderProvider, RecorderWindowProvider, useRecorderContext } from './services/context'

interface RecordWindowProps {
  windowData: RecordWindowData
}

export const RecordingWindow: React.FC<RecordWindowProps> = ({ windowData }) => {
  return (
    <RecorderWindowProvider {...{ windowData }}>
      <RecorderProvider>
        <RecordingWindowWrap />
      </RecorderProvider>
    </RecorderWindowProvider>
  )
}

export const RecordingWindowWrap = () => {
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
    >
      <RecordContent />
    </Window>
  )
}
