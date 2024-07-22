interface TimerProps {
  time: string
  title: string
  completed: number
  total: number
}

export function Timer({ time, title, completed, total }: TimerProps) {
  return (
    <div className='relative w-64 aspect-square -z-10 ' >
      <div className='relative w-64 aspect-square bg-white dark:bg-highlight-low dark:text-text  rounded-full flex justify-center items-center shadow-[4px_4px_30px_0_#d86971] dark:shadow-love' >
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
          <svg viewBox="0 0 800 800" className="stroke-red-400 dark:stroke-love">
            <circle id="spinner" cx="400px" cy="400px" r="30px" strokeWidth="45px" fill='none'
              strokeDasharray='0 2390' strokeLinecap='round'>
            </circle>
          </svg>
        </div>
      </div>
    </div>

  )
}
