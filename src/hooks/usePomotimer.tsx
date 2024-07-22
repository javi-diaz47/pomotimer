import type { Pomotimer, Time } from "../types"
import { useEffect, useRef, useState } from "react"
import { useTimer } from "./useTimer"
import beep from "/audio/short-beep-countdown.mp3"

export const usePomotimer = (pomotimer: Pomotimer) => {

  const audio = useRef<null | HTMLAudioElement>(null)

  useEffect(() => {
    audio.current = new Audio(beep)
  }, [])


  const onStart = () => { }

  const onUpdate = (time: Time | undefined) => {

    if (!audio.current) return;

    if (time && time.min === 0 && time.sec == 3) {
      audio.current.play()
    }
  }

  const onFinish = () => { }

  const onCancel = () => {
    audio.current?.load()
  }

  const timer = useTimer({ pomotimer, onFinish, onStart, onUpdate, onCancel });

  //console.log('usePomotimer <-', timer.title, pomotimer.pomotimes[0].title)
  return {
    ...timer
  }


}
