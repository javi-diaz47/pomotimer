import { useState } from "react";
import type { Pomotime } from "../types";
import { Timer } from "./Timer";
import { DEFAULT_POMOTIME } from "../constants";
import { useTimer } from "../hooks/useTimer";

export function Pomotimer() {

  const [pomotime, setPomotime] = useState<Pomotime>(DEFAULT_POMOTIME)

  const currTime = pomotime.onTime ? pomotime.time : pomotime.breakTime
  const currTitle = pomotime.onTime ? pomotime.title : 'break'


  const onFinish = () => {
    console.log('hi')
    let newPomotime = pomotime
    if (pomotime.onTime) {
      newPomotime.completedTime = pomotime.completedTime + 1
      newPomotime.onTime = false
    } else {
      newPomotime.completedBreak = pomotime.completedBreak + 1
      newPomotime.onTime = true
    }
    setPomotime(newPomotime)
  }

  const timer = useTimer({ pomotime: currTime, onFinish });

  return (
    <div>
      <Timer  {...timer} title={currTitle} completed={pomotime.completedTime} total={pomotime.total} />
    </div>
  )
}

