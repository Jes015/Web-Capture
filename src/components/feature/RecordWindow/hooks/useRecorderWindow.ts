import { type RecordWindowData } from '@/models'
import { useState } from 'react'

export const useRecorderWindow = (windowData: RecordWindowData) => {
  const [isDisplayingVideo, setIsDisplayingVideo] = useState(false)

  const toggleVideoVisibility = (newSate?: boolean) => {
    setIsDisplayingVideo((prevState) => newSate ?? !prevState)
  }

  const getWindowData = () => {
    return structuredClone(windowData)
  }

  return { isDisplayingVideo, toggleVideoVisibility, getWindowData }
}
