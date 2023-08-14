export namespace ErrorMessages {
  export enum Fazenda {
    FETCH_ALL = "Não foi possível buscar a listagem de clientes! Por favor, contate o administrador do sistema.",
  }

  export enum GrupoLocais {
    CREATE = "Ocorreu um erro ao criar uma fazenda! Por favor, contate o administrador do sistema.",
    FETCH_ALL = "Não foi possível buscar a listagem de fazendas! Por favor, contate o administrador do sistema.",
    FETCH_BY_ID = "Não foi possível buscar a fazenda selecionada! Por favor, contate o administrador do sistema.",
    REMOVE = "Ocorreu um erro ao remover uma fazenda! Por favor, contate o administrador do sistema.",
    UPDATE = "Não foi possível atualizar a fazenda! Por favor, contate o administrador do sistema.",
    TOGGLE_STATUS = "Ocorreu um erro ao alterar o status de uma fazenda! Por favor, contate o administrador do sistema.",
  }

  export enum GrupoSafra {
    FETCH_ALL_BY_FAZENDA_ID = "Não foi possível buscar as safras pertencentes a fazenda selecionada! Por favor, contate o administrador do sistema.",
  }

  export enum Safra {
    FETCH_ALL_BY_GRUPO_SAFRA_IDS = "Não foi possível buscar as atividades pertencentes às safras selecionadas! Por favor, contate o administrador do sistema.",
  }
}
