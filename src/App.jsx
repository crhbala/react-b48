import { Component } from "react";

class Hello extends Component{
  render() {
    // console.log(this.props);
    // return <div>Hello {this.props.name}!</div>
    const { name } = this.props;
    return <div>Hello {name}!</div>
    
  }
}

class App extends Component{
  render() {
    return (
      <div>
        <Hello name="chris" />
      </div>
    )
  }
}

export default App;