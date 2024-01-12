import { type BaseComponentType } from '@/models'
import { useRecorderWindow } from '../../hooks'
import { recorderWindowContext } from './recorderWindow.context'

export const RecorderWindowProvider: BaseComponentType = ({ children }) => {
  const values = useRecorderWindow()

  return <recorderWindowContext.Provider value={values}>
    {children}
  </recorderWindowContext.Provider>
}

