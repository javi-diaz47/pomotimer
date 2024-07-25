import { useEffect, useRef } from "react"
import beep from "/audio/short-beep-countdown.mp3"

export const usePomotimerUtils = () => {

  const audio = useRef<null | HTMLAudioElement>(null)

  useEffect(() => {
    audio.current = new Audio(beep)
  }, [])


  const onPlayAudio = () => {


    console.log('play')

    audio.current?.play()
  }

  const onPauseAudio = () => {
    audio.current?.pause()
  }

  const onCancelAudio = () => {
    audio.current?.load()
  }

  return {
    onPlayAudio,
    onPauseAudio,
    onCancelAudio,
  }


}
