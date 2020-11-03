import axios from "axios";
import { toast } from "react-toastify";
import logService from "./logService";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // Handling unexpected errors
    logService.log(error);
    toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

export function setToken(token) {
  axios.defaults.headers.common["x-auth-token"] = token;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setToken,
};
