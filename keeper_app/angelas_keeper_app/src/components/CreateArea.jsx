import React, { useState } from "react";
import { MdAdd } from 'react-icons/md';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [div, setdiv] = useState(false);
  const [rows, setrows] = useState(1);



  function handleChange(event) {
    const { name, value } = event.target;


    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setdiv(false);
    event.preventDefault();
  }


  function clicked()
  {
    setdiv(true);
    setrows(3);

  }


  return (
    <div>
      <form className="create-note">
        <input
          name="title"

          style={{display: div ? 'inline-block' : 'none'}}
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onClick = {clicked}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={div ? 3 : 1}
        />
        <button onClick={submitNote} style={{display: div ? 'inline-block' : 'none'}}><MdAdd size={24} /></button>
      </form>
    </div>
  );
}

export default CreateArea;
