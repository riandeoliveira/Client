import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:7000/api/tecnico",
});

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOiI3MDdmMDg4ZS1mYzg3LTRkMDItYjIxNi1hMTdkZGVhZGQwNTkiLCJ1c3VhcmlvTm9tZSI6IlJpYW4gT2xpdmVpcmEiLCJuYmYiOjE2OTIxMDk5MzUsImV4cCI6MTY5MjE5NjMzNSwiaWF0IjoxNjkyMTA5OTM1fQ.0Rx1sdU97gfP8qR9dwbcgMD1da3Wkoi1ebAQpRuGz2s";

api.interceptors.request.use((config) => {
  config.headers.setAuthorization(`Bearer ${TOKEN}`);

  return config;
});
