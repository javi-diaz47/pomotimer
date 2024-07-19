namespace Card {
  export interface Props {
    icon: string,
    title: string,
    times: [number, number]
  }
}

export function Card({ icon, title, times }: Card.Props) {
  return (
    <div className="w-full px-4 flex justify-center">
      <div className="w-full max-w-lg flex justify-around items-center gap-4 py-2 text-2xl rounded-2xl shadow-md">
        <div className="w-fit aspect-square rounded-full bg-red-300 p-2">
          <span>{icon}</span>
        </div>
        <span className="capitalize text-primary font-extrabold text-3xl">{title}</span>
        <span className="text-red-300 font-bold">{times[0]}/{times[1]}</span>
      </div>
    </div>
  )
}

