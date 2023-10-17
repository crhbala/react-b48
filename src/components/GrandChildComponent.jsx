import React, { useContext } from 'react';
import { MessageContext } from '../App';

function GrandChildComponent() {

    const message = useContext(MessageContext);

  return (
      <div>
          <h3>GrandChildComponent</h3>
          <p>Message From Child Component: <b>{message} </b></p>
    </div>
  )
}

export default GrandChildComponent;