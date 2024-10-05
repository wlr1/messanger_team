import axios from "axios";

const API_URL = "http://localhost:5500";

const api = axios.create({ baseURL: API_URL, withCredentials: true });

export default api;
