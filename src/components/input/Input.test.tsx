import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('<Input />', () => {
  it('should render Input', () => {
    const { asFragment } = render(<Input>Test</Input>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call passed callback on change', () => {
    const mockCallback = jest.fn();
    render(<Input onChange={mockCallback}>Hello</Input>);
    const inputEl = screen.getByDisplayValue('Hello');
    fireEvent.change(inputEl, { target: { value: 'a' } });
    expect(mockCallback).toHaveBeenCalled();
  });

  it('should apply passed type to input', () => {
    const typeAttr = 'number';
    render(<Input type={typeAttr}>2</Input>);
    const inputEl = screen.getByDisplayValue('2');
    const inputAttr = inputEl.getAttribute('type');
    expect(inputAttr).toBe(typeAttr);
  });

  it('should apply passed placeholder to input', () => {
    const placeholder = 'number';
    render(<Input placeholder={placeholder}>Hello</Input>);
    const inputEl = screen.getByPlaceholderText(placeholder);
    expect(inputEl).toBeTruthy();
  });
});
