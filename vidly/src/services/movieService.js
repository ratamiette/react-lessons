import httpService from "./httpService";
import { apiBaseUrl } from "../config.json";

const endpoint = `${apiBaseUrl}/movies`;

function movieUrl(id) {
  return `${endpoint}/${id}`;
}

export function getMovies() {
  return httpService.get(endpoint);
}

export function getMovie(movieId) {
  return httpService.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return httpService.put(movieUrl(movie._id), body);
  }
  return httpService.post(endpoint, movie);
}

export function deleteMovie(movieId) {
  return httpService.delete(movieUrl(movieId));
}
