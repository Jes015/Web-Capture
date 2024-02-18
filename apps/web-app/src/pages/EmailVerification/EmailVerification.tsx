import { Anchor, Button, P, Title } from '@/components/ui'
import { DividedLayout } from '@/layouts'
import { useParams } from 'react-router-dom'

const EmailVerification = () => {
  const { verificationToken } = useParams<'verificationToken'>()
  console.log({ verificationToken })

  return (
    <DividedLayout>
      <header>
        <Title className='font-bold [font-size:clamp(2rem,8vw,3rem)] uppercase'>Email Verification</Title>
      </header>
      <div>
        <P level='primary'>
          Once you click the button, your account will be activated
        </P>
        <Button size='xl' className='mt-1' color='light'>Verify account</Button>
      </div>
      <footer
        className='mt-2 self-end'
      >
        <P level='secondary' className='text-xs'>Yo did not signed up in the app? <Anchor href="/">Delete account</Anchor></P>
      </footer>
    </DividedLayout>
  )
}

export default EmailVerification
