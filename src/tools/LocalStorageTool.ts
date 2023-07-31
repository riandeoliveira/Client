export abstract class LocalStorageTool {
  public static getItem<T>(key: string): T | null {
    const storageItem: string | null = localStorage.getItem(key);

    if (storageItem) return JSON.parse(storageItem);

    return null;
  }

  public static setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value, null, 2));
  }
}
