import { useEffect, useState } from 'react'

export const useDebounce = (value: unknown, time: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, time)

    return () => {
      clearTimeout(timeout)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return { debouncedValue }
}
