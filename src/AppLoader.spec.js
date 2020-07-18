import Vue from 'vue';
import { render } from '@testing-library/vue';
import MixspaContext from '@mixspa/core/lib/context';
import createApp from './createApp';
import AppLoader from './AppLoader';

describe('AppLoader', () => {
  let app = {id: 'test-id', tag: 'test-app'};

  let AppLoadWrapper = {
    name: 'AppLoadWrapper',
    render: h => h(
      AppLoader, 
      { props: { appId: app.id, appProps: { 'data-test': "Hello" } } }, 
      [ 
        h('div', { slot: 'loading', attrs: { 'data-testid': 'test-loader' } }, 'Loading Bar'), 
        h('div', { slot: 'fallback', attrs: { 'data-testid': 'test-error' } }, 'Load error')
      ]
    )
  };

  beforeAll(() => {
    createApp('test-app', (props) => {
      return {
        data: {
          testName: props['data-test']
        },
        render(h) {
          return h('div', { attrs: { 'data-testid': 'test-app' } }, 'Test App ' + this.testName)
        }
      };
    });
    MixspaContext.getApp = jest.fn().mockReturnValue(app);
  });

  describe('#load success', () => {
    let loadPromise;

    beforeEach(() => {
      loadPromise = new Promise((resolve) => resolve(app));
      app.load = () => loadPromise;
    });

    it('should render loading slot', async () => {
      const { getByTestId } = render(AppLoadWrapper);
      expect(getByTestId('test-loader')).toHaveTextContent('Loading Bar');
    });

    it('should render loaded app', async () => {
      const { getByTestId } = render(AppLoadWrapper);
      await Vue.nextTick()
      expect(getByTestId('test-app')).toHaveTextContent('Test App Hello');
    });
  });

  describe('#load error', () => {
    let loadPromise

    beforeEach(() => {
      loadPromise = new Promise((resolve, reject) => reject(new Error('load app error')));
      app.load = () => loadPromise;
    });

    it('should render load error', async () => {
      const { getByTestId } = render(AppLoadWrapper);
      await Vue.nextTick()
      await Vue.nextTick()
      expect(getByTestId('test-error')).toHaveTextContent('Load error');
    });
  });
});
