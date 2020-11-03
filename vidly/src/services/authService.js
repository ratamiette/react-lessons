import jwtDecode from "jwt-decode";
import httpService from "./httpService";
import { apiBaseUrl } from "../config.json";

const endpoint = `${apiBaseUrl}/auth`;
const tokenKey = 'token';

export async function login(email, password) {
  const { data: token} = await httpService.post(endpoint, { email, password });
  localStorage.setItem(tokenKey, token);
}

export function loginWithToken(token) {
  localStorage.setItem(tokenKey, token);
}

export function getToken() {
  return localStorage.getItem(tokenKey);xw
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
  getToken,
  logout
}
