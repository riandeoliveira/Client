import type { AxiosResponse } from "axios";

export type SelectOptionsType = {
  label: string;
  value: string;
};

export type StoreType<S, A> = {
  values: S;
  actions: A;
};

export type Response<T> = {
  exception?: unknown;
  isOk: boolean;
  mensagem: string;
  result: T;
  validates: unknown[];
};

export type ApiResponse<T> = AxiosResponse<Response<T>>;
