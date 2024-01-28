import { type Time, type TimeStrap, type WorkerStopwatchMessage } from '@/models'
import { StopwatchWorkerBuilder } from '@/workers'
import { useEffect, useRef, useState } from 'react'
export const useStopwatch = () => {
  const [time, setTime] = useState<Time | null>(null)

  const [startTime, setStartTime] = useState<TimeStrap | null>(null)
  const [endTime, setEndTime] = useState<TimeStrap | null>(null)


  const worker = useRef<StopwatchWorkerBuilder | null>()

  useEffect(() => {
    const tempWorker = new StopwatchWorkerBuilder('./stopwatch.worker.js')
    worker.current = tempWorker

    const onChangeTime = ({ data }: MessageEvent<WorkerStopwatchMessage>) => {
      if (data.type === 'stop') {
        stopStopwatch()

        const date = new Date()

        setEndTime({ hours: date.getHours(), minutes: date.getMinutes() })
      }

      if (data.type === 'start') {
        const date = new Date()
        setStartTime({ hours: date.getHours(), minutes: date.getMinutes() })
        setEndTime(null)
      }

      if (data.time !== undefined) {
        setTime(data.time)
      }
    }

    tempWorker.addEventListener('message', onChangeTime)

    return () => {
      tempWorker.removeEventListener('message', onChangeTime)
      worker.current?.terminate()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const startStopwatch = () => {
    worker.current?.startStopwatch()
    const date = new Date()
    setStartTime({ hours: date.getHours(), minutes: date.getMinutes() })
    setEndTime(null)
  }

  const stopStopwatch = () => {
    worker.current?.stopStopwatch()
    const date = new Date()

    if (time != null) {
      setEndTime({ hours: date.getHours(), minutes: date.getMinutes() })
    }

    resetStopWatch()
  }

  const resetStopWatch = () => {
    worker.current?.setInitialTime({ hours: 0, minutes: 0, seconds: 0 })
  }

  return { time, startStopwatch, stopStopwatch, startTime, endTime }
}
