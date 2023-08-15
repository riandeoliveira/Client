import { action, makeAutoObservable, observable } from "mobx";
import type { ISelectOptions } from "types";

class LocalStorageStore {
  public accessToken: string | null;
  public fazenda: ISelectOptions | null;
  public grupoSafras: ISelectOptions[] | null;
  public safras: ISelectOptions[] | null;

  public constructor() {
    this.accessToken = this.getItem("access_token");
    this.fazenda = this.getItem("fazenda");
    this.grupoSafras = this.getItem("grupo_safras");
    this.safras = this.getItem("safras");

    makeAutoObservable(this, {
      accessToken: observable,
      fazenda: observable,
      grupoSafras: observable,
      safras: observable,

      getItem: action,
      setAccessToken: action,
      setFazenda: action,
      setGrupoSafra: action,
      setSafras: action,
      setItem: action,
    });
  }

  public getItem<T>(key: string): T | null {
    const storageItem: string | null = localStorage.getItem(key);

    if (storageItem) return JSON.parse(storageItem);

    return null;
  }

  public setAccessToken(accessToken: string | null): void {
    this.setItem("access_token", accessToken);
  }

  public setFazenda(fazenda: ISelectOptions | null): void {
    this.setItem("fazenda", fazenda);
  }

  public setGrupoSafra(grupoSafras: ISelectOptions[] | null): void {
    this.setItem("grupo_safras", grupoSafras);

    this.grupoSafras = this.getItem("grupo_safras");
  }

  public setSafras(safras: ISelectOptions[] | null): void {
    this.setItem("safras", safras);

    this.safras = this.getItem("safras");
  }

  public setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value, null, 2));
  }
}

export const localStorageStore = new LocalStorageStore();
