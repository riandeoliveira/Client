import { action, makeAutoObservable, observable } from "mobx";
import type { FetchAllResponse } from "services/grupo-locais-service";

class GrupoLocaisStore {
  public listing: FetchAllResponse[];
  public selectedGrupoLocais: FetchAllResponse;

  public constructor() {
    this.listing = [];
    this.selectedGrupoLocais = {} as FetchAllResponse;

    makeAutoObservable(this, {
      listing: observable,
      selectedGrupoLocais: observable,

      setListing: action,
      setselectedGrupoLocais: action,
    });
  }

  public setListing(listing: FetchAllResponse[]): void {
    this.listing = listing;
  }

  public setselectedGrupoLocais(grupoLocais: FetchAllResponse): void {
    this.selectedGrupoLocais = grupoLocais;
  }
}

export const grupoLocaisStore = new GrupoLocaisStore();
