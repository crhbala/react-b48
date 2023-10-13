/*
Hooks:
  -any function that start with "use" is called a hook.
  -they are special function that are only available while react is rendering

  To creat a counter, where the value is increased as a function of time or at the click of a button.
*/

import React from "react";

function App(props) {
  // console.log(props);
  let { counter } = props;
  return (
    <div>{counter}</div>
  )
}

export default App;