namespace Card {
  export interface Props {
    icon: string,
    title: string,
    times: [number, number]
  }
}

export function Card({ icon, title, times }: Card.Props) {
  return (
    <div className="flex justify-around items-center bg-white rounded-2xl shadow-md py-3">
      <div className="w-fit aspect-square rounded-full bg-red-300 p-2">
        <span>{icon}</span>
      </div>
      <span className="capitalize text-primary font-extrabold">{title}</span>
      <span className="text-red-300 font-bold">{times[0]}/{times[1]}</span>
    </div>
  )
}

