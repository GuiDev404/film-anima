export const API_KEY = "74a781b0118d9611c19469b861a82ddb";
export const BASE_URL = 'https://api.themoviedb.org/3';

class RequestError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "RequestError";
    this.statusCode = status;
  }
}

export async function request({ method, url, body }) {
  const response = await fetch(url, {
    method,
    ...(method !== "GET" && JSON.stringify(body)),
  });
  const data = await response.json();
  
  if (!response.ok) {
    const errorMessage = data?.message ?? data?.error ?? 'Lo sentimos! Algo salio mal, vuelve a intentar en un rato.';
    throw new RequestError(errorMessage, response.status);
  }

  return data;
}
