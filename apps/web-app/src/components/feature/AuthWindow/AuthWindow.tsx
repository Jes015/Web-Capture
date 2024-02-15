import { IconPadlock } from '@/assets/Icons'
import { Button, Input, TextField, Window } from '@/components/ui'
import { type WindowData } from '@/models'

interface AuthWindowProps {
  windowData: WindowData
}

export const AuthWindow: React.FC<AuthWindowProps> = ({ windowData }) => {
  return (
    <Window
      rndconfig={{
        minWidth: 210,
        minHeight: 123,
        maxWidth: 300,
        lockAspectRatio: false,
        default: {
          height: 123,
          width: 210,
          x: 0,
          y: 0
        }
      }}
      {...{ windowData }}
    >
      <Window.Header
        icon={<IconPadlock className='text-white text-base' />}
        readonlyTitle
        rightNode={
          <div className='flex flex-shrink-0 gap-1 w-full justify-end text-xs'>
            <button className='text-blue-400 underline'>
              Sign up
            </button>
          </div>
        }
        {...{ windowData }}
      />
      <Window.Content>
        <div className="relative flex flex-col h-full w-full gap-1">
          <TextField className='w-full flex flex-col !gap-0 !items-start'>
            <TextField.Label className='text-xs font-bold'>Email</TextField.Label>
            <Input className='w-full' placeholder='test@gmail.com' />
          </TextField>
          <TextField className='flex flex-col !gap-0 !items-start'>
            <TextField.Label className='text-xs font-bold'>Password</TextField.Label>
            <Input className='w-full' placeholder='Password' type='password' />
          </TextField>
          <div className='flex gap-1 w-full justify-end text-xs'>
            <span>
              Forgot your password?
            </span>
            <button className='text-blue-400 underline'>
              Reset
            </button>
          </div>
          <Button
            className='bg-neutral-900'
          >
            Sign in
            </Button>
        </div>
      </Window.Content>
    </Window>
  )
}

export default AuthWindow
