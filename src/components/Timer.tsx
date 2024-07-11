import { useState } from "react";

export function Timer() {
  const ONE_SECOND = 1000;
  const DEFAULT_INTERVAL_ID = 0;

  const [time, setTime] = useState(10);
  const [intervalId, setIntervalId] = useState(DEFAULT_INTERVAL_ID);

  const onTimer = () => {
    //on puase
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(DEFAULT_INTERVAL_ID);
      return;
    }

    //on time
    const newIntervalId = setInterval(() => {
      setTime((prev) => {
        if (prev - 1 < 0) {
          onTimer();
          return 0;
        }
        return prev - 1;
      });
    }, ONE_SECOND);

    setIntervalId(newIntervalId)
  };

  return (
    <div>
      <h2 id="timer" className="text-6xl">
        {time}
      </h2>
      <div className="text-4xl">
        <p>Work</p>
        <span className="text-2xl">1/4</span>
      </div>
      <button
        onClick={onTimer}
        className="bg-red-300 py-2 px-12 rounded-full font-bold"
      >
        {intervalId === DEFAULT_INTERVAL_ID ? "Start" : "Pause"}
      </button>
    </div>
  );
}
