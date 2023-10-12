import React from 'react';
import Note from './Note';


function App(props) {
  const { notes } = props;
  const itemList = [];

  notes.forEach((note) => {
    itemList.push(<Note key={note.id} note={note}/>)
  });

  const addNote = (event) => {
    // event.preventDefalt();
    // // console.log('button clicked');
    // // console.log(event.target);

    // console.log(event.target.elements.note.value);
    console.log('Button Clicked');
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
      {itemList}
      </ul> 
      
      {/* <form onSubmit={addNote}>
        <input name='note'/>
        <button type='submit'>Save Note</button>
      </form> */}
       <form>
        <input name='note'/>
        <button onClick={addNote}>Save Note</button>
      </form>
    </div>
  )
}

export default App;