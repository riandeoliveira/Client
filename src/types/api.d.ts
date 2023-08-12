import type { AxiosResponse } from "axios";

export type BaseResponse<T = void> = {
  exception?: unknown;
  isOk: boolean;
  mensagem?: string;
  result?: T;
  validates: unknown[];
};

export type PaginationResponse<T> = {
  items: T[];
  page: number;
  total: number;
};

export namespace CreateGrupoLocais {
  export interface Request {
    descricao: string;
    fazendaId: string;
    nome: string;
    areaHa?: number;
  }
}

export namespace FetchAllGrupoLocais {
  export interface Result {
    id: string;
    ativo: boolean;
    descricao: string;
    nome: string;
    tamanhoHa?: number;
  }

  export interface Response extends AxiosResponse<BaseResponse<PaginationResponse<Result>>> {}
}

export namespace FetchGrupoLocalById {
  export interface Result {
    ativo: boolean;
    dataAtualizacao?: string;
    dataCriacao: string;
    dataExclusao?: string;
    descricao: string;
    fazendaId: string;
    id: string;
    idMobile?: string;
    nome: string;
    tamanhoHa?: number;
  }

  export interface Response extends AxiosResponse<BaseResponse<Result>> {}
}

export namespace RemoveGrupoLocais {
  export interface Response extends AxiosResponse<BaseResponse> {}
}

export namespace ToggleGrupoLocaisStatus {
  export interface Result {
    ativo: boolean;
    dataAtualizacao?: string;
    dataCriacao: string;
    dataExclusao?: string;
    descricao: string;
    fazendaId: string;
    id: string;
    idMobile?: string;
    nome: string;
    tamanhoHa?: number;
  }

  export interface Response extends AxiosResponse<Result> {}
}
