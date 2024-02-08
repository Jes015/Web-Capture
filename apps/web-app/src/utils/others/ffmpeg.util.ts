/* import { FFmpeg } from '@ffmpeg/ffmpeg'
import { toBlobURL } from '@ffmpeg/util'

// This works too slowly. So in the future we could talk about implement this, but right now it would be really slow.

export class UtilFfmpeg {
  private readonly core: FFmpeg

  constructor () {
    this.core = new FFmpeg()
  }

  async loadFfmpeg () {
    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm'
    this.core.on('log', ({ message }) => {
      console.log(message)
    })
    // toBlobURL is used to bypass CORS issue, urls with the same
    // domain can be used directly.
    await this.core.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm')
    })
  }

  async transcode (recordingBlob: Blob, toFormat: 'mp4' | 'mp3') {
    const recordingUint8Array = new Uint8Array(await recordingBlob.arrayBuffer())
    await this.core.writeFile('input.webm', recordingUint8Array)
    let ffmpegQuery = ['']

    if (toFormat === 'mp4') {
      ffmpegQuery = ['-i', 'input.webm', '-c:v', 'libx264', '-crf', '23', '-c:a', 'aac', '-b:a', '192K', '-movflags', '+faststart', 'output.mp4']
    } else if (toFormat === 'mp3') {
      ffmpegQuery = ['-i', 'input.webm', '-vn', '-acodec', 'libmp3lame', '-ab', '192K', 'output.mp3']
    }

    await this.core.exec(ffmpegQuery)
    const recordingData = await this.core.readFile(`output.${toFormat}`)

    const fileType = toFormat === 'mp3' ? 'audio/mp3' : 'video/mp4'

    // @ts-expect-error @ffmpeg/ffmpeg has not typed the property ".buffer" of the FileData type
    const recordingTranscodedBlob = new Blob([recordingData.buffer], { type: fileType })

    console.log(recordingTranscodedBlob)
    return recordingTranscodedBlob
  }
}
 */
