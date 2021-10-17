import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('<Header />', () => {
  it('should render Input', () => {
      const { asFragment } = render(<Header spent={20} restSum={15}/>);
      expect(asFragment()).toMatchSnapshot();
  });

  it('should apply passed spent prop', () => {
    const spent = 20;
    render(<Header spent={spent} restSum={15}/>);
    const htmlEl = screen.getByText(`Spend: ${spent}`);
    expect(htmlEl).toBeTruthy();
  });

  it('should apply passed restSum prop', () => {
    const restSum = 20;
    render(<Header spent={15} restSum={restSum}/>);
    const htmlEl = screen.getByText(`Balance: ${restSum}`);
    expect(htmlEl).toBeTruthy();
  });
});
