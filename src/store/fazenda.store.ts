import type { FetchAllResponse } from "services/fazenda-service";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Store = {
  state: {
    list: FetchAllResponse[];
  };
  setList(payload: FetchAllResponse[]): void;
};

export const useFazendaStore = create(
  immer<Store>((set) => ({
    state: {
      list: [],
    },

    setList(payload: FetchAllResponse[]): void {
      set(({ state }) => {
        state.list = payload;
      });
    },
  })),
);
