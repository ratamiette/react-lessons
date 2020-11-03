import httpService from "./httpService";
import { apiBaseUrl } from "../config.json";

const endpoint = `${apiBaseUrl}/genres`;

export function getGenres() {
  return httpService.get(endpoint);
}
export function getGenre(genreId) {
  return httpService.get(`${endpoint}/${genreId}`);
}
