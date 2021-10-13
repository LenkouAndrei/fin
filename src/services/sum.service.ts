import storageWrapperService from './storageWrapper.service';

interface ISum {
  rest: number;
  spent: number;
}

class SumService {
  private readonly fieldName: string = 'sum';

  private readonly prdefinedSum: number = 1100;

  constructor() {
    const sumObj = this.getSums();
    const dayOfMonth = new Date(Date.now()).getDate();
    if (Object.keys(sumObj).length === 0) {
      this.setSum('rest', this.prdefinedSum);
      this.setSum('spent', 0);
    }
    if (dayOfMonth === 21) {
      this.addSum('rest', this.prdefinedSum);
      this.setSum('spent', 0);
    }
  }

  public getSums = (): ISum => {
    const allSpendingJSON =
            storageWrapperService.getItem(this.fieldName) || JSON.stringify({});
    return JSON.parse(allSpendingJSON);
  };

  public getSum = (key: keyof ISum): number | null => {
    const sums = this.getSums();
    return sums[key] || null;
  };

  public setSum = (key: keyof ISum, value: number): void => {
    const sums = this.getSums();
    sums[key] = value;
    storageWrapperService.addItem<ISum>(this.fieldName, sums);
  };

  public addSum = (key: keyof ISum, value: number): void => {
    const sums = this.getSums();
    sums[key] += value;
    storageWrapperService.addItem<ISum>(this.fieldName, sums);
  };

  public deleteSum = (key: keyof ISum): void => {
    const sums = this.getSums();
    delete sums[key];
    storageWrapperService.addItem<Partial<ISum>>(this.fieldName, sums);
  };

  public clearSum = (): void => {
    storageWrapperService.removeItem(this.fieldName);
  };
}

export default new SumService();