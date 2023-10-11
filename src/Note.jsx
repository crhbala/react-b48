function Note({ note }) {
  // const note = props.note;
//    conditional rendering
    return (
        <li> {note.content}{note.important && '*'} </li>
    )
}

export default Note;