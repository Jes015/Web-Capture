import { Anchor, Button, Input, P, TextField, Title } from '@/components/ui'
import { DividedLayout } from '@/layouts'
import { frontRoutes } from '@/routing'

const SignIn = () => {
  return (
    <DividedLayout>
      <header>
        <Title className='font-bold uppercase'>Sign in</Title>
          <P className='text-sm' level='secondary'>
            Don't you have an account? <Anchor href={frontRoutes.signUp}>Sign Up</Anchor>
          </P>
      </header>
      <div className='mt-2'>
        <form className='flex w-full flex-col' action="">
          <TextField>
            <TextField.Label >Email</TextField.Label>
            <Input className='w-full' placeholder='email@gmail.com' autoFocus />
          </TextField>
          <TextField>
            <TextField.Label>Password</TextField.Label>
            <Input className='w-full' placeholder='Password' type='password' />
          </TextField>
          <Button className='h-10 w-full mt-4' color='light'>Sign in</Button>
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
