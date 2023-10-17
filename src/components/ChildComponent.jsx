import React from 'react';
import GrandChildComponent from './GrandChildComponent';

function ChildComponent({ message }) {
    const childMassage = `${message}Hello GrandChild`
  return (
      <div>
          <h2>ChildComponent</h2>
          <p>Message from Parent Component: <b>{message}</b></p>
          <GrandChildComponent message = {childMassage} />
      </div>
      
  )
}

export default ChildComponent;