// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandom = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNum = this.getRandom()
    this.setState(preValue => ({count: preValue.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg">
        <div className="bg-container">
          <div className="main-container">
            <h1 className="heading">Count {count}</h1>
            <p className="para">Count is {text}</p>
            <button className="button" type="button" onClick={this.onIncrement}>
              Increment
            </button>
            <p className="note">*Increase By random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
