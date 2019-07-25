import '@babel/polyfill';
import Vue from 'vue';
import Mixspa from '@mixspa/core';
import App from './App.vue';
import router from './router'

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
  router: router(''),
  mounted() {
    Mixspa.onLink((url) => {
      console.log('linked to: ' + url);
      this.$router.push(url);
    });
  },
  render: h => h(App, { props: { baseUrl: '' } })
}).$mount('#app');
