import { useState, useEffect } from "react";

import './clock.css'

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());

    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div className="clock__container container">{time}</div>;
}

export default Clock;
