import "./index.css";
import editSVG from "./images/edit.svg";
import deleteSVG from "./images/delete.svg";
import Checkbox from "../checkbox";

import { useState } from "react";

function Notes({ title, content, deleteOnClick }) {
  const [isChecked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    console.log(isChecked);
  };

  return (
    <div className="card">
      <div className={`text ${isChecked ? "checked" : ""}`}>
        <span>{title}</span>
        <p className={`subtitle ${isChecked ? "checked" : ""}`}>{content}</p>
      </div>
      <div className="icons">
        <a className="btn" href="#">
          <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        </a>
        <a className="btn" href="#">
          <img className="svg-icon" src={editSVG} />
        </a>
        <a className="btn" href="#" onClick={deleteOnClick}>
          <img className="svg-icon" src={deleteSVG} />
        </a>
      </div>
    </div>
  );
}
export default Notes;
