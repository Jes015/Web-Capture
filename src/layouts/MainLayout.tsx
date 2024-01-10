import { IconGithub } from '@/assets/Icons'
import { type BaseComponentType } from '@/models'

export const MainLayout: BaseComponentType = ({ children }) => {
  return (
        <div className="flex flex-col [height:100svh] [height:100vh] [font-family:Roboto] bg-neutral-900 text-white [font-weight:500]">
            <div
                className="absolute z-[0] [height:100svh] [height:100vh] [width:100svw] flex flex-col justify-center items-center"
            >
                <div
                    className="flex flex-col justify-center opacity-10"
                >
                    <span
                        className="font-bold text-6xl pt-[0.18rem] select-none"
                    >
                        ScreenCapture
                    </span>
                </div>
                <div
                    className='flex gap-1'
                >
                    <a href="https://github.com/Jes015/ScreenCapture" target="_blank" className='opacity-10 hover:opacity-80 [transition-duration:0.3s]'>
                        <IconGithub className="text-4xl" />
                    </a>
                </div>
            </div>
            <main className="h-full text-sm">
                {children}
            </main>
        </div>
  )
}
