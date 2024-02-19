import { LoggerService } from '@/services/others'

let defaultValues: DisplayMediaStreamOptions = {
  video: {
    frameRate: {
      ideal: 60
    },
    displaySurface: 'browser'
  },
  audio: {
    sampleRate: 44000
  },
  // @ts-expect-error systemAudio and monitorTypeSurfaces are an experimental property
  systemAudio: 'include',
  monitorTypeSurfaces: 'include'
}

export type RecordingType = 'screen' | 'web-cam'

export class CustomMediaRecorder {
  private mediaStreamInstance: MediaStream | null
  private mediaRecorderInstance: MediaRecorder | null
  private readonly recordingType: RecordingType

  constructor (recordingType: RecordingType, mediaValues?: DisplayMediaStreamOptions) {
    defaultValues = {
      ...defaultValues,
      ...mediaValues
    }

    this.recordingType = recordingType
    this.mediaStreamInstance = null
    this.mediaRecorderInstance = null
  }

  async startStreaming () {
    const recordingKey = this.recordingType === 'screen' ? 'getDisplayMedia' : 'getUserMedia'
    this.mediaStreamInstance = await navigator.mediaDevices[recordingKey](defaultValues)
    this.mediaRecorderInstance?.addEventListener('dataavailable', () => { console.log('dataavailable') })
    this.mediaRecorderInstance?.addEventListener('stop', () => { console.log('stop') })
    this.mediaRecorderInstance?.addEventListener('error', () => { console.log('error') })
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

  async onStopStreaming (callback: () => void) {
    this.mediaStreamInstance?.getTracks()[0].addEventListener('ended', callback)
  }

  async removeOnStopStreaming (callback: () => void) {
    this.mediaStreamInstance?.getTracks()[0].removeEventListener('ended', callback)
  }
}
