import React from 'react';

function GrandChildComponent({message}) {
  return (
      <div>
          <h3>GrandChildComponent</h3>
          <p>Message From Child Component: <b> { message}</b></p>
    </div>
  )
}

export default GrandChildComponent;