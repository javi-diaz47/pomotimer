import type { Time } from "../types";
import { useRef, useState } from "react";
import { timeToString } from "../utils";
import {
  ONE_SECOND,
  DEFAULT_INTERVAL_ID,
  DEFAULT_TIME,
  END_TIME,
} from "../constants";

interface UseTimer {
  pomotime: Time
  onFinish?: () => void
}

export interface Timer {
  time: string,
  play: () => void,
  pause: () => void,
  cancel: () => void,
  isActive: boolean
}

export const useTimer = ({ pomotime, onFinish }: UseTimer): Timer => {
  const [time, setTime] = useState<Time>(DEFAULT_TIME);
  const [inPause, setInPause] = useState(false);
  const intervalId = useRef(DEFAULT_INTERVAL_ID);
  const timeString = timeToString(time);

  let endDate: Date | null = null;

  const getEndDate = (remain: Time) => {
    endDate = new Date();
    endDate.setMinutes(endDate.getMinutes() + remain.min);
    endDate.setSeconds(endDate.getSeconds() + remain.sec);
  };

  const getRemainTime = (): Time => {
    if (endDate === null) return DEFAULT_TIME;

    const currDate = new Date();

    const remain = new Date(endDate.getTime() - currDate.getTime());

    return {
      min: remain.getMinutes(),
      sec: remain.getSeconds(),
    };
  };

  const pause = () => {
    clearInterval(intervalId.current);
    intervalId.current = DEFAULT_INTERVAL_ID;
    setInPause(true);
  };

  const cancel = () => {
    pause()
    setTime(pomotime)
  }

  const play = () => {
    if (intervalId.current) {
      pause();
      return;
    }

    if (inPause) {
      getEndDate(time);
      setInPause(false);
    } else {
      getEndDate(pomotime);
    }

    intervalId.current = setInterval(() => {
      setTime(() => {
        const remain = getRemainTime();
        if (remain.min === 0 && remain.sec === 0) {
          pause();
          if (onFinish) onFinish();
          return END_TIME;
        }
        return remain;
      });
    }, ONE_SECOND);
  };

  return {
    time: timeString,
    play,
    pause,
    cancel,
    isActive: Boolean(intervalId.current),
  };
};
