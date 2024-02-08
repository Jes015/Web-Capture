import { type BaseComponentProps } from '@/models'
import { type RecordingType } from '@/utils/others'
import { useRecorder } from '../../hooks'
import { recorderContext } from './recorder.context'

interface RecorderProviderProps extends BaseComponentProps {
  recordingType: RecordingType
}

export const RecorderProvider: React.FC<RecorderProviderProps> = ({ children, recordingType }) => {
  const values = useRecorder(recordingType)

  return (
        <recorderContext.Provider
            value={values}
        >
            {children}
        </recorderContext.Provider>
  )
}
