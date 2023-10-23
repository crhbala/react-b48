import React from 'react';

function ReadNotes({showStatus, handleStatusChange, notesFilter}) {
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

export default ReadNotes;