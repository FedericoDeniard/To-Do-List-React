import "./index.css";
import editSVG from "./images/edit.svg";
import deleteSVG from "./images/delete.svg";
import Checkbox from "../checkbox";

import { useState } from "react";

function Notes({ title, content, deleteOnClick }) {
  const [isChecked, setChecked] = useState(false);
  const [editNote, changeEditNote] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    console.log(isChecked);
  };
  const editFunction = () => {
    changeEditNote(!editNote);
    console.log(editNote);
  };

  const settingNewTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const settingNewContent = (e) => {
    setNewContent(e.target.value);
  };

  return (
    <div className="card">
      <div className={`text ${isChecked ? "checked" : ""}`}>
        {editNote === true ? (
          <input
            placeholder="New Title"
            className="editTitle text"
            type="text"
            onChange={settingNewTitle}
          ></input>
        ) : (
          <span>{newTitle === "" ? title : newTitle}</span>
        )}
        {editNote === true ? (
          <input
            placeholder="New content"
            className="editContent subtitle"
            type="text"
            onChange={settingNewContent}
          ></input>
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
          <img className="svg-icon" src={editSVG} onClick={editFunction} />
        </a>
        <a className="btn" href="#" onClick={deleteOnClick}>
          <img className="svg-icon" src={deleteSVG} />
        </a>
      </div>
    </div>
  );
}
export default Notes;
