import React, { createContext, useContext } from 'react';
import GrandChildComponent from './GrandChildComponent';
import { MessageContext } from '../App';

const ChildContext = createContext();

function ChildComponent() {
    
    const [message, setMessage] = useContext(MessageContext);

    const childMessage = 'Hello from Child'

    const updateMessage = () => {
        setMessage('Hello from Child')
    }
     

  return (
      <div>
          <h2>ChildComponent</h2>
          <p>Message from Parent Component: <b>{message}</b></p>
          <button onClick={updateMessage}>Update Message</button>
          <ChildContext.Provider value={childMessage}>
              <GrandChildComponent/>
          </ChildContext.Provider>
          
      </div>
      
  )
}

export {ChildComponent as default, ChildContext};