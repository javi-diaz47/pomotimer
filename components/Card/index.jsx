import { getLocationOrigin } from 'next/dist/shared/lib/utils';
import { getIcon } from '../../utils/getIcon';
import styles from '../../styles/components/Card/index.module.css';

function Card({icon, title, time}) {
  
  return (
    <article className={styles.card}>
      <div className={styles.card_wrapper}>
        <div className={styles.icon}>
          {
            getIcon(icon)
          }
        </div>
        <h2>{title}</h2>
        <span className={styles.time}>
          { time.focus }/{ time.break } 
          </span>
      </div>
   </article>
  );
}

export { Card };
