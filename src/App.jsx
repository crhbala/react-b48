import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClickedPluse=()=>{
    setCounter(counter + 1);
  }
  const handleClickedMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    
  }
  const handleClickedZero=()=>{
    setCounter(0)
  }

  return (
    <div>
      <div> {counter} </div>
      <button onClick={handleClickedPluse}>Plus</button>
      <button onClick={handleClickedMinus}>Minus</button>
      <button onClick={handleClickedZero}>Zero</button>
    </div>
   
  )
}

export default App;