import storageWrapperService from './storageWrapper.service';

const localStorage = window.localStorage.__proto__;
const mockArguments = {
    key: 'test',
    value: 12
};

describe('StorageWrapperService', () => {
    it ('should call localStorage.getItem with LS field on "getItem()" method', () => {
        const getItemSpyon = jest.spyOn(localStorage, 'getItem');
        storageWrapperService.getItem(mockArguments.key);
        expect(getItemSpyon).toBeCalledWith(mockArguments.key);
    });

    it ('should call localStorage.setItem with LS field on "addItem()" method', () => {
        const setItemSpyon = jest.spyOn(localStorage, 'setItem');
        storageWrapperService.addItem(mockArguments.key, mockArguments.value);
        expect(setItemSpyon).toBeCalledWith(mockArguments.key, JSON.stringify(mockArguments.value));
    });

    it ('should call localStorage.removeItem with LS field on "removeItem()" method', () => {
        const removeItemSpyon = jest.spyOn(localStorage, 'removeItem');
        storageWrapperService.removeItem(mockArguments.key);
        expect(removeItemSpyon).toBeCalledWith(mockArguments.key);
    });
});
