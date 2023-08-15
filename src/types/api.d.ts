export interface BaseResponse<T = void> {
  exception: unknown | null;
  isOk: boolean;
  mensagem: string | null;
  result: T | null;
  validates: unknown[];
}

export interface PaginationResponse {
  items: T[];
  page: number;
  total: number;
}
