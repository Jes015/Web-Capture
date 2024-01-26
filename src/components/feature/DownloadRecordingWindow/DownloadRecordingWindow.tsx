import { Button, Select, TextField, Window } from '@/components/ui'
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
        minWidth: 290,
        minHeight: 129
      }}
    >
      <div
        className='px-2 flex flex-col gap-2 mt-1'
      >
        <div
          className='flex gap-2'
        >
          <TextField
            className='flex flex-col !items-start !gap-0 flex-grow'
          >
            <TextField.Label
              className='text-xs'
            >
              File name
            </TextField.Label>
            <Input className='w-full' placeholder='Hola' />
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
              defaultValue='mp4'
              triggerContent={<Select.TriggerContent />}
            >
              <Select.Group>
                <Select.GroupLabel>
                  Video
                </Select.GroupLabel>
                <Select.Item value="webm">WEBM</Select.Item>
                <Select.Item value="mp4">MP4</Select.Item>
              </Select.Group>

              <Select.Group>
                <Select.GroupLabel className="px-[25px] text-xs leading-[25px] text-mauve11">
                  Audio
                </Select.GroupLabel>
                <Select.Item value="mp3">MP3</Select.Item>
              </Select.Group>
            </Select>
          </TextField>
        </div>
        <Button
          className='justify-stretch'
        >
          Download
        </Button>
      </div>
    </Window>
  )
}

export default DownloadRecordingWindow
