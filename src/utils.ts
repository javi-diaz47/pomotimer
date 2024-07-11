import type {Time} from './types'
export const timeToString = (time: Time) => {
  return `${time.min < 10 ? "0" : ""}${time.min}:${time.sec < 10 ? "0" : ""}${time.sec}`;
};
