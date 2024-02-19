export const getEnv = (key: string) => {
  return import.meta.env[key]
}
