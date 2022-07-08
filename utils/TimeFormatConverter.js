export const getTotalSec = ({ min, sec }) => min * 60 + sec;

export const secToMinSecFormat = ({ sec }) => ({
  min: Math.trunc(sec / 60),
  sec: Math.trunc(sec % 60),
});

export const minToMinSecFormat = ({ min }) => ({
  min: Math.trunc(min),
  sec: Math.trunc((min * 60) % 60),
});
