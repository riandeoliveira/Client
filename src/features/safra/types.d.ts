import type { AxiosResponse } from "axios";
import type { BaseResponse } from "types/api";

export namespace FetchAllSafraByGrupoSafraIds {
  export interface Result {
    label: string;
    value: string;
  }

  export interface Response extends AxiosResponse<BaseResponse<Result[]>> {}
}
