import "./index.css";
import addSVG from "./images/add.svg";
import { useState } from "react";

function AddNoteInput({ onClick, addTitle, addContent, onSubmit }) {
  const resetAddValues = (e) => {
    e.preventDefault();
    e.target.title.value = "";
    e.target.content.value = "";
  };

  return (
    <form
      className="searchBox"
      onSubmit={(e) => {
        onSubmit();
        resetAddValues(e);
      }}
      required
    >
      <input
        className="searchInput"
        type="text"
        name="title"
        placeholder="Title"
        onChange={addTitle}
      />
      <input
        className="searchInput"
        type="text"
        name="content"
        placeholder="Text"
        onChange={addContent}
        required
      />
      <button className="searchButton" href="#" onClick={onClick}>
        <img className="addSVG" src={addSVG} />
      </button>
    </form>
  );
}
export default AddNoteInput;
