import React, { useState } from 'react'
import UpdatedForm from './UpdatedForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function DeleteForm({ selectedOption, notes, setNotes }) {

  let selectedNote = notes.find(note => note.id == selectedOption);

  let navigate = useNavigate();

  const deleteNote = async () => {
    console.log('Deleting note...');
    try {
      const response = await axios.delete(`http://localhost:3000/notes/${selectedOption}`);

      console.log('Note deleted successfully');
      console.log(response);
      let updatedNotes = notes.filter(n => n.id !== selectedNote.id);
      setNotes(updatedNotes);
      navigate('/edit');
    } catch (error) {
      console.log('error deleting the note:', error);
    }
  }

  return (
    <div>
      <br /><br />
      <label>
        ID: {selectedNote.id} <br /><br />
        Content: {selectedNote.content} <br /><br />
        important: {selectedNote.important ? 'true': 'false'}
      </label><br /><br />

      <button onClick={deleteNote}>Delete Note</button>
    </div>
  )
}

function DeleteNote({ notes, setNotes }) {
  
  const [selectedOption, setSelectedOption] = useState('select an ID');

  const selectHandler = (event) => {
    // console.log(event.target.value);
    setSelectedOption(event.target.value);
    
  }

  return (
      <div>
      <h2>Edit Note</h2>
      <label>
        Select the Note ID to Edit/Update 
        <select onChange={selectHandler}>
          <option disabled>{'select an ID' }</option>
          {
            notes.map(note =>
              <option key={note.id}> {note.id} </option>
              )
          }
        </select>
      </label>
      <div>
        {selectedOption !== 'select an ID' && <DeleteForm selectedOption={selectedOption} notes={notes} setNotes={ setNotes } />}
      </div>
    </div>
  )
}

export default DeleteNote;