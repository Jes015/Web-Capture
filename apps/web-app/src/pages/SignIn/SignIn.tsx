import { Anchor, P, Title } from '@/components/ui'
import { DividedLayout } from '@/layouts'
import { frontRoutes } from '@/routing'
import { SignInForm } from './components'

const SignInPage = () => {
  return (
    <DividedLayout>
      <header>
        <Title as='h2' className='font-bold uppercase'>Sign in</Title>
        <P className='text-sm' level='secondary'>
          Don't you have an account? <Anchor href={frontRoutes.signUp}>Sign Up</Anchor>
        </P>
      </header>
      <div className='mt-2'>
        <SignInForm />
      </div>
      <footer
        className='mt-2 self-end'
      >
        <P level='secondary' className='text-xs'>Lost your password? <Anchor href="/">Recover</Anchor></P>
      </footer>
    </DividedLayout>
  )
}

export default SignInPage
