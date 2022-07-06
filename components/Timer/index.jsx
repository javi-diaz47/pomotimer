import styles from '@styles/components/Timer/index.module.css';

function Timer({ time }) {
  const toWatchFormat = ({ min, sec }) => `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  return (
    <section className={styles.timer_wrapper}>
      <article className={styles.timer}>
        <div className="pomo">
          <h2>{toWatchFormat(time)}</h2>
          <span className={styles.timer_name}>Work</span>
          <span className={styles.timer_sections}>1/4</span>
        </div>
      </article>
    </section>
  );
}

export { Timer };
