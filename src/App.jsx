import React from 'react';
import ChildComponent from './components/ChildComponent';

function App() {

  const message = 'Hello Child';

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={ message} />
    </div>
  )
}

export default App;