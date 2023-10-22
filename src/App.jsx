import React, { useState } from 'react';

function App(props) {
    //define state
    const [notes, setNotes] = useState(props.notes);
    const [showStatus, setShowStatus] = useState('all');

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
    </div>
  )
}

export default App;