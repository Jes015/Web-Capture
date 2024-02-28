import { IconCloseCircle } from '@/assets/Icons'
import { Table } from '@/components/ui'
import { type BaseComponentType } from '@/models'
import { useCheckServerStatus } from './hooks'

export const CheckServerStatus: BaseComponentType = () => {
  const { isOnline, toggleOnlineStatus } = useCheckServerStatus()

  const handleOnClickToClose = () => {
    toggleOnlineStatus()
  }

  return (
    !isOnline && (
      <div
        onClick={handleOnClickToClose}
        className='select-none z-[1000000000000] grid place-items-center fixed top-0 left-0 w-full [height:100dvh] [backdrop-filter:blur(4px)] bg-[#26262685]'
      >
        <div className='flex flex-col items-center justify-center gap-2'>
          <header className='flex flex-col gap-1 items-center max-w-96'>
            <div
              className='bg-emerald-600 p-1 rounded-sm text-xs  animate-pulse'
            >
              <p>The server is being set up. Please wait a moment.</p>
            </div>
            <h1
              className='text-3xl text-balance font-bold text-center leading-8'
            >
              The server is offline
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
                <Table.Row>
                  <Table.Cell as='td'>Convert to mp3 and mp4</Table.Cell>
                  <Table.Cell as='td' className='flex justify-center'> <IconCloseCircle className='text-red-500 text-xl' /></Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>

          <footer className='flex flex-col items-center'>
            <p className='flex justify-center text-center max-w-96 items-center text-xs font-bold text-pretty'>
              This happens when the app does not have active users.
            </p>
          </footer>
        </div>
      </div>
    )
  )
}
