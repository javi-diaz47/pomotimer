import type { Card as CardType, Pomotimer } from "../types";
import { Timer } from "./Timer";
import { TimerControls } from "./TimerControls";
import { usePomotimer } from "../hooks/usePomotimer";
import { useTimerAnimation } from "../hooks/useTimerAnimation";
import { Card } from "./Card";
import { DEFAULT_CARDS } from "../constants";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export function Pomotimer() {

  const cards = DEFAULT_CARDS

  const [card, setCard] = useState<CardType>(DEFAULT_CARDS[0])


  const pomotimerFromCard = (card: CardType): Pomotimer => {
    return {
      pomotimes: card.times,
      completed: 1,
      total: 4
    }
  }

  const [pomotimer, setPomotimer] = useState(pomotimerFromCard(card))

  const onCard = (card: CardType) => {
    setCard(card)
    setPomotimer(pomotimerFromCard(card))
  }


  const { time, timeInSeconds, isActive, title, completed, total, play, cancel } = usePomotimer(pomotimer)

  const { onTogglePlay, onCancel } = useTimerAnimation({ timeInSeconds, isActive, play, cancel, title })


  return (
    <section className={twMerge("flex flex-col items-center gap-8", isActive && "gap-44")}>
      <Timer time={time} title={title} completed={completed} total={total} />

      <ul className={twMerge("flex flex-col gap-4", isActive && "sr-only")}>
        {
          cards.map((card) => (
            <Card key={card.id}
              icon={card.icon}
              title={card.title}
              times={card.times}
              onCard={() => onCard(card)}
            />
          ))
        }
      </ul>

      <TimerControls isActive={isActive} onTogglePlay={onTogglePlay} onCancel={onCancel} />
    </section >
  )
}

