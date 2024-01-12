import { CustomMediaRecorder } from '@/utils/others'
import { useEffect, useRef, useState } from 'react'
import { type RecordingStatus } from '../models/recorder.model'

export const useRecorder = () => {
  const [recordingStatus, setRecordingStatus] = useState<RecordingStatus>('off')
  const mediaRecorder = useRef<CustomMediaRecorder>()
  const [error, setError] = useState<string>()
  const videoSourceRef = useRef<HTMLVideoElement>()
  const videoWatchRecordedSourceRef = useRef<HTMLVideoElement>()

  useEffect(() => {
    mediaRecorder.current = new CustomMediaRecorder()

    return () => {
      mediaRecorder.current = undefined
    }
  }, [])

  const toggleRecordingStatus = async (newStatus: RecordingStatus) => {
    if (mediaRecorder.current == null) {
      setError('Something went wrong: toggle recording status')
      return
    }

    if (newStatus === 'on') {
      try {
        const streamObject = await mediaRecorder.current?.startStreaming()
        await mediaRecorder.current.startRecording()

        if (videoSourceRef.current != null) {
          videoSourceRef.current.srcObject = streamObject
        }
      } catch (error) {
        setError('Something went wrong: mediaRecorder startStreaming functions does not work')
      }
    } else if (newStatus === 'off') {
      void mediaRecorder.current.stopStreaming()
      void mediaRecorder.current.stopRecording()

      if (videoSourceRef.current != null) {
        videoSourceRef.current.srcObject = null
      }
    }

    setRecordingStatus(newStatus)
  }

  const getVideoAndAudioBlob = async () => {
    return await mediaRecorder.current?.getVideoAndAudioBlob()
  }


  return { toggleRecordingStatus, recordingStatus, error, videoSourceRef, getVideoAndAudioBlob, videoWatchRecordedSourceRef }
}
