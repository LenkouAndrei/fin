import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
