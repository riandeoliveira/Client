import { api } from "apis";
import type { AxiosResponse } from "axios";

export type FetchAllResponse = {
  ativo: boolean;
  descricao: string;
  id: string;
  nome: string;
  tamanhoHa: number;
};

export abstract class FazendaService {
  public static async create(data) {
    try {
      await api.post("/GrupoLocais/", {
        ...data,
        fazendaId: "41559565-65a8-4170-aba2-ce724a2089be",
      });
    } catch (error: unknown) {
      console.log(error);
    }
  }

  public static async fetchAll(): Promise<FetchAllResponse[]> {
    try {
      const response: AxiosResponse<FetchAllResponse[]> = await api.post(
        "/GrupoLocais/BuscarTudo",
        {
          fazendaId: "41559565-65a8-4170-aba2-ce724a2089be",
          page: 1,
          pageSize: 10,
          filtro: "",
        },
      );

      return response.data.result.items;
    } catch (error: unknown) {
      console.log(error);

      return [];
    }
  }
}
