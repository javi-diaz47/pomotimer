export interface Time {
  min: number;
  sec: number;
}

export interface Pomotime {
  time: Time,
  title: string,
}

export interface Pomotimer {
  pomotimes: Pomotime[],
  onTime: boolean,
  completed: number,
  total: number
}
