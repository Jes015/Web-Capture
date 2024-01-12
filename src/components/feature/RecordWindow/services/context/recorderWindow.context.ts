import { createContext, useContext } from 'react'

interface RecorderWindowContext {
  isDisplayingVideo: boolean
  toggleVideoVisibility: (newState: boolean) => void
}

const defaultValues: RecorderWindowContext = {
  isDisplayingVideo: false,
  toggleVideoVisibility: () => {}
}

export const recorderWindowContext = createContext<RecorderWindowContext>(defaultValues)

export const useRecorderWindowContext = () => useContext(recorderWindowContext)
