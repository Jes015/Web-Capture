import { Anchor, DropdownMenu } from '@/components/ui'
import { useGlobalAuth } from '@/hooks'
import { CWindowType } from '@/models'
import { frontRoutes } from '@/routing'
import { useWindowSystemStore } from '@/services/store/zustand'

export const AddWindowsDropdownMenu = () => {
  const [addWindow] = useWindowSystemStore((state) => [state.addWindow])
  const { user } = useGlobalAuth()

  const handleOnClickToAddScreenRecordingWindow = () => {
    addWindow({ id: crypto.randomUUID(), name: 'Screen recording', type: CWindowType.record, recordingCoreType: 'screen' })
  }

  const handleOnClickToAddWebcamRecordingWindow = () => {
    addWindow({ id: crypto.randomUUID(), name: 'Webcam recording', type: CWindowType.record, recordingCoreType: 'web-cam' })
  }

  return (
        <div
            className='fixed flex flex-row-reverse top-4 right-4 border rounded-xl bg-neutral-800 border-neutral-700 overflow-hidden drop-shadow-md'
        >
            {
                user.roles[0] === 'default'
                  ? <div className='flex items-center gap-1 border-l border-neutral-700 text-xs p-2'>
                        <Anchor href={frontRoutes.signUp}>Sign up</Anchor>
                        <span>or</span>
                        <Anchor href={frontRoutes.signIn}>Sign in</Anchor>
                    </div>
                  : <DropdownMenu
                        triggerClassName='hover:!bg-neutral-700 overflow-hidden !p-2 rounded-none flex gap-1 items-center text-xs border-l border-r-0 border-y-0 p-2 !border-neutral-700 hover:bg-neutral-700 overflow-hidden relative transition-colors'
                        triggerContent={
                            <>
                                <span className='font-bold'>Jes015</span>
                                <img className='rounded-full w-8 aspect-square' src='https://avatar.vercel.sh/jes015' />
                                <img className='absolute right-2 blur-sm rounded-full w-8 aspect-square z-[-20]' src='https://avatar.vercel.sh/jes015' />
                            </>
                        }
                        contentStyles='main-menu'
                    >
                        <DropdownMenu.Item>
                            Sign out
                        </DropdownMenu.Item>
                    </DropdownMenu>
            }
            <DropdownMenu
                id='addWindows'
                triggerClassName='border-none border-neutral-700 hover:!bg-neutral-700 overflow-hidden !p-2 rounded-none'
                triggerContent={
                    <span className='size-6 rounded text-sm'>Windows</span>
                }
                contentStyles='main-menu'
            >
                <DropdownMenu.Item
                    onClick={handleOnClickToAddScreenRecordingWindow}
                >
                    Screen | Tab | Window
                </DropdownMenu.Item>
                <DropdownMenu.Item
                    onClick={handleOnClickToAddWebcamRecordingWindow}
                >
                    Web cam
                </DropdownMenu.Item>
            </DropdownMenu>
        </div>
  )
}
