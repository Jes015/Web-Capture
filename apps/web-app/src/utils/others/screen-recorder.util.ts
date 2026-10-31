import { LoggerService } from '@/services/others'

export type RecordingType = 'screen' | 'web-cam'

const DEFAULT_SCREEN_CONSTRAINTS: DisplayMediaStreamOptions = {
  video: {
    frameRate: {
      ideal: 60
    },
    displaySurface: 'browser'
  },
  audio: {
    sampleRate: 48000,
    channelCount: 2,
    echoCancellation: false,
    noiseSuppression: false,
    autoGainControl: false
  },
  // @ts-expect-error systemAudio and monitorTypeSurfaces are experimental properties
  systemAudio: 'include',
  monitorTypeSurfaces: 'include'
}

const DEFAULT_WEBCAM_CONSTRAINTS: MediaStreamConstraints = {
  video: {
    width: { ideal: 1920 },
    height: { ideal: 1080 },
    frameRate: { ideal: 30 }
  },
  audio: {
    sampleRate: 48000,
    channelCount: 2,
    echoCancellation: true,
    noiseSuppression: false,
    autoGainControl: false
  }
}

export class CustomMediaRecorder {
  private mediaStreamInstance: MediaStream | null = null
  private mediaRecorderInstance: MediaRecorder | null = null
  private readonly recordingType: RecordingType
  private readonly streamOptions: DisplayMediaStreamOptions | MediaStreamConstraints
  private recordedChunks: Blob[] = []
  private selectedMimeType: string = ''
  private stoppedPromise: Promise<void> = Promise.resolve()

  constructor (recordingType: RecordingType, mediaValues?: DisplayMediaStreamOptions | MediaStreamConstraints) {
    this.recordingType = recordingType

    if (recordingType === 'screen') {
      this.streamOptions = {
        ...DEFAULT_SCREEN_CONSTRAINTS,
        ...(mediaValues as DisplayMediaStreamOptions)
      }
    } else {
      this.streamOptions = {
        ...DEFAULT_WEBCAM_CONSTRAINTS,
        ...(mediaValues as MediaStreamConstraints)
      }
    }
  }

  async startStreaming () {
    if (this.recordingType === 'screen') {
      this.mediaStreamInstance = await navigator.mediaDevices.getDisplayMedia(
        this.streamOptions as DisplayMediaStreamOptions
      )
    } else {
      this.mediaStreamInstance = await navigator.mediaDevices.getUserMedia(
        this.streamOptions as MediaStreamConstraints
      )
    }

    const videoTrack = this.mediaStreamInstance.getVideoTracks()[0]
    if (videoTrack != null) {
      LoggerService.message(
        { trackSettings: videoTrack.getSettings() },
        'screen-recorder.util --> startStreaming'
      )
    }

    return this.mediaStreamInstance
  }

  async stopStreaming () {
    const tracks = this.mediaStreamInstance?.getTracks()
    tracks?.forEach((track) => {
      track.stop()
    })
  }

  private getPreferredMimeType (): string {
    const candidateMimeTypes = [
      'video/webm;codecs=vp8,opus',
      'video/webm;codecs=vp9,opus',
      'video/webm',
      'video/mp4'
    ]

    if (typeof MediaRecorder !== 'undefined') {
      for (const mimeType of candidateMimeTypes) {
        if (MediaRecorder.isTypeSupported(mimeType)) {
          return mimeType
        }
      }
    }

    return ''
  }

  async startRecording () {
    if (this.mediaStreamInstance == null) {
      return
    }

    this.recordedChunks = []
    this.selectedMimeType = this.getPreferredMimeType()

    const options: MediaRecorderOptions = {
      mimeType: this.selectedMimeType !== '' ? this.selectedMimeType : undefined,
      videoBitsPerSecond: 8_000_000,
      audioBitsPerSecond: 256_000
    }

    try {
      this.mediaRecorderInstance = new MediaRecorder(this.mediaStreamInstance, options)
    } catch (error) {
      LoggerService.message(error, 'CustomMediaRecorder -> startRecording fallback', 'error')
      this.mediaRecorderInstance = new MediaRecorder(this.mediaStreamInstance)
    }

    const recorder = this.mediaRecorderInstance

    this.stoppedPromise = new Promise<void>((resolve) => {
      recorder.addEventListener('stop', () => { resolve() }, { once: true })
    })

    recorder.addEventListener('dataavailable', (event: BlobEvent) => {
      if (event.data.size > 0) {
        this.recordedChunks.push(event.data)
      }
    })

    // No timeslice: generates an unbroken, continuous WebM container that can be seeked natively!
    recorder.start()
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
    if (this.mediaRecorderInstance.state !== 'inactive') {
      this.mediaRecorderInstance.stop()
    }
  }

  async getVideoAndAudioBlob (): Promise<Blob> {
    await this.stoppedPromise

    const type = this.selectedMimeType !== '' ? this.selectedMimeType : 'video/webm'
    return new Blob(this.recordedChunks, { type })
  }

  async onStopStreaming (callback: () => void) {
    this.mediaStreamInstance?.getVideoTracks()[0]?.addEventListener('ended', callback)
  }

  async removeOnStopStreaming (callback: () => void) {
    this.mediaStreamInstance?.getVideoTracks()[0]?.removeEventListener('ended', callback)
  }
}
