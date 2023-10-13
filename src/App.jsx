import { Component } from "react";



class App extends Component{
  //component life cycle
  
  //componentdidmount: called after the component has been rendered to the DOM
  componentDidMount() {
    console.log('component mounted');
  }
  //called imidiately after the component updated in the DOM
  //called on state or prop changes
  componentDidUpdate() {
    console.log('component state updated');
  }

  componentWillUnmount() {
    //invoked just before the component is removed from the DOM
    //relesing memory or resources
    //detaching the events
    //canceling timers
  }

  render() {
    return <div></div>
  }
}