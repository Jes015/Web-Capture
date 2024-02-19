import { AddWindowsDropdownMenu, AppLogo, CompatibilityWindow } from '@/components/feature'
import { type BaseComponentType } from '@/models'

export const MainLayout: BaseComponentType = ({ children }) => {
  return (
    <div className='flex flex-col [height:100svh] [font-family:Roboto] [font-weight:500]'>
      <CompatibilityWindow />
      <AppLogo/>
      <AddWindowsDropdownMenu />
      <main className='h-full text-sm'>{children}</main>
    </div>
  )
}
