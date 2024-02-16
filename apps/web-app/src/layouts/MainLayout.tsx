import { AddWindowsDropdownMenu, AppLogo, CompatibilityWindow } from '@/components/feature'
import { type BaseComponentType } from '@/models'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'sonner'

export const MainLayout: BaseComponentType = ({ children }) => {
  return (
    <div className='flex flex-col [height:100svh] [font-family:Roboto] [font-weight:500]'>
      <CompatibilityWindow />
      <AppLogo/>
      <AddWindowsDropdownMenu />
      <main className='h-full text-sm'>{children}</main>
      <Toaster richColors />
      <Analytics />
    </div>
  )
}
