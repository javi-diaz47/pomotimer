import styles from '@styles/components/Timer/index.module.css';

function Timer() {
  return (
    <section className={styles.timer_wrapper}>
      <article className={styles.timer}>
        <div>
          <h2>25:00</h2>
          <span className={styles.timer_name}>Work</span>
          <span className={styles.timer_sections}>1/4</span>
        </div>
     </article>
   </section>
  );
}

export { Timer };
