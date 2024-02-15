import { Button, Title } from '@/components/ui'
import { useParams } from 'react-router-dom'

const EmailVerification = () => {
  const { verificationToken } = useParams<'verificationToken'>()
  console.log({ verificationToken })

  return (
    <div className='w-1/2 h-dvh bg-neutral-900 border-r border-r-neutral-800 grid place-items-center'>
      <div>
        <header>
          <Title className='font-bold text-5xl uppercase'>Email Verification</Title>
        </header>
        <div></div>
        <Button>Verify</Button>
        <footer>@WebCapture</footer>
      </div>
    </div>
  )
}

export default EmailVerification
