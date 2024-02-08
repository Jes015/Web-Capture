export const ViteEnvironment = {
  development: 'development',
  production: 'production'
} as const

export type ViteEnvironmentType = typeof ViteEnvironment[keyof typeof ViteEnvironment]

