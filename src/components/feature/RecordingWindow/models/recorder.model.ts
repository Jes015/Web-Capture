export const recordingStatusType = {
  on: 'on',
  off: 'off'
} as const

export type RecordingStatus = typeof recordingStatusType[keyof typeof recordingStatusType]
