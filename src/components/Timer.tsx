import { DEFAULT_TIME } from "../constants";
import { useTimer } from "../hooks/useTimer";

export function Timer() {
  const { time, isActive, play, pause } = useTimer(DEFAULT_TIME);

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
        onClick={play}
        className="bg-red-300 py-2 px-12 rounded-full font-bold"
      >
        Start
      </button>
      <button
        onClick={pause}
        className={`bg-red-300 py-2 px-12 rounded-full font-bold
          transition-transform ease-out ${isActive ? "scale-1" : "scale-0"}`}
      >
        Pause
      </button>
    </div>
  );
}
