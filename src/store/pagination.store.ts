import { makeAutoObservable, observable } from "mobx";

class PaginationStore {
  public fazendaId: string;
  public filtro: string;
  public page: number;
  public pageSize: number;

  public constructor() {
    this.fazendaId = "";
    this.filtro = "";
    this.page = 0;
    this.pageSize = 0;

    makeAutoObservable(this, {
      fazendaId: observable,
      filtro: observable,
      page: observable,
      pageSize: observable,
    });
  }

  public mount() {}
}

export const paginationStore = new PaginationStore();
