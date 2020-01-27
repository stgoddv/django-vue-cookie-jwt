import axios from "axios";

const options = {
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://127.0.0.1:8000",
    "Access-Control-Allow-Credentials": true
  },
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFTOKEN",
  withCredentials: true,
  timeout: 5000
};

const plainApi = axios.create(options);
const api = axios.create(options);

api.interceptors.response.use(
  response => response,
  error => {
    if (
      error.response &&
      error.response.config &&
      error.response.status === 401
    ) {
      return plainApi
        .post("api/token/refresh/")
        .then(() => api.request(error.response.config))
        .catch(error => Promise.reject(error));
    } else {
      return Promise.reject(error);
    }
  }
);

export { api, plainApi };
