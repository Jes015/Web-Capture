import { CWindowType } from '@/models'
import { LoggerService } from '@/services/logger.service'
import { useWindowSystemStore } from '@/services/store/zustand'
import { CustomMediaRecorder, type RecordingType } from '@/utils/others'
import { useCallback, useEffect, useRef, useState } from 'react'
import { type RecordingStatus } from '../models/recorder.model'
import { useRecorderWindowContext } from '../services/context'

export const useRecorder = (recordingType: RecordingType) => {
  const [recordingStatus, setRecordingStatus] = useState<RecordingStatus>('off')
  const mediaRecorder = useRef<CustomMediaRecorder>()
  const [error, setError] = useState<string>()
  const videoSourceRef = useRef<HTMLVideoElement>()
  const [addWindow] = useWindowSystemStore((state) => [state.addWindow])
  const { getWindowData } = useRecorderWindowContext()

  useEffect(() => {
    mediaRecorder.current = new CustomMediaRecorder(recordingType)
    return () => {
      void mediaRecorder.current?.stopStreaming()
      void mediaRecorder.current?.stopRecording()
      void mediaRecorder.current?.removeOnStopStreaming(cachedOnStopStreaming)
      mediaRecorder.current = undefined
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const cachedOnStopStreaming = useCallback(
    () => {
      void stopRecording()
      setRecordingStatus('off')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , []
  )

  const toggleRecordingStatus = async (newStatus: RecordingStatus) => {
    if (mediaRecorder.current == null) {
      setError('Something went wrong: toggle recording status')
      return
    }

    try {
      if (newStatus === 'on') {
        await startRecording()
      } else if (newStatus === 'off') {
        await stopRecording()
      }

      setRecordingStatus(newStatus)
    } catch (error) {
      LoggerService.message(error, 'useRecorder - toggleRecordingStatus', 'error')
      setError('Something went wrong: startRecording failed')
    }
  }

  const startRecording = async () => {
    if (mediaRecorder.current == null) {
      setError('Something went wrong: toggle recording status')
      return
    }
    const streamObject = await mediaRecorder.current?.startStreaming()
    await mediaRecorder.current.startRecording()

    // In case that the user stop the recording from the default browser bar provided by the browser, this will work.
    void mediaRecorder.current.onStopStreaming(cachedOnStopStreaming)

    if (videoSourceRef.current != null && streamObject != null) {
      videoSourceRef.current.srcObject = streamObject
    }
  }

  const stopRecording = async () => {
    if (mediaRecorder.current == null) {
      setError('Something went wrong: toggle recording status')
      return
    }

    void mediaRecorder.current?.removeOnStopStreaming(cachedOnStopStreaming)

    void mediaRecorder.current.stopStreaming()
    void mediaRecorder.current.stopRecording()

    const streamBlob = await getVideoAndAudioBlob()

    if (streamBlob == null) return

    // Opens a new window to watch the video recorded
    addWindow({ name: `${getWindowData()?.name}-recorded`, type: CWindowType.watchRecord, videoAndAudioBlob: streamBlob, id: crypto.randomUUID() })

    if (videoSourceRef.current != null) {
      videoSourceRef.current.srcObject = null
    }
  }

  const getVideoAndAudioBlob = async () => {
    const videoBlob = await mediaRecorder.current?.getVideoAndAudioBlob()
    return videoBlob
  }

  return { toggleRecordingStatus, recordingStatus, error, videoSourceRef }
}
