import { IconRecord } from '@/assets/Icons'
import { Window } from '@/components/ui'

import { type RecordWindowData } from '@/models'
import { RecordContent, RecordWindowDropdownMenu } from './components'
import { RecorderProvider, RecorderWindowProvider } from './services/context/'

interface RecordWindowProps {
  windowData: RecordWindowData
}

export const RecordWindow: React.FC<RecordWindowProps> = ({ windowData }) => {
  return (
        <RecorderWindowProvider {...{ windowData }}>
            <RecorderProvider>
                <Window
                    title="Record Window"
                    icon={<IconRecord className="text-red-400 text-base" />}
                    rightNode={<RecordWindowDropdownMenu />}
                    className='overflow-hidden'
                >
                   <RecordContent />
                </Window>
            </RecorderProvider>
        </RecorderWindowProvider>
  )
}
