import { action, makeAutoObservable, observable } from "mobx";
import type { FetchAllGrupoLocais } from "types/api";

interface IGrupoLocais extends FetchAllGrupoLocais.Result {}

class GrupoLocaisStore {
  public current: IGrupoLocais | null;
  public listing: IGrupoLocais[];
  public selectedGrupoLocais: IGrupoLocais;

  public constructor() {
    this.current = {} as IGrupoLocais;
    this.listing = [];
    this.selectedGrupoLocais = {} as IGrupoLocais;

    makeAutoObservable(this, {
      current: observable,
      listing: observable,
      selectedGrupoLocais: observable,

      setCurrent: action,
      setListing: action,
      setSelectedGrupoLocais: action,
    });
  }

  public setCurrent(current: IGrupoLocais | null): void {
    this.current = current;
  }

  public setListing(listing: IGrupoLocais[]): void {
    this.listing = listing;
  }

  public setSelectedGrupoLocais(grupoLocais: IGrupoLocais): void {
    this.selectedGrupoLocais = grupoLocais;
  }
}

export const grupoLocaisStore = new GrupoLocaisStore();
