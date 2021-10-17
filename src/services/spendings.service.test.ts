import spendingsservice from './spendings.service';
import storageWrapperService from './storageWrapper.service';

function spyAddItemExpectedPartialCall(fn: () => void) {
  const addItemSpyon = jest.spyOn(storageWrapperService, 'addItem');
  const fieldName = spendingsservice['fieldName'];
  fn();
  expect(addItemSpyon).toBeCalledWith(fieldName, expect.anything());
};

function spyGetItemExpectedCallWith(fn: () => void) {
  const getItemSpyon = jest.spyOn(storageWrapperService, 'getItem');
  const fieldName = spendingsservice['fieldName'];
  fn();
  expect(getItemSpyon).toBeCalledWith(fieldName);
};

describe('SpendingsService', () => {
    it ('should call storageWrapperService.getItem with LS field on "getAllSpendings()" method', () => {
      spyGetItemExpectedCallWith(() => { spendingsservice.getAllSpendings(); });
    });

    it ('should call storageWrapperService.getItem with LS field on "getSpendingById()" method', () => {
      spyGetItemExpectedCallWith(() => { spendingsservice.getSpendingById('test1'); });
    });

    it ('should call storageWrapperService.addItem with LS field on "updateSpending()" method', () => {
      spyAddItemExpectedPartialCall(() => {
        spendingsservice.updateSpending({ id: 'test1', spendingName: 'Test', amount: 12 });
      });
    });

    it ('should call storageWrapperService.addItem with LS field on "deleteSpending()" method', () => {
      spyAddItemExpectedPartialCall(() => {
        spendingsservice.deleteSpending('test1');
      });
    });

    it ('should call storageWrapperService.removeItem with LS field on "clearAllSpendings()" method', () => {
      const removeItemSpyon = jest.spyOn(storageWrapperService, 'removeItem');
      const fieldName = spendingsservice['fieldName'];
      spendingsservice.clearAllSpendings();
      expect(removeItemSpyon).toBeCalledWith(fieldName);
    });
});