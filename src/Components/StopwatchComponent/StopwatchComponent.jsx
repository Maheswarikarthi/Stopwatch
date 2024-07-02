import React, { useState, useRef } from "react";
import "./StopwatchComponent.css";
const StopwatchComponent = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (time) => {
    const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
    const minutes = `0${Math.floor(time / 60000) % 60}`.slice(-2);
    return `${minutes}:${seconds}`;
  };

  const start = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
      setIsRunning(true);
    }
  };

  const stop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="Big">
        <img src="timericon.jpeg" />
        <p>Timer</p>
      </div>

      <div className="time-display">{formatTime(time)}</div>
      <div className="buttons">
        <button onClick={start} className="start">
          Start
        </button>
        <button onClick={stop} className="stop">
          Stop
        </button>
        <button onClick={reset} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopwatchComponent;
