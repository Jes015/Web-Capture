import { Select, TextField, Window } from '@/components/ui'
import { Input } from '@/components/ui/Input'
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
      <TextField
        className='flex flex-col !items-start !gap-0'
      >
        <TextField.Label
          className='text-xs'
        >
          File name
        </TextField.Label>
        <Input placeholder='Hola' />
      </TextField>

      <TextField
        className='flex flex-col !items-start !gap-0'
      >
        <TextField.Label
          className='text-xs'
        >
          Format
        </TextField.Label>
        <Select
          defaultValue='banana'
          triggerContent={<Select.TriggerContent placeholder='Select a format' />}
        >
          <Select.Group>
            <Select.GroupLabel>
              Video
            </Select.GroupLabel>
            <Select.Item value="apple">WEBM</Select.Item>
            <Select.Item value="banana">MP4</Select.Item>
          </Select.Group>

          <Select.Group>
            <Select.GroupLabel className="px-[25px] text-xs leading-[25px] text-mauve11">
              Audio
            </Select.GroupLabel>
            <Select.Item value="aubergine">MP3</Select.Item>
          </Select.Group>
        </Select>
      </TextField>
    </Window>
  )
}

export default DownloadRecordingWindow
