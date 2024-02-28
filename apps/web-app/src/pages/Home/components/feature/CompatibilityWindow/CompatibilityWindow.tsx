import { IconCheckCircle, IconCloseCircle } from '@/assets/Icons'
import { Table } from '@/components/ui'
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
                    <Table>
                        <Table.Head>
                            <Table.Row>
                                <Table.Cell as='th'>Functionality</Table.Cell>
                                <Table.Cell as='th'>Available</Table.Cell>
                            </Table.Row>
                        </Table.Head>
                        <Table.Body>
                            {
                                Object.entries(compatibility).map(([key, value]) => (
                                    <Table.Row key={key}>
                                        <Table.Cell as='td'>{key}</Table.Cell>
                                        <Table.Cell as='td' className='flex justify-center'>
                                            {value ? <IconCheckCircle className='text-green-400 text-base' /> : <IconCloseCircle className='text-red-500 text-xl' />}
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            }
                        </Table.Body>
                    </Table>
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
