import React from 'react';
import Notes from './Notes';
import NewNote from './NewNote';
import VisibilityFilter from './VisibilityFilter';

function App() {
  return (
      <div>
          <NewNote />
          <VisibilityFilter />
          <Notes />
    </div>
  )
}

export default App;