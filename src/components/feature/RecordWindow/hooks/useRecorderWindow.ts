import { useState } from 'react'

export const useRecorderWindow = () => {
  const [isDisplayingVideo, setIsDisplayingVideo] = useState(false)

  const toggleVideoVisibility = (newSate?: boolean) => {
    setIsDisplayingVideo((prevState) => newSate ?? !prevState)
  }

  return { isDisplayingVideo, toggleVideoVisibility }
}
