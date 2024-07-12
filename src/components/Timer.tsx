import { DEFAULT_TIME } from "../constants";
import { useTimer } from "../hooks/useTimer";
import type { Pomotime } from "../types";

export function Timer({ pomotime }: Pomotime) {
  const { time, isActive, play, cancel } = useTimer(pomotime.time);

  return (
    <div>
      <h2 id="timer" className="text-6xl">
        {time}
      </h2>
      <div className="text-4xl">
        <p>{pomotime.title}</p>
        <span className="text-2xl">1/4</span>
      </div>
      <div className="flex flex-col">
        <button
          onClick={play}
          className="w-56 bg-red-300 py-2 px-12 rounded-full font-bold"
        >
          {!isActive ? 'Start' : 'Pause'}
        </button>
        <button
          onClick={cancel}
          className={`w-56 bg-white text-red-300 py-2 px-12 rounded-full font-bold
          transition-transform ease-out ${isActive ? "scale-1" : "scale-0 "}`}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
