import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:7000/api/tecnico",
});

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOiI3MDdmMDg4ZS1mYzg3LTRkMDItYjIxNi1hMTdkZGVhZGQwNTkiLCJ1c3VhcmlvTm9tZSI6IlJpYW4gT2xpdmVpcmEiLCJuYmYiOjE2OTE5NjY5MjEsImV4cCI6MTY5MjA1MzMyMSwiaWF0IjoxNjkxOTY2OTIxfQ.-F4roWeTWL4VOO27bWTmV_RB_Zw6zvsu1UGrC4TgEjM";

api.interceptors.request.use((config) => {
  config.headers.setAuthorization(`Bearer ${TOKEN}`);

  return config;
});
