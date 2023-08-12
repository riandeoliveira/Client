interface IPagination {
  fazendaId: string;
  filtro: string;
  page: number;
  pageSize: number;
}

export namespace GrupoLocaisRequest {
  export interface Create {
    descricao: string;
    fazendaId: string;
    nome: string;
    areaHa?: number;
  }
}
