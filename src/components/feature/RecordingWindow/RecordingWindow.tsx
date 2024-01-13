import { IconRecording } from '@/assets/Icons'
import { Window } from '@/components/ui'

import { type RecordWindowData } from '@/models'
import { RecordContent, RecordingWindowDropdownMenu } from './components'
import { RecorderProvider, RecorderWindowProvider } from './services/context'

interface RecordWindowProps {
  windowData: RecordWindowData
}

export const RecordingWindow: React.FC<RecordWindowProps> = ({ windowData }) => {
  return (
        <RecorderWindowProvider {...{ windowData }}>
            <RecorderProvider>
                <Window
                    title="Recording Window"
                    icon={<IconRecording className="text-red-400 text-base" />}
                    rightNode={<RecordingWindowDropdownMenu />}
                    className='overflow-hidden'
                >
                   <RecordContent />
                </Window>
            </RecorderProvider>
        </RecorderWindowProvider>
  )
}
