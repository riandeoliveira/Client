import { api } from "apis";
import type { ApiResponse } from "types";

export type AtividadeResponse = {
  cultura: {
    codigo: string;
    id: string;
    nome: string;
    perene: boolean;
  };
  grupoSafra: {
    grupoSafraId: string;
    nome: string;
  };
  label: string;
  value: string;
};

export abstract class AtividadeService {
  public static async fetchBySafraId(safraId: string | string[]) {
    try {
      const response: ApiResponse<AtividadeResponse[]> = await api.post(
        "/Safra/GetSafraPorGruposSafra",
        [safraId],
      );

      return response.data.result;
    } catch (error: unknown) {
      console.log(error);

      return null;
    }
  }
}
