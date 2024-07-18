import { useEffect, useRef, useState } from 'react'
import { type Timer } from '../hooks/useTimer'
import { setSourceMapRange } from 'typescript'
import { twMerge } from 'tailwind-merge'

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

  // TODO 
  // the stop the animation when the timer stop

  const animation = useRef<{ animation: string }>({ animation: '' })

  useEffect(() => {
    if (isActive) {
      animation.current = {
        animation: `
          in 0.1s cubic-bezier(0.5, 0.79, 0.74, 1.02) forwards,
          progress ${timeInSeconds}s linear 0.1s forwards,
          out 0.1s ease-in-out ${timeInSeconds}s forwards
       `
      }
      return
    }
    animation.current = {
      animation: ''
    }

  }, [isActive])


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
              <circle style={animation.current} cx="400px" cy="400px" r="30px" strokeWidth="45px" fill='none'
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
          onClick={play}
          className="w-56 bg-red-400 py-2 px-12 rounded-full font-bold">
          {!isActive ? 'Start' : 'Pause'}
        </button>
        <button
          onClick={cancel}
          className={`w-56 bg-white text-red-400 py-2 px-12 rounded-full
          transition-transform ease-out ${isActive ? 'scale-1' : 'scale-0 '}`}>
          Cancel
        </button>
      </div>
    </section >
  )
}
