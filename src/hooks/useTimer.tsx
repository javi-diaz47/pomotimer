import type { Pomotime, Time } from "../types";
import { useEffect, useRef, useState } from "react";
import {
  DEFAULT_INTERVAL_ID,
  DEFAULT_TIME,
  END_TIME,
  MILISECONDS_PER_FRAME,
  ONE_SECOND,
} from "../constants";

interface UseTimer {
  totalTime: Time
  autostart: boolean
  onFinish?: (time?: Time) => void
  onUpdate?: (time?: Time) => void
  onCancel?: (time?: Time) => void
  onPause?: (time?: Time) => void
  onStart?: (time?: Time) => void
}

// timeInSeconds return the total time of a round mesure in seconds
export interface Timer {
  time: Time,
  play: () => void,
  pause: () => void,
  cancel: () => void,
  isActive: boolean
  isPause: boolean
}
export const isEndTime = (time: Time) =>
  time.min == END_TIME.min && time.sec == END_TIME.sec

export const useTimer = ({ autostart, totalTime, onFinish, onUpdate, onStart, onCancel, onPause }: UseTimer): Timer => {

  const [time, setTime] = useState<Time>(totalTime);

  const [inPause, setInPause] = useState(true);

  const intervalId = useRef(DEFAULT_INTERVAL_ID);

  let endDate: Date | null = null;

  const getEndDate = (remain: Time) => {
    endDate = new Date();
    endDate.setMinutes(endDate.getMinutes() + remain.min);
    endDate.setSeconds(endDate.getSeconds() + remain.sec + ONE_SECOND);
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

  const removeInterval = () => {
    clearInterval(intervalId.current);
    intervalId.current = DEFAULT_INTERVAL_ID;
  }

  const pause = () => {
    removeInterval()
    setInPause(true);

    if (onPause) onPause()
  };

  const cancel = () => {
    removeInterval()
    setTime(totalTime)
    setInPause(true)

    if (onCancel) onCancel()

  }

  const end = () => {
    removeInterval()

    if (onFinish) onFinish()

  }

  const play = () => {
    if (intervalId.current) {
      removeInterval()
      return;
    }

    if (inPause) {
      getEndDate(time);
      setInPause(false);
    } else {
      getEndDate(totalTime);
      setTime(totalTime)
    }

    if (onStart) onStart()

    intervalId.current = setInterval(() => {
      const remain = getRemainTime();
      setTime(() => {

        if (isEndTime(remain)) {

          end()
          return { min: 0, sec: 1 };
        }
        if (onUpdate) onUpdate(remain)
        return remain;
      });

      if (isEndTime(remain)) {
        end()
      }

    }, MILISECONDS_PER_FRAME);


  };

  useEffect(() => {

    setTime(totalTime)

    if (!autostart) return

    play()

    return () => {
      clearInterval(intervalId.current)
    }
  }, [totalTime])



  return {
    time,
    play,
    pause,
    cancel,
    isPause: inPause,
    isActive: Boolean(intervalId.current),
  };
};
