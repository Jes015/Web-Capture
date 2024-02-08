/* import { UtilFfmpeg } from '@/utils/others' */

interface DownloadRecordingParams {
  blob: Blob
  title: string
  format: 'mp4' | 'mp3' | 'webm'
}


export class UtilDownloadRecording {
  /* public async downloadByMpTech (recordingTitle: string, recordingBlob: Blob, toFormat: 'mp4' | 'mp3') {
    const ffmpegInstance = new UtilFfmpeg()
    await ffmpegInstance.loadFfmpeg()
    const blob = await ffmpegInstance.transcode(recordingBlob, toFormat)
    this.download({ blob, title: recordingTitle, format: toFormat })
  } */

  public downloadByWebTechs (recordingTitle: string, recordingBlob: Blob, toFormat: 'webm') {
    this.download({ blob: recordingBlob, title: recordingTitle, format: toFormat })
  }

  private download ({ blob, title, format }: DownloadRecordingParams) {
    const recordingURL = URL.createObjectURL(blob)

    const anchorElement = document.createElement('a')
    anchorElement.href = recordingURL
    anchorElement.download = `${title}.${format}`
    anchorElement.click()

    URL.revokeObjectURL(recordingURL)
  }
}
