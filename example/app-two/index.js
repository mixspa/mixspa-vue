import Vue from 'vue'
import App from './App.vue'
import createApp from '../../src/createApp';

Vue.config.productionTip = false

createApp('vue-app-two', ({ baseurl }) => {
  console.log('app two url:' + baseurl);
  return {
    render: h => h(App)
  };
});
