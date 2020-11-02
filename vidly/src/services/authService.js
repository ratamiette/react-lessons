import http from "./httpService";
import { apiBaseUrl } from "../config.json";

const endpoint = `${apiBaseUrl}/auth`;

export function login(email, password) {
  return http.post(endpoint, { email, password });
}
