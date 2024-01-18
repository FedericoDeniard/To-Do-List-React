import "./index.css";
import editSVG from "./images/edit.svg";
import saveSVG from "./images/save.svg";
import deleteSVG from "./images/delete.svg";
import Checkbox from "../checkbox";

import { useState, useEffect } from "react";

function Note({ title, content, deleteOnClick }) {
  const storageKey = `storageChecked_${title}`;
  const [isChecked, setChecked] = useState(false);
  const [editNote, changeEditNote] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setChecked(newChecked);
    localStorage.setItem(storageKey, newChecked.toString());
  };

  const editFunction = () => {
    changeEditNote(!editNote);
  };

  const settingNewTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const settingNewContent = (e) => {
    setNewContent(e.target.value);
  };

  useEffect(() => {
    const storedChecked = localStorage.getItem(storageKey);
    if (storedChecked !== null) {
      setChecked(storedChecked === "true");
    }
  }, [storageKey]);

  return (
    <div className="card">
      <div className={`text ${isChecked ? "checked" : ""}`}>
        {editNote === true ? (
          <input
            placeholder="New Title"
            className="editTitle text"
            type="text"
            value={newTitle}
            onChange={settingNewTitle}
          />
        ) : (
          <span>{newTitle === "" ? title : newTitle}</span>
        )}
        {editNote === true ? (
          <input
            placeholder="New content"
            className="editContent subtitle"
            type="text"
            value={newContent}
            onChange={settingNewContent}
          />
        ) : (
          <p className={`subtitle ${isChecked ? "checked" : ""}`}>
            {newContent === "" ? content : newContent}
          </p>
        )}
      </div>
      <div className="icons">
        <a className="btn" href="#">
          <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        </a>
        <a className="btn" href="#">
          <img
            className="svg-icon"
            src={editNote === true ? saveSVG : editSVG}
            onClick={editFunction}
            alt={editNote === true ? "Save" : "Edit"}
          />
        </a>
        <a className="btn" href="#" onClick={deleteOnClick}>
          <img className="svg-icon" src={deleteSVG} alt="Delete" />
        </a>
      </div>
    </div>
  );
}

export default Note;
