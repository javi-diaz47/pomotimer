import type { Time } from "../types";
import { useState } from "react";
import { timeToString } from "../utils";
import {
  ONE_SECOND,
  DEFAULT_INTERVAL_ID,
  DEFAULT_TIME,
  END_TIME,
} from "../constants";

export const useTimer = () => {
  const [time, setTime] = useState<Time>(DEFAULT_TIME);
  const [intervalId, setIntervalId] = useState(DEFAULT_INTERVAL_ID);

  const timeString = timeToString(time);

  const isActive = () => Boolean(intervalId)

  const getRemainTime = ({ min, sec }: Time): Time => {
    if (min == 0 && sec == 0) return { min, sec };

    if (sec == 0) {
      return {
        min: min - 1,
        sec: 59,
      };
    }

    return {
      min,
      sec: sec - 1,
    };
  };

  const onTimer = () => {
    //on puase
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(DEFAULT_INTERVAL_ID);
      return;
    }

    //on time
    const newIntervalId = setInterval(() => {
      setTime((prev) => {
        if (prev === END_TIME) {
          onTimer();
          return END_TIME;
        }

        return getRemainTime(prev);
      });
    }, ONE_SECOND);

    setIntervalId(newIntervalId);
  };

  return {
    time: timeString,
    onTimer,
    isActive
  };
};
