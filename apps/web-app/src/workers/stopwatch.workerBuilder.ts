import { type Time } from '@/models'

export class StopwatchWorkerBuilder extends Worker {
  startStopwatch () {
    this.postMessage({ type: 'start' })
  }

  stopStopwatch () {
    this.postMessage({ type: 'stop' })
  }

  setInitialTime (time: Time) {
    this.postMessage({ type: 'setInitial', time })
  }
}
