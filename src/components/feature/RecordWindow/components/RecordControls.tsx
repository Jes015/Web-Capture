import { Button } from '@/components/ui'
import { useRecorderContext } from '../services/context'

export const RecordControls = () => {
  const { recordingStatus, toggleRecordingStatus } = useRecorderContext()

  const handleOnClickForStartRecording = () => {
    void toggleRecordingStatus('on')
  }

  const handleOnClickForStopRecording = () => {
    void toggleRecordingStatus('off')
  }

  return (
    <footer
      className="flex gap-1 text-[0.77rem]"
    >
      <Button disabled>
        Pause
      </Button>
      {
        recordingStatus === 'off' && (
          <Button
            onClick={handleOnClickForStartRecording}
            className=" flex-grow"
          >
            Start
          </Button>
        )
      }
      {
        recordingStatus === 'on' && (
          <Button
            onClick={handleOnClickForStopRecording}
            className='flex-grow'
          >
            Stop
          </Button>
        )
      }
    </footer>
  )
}
