import { action, makeAutoObservable, observable } from "mobx";
import type { FetchAllResponse } from "services/fazenda-service";

class FazendaStore {
  public listing: FetchAllResponse[];
  public selectedFazenda: FetchAllResponse;

  public constructor() {
    this.listing = [];
    this.selectedFazenda = {} as FetchAllResponse;

    makeAutoObservable(this, {
      listing: observable,
      selectedFazenda: observable,

      setListing: action,
      setSelectedFazenda: action,
    });
  }

  public setListing(listing: FetchAllResponse[]): void {
    this.listing = listing;
  }

  public setSelectedFazenda(fazenda: FetchAllResponse): void {
    this.selectedFazenda = fazenda;
  }
}

export const fazendaStore = new FazendaStore();
