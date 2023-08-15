import { api } from "apis";
import { loadingStore } from "store/loading.store";
import { toastTool } from "tools/toast-tool";
import { SafraMessages } from "./messages";
import type { FetchAllSafraByGrupoSafraIds } from "./types";

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

      toastTool.error(SafraMessages.Error.FETCH_ALL_BY_GRUPO_SAFRA_IDS);

      return [];
    } finally {
      loadingStore.stop();
    }
  }
}

export const safraService = new SafraService();
