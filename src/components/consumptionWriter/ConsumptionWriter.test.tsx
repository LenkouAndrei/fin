import { render, screen } from '@testing-library/react';
import { ConsumptionWriter } from './ConsumptionWriter';

describe('<ConsumptionWriter />', () => {
  it('should render ConsumptionWriter', () => {
    const mockCallback = jest.fn();
    const { asFragment } = render(<ConsumptionWriter updateData={mockCallback}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should use callback when submit clicked', () => {
    const mockCallback = jest.fn();
    render(<ConsumptionWriter updateData={mockCallback}/>);
    const submitBtn = screen.getByText('Submit');
    submitBtn.click();
    expect(mockCallback).toHaveBeenCalled();
  });
});
