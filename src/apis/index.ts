import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:7000/api/tecnico",
});

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOiI3MDdmMDg4ZS1mYzg3LTRkMDItYjIxNi1hMTdkZGVhZGQwNTkiLCJ1c3VhcmlvTm9tZSI6IlJpYW4gT2xpdmVpcmEiLCJuYmYiOjE2OTIwMTc0NTEsImV4cCI6MTY5MjEwMzg1MSwiaWF0IjoxNjkyMDE3NDUxfQ.TSINEQOAr75P2W0PgM8FFYZa1KYfNRDmAsX4p2Cu1fM";

api.interceptors.request.use((config) => {
  config.headers.setAuthorization(`Bearer ${TOKEN}`);

  return config;
});
