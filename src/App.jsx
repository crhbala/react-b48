/*
Hooks:
  -any function that start with "use" is called a hook.
  -they are special function that are only available while react is rendering

  To creat a counter, where the value is increased as a function of time or at the click of a button.
*/

import React, { useState } from "react";

function App() {
  //1argmt state name (ur choice name) 2 argmt state handler name followed by state name exmple counter set counter
  const [counter, setCounter] = useState(0);

  // setTimeout(() => setCounter(counter + 1), 1000);
  setTimeout(() => {
    setCounter(counter + 1)
  }, 1000);

  return (
    <div>{counter}</div>
  )
}

export default App;