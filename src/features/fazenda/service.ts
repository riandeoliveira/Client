import { api } from "apis";
import { loadingStore } from "store/loading.store";
import { toastTool } from "tools/toast-tool";
import { FazendaMessages } from "./messages";
import type { FetchAllFazenda } from "./types";

class FazendaService {
  public async fetchAll(): Promise<FetchAllFazenda.Result[]> {
    loadingStore.wait();

    try {
      const response: FetchAllFazenda.Response = await api.get("/Fazenda");

      return response.data.result ?? [];
    } catch (error: unknown) {
      console.error(error);

      toastTool.error(FazendaMessages.Error.FETCH_ALL);

      return [];
    } finally {
      loadingStore.stop();
    }
  }
}

export const fazendaService = new FazendaService();
