import { api } from "apis";
import type { AxiosResponse } from "axios";

export type FetchByFazendaIdResponse = {
  label: string;
  value: string;
};

export abstract class SafraService {
  public static async fetchByFazendaId(fazendaId: string): Promise<FetchByFazendaIdResponse[]> {
    try {
      const response: AxiosResponse<FetchByFazendaIdResponse[]> = await api.get(
        `/Safra/getGrupoSafraPorFazendaId/${fazendaId}`,
      );

      return response.data;
    } catch (error: unknown) {
      console.log(error);

      return [];
    }
  }
}
