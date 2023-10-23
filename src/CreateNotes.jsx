import React, { useEffect } from 'react';

function CreateNotes({ newNoteContant, newNoteContantRef, setNewNoteContant, addNote, newNoteImportant, setNewNoteImportant }) {
    
useEffect(() => {
        newNoteContantRef.current.focus();
    }, []);

  return (
      <div>
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

export default CreateNotes;