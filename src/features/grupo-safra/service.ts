import { api } from "apis";
import { loadingStore } from "store/loading.store";
import { toastTool } from "tools/toast-tool";
import { GrupoSafraMessages } from "./messages";
import type { FetchAllGrupoSafraByFazendaId } from "./types";

class GrupoSafraService {
  public async fetchAllByFazendaId(
    fazendaId: string,
  ): Promise<FetchAllGrupoSafraByFazendaId.Result[]> {
    loadingStore.wait();

    try {
      const response: FetchAllGrupoSafraByFazendaId.Response = await api.get(
        `/Safra/getGrupoSafraPorFazendaId/${fazendaId}`,
      );

      return response.data;
    } catch (error: unknown) {
      console.log(error);

      toastTool.error(GrupoSafraMessages.Error.FETCH_ALL_BY_FAZENDA_ID);

      return [];
    } finally {
      loadingStore.stop();
    }
  }
}

export const grupoSafraService = new GrupoSafraService();
