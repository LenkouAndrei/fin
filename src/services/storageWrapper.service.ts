class StorageWrapperService {
  public getItem = (key: string): any => {
    return localStorage.getItem(key);
  };

  public addItem = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  public removeItem = (key: string): void => {
    localStorage.removeItem(key);
  };
}

export default new StorageWrapperService();
