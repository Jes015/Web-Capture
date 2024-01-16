class Stopwatch {
  constructor (initialTime) {
    this.time = initialTime
    this.interval = undefined
  }

  setTime (time) {
    this.time = time
  }

  startStopwatch () {
    this.interval = setInterval(() => { this.decreaseTime() }, 1000)
  }

  stopStopwatch () {
    clearInterval(this.interval)
  }

  decreaseTime () {
    if (this.time.seconds < 59) {
      this.time.seconds += 1
    } else if (this.time.minutes < 59) {
      this.time.seconds = 0
      this.time.minutes += 1
    } else {
      this.time = { seconds: 0, minutes: 0, hours: this.time.hours + 1 }
    }

    let message = { time: this.time }

    if (this.time.seconds === 0 && this.time.minutes === 0 && this.time.hours === 0) {
      message = { type: 'stop', ...message }
      this.stopStopwatch()
    }

    self.postMessage(message)
  }
}

const stopwatch = new Stopwatch({ hours: 0, minutes: 0, seconds: 0 })

self.onmessage = ({ data }) => {
  const dataTyped = data

  if (dataTyped.type === 'start') {
    stopwatch.startStopwatch()
  } else if (dataTyped.type === 'stop') {
    stopwatch.stopStopwatch()
  } else if (dataTyped.type === 'setInitial' && dataTyped.time != null) {
    stopwatch.setTime(dataTyped.time)
  }
}
