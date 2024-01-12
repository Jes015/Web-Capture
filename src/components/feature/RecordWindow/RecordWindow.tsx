import { IconRecord } from '@/assets/Icons'
import { Window } from '@/components/ui'

import { RecordControls, RecordData, RecordVideo, RecordWindowDropdownMenu } from './components'
import { RecorderProvider } from './services/context/recorder.provider'
import { RecorderWindowProvider } from './services/context/recorderWindow.provider'

export const RecordWindow = () => {
  return (
        <RecorderWindowProvider>
            <RecorderProvider>
                <Window
                    title="Record Window"
                    icon={<IconRecord className="text-red-400 text-base" />}
                    rightNode={<RecordWindowDropdownMenu />}
                    className='overflow-hidden'
                >
                    <div
                        className="relative overflow-hidden h-full"
                    >
                        <RecordVideo />
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col p-1 gap-1 pt-2 z-10'>
                            <RecordData />
                            <RecordControls />
                        </div>
                    </div>
                </Window>
            </RecorderProvider>
        </RecorderWindowProvider>
  )
}
