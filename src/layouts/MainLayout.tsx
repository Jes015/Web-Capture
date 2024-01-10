import { IconGithub } from '@/assets/Icons'
import { Sheet } from '@/components/ui'
import { type BaseComponentType } from '@/models'

export const MainLayout: BaseComponentType = ({ children }) => {
  return (
        <div className="flex flex-col [height:100svh] [height:100vh] [font-family:Roboto] bg-neutral-900 text-white [font-weight:500]">
            <Sheet
                as="header"
                className="border-t-0 [border-inline:none] px-2 py-4 flex justify-between items-center"
            >
                <div
                    className="flex items-center"
                >
                    <span
                        className="font-bold leading-3 pt-[0.18rem]"
                    >
                        ScreenCapture
                    </span>
                </div>
                <div>
                    <a href="https://github.com/Jes015/ScreenCapture" target="_blank">
                        <IconGithub className="text-xl" />
                    </a>
                </div>
            </Sheet>
            <main className="flex-grow text-sm">
                {children}
            </main>
        </div>
  )
}
