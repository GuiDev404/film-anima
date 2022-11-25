export const API_KEY = "74a781b0118d9611c19469b861a82ddb";

export const SEARCH = (keyword, type) =>
  `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&query=${keyword}`;

export const TRENDING_MOVIES = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
export const POPULAR_TV_SHOWS = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;

export const HOME_SECTIONS = [
  TRENDING_MOVIES,
  `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`,
  POPULAR_TV_SHOWS,
];
