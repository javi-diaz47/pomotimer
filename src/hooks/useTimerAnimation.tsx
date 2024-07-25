import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ONE_SECOND } from '../constants'

export interface TimerAnimation {
  timeInSeconds: number
  title: string,
  play: () => void,
  pause: () => void,
  cancel: () => void,
  isActive: boolean
  isPause: boolean
}

export function useTimerAnimation({
  timeInSeconds,
  isActive,
  isPause,
  play,
  pause,
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
        duration: time - ONE_SECOND / 2,
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

    if (!isPause) {
      tl.current.pause()
      pause()
      return
    }

    tl.current.play()
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
