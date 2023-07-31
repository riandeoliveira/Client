import { LocalStorageTool } from "tools/LocalStorageTool";
import type { SelectOptionsType, StoreType } from "types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  clientes: SelectOptionsType | null;
  safras: SelectOptionsType[] | null;
  atividades: SelectOptionsType[] | null;
};

type Actions = {
  setClientes(payload: SelectOptionsType | null): void;
  setSafras(payload: SelectOptionsType[] | null): void;
  setAtividades(payload: SelectOptionsType[] | null): void;
};

export const useMenuOptionsStore = create(
  immer<StoreType<State, Actions>>((set) => {
    return {
      values: {
        clientes: LocalStorageTool.getItem("clientes"),
        safras: LocalStorageTool.getItem("safras"),
        atividades: LocalStorageTool.getItem("atividades"),
      },

      actions: {
        setClientes(payload: SelectOptionsType | null): void {
          LocalStorageTool.setItem("clientes", payload);

          set((state) => {
            state.values.clientes = payload;
          });
        },

        setSafras(payload: SelectOptionsType[] | null): void {
          LocalStorageTool.setItem("safras", payload);

          set((state) => {
            state.values.safras = payload;
          });
        },

        setAtividades(payload: SelectOptionsType[] | null): void {
          LocalStorageTool.setItem("atividades", payload);

          set((state) => {
            state.values.atividades = payload;
          });
        },
      },
    };
  }),
);
