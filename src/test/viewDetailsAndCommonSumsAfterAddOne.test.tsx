import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { ISpending } from '../services/spendings.service';
import { MOCK_SPENDINGS_LIST, MOCK_SUMS, PURCHASE } from './fixtures/spendings';

const localStorageMock = (function () {
  const store = {
    spendings: MOCK_SPENDINGS_LIST,
    sum: MOCK_SUMS,
  };

  return {
    getItem: function (key: 'spendings' | 'sum'): string {
      return store[key] as string;
    },
    setItem: function (key: 'spendings' | 'sum', value: string) {
      store[key] = value;
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('view Details and sums', () => {
  describe('stored values should be visible when App loaded', () => {
    it('user can view the details list when open detail section', async () => {
      render(<App />);
      const toggleBtn = screen.getByText('Show Details');
      toggleBtn.click();
      await waitFor(() => {
        const parsedSpendingList = JSON.parse(MOCK_SPENDINGS_LIST);
        const arePurchasesVisible = parsedSpendingList.every(
          ({ spendingName }: ISpending) => !!screen.getByText(spendingName)
        );
        expect(arePurchasesVisible).toBeTruthy();
      });
    });

    it('user can view sums when App is loaded', () => {
      render(<App />);
      const spendText = screen.getByText(/Spend/i).textContent;
      const balanceText = screen.getByText(/Balance/i).textContent;
      const parsedSums = JSON.parse(MOCK_SUMS);
      const areAllSumDisplayed =
        spendText?.includes(parsedSums.spent) &&
        balanceText?.includes(parsedSums.rest);
      expect(areAllSumDisplayed).toBeTruthy();
    });
  });

  describe('stored values should be visible when user add purchase cost', () => {
    beforeEach(() => {
      localStorageMock.setItem('spendings', MOCK_SPENDINGS_LIST);
      localStorageMock.setItem('sum', MOCK_SUMS);
    });

    it('user can view the details list when open detail section', async () => {
      render(<App />);
      const purchaseCost = screen.getByPlaceholderText('How much');
      userEvent.type(purchaseCost, `${PURCHASE.amount}`);
      const purchaseName = screen.getByPlaceholderText('What for');
      userEvent.type(purchaseName, PURCHASE.spendingName);
      const submitBtn = screen.getByText('Submit');
      submitBtn.click();
      const toggleBtn = screen.getByText('Show Details');
      toggleBtn.click();
      await waitFor(() => {
        const parsedSpendingList = JSON.parse(MOCK_SPENDINGS_LIST);
        const arePurchasesVisible = [PURCHASE, ...parsedSpendingList].every(
          ({ spendingName }: ISpending) => !!screen.getByText(spendingName)
        );
        expect(arePurchasesVisible).toBeTruthy();
      });
    });

    it('user can view correct spend balance sums', async () => {
      render(<App />);
      const purchaseCost = screen.getByPlaceholderText('How much');
      userEvent.type(purchaseCost, `${PURCHASE.amount}`);
      const purchaseName = screen.getByPlaceholderText('What for');
      userEvent.type(purchaseName, PURCHASE.spendingName);
      const submitBtn = screen.getByText('Submit');
      submitBtn.click();
      await waitFor(() => {
        const spendContent = screen
          .getByText(/Spend/i)
          .textContent?.split(' ')[1];
        const spendNum = spendContent ? +spendContent : null;
        const balanceContent = screen
          .getByText(/Balance/i)
          .textContent?.split(' ')[1];
        const balanceNum = balanceContent ? +balanceContent : null;
        const { spent, rest } = JSON.parse(MOCK_SUMS);
        const isSpendCorrect = spendNum === spent + PURCHASE.amount;
        const isRestCorrect = balanceNum === rest - PURCHASE.amount;
        const areDisplayedSumCorrect = isSpendCorrect && isRestCorrect;
        expect(areDisplayedSumCorrect).toBeTruthy();
      });
    });
  });
});
