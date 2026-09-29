import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Countdown({ value = 5 }) {
  const [time, setTime] = useState(value);
  useEffect(() => {
    if (time <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);
  return (
    <div>
      Countdown
      <h4>Time Remaining: {time}</h4>
    </div>
  );
}

export default Countdown;
