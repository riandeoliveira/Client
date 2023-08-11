import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:7000/api/tecnico",
});

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOiI3MDdmMDg4ZS1mYzg3LTRkMDItYjIxNi1hMTdkZGVhZGQwNTkiLCJ1c3VhcmlvTm9tZSI6IlJpYW4gT2xpdmVpcmEiLCJuYmYiOjE2OTE3ODIxMTMsImV4cCI6MTY5MTg2ODUxMywiaWF0IjoxNjkxNzgyMTEzfQ.6pwqn8agIt2JLcyT-hd5aPgezGgP1VxnejcL4aPgUUk";

api.interceptors.request.use((config) => {
  config.headers.setAuthorization(`Bearer ${TOKEN}`);

  return config;
});
