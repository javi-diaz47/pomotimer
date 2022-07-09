import { forwardRef } from 'react';
import { getColor } from "@utils/getColor";
import styles from '@styles/components/TimerBtn/index.module.css';

const TimerBtn = forwardRef((props, ref) => {
  const { onCountdown, dispatch, COUNTDOWN_ACTIONS } = props;
  const handlerOnTimer = () => {
    if (onCountdown.status === null) {
      dispatch(COUNTDOWN_ACTIONS.START);
    } else if (
      onCountdown.status === COUNTDOWN_ACTIONS.START
      || onCountdown.status === COUNTDOWN_ACTIONS.CONTINUE
    ) {
      dispatch(COUNTDOWN_ACTIONS.PAUSE);
    } else {
      dispatch(COUNTDOWN_ACTIONS.CONTINUE);
    }
  };

  return (
    <section className={styles.timer_btn_section} ref={ref}>
      <button
        onClick={handlerOnTimer}
        className={styles.timer_btn}
        type="button"
        style={onCountdown ? { backgroundColor: getColor('yellow') } : {}}
      >
        {onCountdown.btnText}
      </button>
      <button
        className={styles.timer_btn_cancel}
        onClick={() => dispatch(COUNTDOWN_ACTIONS.KILL)}
        type="button"
      >
        Cancel
      </button>
    </section>
  );
});

export { TimerBtn };
