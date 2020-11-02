import http from "./httpService";
import { apiBaseUrl } from "../config.json";

const endpoint = `${apiBaseUrl}/movies`;

export function getMovies() {
  return http.get(endpoint);
}

export function getMovie(movieId) {
  return http.get(`${endpoint}/${movieId}`);
}

export function saveMovie(movie) {
  // @TODO
}

export function deleteMovie(movieId) {
  return http.delete(`${endpoint}/${movieId}`);
}
