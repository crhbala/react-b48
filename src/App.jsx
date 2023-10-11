//our first react componunt
//javascript function
//for now does not recive any  arguments

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const handlePluseClick = ()=>{
    setCounter(counter + 1);
  }
  const handleZeroClick = () => {
    setCounter(0);
  }
  const handleMinusClick = () => {
    setCounter(counter - 1);
  }
  return (
    <div>
      <div>{counter}</div>
      <button onClick={handlePluseClick}>Pluse</button>
      <button onClick={handleMinusClick}>Minus</button>
      <button onClick={handleZeroClick}>Zero</button>
    </div>
  )
}
export default App;
