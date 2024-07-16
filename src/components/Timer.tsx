import { DEFAULT_INTERVAL_ID } from "../constants";
import { useTimer } from "../hooks/useTimer";

export function Timer() {
  const { time, isActive, onTimer } = useTimer();

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
        className="bg-red-300 py-2 px-12 rounded-full font-bold text-2xl"
      >
        {!isActive ? "Start" : "Pause"}
      </button>
    </div>
  );
}
