import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const counterReducer = (state = 0, action)=>{
    switch (action.type) {
        case 'INCR':
            return state + 1;
        case 'DECR':
            return state - 1;
        case 'ZERO':
            return 0;
        default:
            return state;
    }
}

//create a new store
const store = createStore(counterReducer);

console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render( <App />);
