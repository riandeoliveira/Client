import type { AxiosResponse } from "axios";

export type BaseResponse<T = void> = {
  exception: unknown | null;
  isOk: boolean;
  mensagem: string | null;
  result: T | null;
  validates: unknown[];
};

export type PaginationResponse<T> = {
  items: T[];
  page: number;
  total: number;
};

export namespace CreateGrupoLocais {
  export interface Request {
    descricao: string | null;
    fazendaId: string;
    nome: string;
    tamanhoHa: number | null;
  }

  export interface Response extends AxiosResponse<BaseResponse> {}
}

export namespace FetchAllGrupoLocais {
  export interface Result {
    ativo: boolean;
    descricao: string;
    id: string;
    nome: string;
    tamanhoHa: number | null;
  }

  export interface Response extends AxiosResponse<BaseResponse<PaginationResponse<Result>>> {}
}

export namespace FetchGrupoLocalById {
  export interface Result {
    ativo: boolean;
    dataAtualizacao: string | null;
    dataCriacao: string;
    dataExclusao: string | null;
    descricao: string;
    fazendaId: string;
    id: string;
    idMobile: string | null;
    nome: string;
    tamanhoHa: number | null;
  }

  export interface Response extends AxiosResponse<BaseResponse<Result>> {}
}

export namespace RemoveGrupoLocais {
  export interface Response extends AxiosResponse<BaseResponse> {}
}

export namespace UpdateGrupoLocais {
  export interface Request {
    descricao: string | null;
    fazendaId: string;
    id: string;
    nome: string;
    tamanhoHa: number | null;
  }

  export interface Response extends AxiosResponse<BaseResponse> {}
}

export namespace ToggleGrupoLocaisStatus {
  export interface Result {
    ativo: boolean;
    dataAtualizacao: string | null;
    dataCriacao: string;
    dataExclusao: string | null;
    descricao: string;
    fazendaId: string;
    id: string;
    idMobile: string | null;
    nome: string;
    tamanhoHa: number | null;
  }

  export interface Response extends AxiosResponse<Result> {}
}
