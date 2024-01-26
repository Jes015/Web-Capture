import { Window } from '@/components/ui'
import { type DownloadRecordingWindowData } from '@/models'
import { DownloadIcon } from '@radix-ui/react-icons'

interface DownloadRecordingWindowProps {
  windowData: DownloadRecordingWindowData
}

export const DownloadRecordingWindow: React.FC<DownloadRecordingWindowProps> = ({ windowData }) => {
  return (
        <Window
            title='Download Recording'
            {...{ windowData }}
            icon={<DownloadIcon className="text-green-400 text-base" />}
            rndconfig={{
              enableResizing: true,
              default: {
                x: 0,
                y: 0,
                width: 500,
                height: 320
              },
              minWidth: 251,
              maxWidth: 500,
              maxHeight: 400,
              lockAspectRatio: true
            }}
        >
            asdfasfd
        </Window>
  )
}
