import type { AxiosInstance } from "axios";
import axios from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:7000/api/tecnico",
});

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOiI3MDdmMDg4ZS1mYzg3LTRkMDItYjIxNi1hMTdkZGVhZGQwNTkiLCJ1c3VhcmlvTm9tZSI6IlJpYW4gT2xpdmVpcmEiLCJuYmYiOjE2OTE0NDg4MDcsImV4cCI6MTY5MTUzNTIwNywiaWF0IjoxNjkxNDQ4ODA3fQ.DJSjx8GQ7IF_7FMPXTJJiUY6kMMeIIGF_YhP-a4g9Zo";

api.interceptors.request.use((config) => {
  config.headers.setAuthorization(`Bearer ${TOKEN}`);

  return config;
});
