import { createContext, useContext } from 'react'
import { type RecordingStatus } from '../../models/recorder.model'

interface RecorderContext {
  toggleRecordingStatus: (newStatus: RecordingStatus) => Promise<void>
  recordingStatus: RecordingStatus
  error: string | undefined
  videoSourceRef: React.MutableRefObject<HTMLVideoElement | undefined> | undefined
}

const defaultRecorderContext: RecorderContext = {
  toggleRecordingStatus: async () => {},
  recordingStatus: 'off',
  error: undefined,
  videoSourceRef: undefined
}

export const recorderContext = createContext<RecorderContext>(defaultRecorderContext)

export const useRecorderContext = () => useContext(recorderContext)
