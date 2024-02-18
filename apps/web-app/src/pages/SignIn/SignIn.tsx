import { Anchor, Button, Input, P, TextField, Title } from '@/components/ui'
import { DividedLayout } from '@/layouts'
import { frontRoutes } from '@/routing'

const SignIn = () => {
  return (
    <DividedLayout>
      <header>
        <Title as='h2' className='font-bold uppercase'>Sign in</Title>
          <P className='text-sm' level='secondary'>
            Don't you have an account? <Anchor href={frontRoutes.signUp}>Sign Up</Anchor>
          </P>
      </header>
      <div className='mt-2'>
        <form className='flex w-full flex-col gap-2' action="">
          <TextField>
            <TextField.Label className='text-sm'>Email</TextField.Label>
            <Input className='w-full h-10 rounded-lg' placeholder='loki@gmail.com' autoFocus />
          </TextField>
          <TextField>
            <TextField.Label className='text-sm'>Password</TextField.Label>
            <Input className='w-full h-10 rounded-lg' placeholder='waa34r' type='password' />
          </TextField>
          <Button size='xl' className='mt-1' color='light'>Sign in</Button>
        </form>
      </div>
      <footer
        className='mt-2 self-end'
      >
        <P level='secondary' className='text-xs'>Lost your password? <Anchor href="/">Recover</Anchor></P>
      </footer>
    </DividedLayout>
  )
}

export default SignIn
