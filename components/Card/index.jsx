import { getColor } from '@utils/getColor';
import { getIcon } from '@utils/getIcon';
import styles from '../../styles/components/Card/index.module.css';

function Card({color, icon, title, time}) {
  return (
    <article className={styles.card}>
      <div className={styles.card_wrapper}>
        <div
          className={styles.icon}
          style={{
            backgroundColor: getColor(color),
          }}
        >
          {
            getIcon(icon)
          }
        </div>
        <h2>{title}</h2>
        <span className={styles.time}>
          { time.focus }
          /
          { time.break }
        </span>
      </div>
    </article>
  );
}

export { Card };
