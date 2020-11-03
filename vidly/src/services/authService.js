import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiBaseUrl } from "../config.json";

const endpoint = `${apiBaseUrl}/auth`;
const tokenKey = 'token';

export async function login(email, password) {
  const { data: token} = await http.post(endpoint, { email, password });
  localStorage.setItem(tokenKey, token);
}

export function loginWithToken(token) {
  localStorage.setItem(tokenKey, token);
}

export function getCurrentUser() {
  try {
    const token = localStorage.getItem(tokenKey);
    return jwtDecode(token);
  } catch (exception) {
    return null;
  }
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export default {
  login,
  loginWithToken,
  getCurrentUser,
  logout
}
