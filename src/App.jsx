import React, { useState } from 'react';
import Note from './components/Note';

function App(props) {

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');

  const addNote = (event) => {
    event.preventDefault();
    // console.log('button clicked');
    // console.log(newNote);

    const noteObject = {
      id: notes.id + 1,
      content: newNote,
      importent: Math.random()<0.5,
    }
    setNotes(notes.concat(noteObject));
    setNewNote('');
  }

  const handleNoteChange = (event) => {
    // console.log(event.target.value);
    setNewNote(event.target.value)
    // console.log(newNote);
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes.map(note =>
            <Note key={note.id} note={note}/>)
        }
      </ul>
      <form onSubmit={addNote}>
        <input placeholder='add new note ...'
          value={newNote}
        onChange={handleNoteChange}/>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App