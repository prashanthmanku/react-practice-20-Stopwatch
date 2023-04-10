// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {currentRunningSeconds: 0}

  clearTimer = () => {
    clearInterval(this.intervalID)
  }

  countingTime = () => {
    this.setState(precState => ({
      currentRunningSeconds: precState.currentRunningSeconds + 1,
    }))
  }

  StartTimer = () => {
    this.clearTimer()
    this.intervalID = setInterval(this.countingTime, 1000)
  }

  stopTimer = () => {
    this.clearTimer()
  }

  resetTimer = () => {
    this.setState({currentRunningSeconds: 0})
    this.clearTimer()
  }

  convertTimeToTimerFormat = () => {
    const {currentRunningSeconds} = this.state
    const minutes = Math.floor(currentRunningSeconds / 60)
    const seconds = Math.floor(currentRunningSeconds % 60)
    const minutesInStringFormat = minutes > 9 ? minutes : `0${minutes}`
    const secondsInStringFormat = seconds > 9 ? seconds : `0${seconds}`
    return `${minutesInStringFormat}:${secondsInStringFormat}`
  }

  render() {
    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-card-container">
            <div className="card-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="heading-img"
              />
              <h1 className="card-heading">Timer</h1>
            </div>
            <h1 className="timer-time">{this.convertTimeToTimerFormat()}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="start-button-bg"
                onClick={this.StartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button-bg"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button-bg"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
