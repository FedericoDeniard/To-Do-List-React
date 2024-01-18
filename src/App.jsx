import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

import Note from "./components/notes";
import AddNoteInput from "./components/addNote";

function App() {
  const [totalNotes, setTotalNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setTotalNotes(storedNotes);
  }, []);

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

  const addnote = () => {
    if (noteContent && noteTitle !== "") {
      const newNote = {
        title: noteTitle,
        content: noteContent,
        key: uuidv4(),
      };
      setTotalNotes([...totalNotes, newNote]);
      resetAddValues();
      localStorage.setItem("notes", JSON.stringify([...totalNotes, newNote]));
    }
  };

  const deletenote = (key) => {
    setTotalNotes((prevNotes) => prevNotes.filter((note) => note.key !== key));
    const updatedNotes = totalNotes.filter((note) => note.key !== key);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
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
        {totalNotes.map((note) => (
          <Note
            key={note.key}
            title={note.title}
            content={note.content}
            deleteOnClick={() => deletenote(note.key)}
            edit={() => editNote}
          />
        ))}
      </div>
    </>
  );
}

export default App;
