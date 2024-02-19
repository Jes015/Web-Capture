import { type ViteEnvironmentType } from '@/models'
import { Logger } from '@/utils/others/logger.util'

export const LoggerService = new Logger(import.meta.env.MODE as ViteEnvironmentType)
