import { backRoutes } from '@/routing'
import axios from 'axios'

export const checkServerStatusService = async () => {
  void axios.get(backRoutes.home ?? '/')
}
