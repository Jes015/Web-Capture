import { type RecordWindowData } from '@/models'
import { createContext, useContext } from 'react'

interface RecorderWindowContext {
  isDisplayingVideo: boolean
  toggleVideoVisibility: (newState: boolean) => void
  getWindowData: () => RecordWindowData | undefined
}

const defaultValues: RecorderWindowContext = {
  isDisplayingVideo: false,
  toggleVideoVisibility: () => {},
  getWindowData: () => { return undefined }
}

export const recorderWindowContext = createContext<RecorderWindowContext>(defaultValues)

export const useRecorderWindowContext = () => useContext(recorderWindowContext)
