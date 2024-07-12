export interface Time {
  min: number;
  sec: number;
}

export interface Pomotime {
  pomotime: {
    time: Time,
    title: string
    completed: number,
    total: number
  },
}
