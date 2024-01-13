import { type UUID } from 'crypto'

export const CWindowType = {
  record: 'Record',
  watchRecord: 'Watch Record'
} as const

export type TWindowType = typeof CWindowType[keyof typeof CWindowType]

export interface WindowData {
  id: UUID
  name: string
  type: TWindowType
}

export interface WatchRecordedWindowData extends WindowData {
  videoAndAudioBlob: Blob
  type: 'Watch Record'
}

export interface RecordWindowData extends WindowData {
  type: 'Record'
}

export type WindowDataArray = WindowData[]
