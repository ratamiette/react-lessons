import http from "./httpService";
import config from "../config.json";

const endpoint = `${config.apiBaseUrl}/movies`;

export function getMovies() {
  return http.get(endpoint);
}
export function deleteMovie(movieId) {
  return http.delete(`${endpoint}/${movieId}`);
}
