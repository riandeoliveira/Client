import { makeObservable, observable } from "mobx";

export type ModalType = "removeGrupoLocais" | "toggleGrupoLocaisStatus";

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
