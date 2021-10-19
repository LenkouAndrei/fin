import { render, screen, waitFor } from '@testing-library/react';
import { Details } from './Details';

const mockSpendings = [
  { id: 'AAA-1', spendingName: 'Test-1', amount: 20 },
  { id: 'AAA-2', spendingName: 'Test-2', amount: 30 },
];

describe('<Details />', () => {
  it('should render Details', () => {
    const { asFragment } = render(<Details spendings={mockSpendings} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain toggle button', async () => {
    render(<Details spendings={[]} />);
    const toggleBtn = screen.getByText('Show Details');
    expect(toggleBtn).toBeTruthy();
  });

  it('should show details on toggleBtn click', async () => {
    const { container } = render(<Details spendings={[]} />);
    const toggleBtn = screen.getByText('Show Details');
    toggleBtn.click();
    await waitFor(() => {
      expect(container.querySelector('.details__list')).toBeTruthy();
    });
  });

  it('should hide details on toggleBtn click', async () => {
    const { container } = render(<Details spendings={[]} />);
    const toggleBtn = screen.getByText('Show Details');
    toggleBtn.click();
    toggleBtn.click();
    await waitFor(() => {
      expect(container.querySelector('.details__list')).toBe(null);
    });
  });

  it('should show empty detail on toggleBtn click if spendings are absent', async () => {
    const { container } = render(<Details spendings={[]} />);
    const toggleBtn = screen.getByText('Show Details');
    toggleBtn.click();
    await waitFor(() => {
      expect(
        container.querySelector('.details__list-item--empty')
      ).toBeTruthy();
    });
  });

  it('should show details on toggleBtn click if spendings are present', async () => {
    const { container } = render(<Details spendings={mockSpendings} />);
    const toggleBtn = screen.getByText('Show Details');
    toggleBtn.click();
    await waitFor(() => {
      expect(container.querySelector('.details__list-item')).toBeTruthy();
    });
  });
});
