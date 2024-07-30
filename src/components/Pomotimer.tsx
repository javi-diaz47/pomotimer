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

  //TODO:
  //Card must have the total rounds
  const pomotimerFromCard = (card: CardType): Pomotimer => {
    return {
      pomotimes: card.times,
      completed: 1,
      total: 1
    }
  }

  //  const [pomotimer, setPomotimer] = useState(pomotimerFromCard(card))

  const getPomotimer = () => pomotimerFromCard(card)

  const onCard = (card: CardType) => {
    setCard(card)
    //   setPomotimer(pomotimerFromCard(card))
    //console.log(pomotimerFromCard(card))
  }


  const { time, timeInSeconds, isActive, isPause, title, completed, total, play, pause, cancel } = usePomotimer(getPomotimer())

  const { onTogglePlay, onCancel } = useTimerAnimation({ timeInSeconds, isActive, isPause, play, pause, cancel, title })


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
      <TimerControls isActive={isActive} isPause={isPause} onTogglePlay={onTogglePlay} onCancel={onCancel} />
    </section >
  )
}

