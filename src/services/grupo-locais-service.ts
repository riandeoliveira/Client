import { api } from "apis";
import { ErrorMessages } from "messages/error";
import { SuccessMessages } from "messages/success";
import { loadingStore } from "store/loading.store";
import { toastTool } from "tools/toast-tool";
import type {
  CreateGrupoLocais,
  FetchAllGrupoLocais,
  FetchGrupoLocalById,
  RemoveGrupoLocais,
  ToggleGrupoLocaisStatus,
} from "types/api";

class GrupoLocaisService {
  public async create(data: CreateGrupoLocais.Request) {
    loadingStore.wait();

    try {
      await api.post("/GrupoLocais/", {
        ...data,
        fazendaId: "41559565-65a8-4170-aba2-ce724a2089be",
      });

      toastTool.success(SuccessMessages.GrupoLocais.CREATE);
    } catch (error: unknown) {
      console.error(error);

      toastTool.error(ErrorMessages.GrupoLocais.CREATE);
    } finally {
      loadingStore.stop();
    }
  }

  public async fetchAll(): Promise<FetchAllGrupoLocais.Result[]> {
    loadingStore.wait();

    try {
      const response: FetchAllGrupoLocais.Response = await api.post("/GrupoLocais/BuscarTudo", {
        fazendaId: "41559565-65a8-4170-aba2-ce724a2089be",
        page: 1,
        pageSize: 10,
        filtro: "",
      });

      return response.data.result.items;
    } catch (error: unknown) {
      console.error(error);

      return [];
    } finally {
      loadingStore.stop();
    }
  }

  public async fetchById(fazendaId: string): Promise<FetchGrupoLocalById.Result> {
    loadingStore.wait();

    try {
      const response: FetchGrupoLocalById.Response = await api.get(`/GrupoLocais/${fazendaId}`);

      return response.data.result;
    } catch (error: unknown) {
      console.error(error);

      return error;
    } finally {
      loadingStore.stop();
    }
  }

  public async remove(fazendaId: string): Promise<void> {
    loadingStore.wait();

    try {
      const response: RemoveGrupoLocais.Response = await api.delete(`/GrupoLocais/${fazendaId}`);
      const message = response.data.mensagem;

      if (!response.data.isOk) {
        if (!message) {
          throw new Error();
        }

        toastTool.warning(message);
        return;
      }

      toastTool.success(SuccessMessages.GrupoLocais.REMOVE);
    } catch (error: unknown) {
      console.error(error);

      toastTool.error(ErrorMessages.GrupoLocais.REMOVE);
    } finally {
      loadingStore.stop();
    }
  }

  public async toggleStatus(fazendaId: string): Promise<void> {
    loadingStore.wait();

    try {
      const response: ToggleGrupoLocaisStatus.Response = await api.get(
        `/GrupoLocais/AtivarDesativar/${fazendaId}`,
      );

      if (!response.data) throw new Error();

      toastTool.success(SuccessMessages.GrupoLocais.TOGGLE_STATUS);
    } catch (error: unknown) {
      console.error(error);

      toastTool.error(ErrorMessages.GrupoLocais.TOGGLE_STATUS);
    } finally {
      loadingStore.stop();
    }
  }
}

export const grupoLocaisService = new GrupoLocaisService();
