import styles from '@styles/components/Timer/index.module.css';
import { forwardRef } from 'react';

const Timer = forwardRef((props, ref) => {
  const { time } = props;
  const toWatchFormat = ({ min, sec }) => `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  return (
    <section className={styles.timer_wrapper}>
      <article className={styles.timer}>
        <div ref={ref} className={styles.load}></div>
        <div className="pomo">
          <h2>{toWatchFormat(time)}</h2>
          <span className={styles.timer_name}>Work</span>
          <span className={styles.timer_sections}>1/4</span>
        </div>
      </article>
    </section>
  );
});

export { Timer };
