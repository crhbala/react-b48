import React, { useContext } from 'react';
import { MessageContext } from '../App';
import { ChildContext } from './ChildComponent';

function GrandChildComponent() {

    const message = useContext(MessageContext);
    const childMessage = useContext(ChildContext);

  return (
      <div>
          <h3>GrandChildComponent</h3>
          <p>Message From Child Component: <b>{childMessage} </b></p>
    </div>
  )
}

export default GrandChildComponent;