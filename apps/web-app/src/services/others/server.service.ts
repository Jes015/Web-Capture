import { backRoutes } from '@/routing'
import axios from 'axios'

export const checkServerStatusService = async () => {
  return await axios.get(backRoutes.home ?? '/', { signal: AbortSignal.timeout(5000) })
}
