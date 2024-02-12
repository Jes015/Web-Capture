import { IconCheckCircle, IconCloseCircle } from '@/assets/Icons'
import { showDriver } from '@/utils/others'
import { useCompatibilityWindow } from './hooks'


export const CompatibilityWindow = () => {
  const { compatibility, showWindow, toggleShowWindowStatus } = useCompatibilityWindow()

  if (!showWindow) return

  const handleOnClickToClose = () => {
    toggleShowWindowStatus()
    showDriver()
  }

  return (
        <div
            onClick={handleOnClickToClose}
            className='select-none grid place-items-center fixed top-0 left-0 w-full z-[500] [height:100dvh] [backdrop-filter:blur(4px)] bg-[#26262685]'
        >
            <div className='flex flex-col items-center justify-center gap-2'>
                <header className='flex flex-col gap-1 items-center max-w-96'>
                    <div
                        className='bg-red-600 p-1 rounded-sm text-xs'
                    >
                        <p>Currently, there is not support for <b>mobile devices</b></p>
                    </div>
                    <h1
                        className='text-3xl text-balance font-bold text-center leading-8'
                    >
                        Some functions are not available in your device
                    </h1>
                </header>

                <div className='flex flex-col items-center'>
                    <table className='border border-neutral-700 border-b-0'>
                        <thead>
                            <tr>
                                <th className='p-1 border-b border-b-neutral-700' scope="col">Functionality</th>
                                <th className='p-1 border-b border-b-neutral-700' scope="col">Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.entries(compatibility).map(([key, value]) => (
                                    <tr className='border-b border-b-neutral-700' key={key}>
                                        <td className='p-1 text-sm'>{key}</td>
                                        <td className='p-1 flex justify-center'>{value ? <IconCheckCircle className='text-green-400 text-base' /> : <IconCloseCircle className='text-red-500 text-xl' />}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <footer className='flex flex-col items-center'>
                    <p className='flex justify-center text-center items-center text-xs font-bold text-pretty'>
                        Use a based chromium browser like brave for better compatibility
                    </p>
                </footer>
            </div>
        </div>
  )
}
