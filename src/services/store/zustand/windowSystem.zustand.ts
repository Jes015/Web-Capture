import { type RecordWindowData, type WatchRecordingWindowData, type WindowData, type WindowDataArray } from '@/models'
import { toast } from '@/utils/others'
import { type UUID } from 'crypto'
import { create } from 'zustand'

interface WindowSystemState {
  windows: WindowDataArray
}

interface WindowSystemActions {
  addWindow: (newWindow: WindowData | RecordWindowData | WatchRecordingWindowData) => void
  removeWindow: (windowId: UUID) => void
  setError: (message: string) => void
}

export const useWindowSystemStore = create<WindowSystemState & WindowSystemActions>((set, get) => ({
  windows: [],
  addWindow: (newWindow) => {
    const isNotAValidID = get().windows.some((window) => newWindow.id === window.id)

    if (isNotAValidID) {
      get().setError('Window id is already taken')
      return
    }

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
  }
}))
