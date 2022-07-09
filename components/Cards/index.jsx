import { forwardRef } from 'react';
import { DEFAULT_CARDS } from '../../contants/defaultCards';
import { Card } from '../Card';
import styles from '../../styles/Home.module.css';

const Cards = forwardRef((props, ref) => {
  const { setTime } = props;
  return (
    <section className={styles.cards} ref={ref}>
      {DEFAULT_CARDS.map((card) => (
        <Card
          {...card}
          setTime={setTime}
        />
      ))}
    </section>
  );
});

export { Cards };
