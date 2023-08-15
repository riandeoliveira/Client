import { action, makeAutoObservable, observable } from "mobx";
import { localStorageStore } from "./local-storage.store";

export interface IFilterOptions {
  fazendaId: string;
  filtro: string;
  page: number;
  pageSize: number;
}

class FilterStore {
  public fazendaId: string;
  public filtro: string;
  public page: number;
  public pageSize: number;

  public constructor() {
    this.fazendaId = localStorageStore.fazenda?.value || "";
    this.filtro = "";
    this.page = 1;
    this.pageSize = 10;

    makeAutoObservable(this, {
      fazendaId: observable,
      filtro: observable,
      page: observable,
      pageSize: observable,

      getAll: action,
      setFiltro: action,
    });
  }

  public getAll(): IFilterOptions {
    return {
      fazendaId: this.fazendaId,
      filtro: this.filtro,
      page: this.page,
      pageSize: this.pageSize,
    };
  }

  public setFiltro(filtro: string): void {
    this.filtro = filtro;
  }
}

export const filterStore = new FilterStore();
