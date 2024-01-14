import { toast as defaultToast } from 'sonner'

type ToastTypes = 'message' | 'success' | 'info' | 'warning' | 'error'

export const toast = {
  message: (message: string, type: ToastTypes) => {
    defaultToast?.[type](message)
  }
}
