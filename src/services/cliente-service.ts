import { api } from "apis";
import type { ApiResponse } from "types";

export type FetchAllResponse = {
  atividadeAgricolaId: string;
  ativo: boolean;
  cpf_cnpj?: string;
  id: string;
  nomeRazao: string;
  urlPowerBI: string;
};

/**
 * Serviço conectado com a API para lidar com requisições de **Clientes**.
 */
export abstract class ClienteService {
  /**
   * Busca todos os **Clientes**.
   */
  public static async fetchAll(): Promise<FetchAllResponse[]> {
    try {
      const response: ApiResponse<FetchAllResponse[]> = await api.get("/Fazenda");

      return response.data.result;
    } catch (error: unknown) {
      console.log(error);

      return [];
    }
  }
}
