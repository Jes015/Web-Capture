import { useStopwatch } from '@/hooks'
import { formatTime } from '@/utils/others'
import { useEffect } from 'react'
import { useRecorderContext } from '../services/context'

export const RecordData = () => {
  const { startStopwatch, stopStopwatch, time, startTime, endTime } = useStopwatch()
  const { recordingStatus } = useRecorderContext()

  useEffect(() => {
    if (recordingStatus === 'on') {
      startStopwatch()
    } else if (recordingStatus === 'off') {
      stopStopwatch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordingStatus])

  const timeFormatted = formatTime(time)

  return (
        <div>
            <div
                className="flex font-bold"
            >
                <div
                    className="flex flex-col"
                >
                    <span
                        className="text-xs leading-3"
                    >
                        Time
                    </span>
                    <div>
                        <span
                            className="text-3xl leading-7"
                        >
                            {timeFormatted?.hours}
                            :
                            {timeFormatted?.minutes}
                        </span>
                        <span
                            className="text-sm"
                        >
                            :{timeFormatted?.seconds}
                        </span>
                    </div>
                </div>
                <div
                    className='flex flex-col items-end justify-center flex-grow'
                >
                        <div
                            className="flex gap-1 text-xs"
                        >
                            <span
                                className="font-normal"
                            >
                                Started at
                            </span>
                            <span
                                className="text-xs"
                            >
                                {`${startTime?.hours ?? '- -'}:${startTime?.minutes ?? '- -'}`}
                            </span>
                        </div>
                    <div
                        className="flex gap-1 text-xs"
                    >
                        <span
                            className="font-normal"
                        >
                            Stoped at
                        </span>
                        <span
                            className="text-xs"
                        >
                            {`${endTime?.hours ?? '- -'}:${endTime?.minutes ?? '- -'}`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
  )
}
