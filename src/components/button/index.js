import "./style.css";
import React from "react";

function Button({ text }) {
  return (
    <div className="button-div">
      <button>{text}</button>
    </div>
  );
}

export default Button;
