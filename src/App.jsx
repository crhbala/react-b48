import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

function App() {
    //define state
    const [notes, setNotes] = useState([]);
    const [showStatus, setShowStatus] = useState('all');

    //status for adding new note form
    const [newNoteContant, setNewNoteContant] = useState('');
    const [newNoteImportant, setNewNoteImportant] = useState('');

    const newNoteContantRef = useRef(null);
    useEffect(() => {
        newNoteContantRef.current.focus();
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:3000/notes/')
            .then(response =>{
            setNotes(response.data);
            })
    },[])

    const addNote = (event) => {
        event.preventDefault();
        console.log(newNoteContant,newNoteImportant);

        //create a new note subject
        let noteObject = {
            id: notes.length + 1,
            content: newNoteContant,
            important: newNoteImportant === 'true',
        }
        setNotes(notes.concat(noteObject));

        //clear the inputs
        setNewNoteContant('');
        setNewNoteImportant('');
        

    }

    const handleStatusChange = (event) => {
        // console.log(event.target.value);
        setShowStatus(event.target.value);
    }

    let filterNotes = (notes, showStatus) => {
        switch (showStatus) {
            case 'all':
                return notes;
            case 'imp':
                return notes.filter(note => note.important === true);
            case 'nonimp':
                return notes.filter(note => note.important === false);
        }
    }
    let notesFilter = filterNotes(notes, showStatus);
    

  return (
      <div>
          <h1>Notes</h1>

          <label>
              <input
                  type="radio"
                  name='filter'
                  onChange={handleStatusChange}
                  value='all'
                  checked={showStatus==='all'}
              />
              All Notes
          </label>

          <label>
              <input
                  type="radio"
                  name='filter'
                  onChange={handleStatusChange}
                  value='imp'
                  checked={showStatus==='imp'}
              />
              Important Notes
          </label>

          <label>
              <input
                  type="radio"
                  name='filter'
                  onChange={handleStatusChange}
                  value='nonimp'
                  checked={showStatus==='nonimp'}
              />
              Non-Important Notes
          </label>

          <ul>
              {
                  notesFilter.map(note => 
                      <li key={note.id}>{note.content}</li>
                  )
              }
          </ul>
          <h2>Add a New Note</h2>
          <form onSubmit={addNote}>
              <label>
                  Contant: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                      onChange={(e) => setNewNoteContant(e.target.value)}
                      value={newNoteContant}
                      ref={newNoteContantRef}
                      required
                  />
              </label>
              <br />
               <br />
              <label>
                  Is Important: &nbsp;&nbsp;
                  <select
                      onChange={(e) => setNewNoteImportant(e.target.value)}
                      value={newNoteImportant}
                      required
                  >
                      <option disabled>--select--</option>
                      <option>true</option>
                      <option>false</option>
                  </select>
              </label>
              <br /><br /><br />
              <button type='submit'>Add New Note</button>
          </form>
    </div>
  )
}

export default App;