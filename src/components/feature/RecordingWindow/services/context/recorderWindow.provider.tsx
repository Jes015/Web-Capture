import { type BaseComponentProps, type RecordWindowData } from '@/models'
import { useRecorderWindow } from '../../hooks'
import { recorderWindowContext } from './recorderWindow.context'

interface RecorderWindowProviderProps extends BaseComponentProps {
  windowData: RecordWindowData
}

export const RecorderWindowProvider: React.FC<RecorderWindowProviderProps> = ({ children, windowData }) => {
  const values = useRecorderWindow(windowData)

  return <recorderWindowContext.Provider value={values}>
    {children}
  </recorderWindowContext.Provider>
}

