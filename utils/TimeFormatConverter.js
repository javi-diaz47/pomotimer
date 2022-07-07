export const getTotalSec = ({ min, sec }) => min * 60 + sec;

export const getMinSecFormat = ({ sec }) => ({
  min: Math.trunc(sec / 60),
  sec: Math.trunc(sec % 60),
});
