import { type BaseComponentType } from '@/models'
import { useRecorder } from '../../hooks'
import { recorderContext } from './recorder.context'

export const RecorderProvider: BaseComponentType = ({ children }) => {
  const values = useRecorder()

  return (
        <recorderContext.Provider
            value={values}
        >
            {children}
        </recorderContext.Provider>
  )
}
