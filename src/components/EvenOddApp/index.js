import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  clickIncrease = () => {
    this.setState(() => ({count: Math.ceil(Math.random() * 100)}))
  }

  evenOdd = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return 'Even'
    }
    return 'Odd'
  }

  render() {
    const {count} = this.state
    console.log(count)
    return (
      <div className="bg-img">
        <h1>
          Count <span className="bold">{count}</span>
        </h1>
        <p>
          Count is <p>{this.evenOdd()}</p>
        </p>
        <div>
          <button onClick={this.clickIncrease} type="button" className="button">
            Increment
          </button>
        </div>
        <p>*increase by random number between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
