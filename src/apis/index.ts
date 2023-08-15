import axios from "axios";
import { localStorageStore } from "store/local-storage.store";

export const api = axios.create({
  baseURL: "http://localhost:7000/api/tecnico",
});

const TOKEN = localStorageStore.accessToken;

api.interceptors.request.use((config) => {
  config.headers.setAuthorization(`Bearer ${TOKEN}`);

  return config;
});
