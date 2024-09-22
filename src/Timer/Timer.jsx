// src/Stopwatch.js
import React, { useState, useEffect } from 'react';
import styles from './Timer.css';  // Importing CSS module

const Timer = () => {
  const [time, setTime] = useState(0);  // Time in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);  // Increment time every second
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);      // Reset time to 0
    setIsRunning(true);  // Automatically start the stopwatch again
  };

  // Helper function to format time in MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return (
    // dndnd
    <div>
      <h1 className={styles.timer}>Stopwatch</h1>
    
      <p className={styles.timer}><b>Time:</b>  {formatTime(time)}</p>
      <div >
	  {!isRunning ? (
          <button className={styles.button} onClick={handleStart}>
            Start
          </button>
        ) : (
          <button className={styles.button} onClick={handleStop}>
            Stop
          </button>
        )}
	    	  
        <button className={styles.button} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
