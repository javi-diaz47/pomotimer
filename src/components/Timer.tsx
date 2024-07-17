import { type Timer } from '../hooks/useTimer'

interface TimerProps extends Timer {
  title: string
  completed: number
  total: number
}

export function Timer({
  time,
  isActive,
  play,
  cancel,
  title,
  completed,
  total,
}: TimerProps) {
  return (
    <section className={`flex flex-col items-center ${isActive ? 'gap-32' : 'gap-8'}`}>

      <div className='w-64 aspect-square bg-white rounded-full flex justify-center items-center relative shadow-[4px_4px_30px_0_#d86971]' >
        <div className=''>
          <h2 id="timer" className="text-7xl text-center">
            {time}
          </h2>
          <div className=" grid place-items-center absolute left-1/2 -translate-x-1/2">
            <p className='text-center text-3xl'>
              {title}
            </p>
            <span className="text-lg">
              {completed}/{total}
            </span>
          </div>
        </div>
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
