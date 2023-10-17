//useRef - hook: to create a multable reference to an element or a value that persists across render cycles.

//Example: focus the input text element on click of a button

import React, { useRef } from 'react'

function App() {
  const inputRef = useRef(null);

  const handlButtonClick = () => {
    // console.log(inputRef.current.value);
    inputRef.current.focus();
  }

  return (
    <div>
      <input
        type='text'
        ref={inputRef}
        />
      <button onClick={handlButtonClick}>Focus Input</button> 
    </div>
  )
}

export default App