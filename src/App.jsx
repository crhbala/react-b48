import React, {useState} from 'react';

function ChildComponent({onMessage}) {
  const message = `Hello from Child`;

  return (
    <>
      <h2>Child Comonent</h2>
      <button onClick={()=>onMessage(message)}>Send Message to the parent</button>
    </>
  )
}

function App() {

  const [message, setMessage] = useState('');

  const handleMessage = (data) => {
    setMessage(data);
  }
  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message from the Child Component: { message}</p>
      <ChildComponent onMessage={handleMessage} />
    </div>
  )
}

export default App;