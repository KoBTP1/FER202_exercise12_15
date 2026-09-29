import React, { useState } from "react";

function Input() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <h3>Input text: {text}</h3>
    </div>
  );
}

export default Input;
