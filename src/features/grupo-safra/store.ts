import { action, makeAutoObservable, observable } from "mobx";
import type { FetchAllGrupoSafraByFazendaId } from "./types";

interface IGrupoSafra extends FetchAllGrupoSafraByFazendaId.Result {}

class GrupoSafraStore {
  public listing: IGrupoSafra[];

  public constructor() {
    this.listing = [];

    makeAutoObservable(this, {
      listing: observable,

      setListing: action,
    });
  }

  public setListing(listing: IGrupoSafra[]): void {
    this.listing = listing;
  }
}

export const grupoSafraStore = new GrupoSafraStore();
