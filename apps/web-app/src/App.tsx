import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'sonner'
import { Routing } from './routing'

function App () {
  return (
    <>
      <Routing />
      <Toaster
        duration={10000}
        position='top-center'
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: 'flex w-full select-none backdrop-blur-sm items-center gap-1 text-sm font-bold p-4 rounded-lg bg-neutral-800 border border-neutral-700 hover:!bg-neutral-700 hover:border-neutral-600',
            error: '!bg-[#ff4b4b9e] hover:!bg-[#ff4b4b9e]',
            success: 'text-green-400',
            warning: 'text-yellow-400',
            info: 'bg-blue-400'
          }
        }}
      />
      <Analytics />
    </>
  )
}

export default App
