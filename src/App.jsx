import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Dashboard from './Dashboard';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ReadNotes from './ReadNotes';
import CreateNotes from './CreateNotes';
import EditNote from './EditNote';
import DeleteNote from './DeleteNote';

function App() {
    //define state
    const [notes, setNotes] = useState([]);
    const [showStatus, setShowStatus] = useState('all');

    //status for adding new note form
    const [newNoteContant, setNewNoteContant] = useState('');
    const [newNoteImportant, setNewNoteImportant] = useState('');

    const newNoteContantRef = useRef(null);

    const fetchNotes = async() => {
        try {
            const response = await axios.get('http://localhost:3000/notes/');
            setNotes(response.data);
        } catch (error) {
            console.log('Failed to fetch notes:', error);
        }
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    const addNote = (event) => {
        event.preventDefault();
        // console.log(newNoteContant,newNoteImportant);

        //create a new note subject
        let noteObject = {
            id: notes.length + 1,
            content: newNoteContant,
            important: newNoteImportant === 'true',
        }
        // setNotes(notes.concat(noteObject));
        console.log('adding new note....');
        axios
            .post('http://localhost:3000/notes/', noteObject)
            .then(response => {
            console.log('note added successfully....');
        })

        //clear the inputs
        setNewNoteContant('');
        setNewNoteImportant('');

        newNoteContantRef.current.focus();
        fetchNotes();
    }


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
    
    const padding = {
        paddingRight : 15,
    }

  return (
      <Router>
          <div>
              <Link to="/" style={padding}>Dashboard</Link>
              <Link to="/read" style={padding}>Read Notes</Link>
              <Link to="/create" style={padding}>CreateNotes</Link>
              <Link to="/edit" style={padding}>Edit Note</Link>
              <Link to="/delete" style={padding}>Delete Note</Link>
          </div>
          <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/read' element={<ReadNotes showStatus={showStatus} handleStatusChange={handleStatusChange} notesFilter={notesFilter} />} />
              <Route path='/create' element={<CreateNotes addNote={addNote} newNoteContant={newNoteContant} newNoteImportant={newNoteImportant} newNoteContantRef={newNoteContantRef} setNewNoteContant={setNewNoteContant} setNewNoteImportant={setNewNoteImportant} />} />
              <Route path='/edit' element={<EditNote notes={notes} setNotes={ setNotes} />} />
              <Route path='/delete' element={<DeleteNote notes={notes} setNotes={ setNotes} />} />
              
          </Routes>
      </Router>
  )
}

export default App;