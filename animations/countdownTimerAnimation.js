import { getTotalSec, minToMinSecFormat } from '@utils/TimeFormatConverter';
import gsap from 'gsap';

export const countdownTimerAnimation = ({
  time,
  setTime,
  countdownTime,
  loadRef,
  cardRef,
  timerBtnRef,
}) => {
  const q = gsap.utils.selector(cardRef);
  return gsap
    .timeline()
    .to(loadRef.current, {
      width: '10%',
      duration: 0.5,
      ease: 'back.out(3)',
    })
    .to(
      q('.card_ref'),
      {
        y: 100,
        opacity: 0,
        stagger: 0.1,
      },
      0
    )
    .to(timerBtnRef.current, {
      y: -300,
      duration: 1,
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
};
