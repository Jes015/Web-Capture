import { type MutableRefObject } from 'react'
import { useRecorderContext, useRecorderWindowContext } from '../services/context'

export const RecordVideo = () => {
  const { videoSourceRef } = useRecorderContext()
  const { isDisplayingVideo } = useRecorderWindowContext()

  return (
        <video
            autoPlay
            muted
            ref={videoSourceRef as MutableRefObject<HTMLVideoElement | null>}
            className={
                [
                  isDisplayingVideo ? 'absolute w-full h-full z-0 [top:-12px] left-0' : 'hidden'
                ].join(' ')
            }
        >

        </video>
  )
}
