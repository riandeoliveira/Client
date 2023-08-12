export interface BaseEntity {
  id: string;
  idMobile?: string;
  ativo: boolean;
  dataCriacao: string;
  dataAtualizacao?: string;
  dataExclusao?: string;
}

export interface GrupoLocais {
  descricao: string;
  fazendaId: string;
  nome: string;
  areaHa?: number;
}

export interface GrupoLocaisBase extends BaseEntity, GrupoLocais {}
