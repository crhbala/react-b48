import React, { useState } from 'react';
import Home from './Home';
import Notes from './Notes';
import Users from './Users';

function App() {

  const [page, setPage] = useState('home');

  //higher order function
  const toPage = (page) => (event) => {
    event.preventDefault()
    setPage(page);
    console.log(page);
  }

  const content = () => {
    if (page == 'home') {
      return <Home />
    }else if(page == 'notes'){
      return <Notes />
    }else if(page == 'users'){
      return <Users />
    }
  }

  const padding = {
    padding: 5
  }

  return (
    <div>
      <div>
        <a href="" onClick={toPage('home')} style={padding}>home</a>
        <a href="" onClick={toPage('notes')} style={padding}>notes</a>
        <a href="" onClick={toPage('users')} style={padding}>users</a>
      </div>
      {content()}
    </div>
  )
}

export default App;