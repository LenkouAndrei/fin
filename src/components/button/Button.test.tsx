import { render, screen } from '@testing-library/react';
import { Button, BtnShape, BtnSize } from './Button';

describe('<Button />', () => {
  it('should render Button', () => {
    const { asFragment } = render(<Button>Hello</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call passed callback on click', () => {
    const mockCallback = jest.fn();
    render(<Button onClick={mockCallback}>Hello</Button>);
    const btnEl = screen.getByText('Hello');
    btnEl.click();
    expect(mockCallback).toHaveBeenCalled();
  });

  it('should apply all passed class params', () => {
    const passedClasses = {
      shape: BtnShape.ellipse,
      size: BtnSize.small,
    };
    render(
      <Button
        shape={passedClasses.shape}
        size={passedClasses.size}
        isOutline={true}
      >
        Hello
      </Button>
    );
    const btnEl = screen.getByText('Hello');
    const isEveryInClass = [
      'outline',
      passedClasses.shape,
      passedClasses.size,
    ].every((item) => btnEl.classList.contains(item));
    expect(isEveryInClass).toBeTruthy();
  });
});
