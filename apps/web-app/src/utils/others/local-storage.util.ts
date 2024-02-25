export type StorageType = 'sessionStorage' | 'localStorage'

export const setToStorage = (key: string, data: string, type: StorageType) => {
  window[type].setItem(key, data)
}

export const getFromStorage = <T>(key: string, type: StorageType): T | null => {
  const plainData = window[type].getItem(key)

  if (plainData == null) return null

  return JSON.parse(plainData) as T
}

export const removeFromStorage = (key: string, type: StorageType) => {
  window[type].removeItem(key)
}
