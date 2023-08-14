import { api } from "apis";
import { ErrorMessages } from "messages/error";
import { loadingStore } from "store/loading.store";
import { toastTool } from "tools/toast-tool";
import type { FetchAllFazenda } from "types/api";

class FazendaService {
  public async fetchAll(): Promise<FetchAllFazenda.Result[]> {
    loadingStore.wait();

    try {
      const response: FetchAllFazenda.Response = await api.get("/Fazenda");

      return response.data.result ?? [];
    } catch (error: unknown) {
      console.error(error);

      toastTool.error(ErrorMessages.Fazenda.FETCH_ALL);

      return [];
    } finally {
      loadingStore.stop();
    }
  }
}

export const fazendaService = new FazendaService();
