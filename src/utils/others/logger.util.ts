import { type ViteEnvironment } from '@/models'

export class Logger {
  private readonly environment: ViteEnvironment

  constructor (env: ViteEnvironment) {
    this.environment = env
    this.welcomeMessage()
  }

  private welcomeMessage () {
    console.log('%c' + 'Screen Capture', 'font-family:Roboto; color:white; font-size:40px; font-weight:bold; background-color: #171717; background-image: url("data:image/svg+xml,%3Csvg width=\'40\' height=\'12\' viewBox=\'0 0 40 12\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 6.172L6.172 0h5.656L0 11.828V6.172zm40 5.656L28.172 0h5.656L40 6.172v5.656zM6.172 12l12-12h3.656l12 12h-5.656L20 3.828 11.828 12H6.172zm12 0L20 10.172 21.828 12h-3.656z\' fill=\'%23262626\' fill-opacity=\'0.3\' fill-rule=\'evenodd\'/%3E%3C/svg%3E"); border-radius: 5px; padding: 20px')
    console.log('%c' + 'OPEN SOURCE PROJECT - YOU CAN USE THE CODE ONLY FOR NON-PROFIT PURPOSES', 'font-family:Roboto; color:white; font-size:12px; font-weight:bold; background-color: #171717; border-radius: 2px; padding: 2px')
    console.log('%c' + 'Github: https://github.com/Jes015/ScreenCapture', 'font-family:Roboto; color:white; font-size:12px; font-weight:bold; background-color: #171717; border-radius: 2px; padding: 2px')
    console.log('%c' + 'Jes015 Portfolio: https://portfolio-three-chi-27.vercel.app/ | Jes015 Blog: https://blog-one-murex.vercel.app/', 'font-family:Roboto; color:white; font-size:8px; font-weight:bold; background-color: #171717; border-radius: 2px; padding: 2px')
  }

  public message (message: unknown, title: string) {
    if (this.environment === 'production') return

    console.group(title)
    console.log(message)
    console.groupEnd()
  }
}
