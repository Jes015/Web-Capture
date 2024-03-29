import { CWindowType } from '@/models'
import { MainLayout } from '@/pages/Home/layouts'
import { useWindowSystemStore } from '@/services/store/zustand'
import { Suspense, lazy } from 'react'

const RecordingWindow = lazy(async () => import('@/pages/Home/components/feature/RecordingWindow/RecordingWindow'))
const WatchRecordingWindow = lazy(async () => import('@/pages/Home/components/feature/WatchRecordingWindow/WatchRecordingWindow'))
const DownloadRecordingWindow = lazy(async () => import('@/pages/Home/components/feature/DownloadRecordingWindow/DownloadRecordingWindow'))

const windowComponents = {
  [CWindowType.record]: RecordingWindow,
  [CWindowType.watchRecord]: WatchRecordingWindow,
  [CWindowType.downloadRecord]: DownloadRecordingWindow
} as const

const HomePage = () => {
  const { windows } = useWindowSystemStore((state) => ({ windows: state.windows, addWindow: state.addWindow }))

  return (
    <MainLayout>
      <div
        className='h-full flex flex-col justify-center items-center z-50'
      >
        <Suspense>
          {
            windows.map(windowData => {
              const WindowComponent = windowComponents[windowData.type]

              // @ts-expect-error we need to type this better to avoid to use a ts-expect
              return <WindowComponent key={windowData.id} {...{ windowData }} />
            })
          }
        </Suspense>
      </div>
    </MainLayout>
  )
}

export default HomePage
