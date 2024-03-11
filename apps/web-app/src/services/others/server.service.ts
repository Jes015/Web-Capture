import { backRoutes } from '@/routing'
import axios from 'axios'

export const checkServerStatusService = async () => {
  await axios.get(backRoutes.home ?? '/')
}
