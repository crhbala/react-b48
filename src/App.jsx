import { Component } from "react";
//stateful components

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      count:0,
    }
  }
  pluseClick = () => {
    this.setState((prevState) => ({
      count : prevState.count + 1,
    }))
  }
  minusClick = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }))
    }
  }
   zero = () => {
    this.setState((prevState) => ({
      count : 0,
    }))
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.pluseClick}>Pluse</button>
        <button onClick={this.minusClick}>Minus</button>
        <button onClick={this.zero}>Zero</button>
      </div>
    )
  }
}

export default App;