export function minToHours(minutes) {
  var h = Math.floor(minutes / 60);
  var m = minutes % 60;
  h = h < 10 ? "" + h : h;
  m = m < 10 ? "" + m : m;
  return `${h}h ${m}m`;
}

export const randomNumber = (max) => Math.floor(Math.random() * max);
