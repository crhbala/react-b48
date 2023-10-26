import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Notes() {

    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes);

        const toggleImportance = (id) => {
        dispatch(toggleImportanceOf(id));
    }

    const toggleImportanceOf = (id) => {

    return {
        type: 'TOGGLE_IMPORTANCE',
        payload: {
            id: id,
        }
    }
}

  return (
      <div>
          <ul>
              {
                  notes.map(note =>
                      <li
                        key={note.id}
                        onClick={()=> toggleImportance(note.id)}
                      >{note.content}<strong>{note.important ? '*' : ''}</strong></li>
                    )
              }
          </ul>
    </div>
  )
}

export default Notes