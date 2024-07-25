import type { Card, Pomotime, Pomotimer, Time } from "./types";

export const ONE_SECOND = 1;
export const MILISECONDS_PER_FRAME = 250;
export const DEFAULT_INTERVAL_ID = 0;
export const DEFAULT_TIME: Time = { min: 0, sec: 5 };
export const END_TIME: Time = { min: 0, sec: 0 };

export const WORK_TIME: Pomotime = {
  time: { min: 0, sec: 10 },
  title: 'Work',
}

export const BREAK_TIME: Pomotime = {
  time: { min: 0, sec: 15 },
  title: 'Break',
}

export const DEFAULT_POMOTIME: Pomotimer = {
  pomotimes: [WORK_TIME, BREAK_TIME],
  completed: 1,
  total: 2,
};

export const DEFAULT_CARDS: Card[] = [
  {
    id: crypto.randomUUID(),
    icon: "💼",
    title: "work",
    times: [
      { time: { min: 25, sec: 0 }, title: 'Work' },
      { time: { min: 5, sec: 0 }, title: 'Break' }
    ]
  },
  {
    id: crypto.randomUUID(),
    icon: "📖",
    title: "Read",
    times: [
      { time: { min: 30, sec: 0 }, title: 'Read' },
      { time: { min: 5, sec: 0 }, title: 'Break' }
    ]
  },
]


