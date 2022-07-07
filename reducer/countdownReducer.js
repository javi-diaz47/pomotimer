import { onCountdownDefault } from '@contants/defaultOnCountdown';

export const COUNTDOWN_ACTIONS = {
  START: 'start',
  PAUSE: 'pause',
  CONTINUE: 'continue',
};

export const countdownReducer = (state, action) => {
  switch (action) {
    case COUNTDOWN_ACTIONS.START:
      return { ...state, status: 'start', btnText: 'pause' };
    case COUNTDOWN_ACTIONS.PAUSE:
      return { ...state, status: 'pause', btnText: 'start' };
    case COUNTDOWN_ACTIONS.CONTINUE:
      return { ...state, status: 'continue', btnText: 'pause' };
    default:
      return onCountdownDefault;
  }
};
