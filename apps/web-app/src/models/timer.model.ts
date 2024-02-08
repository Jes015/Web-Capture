export interface Time {
  seconds: number
  minutes: number
  hours: number
}

export type TimeStrap = Omit<Time, 'seconds'>

export interface WorkerStopwatchMessage {
  type?: 'start' | 'stop' | 'setInitial'
  time?: Time
}
