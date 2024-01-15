import { type WatchRecordingWindowData } from '@/models'
import { useWindowSystemStore } from '@/services/store/zustand'
import { utilDownloadRecording } from '@/utils/others'
import { useEffect, useRef } from 'react'

export const useWatchRecording = (windowData: WatchRecordingWindowData) => {
  const videoElementRef = useRef<HTMLVideoElement>(null)
  const { setError } = useWindowSystemStore()

  useEffect(() => {
    if (videoElementRef.current == null || windowData.videoAndAudioBlob == null) return
    const videoURL = URL.createObjectURL(windowData.videoAndAudioBlob)

    videoElementRef.current.src = videoURL

    return () => {
      URL.revokeObjectURL(videoURL)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const downloadRecording = () => {
    if (windowData.videoAndAudioBlob === null) {
      setError('No source found')
      return
    }
    utilDownloadRecording({ blob: windowData.videoAndAudioBlob, title: 'hola' })
  }

  return { videoElementRef, downloadRecording }
}
