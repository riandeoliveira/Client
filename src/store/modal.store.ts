import { makeObservable, observable } from "mobx";
import type { ModalType } from "types/modal";

class ModalStore {
  public removeFazenda: { isOpen: boolean };
  public toggleFazendaStatus: { isOpen: boolean };

  public constructor() {
    this.removeFazenda = { isOpen: false };
    this.toggleFazendaStatus = { isOpen: false };

    makeObservable(this, {
      removeFazenda: observable,
      toggleFazendaStatus: observable,
    });
  }

  public open(modalType: ModalType): void {
    this[modalType].isOpen = true;
  }

  public close(modalType: ModalType): void {
    this[modalType].isOpen = false;
  }
}

export const modalStore = new ModalStore();
