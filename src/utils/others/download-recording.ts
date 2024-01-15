interface DownloadRecordingParams {
  blob: Blob
  title: string
}

export const utilDownloadRecording = ({ blob, title }: DownloadRecordingParams) => {
  const recordingURL = URL.createObjectURL(blob)

  const anchorElement = document.createElement('a')
  anchorElement.href = recordingURL
  anchorElement.download = `${title}.webm`
  anchorElement.click()

  URL.revokeObjectURL(recordingURL)
}
