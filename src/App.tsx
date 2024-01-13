import { RecordWindow, WatchRecordedVideoWindow } from '@/components/feature'
import { MainLayout } from '@/layouts'
import { Button } from './components/ui'
import { CWindowType } from './models'
import { useWindowSystemStore } from './services/store/zustand'

function App () {
  const { windows, addWindow, error } = useWindowSystemStore((state) => ({ windows: state.windows, addWindow: state.addWindow, error: state.error }))

  const handleOnClickOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const inputElement = e.currentTarget.elements.namedItem('windowName') as HTMLInputElement
    const inputCheckBoxElement = e.currentTarget.elements.namedItem('windowType') as HTMLInputElement
    const newWindowName = inputElement.value
    const windowType = inputCheckBoxElement.checked ? CWindowType.record : CWindowType.watchRecord
    addWindow({ id: crypto.randomUUID(), name: newWindowName, type: windowType })
  }
  return (
    <MainLayout>
      <div
        className='h-full flex flex-col justify-center items-center'
      >
        <form className='flex flex-col z-50' onSubmit={handleOnClickOnSubmit}>
          This form is only for testing {'<'}3
          <input name='windowName' type="text" className='text-black' />
          <label>
            Toggle type
            <input name='windowType' type="checkbox" className='text-black' />
          </label>
          <Button
            className='z-50'
          >
            add window
          </Button>
        </form>
        <div className='text-red-500'>
          error : {error}

        </div>
        {
          windows.map((windowData) => {
            if (windowData.type === CWindowType.record) return <RecordWindow windowData={windowData} key={windowData.id} />
            else if (windowData.type === CWindowType.watchRecord) return <WatchRecordedVideoWindow windowData={windowData} key={windowData.id} />
            return null
          })
        }
      </div>
    </MainLayout>
  )
}

export default App
