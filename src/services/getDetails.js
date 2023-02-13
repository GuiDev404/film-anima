import { BASE_URL, API_KEY, request } from "./config";

export const getDetail = ({ type, id } = {}) =>
  request({ url: `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=es-ES` });

export const getTrailers = ({ type, id } = {}) =>
  request({ url: `${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=es-ES` });

export const getSimilar = ({ type, id } = {}) =>
  request({ url: `${BASE_URL}/${type}/${id}/similar?api_key=${API_KEY}&language=es-ES` });

export const getCredits = ({ type, id } = {}) =>
  request({ url: `${BASE_URL}/${type}/${id}/credits?api_key=${API_KEY}&language=es-ES` });
