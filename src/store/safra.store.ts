import { action, makeAutoObservable, observable } from "mobx";
import type { FetchAllSafraByGrupoSafraIds } from "types/api";

interface ISafra extends FetchAllSafraByGrupoSafraIds.Result {}

class SafraStore {
  public listing: ISafra[];

  public constructor() {
    this.listing = [];

    makeAutoObservable(this, {
      listing: observable,

      setListing: action,
    });
  }

  public setListing(listing: ISafra[]): void {
    this.listing = listing;
  }
}

export const safraStore = new SafraStore();
