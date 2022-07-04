import { DEFAULT_CARDS } from '../../contants/defaultCards';
import { Card } from '../Card';
import styles from '../../styles/Home.module.css';

function Cards() {
  return (
    <section className={styles.cards}>
      {DEFAULT_CARDS.map((card) => (
        <Card
          {...card}
        />
      ))}
    </section>
  );
}

export { Cards };
