import { useEffect, useRef } from 'react'
import { type Timer } from '../hooks/useTimer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


interface TimerProps extends Timer {
  title: string
  completed: number
  total: number
}

export function Timer({
  timeInSeconds,
  time,
  isActive,
  play,
  cancel,
  title,
  completed,
  total,
}: TimerProps) {

  const tl = useRef<any>()
  const onFirstRender = useRef(true)

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
        duration: timeInSeconds,
        ease: 'linear'
      }).to('#spinner', {
        r: 250,
        duration: 0.5,
      }).set('#spinner', {
        strokeDasharray: "0 2390"
      })

    if (onFirstRender.current) {
      tl.current.pause()
    } else {
      tl.current.play()
    }


  }, [title])

  useEffect(() => {
    onFirstRender.current = false
  }, [])

  const onPlay = () => {

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


  return (
    <section className={`flex flex-col items-center gap-8`}>
      <div className='relative w-64 aspect-square -z-10 ' >
        <div className='relative w-64 aspect-square bg-white rounded-full flex justify-center items-center shadow-[4px_4px_30px_0_#d86971]' >
          <div className=''>
            <h2 id="timer" className="text-7xl text-center">
              {time}
            </h2>
            <div className="grid place-items-center absolute left-1/2 -translate-x-1/2">
              <p className='text-center text-3xl'>
                {title}
              </p>
              <span className="text-lg">
                {completed}/{total}
              </span>
            </div>
          </div>
          <div className='w-[17.5rem] absolute -rotate-90 -z-10'>
            <svg viewBox="0 0 800 800" className="stroke-red-400">
              <circle id="spinner" cx="400px" cy="400px" r="30px" strokeWidth="45px" fill='none'
                strokeDasharray='0 2390' strokeLinecap='round'>
              </circle>
            </svg>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div className="flex flex-col">
        <button
          onClick={onPlay}
          className="w-56 bg-red-400 py-2 px-12 rounded-full font-bold">
          {!isActive ? 'Start' : 'Pause'}
        </button>
        <button
          onClick={onCancel}
          className={`w-56 bg-white text-red-400 py-2 px-12 rounded-full
          transition-transform ease-out ${isActive ? 'scale-1' : 'scale-0 '}`}>
          Cancel
        </button>
      </div>
    </section >
  )
}
