import { IconGithub } from '@/assets/Icons'
import { Title } from '@/components/ui'
import { type BaseComponentType } from '@/models'
import clsx from 'clsx'

export const AppLogo: BaseComponentType = ({ className }) => {
  return (
        <div
            className={
                clsx(
                  'absolute z-[0] [height:100svh] [width:100svw] flex flex-col gap-2 justify-center items-center',
                  className
                )
            }
        >
            <div className='flex flex-col justify-center opacity-10'>
                <Title className='font-bold [font-size:clamp(2rem,15vw,3.75rem)] leading-10 pt-[0.18rem] select-none '>
                    WebCapture
                </Title>
            </div>
            <div className='flex gap-1'>
                <a
                    href='https://github.com/Jes015/ScreenCapture'
                    target='_blank'
                    className='opacity-10 hover:opacity-80 [transition-duration:0.3s]'
                    aria-label='Link to github repository'
                >
                    <IconGithub className='text-4xl' />
                </a>
            </div>
        </div>
  )
}
