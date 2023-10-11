function Note({ note }) {
  // const note = props.note;
//    conditional rendering
    return (
        <li> {note.important ? note.content + '*' :note.content} </li>
    )
}

export default Note;