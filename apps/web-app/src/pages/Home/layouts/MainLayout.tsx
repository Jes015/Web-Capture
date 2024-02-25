import { AppLogo } from '@/components/feature'
import { type BaseComponentType } from '@/models'
import { AddWindowsDropdownMenu, CompatibilityWindow } from '@/pages/Home/components/feature'

export const MainLayout: BaseComponentType = ({ children }) => {
  return (
    <div className='flex flex-col [height:100svh] [font-family:Roboto] [font-weight:500]'>
      <CompatibilityWindow />
      <AppLogo />
      <AddWindowsDropdownMenu />
      <main className='h-full text-sm'>{children}</main>
    </div>
  )
}
