export interface Time {
  seconds: number
  minutes: number
  hours: number
}

export interface WorkerStopwatchMessage {
  type?: 'start' | 'stop' | 'setInitial'
  time?: Time
}
