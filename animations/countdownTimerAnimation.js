import { getTotalSec, minToMinSecFormat } from '@utils/TimeFormatConverter';
import gsap from 'gsap';

export const countdownTimerAnimation = ({
  time,
  setTime,
  countdownTime,
  loadRef,
}) =>
  gsap
    .timeline()
    .to(loadRef.current, {
      width: '10%',
      duration: 0.5,
      ease: 'back.out(3)',
    })
    .to(countdownTime, {
      min: 0,
      ease: 'none',
      duration: getTotalSec(time),
      delay: 1,
      onUpdate: () => {
        setTime(minToMinSecFormat(countdownTime));
      },
    })
    .to(
      loadRef.current,
      {
        rotateZ: '360deg',
        transformOrigin: '50% 570%',
        duration: getTotalSec(time),
        delay: 1,
      },
      0
    );
