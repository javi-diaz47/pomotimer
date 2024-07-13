import type { Pomotime, Time } from "./types";

export const ONE_SECOND = 990;
export const DEFAULT_INTERVAL_ID = 0;
export const DEFAULT_TIME: Time = { min: 0, sec: 5 };
export const END_TIME: Time = { min: 0, sec: 0 };

export const DEFAULT_POMOTIME: Pomotime = {
  time: DEFAULT_TIME,
  breakTime: DEFAULT_TIME,
  title: "work",
  completedTime: 1,
  completedBreak: 1,
  onTime: true,
  total: 4,
};


