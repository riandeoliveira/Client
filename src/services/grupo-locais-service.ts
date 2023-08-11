import { api } from "apis";
import type { AxiosResponse } from "axios";
import { errorMessages } from "messages/error";
import { successMessages } from "messages/success";
import { loadingStore } from "store/loading.store";
import { toastTool } from "tools/toast-tool";
import type { GrupoLocaisRequest } from "types/api";

export type FetchAllResponse = {
  ativo: boolean;
  descricao: string;
  id: string;
  nome: string;
  tamanhoHa: number;
};

class GrupoLocaisService {
  public async create(data: GrupoLocaisRequest.Create) {
    loadingStore.wait();

    try {
      await api.post("/GrupoLocais/", {
        ...data,
        fazendaId: "41559565-65a8-4170-aba2-ce724a2089be",
      });

      toastTool.success(successMessages.fazenda.create);
    } catch (error: unknown) {
      console.error(error);

      toastTool.error(errorMessages.fazenda.create);
    } finally {
      loadingStore.stop();
    }
  }

  public async fetchAll(): Promise<FetchAllResponse[]> {
    loadingStore.wait();

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
      console.error(error);

      return [];
    } finally {
      loadingStore.stop();
    }
  }

  public async fetchById(fazendaId: string) {
    loadingStore.wait();

    try {
      const response = await api.get(`/GrupoLocais/${fazendaId}`);

      return response.data.result;
    } catch (error: unknown) {
      console.error(error);
    } finally {
      loadingStore.stop();
    }
  }

  public async remove(fazendaId: string) {
    loadingStore.wait();

    try {
      const response = await api.delete(`/GrupoLocais/${fazendaId}`);

      toastTool.success(successMessages.fazenda.remove);

      return response.data;
    } catch (error: unknown) {
      console.error(error);

      toastTool.error(errorMessages.fazenda.remove);
    } finally {
      loadingStore.stop();
    }
  }

  public async toggleStatus(fazendaId: string) {
    loadingStore.wait();

    try {
      const response = await api.get(`/GrupoLocais/AtivarDesativar/${fazendaId}`);

      toastTool.success(successMessages.fazenda.togglStatus);

      return response.data;
    } catch (error: unknown) {
      console.error(error);

      toastTool.error(errorMessages.fazenda.toggleStatus);
    } finally {
      loadingStore.stop();
    }
  }
}

export const grupoLocaisService = new GrupoLocaisService();
