import { type BaseComponentProps, type WindowData } from '@/models'
import { useRecorder } from '../../hooks'
import { recorderContext } from './recorder.context'

interface RecorderProviderProps extends BaseComponentProps {
  windowData: WindowData
}

export const RecorderProvider: React.FC<RecorderProviderProps> = ({ children, windowData }) => {
  const values = useRecorder(windowData?.recordingCoreType ?? 'screen')

  return (
        <recorderContext.Provider
            value={values}
        >
            {children}
        </recorderContext.Provider>
  )
}
