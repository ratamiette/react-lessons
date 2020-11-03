import httpService from "./httpService";
import { apiBaseUrl } from "../config.json";

const endpoint = `${apiBaseUrl}/users`;

export function register(user) {
  return httpService.post(endpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

export default {
  register,
};
