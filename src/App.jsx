//passing props in function component
import React from "react";

function Hello({ name }) {
  return (
    <div>Hello, { name }</div>
  )
}

function App() {
  return (
    <div>
      <Hello name="Chris"/>
    </div>
  )
}

export default App;