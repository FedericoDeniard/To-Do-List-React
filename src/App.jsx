import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

import Notes from "./components/notes";
import AddNoteInput from "./components/addNote";

function App() {
  const [totalNotes, setTotalNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const getNoteTitle = (e) => {
    setNoteTitle(e.target.value);
  };

  const getNoteContent = (e) => {
    setNoteContent(e.target.value);
  };

  const resetAddValues = () => {
    setNoteTitle("");
    setNoteContent("");
  };

  const addnote = (e) => {
    if (noteContent && noteTitle !== "") {
      const newNote = (
        <Notes
          title={noteTitle}
          content={noteContent}
          key={uuidv4()}
          deleteOnClick={() => deletenote(newNote.key)}
        />
      );
      setTotalNotes([...totalNotes, newNote]);
    }
  };

  const deletenote = (key) => {
    setTotalNotes((prevNotes) => prevNotes.filter((note) => note.key !== key));
  };

  return (
    <>
      <div className="notes-container">
        <h1>My notes</h1>
        <AddNoteInput
          onClick={addnote}
          addTitle={getNoteTitle}
          addContent={getNoteContent}
          onSubmit={resetAddValues}
        />
        {totalNotes}
      </div>
    </>
  );
}

export default App;
