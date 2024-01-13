import { type WindowData, type WindowDataArray } from '@/models'
import { create } from 'zustand'

interface WindowSystemState {
  windows: WindowDataArray
  error: string | null
}

interface WindowSystemActions {
  addWindow: (newWindow: WindowData) => void
  removeWindow: (windowName: string) => void
  setError: (message: string) => void
}

export const useWindowSystemStore = create<WindowSystemState & WindowSystemActions>((set, get) => ({
  windows: [],
  error: null,
  addWindow: (newWindow) => {
    const isThereAlreadyAWindowNamedEquals = get().windows.some((window) => window.name.toLocaleLowerCase() === newWindow.name.toLocaleLowerCase())

    if (isThereAlreadyAWindowNamedEquals) {
      get().setError('The window name is already taken')
      return
    }

    set((state) => ({ windows: [...state.windows, newWindow] }))
  },
  removeWindow: (windowName) => {
    set((state) => ({ windows: state.windows.filter((window) => window.name !== windowName) }))
  },
  setError: (message) => {
    if (get().error != null) return

    set(() => ({ error: message }))
    setTimeout(() => {
      set(() => ({ error: null }))
    }, 3000)
  }
}))
