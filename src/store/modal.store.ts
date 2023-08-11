import { makeObservable, observable } from "mobx";
import type { ModalType } from "types/modal";

class ModalStore {
  public removeGrupoLocais: { isOpen: boolean };
  public toggleGrupoLocaisStatus: { isOpen: boolean };

  public constructor() {
    this.removeGrupoLocais = { isOpen: false };
    this.toggleGrupoLocaisStatus = { isOpen: false };

    makeObservable(this, {
      removeGrupoLocais: observable,
      toggleGrupoLocaisStatus: observable,
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
