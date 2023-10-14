import React, { useRef } from 'react'

function App() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // console.log(inputRef.current.value);
    inputRef.current.focus();
  }


  return (
    <div>
      <input type="text"
      ref={inputRef}/>
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  )
}

export default App;