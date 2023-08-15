import { action, makeAutoObservable, observable } from "mobx";
import type { FetchAllFazenda } from "./types";

interface IFazenda extends FetchAllFazenda.Result {}

class FazendaStore {
  public listing: IFazenda[];

  public constructor() {
    this.listing = [];

    makeAutoObservable(this, {
      listing: observable,

      setListing: action,
    });
  }

  public setListing(listing: IFazenda[]): void {
    this.listing = listing;
  }
}

export const fazendaStore = new FazendaStore();
