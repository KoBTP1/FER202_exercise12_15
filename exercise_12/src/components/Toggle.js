import React, { useState } from "react";

function Toggle() {
  const [tog, setTog] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setTog(!tog);
        }}
      >
        {tog ? "Show" : "Hide"}
      </button>
      {!tog && <h3>Toggle me!</h3>}
    </div>
  );
}

export default Toggle;
