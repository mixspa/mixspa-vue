import Vue from 'vue'
import App from './App.vue'
import createApp from '../../src/createApp';

Vue.config.productionTip = false

createApp('vue-app-one', ({ baseurl }) => {
  console.log('app one url:' + baseurl);
  return {
    render: h => h(App)
  };
});
