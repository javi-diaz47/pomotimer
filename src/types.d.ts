export interface Time {
  min: number
  sec: number
}

export interface Icon {
  className?: string
}

export interface Pomotime {
  time: Time
  title: string
}

export interface Pomotimer {
  pomotimes: Pomotime[]
  completed: number
  total: number
}

export interface Card {
  id: uuid,
  icon: string,
  title: string,
  times: Pomotime[]
}
