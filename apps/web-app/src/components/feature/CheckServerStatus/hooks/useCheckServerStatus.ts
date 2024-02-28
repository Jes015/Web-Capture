import { checkServerStatusService } from '@/services/others'
import { toast } from '@/utils/others'
import { useEffect, useState } from 'react'

export const useCheckServerStatus = () => {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    let abortRequests = false
    const checkServer = async () => {
      await checkServerStatusService()
        .then(() => {
          setIsOnline(true)
          toast.message('The servers is online', 'success')
          abortRequests = true
        })
        .catch((error) => {
          if (abortRequests) return
          const errorStatusCode = error?.response?.status

          if (errorStatusCode === 404) {
            setIsOnline(true)
            return
          }

          setIsOnline(false)
          void checkServer()
        })
    }

    void checkServer()

    return () => {
      abortRequests = true
    }
  }, [])

  const toggleOnlineStatus = () => {
    setIsOnline(prevState => !prevState)
  }


  return { isOnline, toggleOnlineStatus }
}
