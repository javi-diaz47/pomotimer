import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export interface TimerAnimation {
  timeInSeconds: number
  title: string,
  play: () => void,
  cancel: () => void,
  isActive: boolean
}

export function useTimerAnimation({
  timeInSeconds,
  isActive,
  play,
  cancel,
}: TimerAnimation) {

  const tl = useRef<any>()
  const onFirstRender = useRef(true)
  const [time, setTime] = useState(timeInSeconds)

  useGSAP(() => {

    tl.current = gsap.timeline()
      .set('#spinner', {
        strokeDasharray: "0 2390",
        cx: 200,
        r: 300,
      }).to('#spinner', {
        cx: 400,
        r: 380,
        duration: 0.5,
      }).to('#spinner', {
        strokeDasharray: "2390 2390",
        duration: time,
        ease: 'linear'
      }).to('#spinner', {
        r: 250,
        duration: 0.5,
      }).set('#spinner', {
        strokeDasharray: "0 2390"
      })


    if (onFirstRender.current || !isActive) {
      tl.current.pause()
      return
    }

    tl.current.play()

  }, [time])

  useEffect(() => {
    setTime(timeInSeconds)
  }, [timeInSeconds])

  useEffect(() => {
    onFirstRender.current = false
  }, [])

  const onTogglePlay = () => {

    if (isActive) {
      tl.current.pause()
    } else {

      tl.current.play()
    }

    play()

  }

  const onCancel = () => {
    tl.current.seek(0)
    tl.current.pause()

    cancel()
  }

  return {
    onTogglePlay,
    onCancel
  }

}
