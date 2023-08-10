import { localStorageTool } from "tools/local-storage-tool";
import type { SelectOptionsType } from "types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Store = {
  state: {
    clientes: SelectOptionsType | null;
    safras: SelectOptionsType[] | null;
    atividades: SelectOptionsType[] | null;
  };
  action: {
    setClientes(payload: SelectOptionsType | null): void;
    setSafras(payload: SelectOptionsType[] | null): void;
    setAtividades(payload: SelectOptionsType[] | null): void;
  };
};

export const useMenuOptionsStore = create(
  immer<Store>((set) => {
    return {
      state: {
        clientes: localStorageTool.getItem("clientes"),
        safras: localStorageTool.getItem("safras"),
        atividades: localStorageTool.getItem("atividades"),
      },

      action: {
        setClientes(payload: SelectOptionsType | null): void {
          localStorageTool.setItem("clientes", payload);

          set(({ state }) => {
            state.clientes = payload;
          });
        },

        setSafras(payload: SelectOptionsType[] | null): void {
          localStorageTool.setItem("safras", payload);

          set(({ state }) => {
            state.safras = payload;
          });
        },

        setAtividades(payload: SelectOptionsType[] | null): void {
          localStorageTool.setItem("atividades", payload);

          set(({ state }) => {
            state.atividades = payload;
          });
        },
      },
    };
  }),
);
