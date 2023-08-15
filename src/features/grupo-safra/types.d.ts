import type { AxiosResponse } from "axios";

export namespace FetchAllGrupoSafraByFazendaId {
  export interface Result {
    label: string;
    value: string;
  }

  export interface Response extends AxiosResponse<Result[]> {}
}
