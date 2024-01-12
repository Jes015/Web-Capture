import { createContext, useContext } from 'react'
import { type RecordingStatus } from '../../models/recorder.model'

interface RecorderContext {
  toggleRecordingStatus: (newStatus: RecordingStatus) => Promise<void>
  recordingStatus: RecordingStatus
  error: string | undefined
  videoSourceRef: React.MutableRefObject<HTMLVideoElement | undefined> | undefined
  videoWatchRecordedSourceRef: React.MutableRefObject<HTMLVideoElement | undefined> | undefined
  getVideoAndAudioBlob: () => Promise<Blob | undefined>
}

const defaultRecorderContext: RecorderContext = {
  toggleRecordingStatus: async () => {},
  recordingStatus: 'off',
  error: undefined,
  videoSourceRef: undefined,
  videoWatchRecordedSourceRef: undefined,
  getVideoAndAudioBlob: async () => { return undefined }
}

export const recorderContext = createContext<RecorderContext>(defaultRecorderContext)

export const useRecorderContext = () => useContext(recorderContext)
