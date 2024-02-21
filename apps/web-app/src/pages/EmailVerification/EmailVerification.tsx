import { Anchor, Button, P, Title } from '@/components/ui'
import { useGlobalAuth, useRouting } from '@/hooks'
import { DividedLayout } from '@/layouts'
import { StatusCodes } from '@/models'
import { frontRoutes } from '@/routing'
import { toast } from '@/utils/others'
import { isAxiosError } from 'axios'
import { useParams } from 'react-router-dom'

const EmailVerificationPage = () => {
  const { verificationToken } = useParams<'verificationToken'>()
  const { verifyEmail } = useGlobalAuth()
  const { goTo } = useRouting()

  const handleOnClickToVerify = () => {
    if (verificationToken == null) return

    verifyEmail(verificationToken)
      .then(() => {
        toast.message('You\'ve verified your account', 'success')
        goTo(frontRoutes.home)
      })
      .catch((error) => {
        if (isAxiosError(error)) {
          const errorStatusCode = error?.response?.data?.statusCode

          if (errorStatusCode === StatusCodes.NotFound) {
            toast.message('This email and user has not been signed up', 'error')
          } else if (errorStatusCode === StatusCodes.Forbidden) {
            toast.message('The verification link has expired or it is invalid. Try signing up again', 'error')
          } else if (errorStatusCode === StatusCodes.TooManyRequests) {
            toast.message('You\'ve reached the attempt limit. Try again in 1 second.', 'warning')
          }
        }
      })
  }

  return (
    <DividedLayout>
      <header>
        <Title className='font-bold [font-size:clamp(2rem,8vw,3rem)] uppercase'>Email Verification</Title>
      </header>
      <div>
        <P level='primary'>
          Once you click the button, your account will be activated
        </P>
        <Button
          onClick={handleOnClickToVerify}
          size='xl'
          className='mt-1 !rounded-lg'
          color='light'
        >
          Verify account
        </Button>
      </div>
      <footer
        className='mt-2 self-end'
      >
        <P level='secondary' className='text-xs'>Yo did not signed up in the app? <Anchor href="/">Delete account</Anchor></P>
      </footer>
    </DividedLayout>
  )
}

export default EmailVerificationPage
