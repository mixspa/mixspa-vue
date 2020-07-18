import Vue from 'vue';
import Mixspa from '@mixspa/core';
import App from './App.vue';
import router from './router';
import { mixin } from '../src/';

Mixspa.register({
  "id": "vue-app-one",
  "tag": "vue-app-one",
  "assets": ["/app-one.bundle.js"]
});
Mixspa.register({
  "id": "vue-app-two",
  "tag": "vue-app-two",
  "assets": ["/app-two.bundle.js"]
});

new Vue({
  mixins: [mixin],
  router: router(''),
  render: h => h(App, { props: { baseUrl: '' } })
}).$mount('#app');
