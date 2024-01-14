import '@/styles/driverjs.css'
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'

export const showDriver = () => {
  const driverObj = driver({
    popoverClass: 'driverjs-theme',
    steps: [
      {
        element: '#addWindows',
        popover: {
          title: 'Windows menu',
          description: 'Click here to add recording windows'
        }
      }
    ]
  })

  driverObj.drive()
}
