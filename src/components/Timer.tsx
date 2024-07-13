import { DEFAULT_TIME } from "../constants";
import { type Timer } from "../hooks/useTimer";

interface TimerProps extends Timer {
  title: string,
  completed: number
  total: number
}

export function Timer({ time, isActive, play, cancel, title, completed, total }: TimerProps) {

  return (
    <div>
      <h2 id="timer" className="text-6xl">
        {time}
      </h2>
      <div className="text-4xl">
        <p>{title}</p>
        <span className="text-2xl">{completed}/{total}</span>
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
