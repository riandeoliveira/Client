import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:7000/api/tecnico",
});

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOiI3MDdmMDg4ZS1mYzg3LTRkMDItYjIxNi1hMTdkZGVhZGQwNTkiLCJ1c3VhcmlvTm9tZSI6IlJpYW4gT2xpdmVpcmEiLCJuYmYiOjE2OTE1ODYwNTAsImV4cCI6MTY5MTY3MjQ1MCwiaWF0IjoxNjkxNTg2MDUwfQ.9S1nZlDWP0ZUinby_G9VrI3UI5cAQ-x7jHDfXLNP_rE";

api.interceptors.request.use((config) => {
  config.headers.setAuthorization(`Bearer ${TOKEN}`);

  return config;
});
