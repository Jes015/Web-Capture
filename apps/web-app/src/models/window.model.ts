import { type RecordingType } from '@/utils/others'
import { type UUID } from 'crypto'

export const CWindowType = {
  record: 'Record',
  watchRecord: 'Watch Record',
  downloadRecord: 'Download Record'
} as const

export type TWindowType = typeof CWindowType[keyof typeof CWindowType]

export interface WindowData {
  id: UUID
  name: string
  type: TWindowType
  recordingCoreType?: RecordingType
  zIndex?: number
  oneOnly?: true
}

export interface WatchRecordingWindowData extends WindowData {
  videoAndAudioBlob: Blob | null
  type: 'Watch Record'
}

export interface RecordWindowData extends WindowData {
  type: 'Record'
}

export interface DownloadRecordingWindowData extends WindowData {
  videoAndAudioBlob: Blob | null
  type: 'Download Record'
}

export type WindowTypes = RecordWindowData | WatchRecordingWindowData | DownloadRecordingWindowData

export type WindowDataArray = WindowData[]
