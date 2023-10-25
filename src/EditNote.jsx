import React, { useState } from 'react'
import UpdatedForm from './UpdatedForm';

function EditNote({ notes, setNotes }) {
  
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
        {selectedOption !== 'select an ID' && <UpdatedForm selectedOption={selectedOption} notes={notes} setNotes={ setNotes } />}
      </div>
    </div>
  )
}

export default EditNote