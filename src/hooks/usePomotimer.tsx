import { useEffect, useRef, useState } from "react"
import type { Pomotimer, Time } from "../types"
import { useTimer } from "./useTimer"
import { timeToString } from "../utils"
import { usePomotimerUtils } from "./usePomotimerUtils"

export const usePomotimer = (pomotimer: Pomotimer) => {

  const getPomotime = () => pomotimer.pomotimes[timeIndex]

  const [timeIndex, setTimeIndex] = useState(0)

  const [isActive, setIsActive] = useState(false)

  const { onPlayAudio, onPauseAudio, onCancelAudio } = usePomotimerUtils()

  const autostart = useRef(false)


  const onStartRound = () => {
    setIsActive(true)
    if (time && time.min === 0 && time.sec <= 3 && time.sec > 1) {
      onPlayAudio()
    }
  }

  const onUpdateRound = (time?: Time) => {
    if (time && time.min === 0 && time.sec === 3) {
      onPlayAudio()
    }
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

  const onPause = () => {
    onPauseAudio()
  }

  const onCancel = () => {
    setIsActive(false)
    onCancelAudio()
  }

  const timer = useTimer({
    totalTime: getPomotime().time,
    autostart: autostart.current,
    onStart: onStartRound,
    onUpdate: onUpdateRound,
    onFinish: onFinishRound,
    onPause,
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

