export const capitalize = (str) => {
  if (!str) return;
  return str
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
};

export const throttle = (fn, delay = 1000) => {
  let last = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return fn(...args);
  };
};
