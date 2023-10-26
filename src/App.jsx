import React from 'react';
import { createStore } from 'redux';

const noteReducer = (state = [], action) => {
    if (action.type == 'NEW_NOTE') {
        
    }
    switch (action.type) {
        case 'NEW_NOTE':
            return state.concat(action.payload);
        case 'TOGGLE_IMPORTANCE':
            //get the id from the action.payload
            const id = action.payload.id;
            const noteToChange = state.find(n => n.id === id);
        // console.log(noteToChange);
            const changedNote = {
                ...noteToChange,
                important: !noteToChange.important,
            }
            return state.map(note =>
                note.id !==id ? note : changedNote
                )
    }
    return state;
}

const store = createStore(noteReducer);

store.dispatch({
    type: 'NEW_NOTE',
    payload: {
        content: 'the app state is in redux store',
        important: true,
        id: 1,
    }
})

store.dispatch({
    type: 'NEW_NOTE',
    payload: {
        content: 'state changes are made with action',
        important: false,
        id: 2,
    }
})

function App() {
    // console.log(store.getState());

    const toggleImportance = (id) => {
    console.log('clicked',id);
    console.log();
    store.dispatch({
        type: 'TOGGLE_IMPORTANCE',
        payload: {
            id: id,
        }
     })
}

  return (
      <div>
          <ul>
              {
                  store.getState().map(note =>
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

export default App;