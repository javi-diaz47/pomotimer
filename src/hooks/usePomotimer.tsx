import type { Pomotimer, Time } from "../types"
import { useEffect, useRef } from "react"
import { useTimer } from "./useTimer"
import { DEFAULT_POMOTIME } from "../constants"
import beep from "/audio/short-beep-countdown.mp3"

export const usePomotimer = (pomotime?: Pomotimer) => {
  const pomotimer = pomotime ? pomotime : DEFAULT_POMOTIME

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

  const onFinish = () => console.log('finish')

  const onCancel = () => {
    audio.current?.load()
  }

  const timer = useTimer({ pomotimer, onFinish, onStart, onUpdate, onCancel });


  return {
    ...timer
  }


}
