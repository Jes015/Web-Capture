import { Anchor, P, Title } from '@/components/ui'
import { DividedLayout } from '@/layouts'
import { frontRoutes } from '@/routing'
import { SignUpForm } from './components'

const SignUpPage = () => {
  return (
    <DividedLayout>
      <header>
        <Title as='h2' className='font-bold uppercase'>Sign up</Title>
        <P className='text-sm' level='secondary'>
          Do you have an account? <Anchor href={frontRoutes.signIn}>Sign In</Anchor>
        </P>
      </header>
      <div className='mt-2'>
        <SignUpForm />
      </div>
    </DividedLayout>
  )
}

export default SignUpPage
