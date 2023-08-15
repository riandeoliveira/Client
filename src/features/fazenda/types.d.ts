import type { AxiosResponse } from "axios";
import type { BaseResponse } from "types/api";

export namespace FetchAllFazenda {
  export interface Result {
    atividadeAgricolaId: string | null;
    ativo: boolean;
    cpf_cnpj: string | null;
    id: string;
    nomeRazao: string;
    urlPowerBI: string | null;
  }

  export interface Response extends AxiosResponse<BaseResponse<Result[]>> {}
}
