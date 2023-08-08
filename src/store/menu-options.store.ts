import { LocalStorageTool } from "tools/LocalStorageTool";
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
        clientes: LocalStorageTool.getItem("clientes"),
        safras: LocalStorageTool.getItem("safras"),
        atividades: LocalStorageTool.getItem("atividades"),
      },

      action: {
        setClientes(payload: SelectOptionsType | null): void {
          LocalStorageTool.setItem("clientes", payload);

          set(({ state }) => {
            state.clientes = payload;
          });
        },

        setSafras(payload: SelectOptionsType[] | null): void {
          LocalStorageTool.setItem("safras", payload);

          set(({ state }) => {
            state.safras = payload;
          });
        },

        setAtividades(payload: SelectOptionsType[] | null): void {
          LocalStorageTool.setItem("atividades", payload);

          set(({ state }) => {
            state.atividades = payload;
          });
        },
      },
    };
  }),
);
