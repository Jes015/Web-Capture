import { type Time, type WorkerStopwatchMessage } from '@/models'
import { StopwatchWorkerBuilder } from '@/workers'
import { useEffect, useRef, useState } from 'react'
export const useStopwatch = () => {
  const [time, setTime] = useState<Time | null>(null)
  const worker = useRef<StopwatchWorkerBuilder | null>()

  useEffect(() => {
    const tempWorker = new StopwatchWorkerBuilder('./stopwatch.worker.js')
    worker.current = tempWorker

    const onChangeTime = ({ data }: MessageEvent<WorkerStopwatchMessage>) => {
      if (data.type === 'stop') {
        stopStopwatch()
      }
      if (data.time != null) {
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
  }

  const stopStopwatch = () => {
    worker.current?.stopStopwatch()
    resetStopWatch()
  }

  const resetStopWatch = () => {
    worker.current?.setInitialTime({ hours: 0, minutes: 0, seconds: 0 })
  }

  return { time, startStopwatch, stopStopwatch }
}
