export namespace FazendaRequest {
  export type Create = {};
}

export namespace FazendaResponse {
  export type FetchAll = {};

  export type ToggleStatus = {
    ativo: boolean;
    dataAtualizacao?: string;
    dataCriacao: string;
    dataExclusao?: string;
    descricao?: string;
    fazendaId: string;
    id: string;
    idMobile?: string;
    nome: string;
    tamanhoHa?: number;
  };
}
