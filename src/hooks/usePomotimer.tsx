import { useEffect, useRef, useState } from "react"
import type { Pomotimer } from "../types"
import { useTimer } from "./useTimer"
import { timeToString } from "../utils"

export const usePomotimer = (pomotimer: Pomotimer) => {

  const getPomotime = () => pomotimer.pomotimes[timeIndex]

  const [timeIndex, setTimeIndex] = useState(0)

  const [isActive, setIsActive] = useState(false)

  const autostart = useRef(false)


  const onStartRound = () => {
    setIsActive(true)
  }

  const onFinishRound = () => {
    if (!autostart.current) autostart.current = true

    setIsActive(false)

    if (timeIndex === pomotimer.pomotimes.length - 1) {
      setTimeIndex(0)
      return
    }

    const newTimeIndex = timeIndex + 1
    setTimeIndex(newTimeIndex)

  }

  const onCancel = () => {
    setIsActive(false)
  }

  const timer = useTimer({
    totalTime: getPomotime().time,
    autostart: autostart.current,
    onStart: onStartRound,
    onFinish: onFinishRound,
    onCancel
  });


  const { time, isPause, play, pause, cancel } = timer


  return {
    time: timeToString(time),
    isActive,
    isPause,
    play,
    pause,
    cancel,
    timeInSeconds: pomotimer.pomotimes[timeIndex].time.min * 60 + pomotimer.pomotimes[timeIndex].time.sec,
    title: getPomotime().title,
    total: pomotimer.total,
    completed: pomotimer.completed,

  }
}

