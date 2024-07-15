import type { Pomotimer, Time } from "../types";
import { useEffect, useRef, useState } from "react";
import { timeToString } from "../utils";
import {
  DEFAULT_INTERVAL_ID,
  DEFAULT_TIME,
  END_TIME,
  MILISECONDS_PER_FRAME,
  ONE_SECOND,
} from "../constants";

interface UseTimer {
  pomotimer: Pomotimer
  onFinish?: (time?: Time) => void
  onUpdate?: (time?: Time) => void
  onCancel?: (time?: Time) => void
  onStart?: (time?: Time) => void
}

export interface Timer {
  time: string,
  title: string,
  completed: number,
  total: number,
  play: () => void,
  pause: () => void,
  cancel: () => void,
  isActive: boolean
}

export const useTimer = ({ pomotimer, onFinish, onUpdate, onStart, onCancel }: UseTimer): Timer => {
  const [inFirst, setInFirst] = useState(true)
  const [timeIndex, setTimeIndex] = useState(0)
  const { time: currTime, title: currTitle } = pomotimer.pomotimes[timeIndex]

  const [title, setTitle] = useState(currTitle)
  const [time, setTime] = useState<Time>(currTime);

  const init = (timeIndex: number) => {
    const { time: currTime, title: currTitle } = pomotimer.pomotimes[timeIndex]
    setTime(currTime)
    setTitle(currTitle)
  }

  const [inPause, setInPause] = useState(false);

  const intervalId = useRef(DEFAULT_INTERVAL_ID);
  const timeString = timeToString(time);

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

  const pause = () => {
    clearInterval(intervalId.current);
    intervalId.current = DEFAULT_INTERVAL_ID;
    setInPause(true);
  };

  const cancel = () => {
    pause()
    setInFirst(true)
    if (onCancel) onCancel()
    init(timeIndex)
  }

  const end = () => {
    pause();
    if (onFinish) onFinish()

    let newTimeIndex = timeIndex

    if (timeIndex === pomotimer.pomotimes.length - 1) {
      pomotimer.completed += 1
      newTimeIndex = 0
    } else {
      newTimeIndex += 1
    }

    setTimeIndex(newTimeIndex)
    init(newTimeIndex)
  }

  useEffect(() => {
    if (intervalId.current) {
      return
    }

    if (inFirst) {
      setInFirst(false)
      return
    }

    play()

  }, [time])

  const play = () => {
    if (intervalId.current) {
      pause();
      return;
    }

    console.log('new')

    if (inPause) {
      getEndDate(time);
      console.log(getRemainTime())
      setInPause(false);
    } else {
      getEndDate(currTime);
    }

    if (onStart) onStart()

    intervalId.current = setInterval(() => {
      const remain = getRemainTime();
      setTime(() => {
        if (remain.min === 59 && remain.sec === 59 ||
          remain.min === 59 && remain.sec === 58
        ) {
          return END_TIME;
        }
        if (onUpdate) onUpdate(remain)
        return remain;
      });

      if (remain.min === 59 && remain.sec === 59 ||
        remain.min === 59 && remain.sec === 58
      ) {
        end()
      }

    }, MILISECONDS_PER_FRAME);


  };

  return {
    time: timeString,
    title,
    total: pomotimer.total,
    completed: pomotimer.completed,
    play,
    pause,
    cancel,
    isActive: Boolean(intervalId.current),
  };
};
