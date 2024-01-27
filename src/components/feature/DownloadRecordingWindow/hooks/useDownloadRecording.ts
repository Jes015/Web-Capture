import { type DownloadRecordingWindowData } from '@/models'
import { useWindowSystemStore } from '@/services/store/zustand'
import { UtilDownloadRecording } from '@/utils/others'
import { useState } from 'react'

interface DownloadRecordingParams {
  windowData: DownloadRecordingWindowData
}
export const useDownloadRecording = ({ windowData: { videoAndAudioBlob } }: DownloadRecordingParams) => {
  const [setError] = useWindowSystemStore(state => [state.setError])
  const [loading, setLoading] = useState(false)

  const downloadRecording = async (recordingTitle: string, format: 'mp4' | 'mp3' | 'webm') => {
    if (videoAndAudioBlob == null) return

    setLoading(true)

    const utilDownloadRecording = new UtilDownloadRecording()

    if (format === 'webm') {
      utilDownloadRecording.downloadByWebTechs(recordingTitle, videoAndAudioBlob, format)
    } else if (format === 'mp3' || format === 'mp4') {
      /* await utilDownloadRecording.downloadByMpTech(recordingTitle, videoAndAudioBlob, format) */
      setError('We will add support for mp4 and mp3 soon')
    }

    setLoading(false)
  }
  return { loading, downloadRecording }
}
