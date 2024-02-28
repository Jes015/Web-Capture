import { StatusCodes } from '@/models'
import { toast } from '@/utils/others'
import axios from 'axios'

export const setUpAxiosConfig = () => {
  axios.interceptors.response.use((config) => { console.log('interceptors'); return config }, async (error) => {
    const errorStatusCode = error?.response?.data?.statusCode
    const errorCode = error?.code

    const isAUnknownStatusCode = !Object.values(StatusCodes).some(statusCode => statusCode === errorStatusCode)
    const wasCanceled = errorCode === 'ERR_CANCELED'

    if (isAUnknownStatusCode && !wasCanceled) {
      console.log(error)
      toast.message('Something went wrong', 'error')
    }

    return Promise.reject(error)
  })
}
