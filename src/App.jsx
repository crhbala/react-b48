import React from 'react';
import Note from './Note';


function App(props) {
  const { notes } = props;
  
  return (
    <div>
      <h1>Notes</h1>
      {
        notes.map((note) => {
    return <Note key={note.id} note={note} />;
            
          })
      }
      
    </div>
  )
}

export default App;