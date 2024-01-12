import { LoggerService } from '@/services/logger.service'

let defaultValues: DisplayMediaStreamOptions = {
  video: {
    frameRate: {
      ideal: 30
    },
    displaySurface: 'browser'
  },
  audio: {
    noiseSuppression: true,
    sampleRate: 44000,
    echoCancellation: true
  }
}

export class CustomMediaRecorder {
  private mediaStreamInstance: MediaStream | null
  private mediaRecorderInstance: MediaRecorder | null

  constructor (mediaValues?: DisplayMediaStreamOptions) {
    defaultValues = {
      ...defaultValues,
      ...mediaValues
    }

    this.mediaStreamInstance = null
    this.mediaRecorderInstance = null
  }

  async startStreaming () {
    this.mediaStreamInstance = await navigator.mediaDevices.getDisplayMedia(defaultValues)
    LoggerService.message({ trackSettings: this.mediaStreamInstance.getTracks()[0].getSettings() }, 'screen-recorder.util --> startStreaming:32')
    return this.mediaStreamInstance
  }

  async stopStreaming () {
    const tracks = this.mediaStreamInstance?.getTracks()

    tracks?.forEach((track) => {
      track.stop()
    })
  }

  async startRecording () {
    if (this.mediaStreamInstance == null) {
      return
    }

    this.mediaRecorderInstance = new MediaRecorder(this.mediaStreamInstance, { mimeType: 'video/webm;codecs=vp8,opus' })
    this.mediaRecorderInstance.start()
  }

  async pauseRecording () {
    if (this.mediaRecorderInstance == null) {
      return
    }

    this.mediaRecorderInstance.pause()
  }

  async resumeRecording () {
    if (this.mediaRecorderInstance == null) {
      return
    }

    this.mediaRecorderInstance.resume()
  }

  async stopRecording () {
    if (this.mediaRecorderInstance == null) {
      return
    }

    this.mediaRecorderInstance.stop()
  }

  async getVideoAndAudioBlob (): Promise<Blob> {
    return await new Promise((resolve) => {
      this.mediaRecorderInstance?.addEventListener('dataavailable', (event) => {
        const videoAndAudio = event.data
        resolve(videoAndAudio)
      })
    })
  }
}
