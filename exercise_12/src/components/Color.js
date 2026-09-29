import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Color() {
  const [color, setColor] = useState("Red");
  return (
    <div>
      <select
        className="form-select"
        style={{ width: 100 }}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option>Red</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Yellow</option>
      </select>
      <div style={{ height: 50, width: 50, backgroundColor: color }}></div>
    </div>
  );
}

export default Color;
