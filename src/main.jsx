import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';


//data
const notes = [
    {
        id: 1,
        content: 'Working with lists',
        important: true
    },
     {
        id: 2,
        content: 'Usage of keys',
        important: false
    },
      {
        id: 3,
        content: 'Conditional Rendering',
        important: true
    },
       {
        id: 4,
        content: 'Handling Events',
        important: true
    },
        {
        id: 5,
        content: 'Props vs State',
        important: true
    }
]
//creat a variable called counter and initialize the value to 1
let counter = 1;
let refresh = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(<App counter={counter} />)
}

setInterval(() => {
    refresh();
    counter += 1;
},1000)