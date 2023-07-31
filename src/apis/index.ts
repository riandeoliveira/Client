import type { AxiosInstance } from "axios";
import axios from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:7000/api/tecnico",
});
