import { checkServerStatusService } from '@/services/others'
import { toast } from '@/utils/others'
import { useEffect } from 'react'

export const useCheckServerStatus = () => {
  useEffect(() => {
    toast.async(
      'The server is online',
      'The server is setting up',
      'The server is offline, but don\'t worry, normal actions like recording does not need the server <3. The server is only used for auth and mp4/mp3 processing.',
      checkServerStatusService
    )
  }, [])
}
