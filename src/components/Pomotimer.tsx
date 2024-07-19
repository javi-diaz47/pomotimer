import type { Pomotimer } from "../types";
import { Timer } from "./Timer";
import { TimerControls } from "./TimerControls";
import { usePomotimer } from "../hooks/usePomotimer";
import { useTimerAnimation } from "../hooks/useTimerAnimation";

export function Pomotimer() {

  const { time, timeInSeconds, isActive, title, completed, total, play, cancel } = usePomotimer()

  const { onTogglePlay, onCancel } = useTimerAnimation({ timeInSeconds, isActive, play, cancel, title })

  return (
    <section className={`flex flex-col items-center gap-8`}>
      <Timer time={time} title={title} completed={completed} total={total} />
      <div>
      </div>
      <TimerControls isActive={isActive} onTogglePlay={onTogglePlay} onCancel={onCancel} />
    </section >
  )
}

