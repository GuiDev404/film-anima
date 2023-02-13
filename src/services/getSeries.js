import { BASE_URL, API_KEY, request } from "./config";

const BASE_POPULAR_TV_SHOWS = `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=es-ES`;
export const getTrendingSeries = ({ page = 1 } = {}) =>
  request({ url: `${BASE_POPULAR_TV_SHOWS}&page=${page}` });

const BASE_TOP_RATED_TV = `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=es-ES`;
export const getTopRatedSeries = ({ page = 1 } = {}) =>
  request({ url: `${BASE_TOP_RATED_TV}&page=${page}` });

const BASE_SEARCH_TV = `${BASE_URL}/search/tv?api_key=${API_KEY}&language=es-ES`;
export const getSearchTv = ({ keyword, page = 1 } = {}) =>
  request({ url: `${BASE_SEARCH_TV}&page=${page}&query=${keyword}` });
