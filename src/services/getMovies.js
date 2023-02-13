import { BASE_URL, API_KEY, request } from "./config";

const BASE_TRENDING_MOVIES = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=es-ES`;
export const getTrendingMovie = ({ page = 1 } = {}) =>
  request({ url: `${BASE_TRENDING_MOVIES}&page=${page}` });

const BASE_TOP_RATED_MOVIES = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=es-ES`;
export const getTopRatedMovie = ({ page = 1 } = {}) =>
  request({ url: `${BASE_TOP_RATED_MOVIES}&page=${page}` });

const SEARCH_MOVIES = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES`;
export const getSearchMovie = ({ keyword, page = 1 } = {}) =>
  request({ url: `${SEARCH_MOVIES}&page=${page}&query=${keyword}` });
