import type { Card, Pomotime } from "../types"

interface CardProps extends Omit<Card, 'id'> {
  onCard: () => void
}

export function Card({ icon, title, times, onCard }: CardProps) {

  //TODO:
  //Create a function that return the two times

  const getTimeToString = ({ time }: Pomotime) => {
    return `${time.min}${time.sec ? ':' + time.sec : ''} `
  }

  return (
    <button className="w-full min-w-96 px-4 flex justify-center" onClick={onCard}>
      <div className="w-full bg-white dark:bg-surface max-w-lg flex justify-around items-center gap-4 py-2 text-2xl rounded-2xl shadow-md dark:shadow-overlay">
        <div className="w-fit aspect-square rounded-full bg-red-300 dark:bg-love p-2">
          <span>{icon}</span>
        </div>
        <span className="capitalize text-primary font-extrabold text-3xl dark:text-text">{title}</span>
        <span className="text-red-300 dark:text-love font-bold">{getTimeToString(times[0])}/ {getTimeToString(times[1])}</span>
      </div>
    </button>
  )
}

