export type StorageType = 'sessionStorage' | 'localStorage'

export const setToStorage = (key: string, data: string, type: StorageType) => {
  window[type].setItem(key, data)
}

export const getFromStorageObject = <T>(key: string, type: StorageType, dataType: 'object' | 'string' = 'object'): T | null => {
  const plainData = window[type].getItem(key)

  if (plainData == null) return null

  if (dataType === 'object') {
    return JSON.parse(plainData) as T
  }

  return plainData as T
}

export const removeFromStorage = (key: string, type: StorageType) => {
  window[type].removeItem(key)
}
