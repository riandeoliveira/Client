import { api } from "apis";
import { ErrorMessages } from "messages/error";
import { loadingStore } from "store/loading.store";
import { toastTool } from "tools/toast-tool";
import type { FetchAllSafraByGrupoSafraIds } from "types/api";

class SafraService {
  public async fetchAllByGrupoSafraIds(
    grupoSafraIds: string[],
  ): Promise<FetchAllSafraByGrupoSafraIds.Result[]> {
    loadingStore.wait();

    try {
      const response: FetchAllSafraByGrupoSafraIds.Response = await api.post(
        "/Safra/GetSafraPorGruposSafra",
        grupoSafraIds,
      );

      return response.data.result ?? [];
    } catch (error: unknown) {
      console.error(error);

      toastTool.error(ErrorMessages.Safra.FETCH_ALL_BY_GRUPO_SAFRA_IDS);

      return [];
    } finally {
      loadingStore.stop();
    }
  }
}

export const safraService = new SafraService();
