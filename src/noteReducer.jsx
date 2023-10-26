const initialState = [
    {
        content: 'reducer define how redux store works',
        important: true,
        id:1,
    },
    {
        content: 'state of store can contain any data',
        important: false,
        id: 2,
    }
]


const noteReducer = (state = initialState, action) => {
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

const generateId = () => {
    return ((Math.random() * 100000).toFixed(0));
}

export const createNote = (content) => {
    return {
        type: 'NEW_NOTE',
        payload: {
            content,
            important: true,
            id: generateId(),
        }
    }
}

export default noteReducer; 