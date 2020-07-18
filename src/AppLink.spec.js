import MixspaLink from '@mixspa/core/lib/link';
import { render, fireEvent } from '@testing-library/vue'
import AppLink from './AppLink';

describe('AppLink.vue', () => {
  let props = { "data-testid": "test", to: "http://www.test.com/test" };

  beforeEach(() => {
    MixspaLink.emitLink = jest.fn();
  });

  it('should render link', () => {
    const { getByTestId } = render(AppLink, { props: props, slots: { default: 'Go' } });
    expect(getByTestId('test')).toHaveTextContent('Go');
    expect(getByTestId('test')).toHaveAttribute('href', 'http://www.test.com/test');
  });

  it('should go to test url when click event', () => {
    const { getByTestId } = render(AppLink, { props: props, slots: { default: 'Go' } });
    fireEvent.click(getByTestId('test'));
    expect(MixspaLink.emitLink).toHaveBeenCalledWith('http://www.test.com/test');
  });
})
