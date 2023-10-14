import { useState } from "react";


function Display({counter}) {
  return (
    <div> {counter} </div>
  )
}

function Button({text,handClick}) {
  return (
    <button onClick={handClick}>{ text}</button>
  )
}

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
      <Display counter={counter} />
      <Button text='plus' handClick = {handleClickedPluse} />
      <Button text='minus' handClick={handleClickedMinus} />
      <Button text='zero' handClick = {handleClickedZero} />
    </div>
   
  )
}

export default App;