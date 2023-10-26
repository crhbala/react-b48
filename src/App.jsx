import React from 'react';
import Notes from './Notes';
import NewNote from './NewNote';

function App() {

    const filterSelected = (value) => {
        console.log(value);
    }

  return (
      <div>
          <NewNote />
          <div>
              <input type="radio" name='filter' onChange={()=> filterSelected('all')}/> all 
              <input type="radio" name='filter' onChange={() => filterSelected('immportant')} /> Important
                  < input type="radio" name='filter' onChange={() => filterSelected('nonimportant')} /> nonimportant 
          </div>
          <Notes />
    </div>
  )
}

export default App;