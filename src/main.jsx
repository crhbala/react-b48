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

const store = createStore(counterReducer);


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
        </Provider>
);
