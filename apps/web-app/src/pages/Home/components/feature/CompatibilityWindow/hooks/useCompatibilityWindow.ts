import { useEffect, useState } from 'react'
import { defaultCompatibilityValues, type CompatibilityType } from '../models'

export const useCompatibilityWindow = () => {
  const [showWindow, setShowWindow] = useState(false)
  const [compatibility, setCompatibility] = useState(defaultCompatibilityValues)

  useEffect(() => {
    const newCompatibilityValues: CompatibilityType = {
      'Screen Recording': navigator.mediaDevices?.getDisplayMedia != null,
      'Webcam Recording': navigator.mediaDevices?.getUserMedia != null,
      'Take Screenshot': navigator.mediaDevices?.getDisplayMedia != null && VideoFrame != null
    }
    setCompatibility(newCompatibilityValues)

    const shouldShowWindow = Object.values(newCompatibilityValues).some(value => !value)

    setShowWindow(shouldShowWindow)
  }, [])

  const toggleShowWindowStatus = () => {
    setShowWindow(prev => !prev)
  }

  return { compatibility, showWindow, toggleShowWindowStatus }
}
