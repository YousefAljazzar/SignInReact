import "./style.css";
import React from "react";

function Input({ type, value, placeholder, onChange }) {
  return (
    <div className="input-div">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default Input;
