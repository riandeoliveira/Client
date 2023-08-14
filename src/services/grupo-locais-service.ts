import { api } from "apis";
import { ErrorMessages } from "messages/error";
import { SuccessMessages } from "messages/success";
import { loadingStore } from "store/loading.store";
import { toastTool } from "tools/toast-tool";
import type {
  CreateGrupoLocais,
  FetchAllGrupoLocais,
  FetchGrupoLocaisById,
  RemoveGrupoLocais,
  ToggleGrupoLocaisStatus,
  UpdateGrupoLocais,
} from "types/api";

class GrupoLocaisService {
  public async create(grupoLocaisData: CreateGrupoLocais.Request): Promise<boolean> {
    loadingStore.wait();

    try {
      const response: CreateGrupoLocais.Response = await api.post("/GrupoLocais/", grupoLocaisData);
      const message = response.data.mensagem;

      if (!response.data.isOk) {
        if (!message) {
          throw new Error();
        }

        toastTool.warning(message);

        return false;
      }

      toastTool.success(SuccessMessages.GrupoLocais.CREATE);

      return true;
    } catch (error: unknown) {
      console.error(error);

      toastTool.error(ErrorMessages.GrupoLocais.CREATE);

      return false;
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

      return response.data.result?.items ?? [];
    } catch (error: unknown) {
      console.error(error);

      toastTool.error(ErrorMessages.GrupoLocais.FETCH_ALL);

      return [];
    } finally {
      loadingStore.stop();
    }
  }

  public async fetchById(fazendaId?: string): Promise<FetchGrupoLocaisById.Result | null> {
    loadingStore.wait();

    try {
      const response: FetchGrupoLocaisById.Response = await api.get(`/GrupoLocais/${fazendaId}`);

      if (!response.data.result) {
        throw new Error();
      }

      return response.data.result;
    } catch (error: unknown) {
      console.error(error);

      toastTool.error(ErrorMessages.GrupoLocais.FETCH_BY_ID);

      return null;
    } finally {
      loadingStore.stop();
    }
  }

  public async remove(fazendaId: string): Promise<boolean> {
    loadingStore.wait();

    try {
      const response: RemoveGrupoLocais.Response = await api.delete(`/GrupoLocais/${fazendaId}`);
      const message = response.data.mensagem;

      if (!response.data.isOk) {
        if (!message) {
          throw new Error();
        }

        toastTool.warning(message);

        return false;
      }

      toastTool.success(SuccessMessages.GrupoLocais.REMOVE);

      return true;
    } catch (error: unknown) {
      console.error(error);

      toastTool.error(ErrorMessages.GrupoLocais.REMOVE);

      return false;
    } finally {
      loadingStore.stop();
    }
  }

  public async update(grupoLocaisData: UpdateGrupoLocais.Request): Promise<boolean> {
    loadingStore.wait();

    try {
      const response: UpdateGrupoLocais.Response = await api.put("/GrupoLocais", grupoLocaisData);
      const message = response.data.mensagem;

      if (!response.data.isOk) {
        if (!message) {
          throw new Error();
        }

        toastTool.warning(message);

        return false;
      }

      toastTool.success(SuccessMessages.GrupoLocais.UPDATE);

      return true;
    } catch (error: unknown) {
      console.error(error);

      toastTool.error(ErrorMessages.GrupoLocais.UPDATE);

      return false;
    } finally {
      loadingStore.stop();
    }
  }

  public async toggleStatus(fazendaId: string): Promise<boolean> {
    loadingStore.wait();

    try {
      const response: ToggleGrupoLocaisStatus.Response = await api.get(
        `/GrupoLocais/AtivarDesativar/${fazendaId}`,
      );

      if (!response.data) throw new Error();

      toastTool.success(SuccessMessages.GrupoLocais.TOGGLE_STATUS);

      return true;
    } catch (error: unknown) {
      console.error(error);

      toastTool.error(ErrorMessages.GrupoLocais.TOGGLE_STATUS);

      return false;
    } finally {
      loadingStore.stop();
    }
  }
}

export const grupoLocaisService = new GrupoLocaisService();
