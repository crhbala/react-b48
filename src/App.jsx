import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

function App() {

  const countRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      countRef.current += 1;
      console.log(countRef.current);
    }, 1000);

    
  },[countRef])

  return (
    <div>
      <p>Counter:{countRef.current}</p>
    </div>
  )
}

export default App