import type { Pomotimer } from "../types";
import { Timer } from "./Timer";
import { TimerControls } from "./TimerControls";
import { usePomotimer } from "../hooks/usePomotimer";
import { useTimerAnimation } from "../hooks/useTimerAnimation";
import { Card } from "./Card";
import { DEFAULT_CARDS } from "../constants";
import { twMerge } from "tailwind-merge";

export function Pomotimer() {

  const { time, timeInSeconds, isActive, title, completed, total, play, cancel } = usePomotimer()

  const { onTogglePlay, onCancel } = useTimerAnimation({ timeInSeconds, isActive, play, cancel, title })

  const cards = DEFAULT_CARDS

  return (
    <section className={twMerge("flex flex-col items-center gap-8", isActive && "gap-44")}>
      <Timer time={time} title={title} completed={completed} total={total} />

      <ul className={twMerge("flex flex-col gap-4", isActive && "sr-only")}>
        {
          cards.map(({ id, ...card }) => (
            <li key={id}>
              <Card {...card} />
            </li>
          ))
        }
      </ul>

      <TimerControls isActive={isActive} onTogglePlay={onTogglePlay} onCancel={onCancel} />
    </section >
  )
}

