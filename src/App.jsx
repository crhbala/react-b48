import React, { useRef } from 'react';
import SetInputFocus from './SetInputFocus';

function App() {

  const inputRef = useRef(null);

  const handleButtonClicked = () => {
    inputRef.current.focus();
  }


  return (
    <div>
      <input
        type="text"
        ref={inputRef}
      />
      
      <input
        type="text"
        ref={inputRef}
      />

      <button onClick={handleButtonClicked}>Focus Input</button>
      <SetInputFocus inputRef={ inputRef} />
    </div>
  )
}

export default App;