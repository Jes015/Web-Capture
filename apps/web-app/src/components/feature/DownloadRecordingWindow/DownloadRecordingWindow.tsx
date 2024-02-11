import { Button, Select, TextField, Window } from '@/components/ui'
import { Input } from '@/components/ui/Input'
import { type DownloadRecordingWindowData } from '@/models'
import { DownloadIcon } from '@radix-ui/react-icons'
import { useDownloadRecording } from './hooks'

interface DownloadRecordingWindowProps {
  windowData: DownloadRecordingWindowData
}

export const DownloadRecordingWindow: React.FC<DownloadRecordingWindowProps> = ({ windowData }) => {
  const { downloadRecording, loading } = useDownloadRecording({ windowData })

  const handleOnSubmitToDownload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = e.currentTarget.elements

    const fileNameInput = formData.namedItem('filename') as HTMLInputElement
    const formatInput = formData.namedItem('format') as HTMLSelectElement

    const fileName = fileNameInput.value ?? 'download'
    const formatType = (formatInput.value as 'mp3' | 'webm' | 'mp4') ?? 'webm'

    void downloadRecording(fileName, formatType)
  }

  return (
    <Window
      {...{ windowData }}
      rndconfig={{
        minWidth: 290,
        minHeight: 125
      }}
    >
      <Window.Header
        {...{ windowData }}
        icon={<DownloadIcon className="text-green-400 text-base" />}
      />
      <Window.Content>
        {loading && 'loading'}
        <form
          onSubmit={handleOnSubmitToDownload}
          className='flex flex-col gap-2'
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
              <Input name='filename' defaultValue={windowData.name} className='w-full' placeholder='Hola' />
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
                name='format'
                defaultValue='webm'
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
        </form>
      </Window.Content>
    </Window>
  )
}

export default DownloadRecordingWindow
