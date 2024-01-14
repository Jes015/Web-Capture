import { RecordingWindow, WatchRecordingWindow } from '@/components/feature'
import { MainLayout } from '@/layouts'
import { showDriver } from '@/utils/others'
import { useEffect } from 'react'
import { CWindowType, type RecordWindowData, type WatchRecordingWindowData } from './models'
import { useWindowSystemStore } from './services/store/zustand'

function App () {
  const { windows } = useWindowSystemStore((state) => ({ windows: state.windows, addWindow: state.addWindow }))

  useEffect(() => {
    showDriver()
  }, [])

  return (
    <MainLayout>
      <div
        className='h-full flex flex-col justify-center items-center'
      >
        {
          windows.map((windowData) => {
            if (windowData.type === CWindowType.record) return <RecordingWindow windowData={windowData as RecordWindowData} key={windowData.id} />
            else if (windowData.type === CWindowType.watchRecord) return <WatchRecordingWindow windowData={windowData as WatchRecordingWindowData} key={windowData.id} />
            return null
          })
        }
      </div>
    </MainLayout>
  )
}

export default App
