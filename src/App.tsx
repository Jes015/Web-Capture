import { RecordWindow } from '@/components/feature'
import { MainLayout } from '@/layouts'

function App () {
  return (
    <MainLayout>
      <div
        className='h-full flex justify-center items-center'
      >

        <RecordWindow />
      </div>
    </MainLayout>
  )
}

export default App
