import { render } from '@testing-library/vue'
import createApp from './createApp';

describe('createApp', () => {
  beforeEach(() => {
    createApp('app-test', (props) => {
      return {
        data: {
          testName: props['data-test']
        },
        render(h) {
          return h('div', { attrs: { 'data-testid': 'test' } }, 'Test App ' + this.testName)
        }
      };
    });
  });

  it('should render app', () => {
    let Container = {
      name: 'Container',
      render: h => h('app-test', { attrs: { 'data-test': 'Attribute' } })
    };
    const { getAllByTestId } = render(Container);
    expect(getAllByTestId('test')[0]).toHaveTextContent('Test App Attribute');
  });
});
