import { getColor } from '@utils/getColor';
import { getIcon } from '@utils/getIcon';
import { minToMinSecFormat } from '@utils/TimeFormatConverter';
import styles from '../../styles/components/Card/index.module.css';

function Card(props) {
  const {
    color,
    icon,
    title,
    time,
    setTime,
  } = props;
  return (
    <button
      onClick={() => setTime(minToMinSecFormat(time.focus))}
      className={styles.card}
      type="button"
    >
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
          { time.focus.min }
          /
          { time.break.min }
        </span>
      </div>
    </button>
  );
}

export { Card };
