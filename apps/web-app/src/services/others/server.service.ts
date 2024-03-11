import { type NotFoundApi } from '@/models'
import { backRoutes } from '@/routing'
import axios, { type AxiosError } from 'axios'

export const checkServerStatusService = async () => {
  return await new Promise((resolve, reject) => {
    axios.get(backRoutes.home ?? '/').then(() => {
      resolve('OK')
    }).catch((error: AxiosError<NotFoundApi>) => {
      const statusCode = error.response?.data.statusCode

      if (statusCode === 404) {
        resolve('OK')
        return
      }

      reject(new Error('Something went wrong'))
    })
  })
}
