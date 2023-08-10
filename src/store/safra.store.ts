import type { FetchByFazendaIdResponse } from "services/safra-service";
import { SafraService } from "services/safra-service";
import { LocalStorageTool } from "tools/local-storage-tool";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Store = {
  state: {
    menuOptions: FetchByFazendaIdResponse[] | null;
  };
  action: {
    fetchByFazendaId(fazendaId: string): Promise<void>;
  };
};

/**
 * Armazena estados globais relacionados a **Safras**.
 */
export const useSafraStore = create(
  immer<Store>((set) => {
    return {
      state: {
        menuOptions: LocalStorageTool.getItem("safras"),
      },

      action: {
        async fetchByFazendaId(fazendaId: string): Promise<void> {
          const data: FetchByFazendaIdResponse[] | null = await SafraService.fetchByFazendaId(
            fazendaId,
          );

          set({
            state: {
              menuOptions: data,
            },
          });
        },
      },
    };
  }),
);
