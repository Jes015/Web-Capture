
import { type RecordWindowData } from '@/models'
import { RecordingWindowWrap } from './components'
import { RecorderProvider, RecorderWindowProvider } from './services/context'

interface RecordWindowProps {
  windowData: RecordWindowData
}

export const RecordingWindow: React.FC<RecordWindowProps> = ({ windowData }) => {
  return (
    <RecorderWindowProvider {...{ windowData }}>
      <RecorderProvider recordingType={windowData?.recordingCoreType ?? 'screen'}>
        <RecordingWindowWrap
          {...{ windowData }}
        />
      </RecorderProvider>
    </RecorderWindowProvider>
  )
}

export default RecordingWindow
