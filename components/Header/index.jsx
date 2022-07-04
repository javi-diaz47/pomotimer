import styles from '@styles/components/Header/index.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>
        Pomo
        <span>Timer</span>
      </h2>
    </header>
  );
}

export { Header };
