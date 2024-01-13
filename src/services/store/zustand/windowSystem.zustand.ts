import { type RecordWindowData, type WatchRecordedWindowData, type WindowData, type WindowDataArray } from '@/models'
import { type UUID } from 'crypto'
import { create } from 'zustand'

interface WindowSystemState {
  windows: WindowDataArray
  error: string | null
}

interface WindowSystemActions {
  addWindow: (newWindow: WindowData | RecordWindowData | WatchRecordedWindowData) => void
  removeWindow: (windowId: UUID) => void
  setError: (message: string) => void
}

export const useWindowSystemStore = create<WindowSystemState & WindowSystemActions>((set, get) => ({
  windows: [],
  error: null,
  addWindow: (newWindow) => {
    set((state) => ({ windows: [...state.windows, newWindow] }))
  },
  removeWindow: (windowId) => {
    set((state) => ({ windows: state.windows.filter((window) => window.id !== windowId) }))
  },
  setError: (message) => {
    if (get().error != null) return

    set(() => ({ error: message }))
    setTimeout(() => {
      set(() => ({ error: null }))
    }, 3000)
  }
}))
