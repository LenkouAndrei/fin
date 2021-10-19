import storageWrapperService from './storageWrapper.service';

export interface ISpending {
  id: string;
  spendingName: string;
  amount: number;
}

class SpendingsService {
  public readonly fieldName: string = 'spendings';

  public getAllSpendings = (): ISpending[] => {
    const allSpendingJSON =
      storageWrapperService.getItem(this.fieldName) || JSON.stringify([]);
    return JSON.parse(allSpendingJSON);
  };

  public getSpendingById = (outerId: string): ISpending | null => {
    const spendings = this.getAllSpendings();
    return spendings.find(({ id }: ISpending) => id === outerId) || null;
  };

  public updateSpending = (spending: ISpending): void => {
    const spendings = this.getAllSpendings();
    const updatedIdx = spendings.findIndex(
      ({ id }: ISpending) => id === spending.id
    );
    const newSpendings = [
      ...spendings.slice(0, updatedIdx),
      spending,
      ...spendings.slice(updatedIdx + 1),
    ];
    storageWrapperService.addItem<ISpending[]>(this.fieldName, newSpendings);
  };

  public addSpending = (spending: ISpending): void => {
    const spendings = this.getAllSpendings();
    spendings.push(spending);
    storageWrapperService.addItem<ISpending[]>(this.fieldName, spendings);
  };

  public deleteSpending = (outerId: string): void => {
    const spendings = this.getAllSpendings();
    const updatedIdx = spendings.findIndex(
      ({ id }: ISpending) => id === outerId
    );
    const newSpendings = [
      ...spendings.slice(0, updatedIdx),
      ...spendings.slice(updatedIdx + 1),
    ];
    storageWrapperService.addItem<ISpending[]>(this.fieldName, newSpendings);
  };

  public clearAllSpendings = (): void => {
    storageWrapperService.removeItem(this.fieldName);
  };
}

export default new SpendingsService();
