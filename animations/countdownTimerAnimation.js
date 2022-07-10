import { getTotalSec, minToMinSecFormat } from '@utils/TimeFormatConverter';
import gsap from 'gsap';

export const countdownTimerAnimation = ({
  duration,
  updateHandler,
  completeHandler,
  countdownTime,
  loadRef,
  cardRef,
  timerBtnRef,
}) => {
  const q = gsap.utils.selector(cardRef);
  return (
    gsap
      .timeline()
      .to(loadRef.current, {
        width: '10%',
        duration: 0.5,
        ease: 'back.out(3)',
      })
      // .to(
      //   q('.card_ref'),
      //   {
      //     y: 100,
      //     opacity: 0,
      //     duration: 0.3,
      //     stagger: 0.1,
      //   },
      //   0
      // )
      // .to(timerBtnRef.current, {
      //   y: -300,
      //   duration: 1,
      // })
      .to(countdownTime, {
        min: 0,
        ease: 'none',
        duration,
        delay: 1,
        onUpdate: () => {
          updateHandler(countdownTime);
        },
        onComplete: () => {
          completeHandler();
        },
      })
      .to(
        loadRef.current,
        {
          rotateZ: '360deg',
          transformOrigin: '50% 570%',
          duration,
          delay: 1,
          ease: 'none',
        },
        0
      )
      .to(loadRef.current, {
        rotate: '0deg',
        duration: 0,
      })
  );
};
