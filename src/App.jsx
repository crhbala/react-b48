import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

    const dispatch = useDispatch();
    const counter = useSelector(state => state);

  return (
      <div>
          <div>
              {counter}
          </div>
          <button onClick={e => dispatch({ type: 'INCR' })}>Increment</button>
          <button onClick={e => dispatch({ type: 'DECR' })}>Decrement</button>
          <button onClick={e => dispatch({type: 'ZERO'})}>Zero</button>

    </div>
  )
}

export default App;