import { CWindowType } from '@/models'
import { useWindowSystemStore } from '@/services/store/zustand'
import { CustomMediaRecorder } from '@/utils/others'
import { useEffect, useRef, useState } from 'react'
import { type RecordingStatus } from '../models/recorder.model'
import { useRecorderWindowContext } from '../services/context'

export const useRecorder = () => {
  const [recordingStatus, setRecordingStatus] = useState<RecordingStatus>('off')
  const mediaRecorder = useRef<CustomMediaRecorder>()
  const [error, setError] = useState<string>()
  const videoSourceRef = useRef<HTMLVideoElement>()
  const [addWindow] = useWindowSystemStore((state) => [state.addWindow])
  const { getWindowData } = useRecorderWindowContext()

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

      const streamBlob = await getVideoAndAudioBlob()
      // Opens a new window to watch the video recorded
      addWindow({ name: `${getWindowData()?.name}-recorded`, type: CWindowType.watchRecord, videoAndAudioBlob: streamBlob, id: crypto.randomUUID() })

      if (videoSourceRef.current != null) {
        videoSourceRef.current.srcObject = null
      }
    }

    setRecordingStatus(newStatus)
  }

  const getVideoAndAudioBlob = async () => {
    const videoBlob = await mediaRecorder.current?.getVideoAndAudioBlob()
    return videoBlob
  }

  return { toggleRecordingStatus, recordingStatus, error, videoSourceRef }
}
