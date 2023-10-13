import { Component } from "react";
//stateful components

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      
    }
  }
  goodClick = () => {
    this.setState((prevState) => ({
      good : prevState.good + 1,
    }))
  }
  neutralClick = () => {
    this.setState((prevState) => ({
      neutral : prevState.neutral + 1,
    }))
  }
   badClick = () => {
   this.setState((prevState) => ({
      bad : prevState.bad + 1,
    }))
  }
  reset = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
      
    })
  }

  render() {
    return (
      <div>

        <h1>Give Feedback</h1>
        
        <button onClick={this.goodClick}>Good</button>
        <button onClick={this.neutralClick}>Neutral</button>
        <button onClick={this.badClick}>Bad</button>

        <h1>Statistics</h1>
        <p>good: {this.state.good}</p>
        <p>neutral: {this.state.neutral}</p>
        <p>bad: {this.state.bad}</p>
        <button onClick={this.reset}>Reset Feedbacks</button>
      </div>
    )
  }
}

export default App;