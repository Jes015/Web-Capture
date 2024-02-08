import { type Time } from '@/models'

export const formatTime = (time: Time | null) => {
  let hours = '00'
  let minutes = '00'
  let seconds = '00'

  if (time == null) return { hours, minutes, seconds }

  hours = time.hours.toString().padStart(2, '0')
  minutes = time.minutes.toString().padStart(2, '0')
  seconds = time.seconds.toString().padStart(2, '0')

  return { hours, minutes, seconds }
}
