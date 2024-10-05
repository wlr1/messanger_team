import axios from "axios";

const API_URL = "http://localhost:5500";

const api = axios.create({ baseURL: API_URL, withCredentials: true });

//interceptors, so every request had token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
