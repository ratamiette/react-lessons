import jwtDecode from "jwt-decode";
import httpService from "./httpService";
import { apiBaseUrl } from "../config.json";

const endpoint = `${apiBaseUrl}/auth`;
const tokenKey = "token";

httpService.setToken(getToken());

async function login(email, password) {
  const { data: token } = await httpService.post(endpoint, { email, password });
  localStorage.setItem(tokenKey, token);
}

function loginWithToken(token) {
  localStorage.setItem(tokenKey, token);
}

function getToken() {
  return localStorage.getItem(tokenKey);
}

function getCurrentUser() {
  try {
    const token = localStorage.getItem(tokenKey);
    return jwtDecode(token);
  } catch (exception) {
    return null;
  }
}

function logout() {
  localStorage.removeItem(tokenKey);
}

export default {
  login,
  loginWithToken,
  getCurrentUser,
  getToken,
  logout,
};
