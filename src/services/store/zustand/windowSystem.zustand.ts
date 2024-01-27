import { type WindowDataArray, type WindowTypes } from '@/models'
import { toast } from '@/utils/others'
import { type UUID } from 'crypto'
import { create } from 'zustand'

interface WindowSystemState {
  windows: WindowDataArray
}

interface WindowSystemActions {
  addWindow: (newWindow: WindowTypes) => void
  removeWindow: (windowId: UUID) => void
  setError: (message: string) => void
  superposeAWindow: (windowId: UUID) => void
}

export const useWindowSystemStore = create<WindowSystemState & WindowSystemActions>((set, get) => ({
  windows: [],
  addWindow: (newWindow) => {
    const isNotAValidID = get().windows.some((window) => newWindow.id === window.id)

    if (isNotAValidID) {
      get().setError('Window id is already taken')
      return
    }

    newWindow.zIndex = 0

    set((state) => ({ windows: [...state.windows, newWindow] }))
  },
  removeWindow: (windowId) => {
    const isAValidWindow = get().windows.some((window) => window.id === windowId)

    if (isAValidWindow) {
      set((state) => ({ windows: state.windows.filter((window) => window.id !== windowId) }))
    } else {
      get().setError('This windows is not inside the Window System')
    }
  },
  setError: (message) => {
    toast.message(message, 'error')
  },
  superposeAWindow: (windowId) => {
    const windowIndex = get().windows.findIndex(window => window.id === windowId)
    const windowUpdated = structuredClone(get().windows[windowIndex])

    if (windowUpdated == null) return

    let higherZIndex = 0

    get().windows.forEach((window) => {
      if (window.zIndex == null) return
      if (window.zIndex > higherZIndex) {
        higherZIndex = window.zIndex
      }
    })

    higherZIndex = higherZIndex + 1

    windowUpdated.zIndex = higherZIndex
    const newWindowsArray = get().windows.with(windowIndex, windowUpdated)
    set(() => ({ windows: newWindowsArray }))
  }
}))
