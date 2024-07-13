export interface Time {
  min: number;
  sec: number;
}

export interface Pomotime {
  time: Time,
  breakTime: Time,
  title: string,
  completedTime: number,
  completedBreak: number,
  onTime: boolean,
  total: number
}
