import { Button } from '@/components/ui'
import { useParams } from 'react-router-dom'

const EmailVerification = () => {
  const params = useParams()
  console.log({ params })
  return (
        <div>
            <Button>Verify</Button>
        </div>
  )
}

export default EmailVerification
