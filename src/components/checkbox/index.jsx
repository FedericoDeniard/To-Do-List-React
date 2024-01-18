import { useState } from "react";
import "./index.css";

function Checkbox({ checked, onChange }) {
  return (
    <label className="checkbox-container">
      <input
        className="custom-checkbox"
        checked={checked}
        onChange={onChange}
        type="checkbox"
      />
      <span className="checkmark"></span>
    </label>
  );
}
export default Checkbox;
