import sumService from './sum.service';
import storageWrapperService from './storageWrapper.service';

function spyAddItemExpectedPartialCall(fn: () => void) {
  const addItemSpyon = jest.spyOn(storageWrapperService, 'addItem');
  const fieldName = sumService.fieldName;
  fn();
  expect(addItemSpyon).toBeCalledWith(fieldName, expect.anything());
}

function spyGetItemExpectedCallWith(fn: () => void) {
  const getItemSpyon = jest.spyOn(storageWrapperService, 'getItem');
  const fieldName = sumService.fieldName;
  fn();
  expect(getItemSpyon).toBeCalledWith(fieldName);
}

describe('SumService', () => {
  it('should call storageWrapperService.getItem with LS field on "getSums()" method', () => {
    spyGetItemExpectedCallWith(() => {
      sumService.getSums();
    });
  });

  it('should call storageWrapperService.getItem with LS field on "getSum()" method', () => {
    spyGetItemExpectedCallWith(() => {
      sumService.getSum('rest');
    });
  });

  it('should call storageWrapperService.addItem with LS field on "setSum()" method', () => {
    spyAddItemExpectedPartialCall(() => {
      sumService.setSum('rest', 12);
    });
  });

  it('should call storageWrapperService.addItem with LS field on "addSum()" method', () => {
    spyAddItemExpectedPartialCall(() => {
      sumService.addSum('rest', 12);
    });
  });

  it('should call storageWrapperService.addItem with LS field on "deleteSum()" method', () => {
    spyAddItemExpectedPartialCall(() => {
      sumService.deleteSum('rest');
    });
  });

  it('should call storageWrapperService.removeItem with LS field on "clearSum()" method', () => {
    const getItemSpyon = jest.spyOn(storageWrapperService, 'removeItem');
    const fieldName = sumService.fieldName;
    sumService.clearSum();
    expect(getItemSpyon).toBeCalledWith(fieldName);
  });
});
