import { Anchor, Button, Input, P, TextField, Title } from '@/components/ui'
import { DividedLayout } from '@/layouts'
import { frontRoutes } from '@/routing'

const SignUp = () => {
  return (
    <DividedLayout>
      <header>
        <Title className='font-bold uppercase'>Sign up</Title>
          <P className='text-sm' level='secondary'>
            Do you have an account? <Anchor href={frontRoutes.signIn}>Sign In</Anchor>
          </P>
      </header>
      <div className='mt-2'>
        <form className='flex w-full flex-col' action="">
        <TextField>
            <TextField.Label >Email</TextField.Label>
            <Input className='w-full' placeholder='email@gmail.com' autoFocus />
          </TextField>
          <TextField>
            <TextField.Label >Username</TextField.Label>
            <Input className='w-full' placeholder='Adan Ben' />
          </TextField>
          <TextField>
            <TextField.Label>Password</TextField.Label>
            <Input className='w-full' placeholder='Password' type='password' />
          </TextField>
          <Button className='h-10 w-full mt-4' color='light'>Sign up</Button>
        </form>
      </div>
    </DividedLayout>
  )
}

export default SignUp
