import { BurgerBtn } from '@components/Icons/BurgerBtn';
import styles from '@styles/components/Header/index.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>
        Pomo
        <span>Timer</span>
      </h2>
      <button className={styles.burger_btn} type="button">
        <BurgerBtn />
      </button>
    </header>
  );
}

export { Header };
