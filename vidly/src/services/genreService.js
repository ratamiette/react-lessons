import http from "./httpService";
import { apiBaseUrl } from "../config.json";

const endpoint = `${apiBaseUrl}/genres`;

export function getGenres() {
  return http.get(endpoint);
}
export function getGenre(genreId) {
  return http.get(`${endpoint}/${genreId}`);
}
