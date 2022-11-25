export function minToHours(minutes) {
  var h = Math.floor(minutes / 60);
  var m = minutes % 60;
  h = h < 10 ? "" + h : h;
  m = m < 10 ? "" + m : m;
  return `${h}h ${m}m`;
}

export const typeForApi = () =>
  location.pathname.split("/").filter(Boolean)[0] === "movies" ? "movie" : "tv";

export const typeForApp = () =>
  location.pathname.includes("movies") ? "movies" : "series";

export const NRandom = (max) => Math.floor(Math.random() * max);
