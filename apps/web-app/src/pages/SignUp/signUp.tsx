import { Anchor, Button, Input, P, TextField, Title } from '@/components/ui'
import { DividedLayout } from '@/layouts'
import { frontRoutes } from '@/routing'

const SignUp = () => {
  return (
    <DividedLayout>
      <header>
        <Title as='h2' className='font-bold uppercase'>Sign up</Title>
          <P className='text-sm' level='secondary'>
            Do you have an account? <Anchor href={frontRoutes.signIn}>Sign In</Anchor>
          </P>
      </header>
      <div className='mt-2'>
        <form className='flex w-full flex-col gap-2' action="">
        <TextField>
            <TextField.Label className='text-sm'>Email</TextField.Label>
            <Input className='w-full h-10 rounded-lg' placeholder='email@gmail.com' autoFocus />
          </TextField>
          <TextField>
            <TextField.Label className='text-sm'>Username</TextField.Label>
            <Input className='w-full h-10 rounded-lg' placeholder='Adan Ben' />
          </TextField>
          <TextField>
            <TextField.Label className='text-sm'>Password</TextField.Label>
            <Input className='w-full h-10 rounded-lg' placeholder='Password' type='password' />
          </TextField>
          <Button size='xl' className='mt-1' color='light'>Sign up</Button>
        </form>
      </div>
    </DividedLayout>
  )
}

export default SignUp
