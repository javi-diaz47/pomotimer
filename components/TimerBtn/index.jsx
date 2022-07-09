import { getColor } from "@utils/getColor";
import styles from '@styles/components/TimerBtn/index.module.css';

function TimerBtn({ onCountdown, dispatch, COUNTDOWN_ACTIONS }) {
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
    <button
      onClick={handlerOnTimer}
      className={styles.start_timer}
      type="button"
      style={onCountdown? { backgroundColor: getColor('yellow') } : {}}
    >
      {onCountdown.btnText}
    </button>
  );
}

export { TimerBtn };