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
                  isDisplayingVideo ? 'z-20 relative' : 'hidden', 'h-full w-full'
                ].join(' ')
            }
        >

        </video>
  )
}
