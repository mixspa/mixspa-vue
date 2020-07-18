# mixspa-vue
Mixspa-vue is a wrapper for mixspa-core with vue.

## Current Status:

[![NPM Version](https://img.shields.io/npm/v/@mixspa/vue.svg)](https://npmjs.org/package/@mixspa/vue)
[![NPM Downloads](https://img.shields.io/npm/dm/@mixspa/vue.svg)](https://npmjs.org/package/@mixspa/vue)
[![Build Status](https://circleci.com/gh/mixspa/mixspa-vue.svg?style=svg)](https://circleci.com/gh/mixspa/mixspa-vue)

[![NPM](https://nodei.co/npm/@mixspa/vue.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@mixspa/vue/)

## What it come from?

Pleas reference here: [mixspa-core](https://github.com/mixspa/mixspa-core)

## Apis for this library

### createApp: create a mixspa app.

```js
import { createApp } from '@mixspa/vue';
import App from './App';

createApp('vue-app', ({ baseurl }) => {
  return {
    render: h => h(App)
  };
});
```

### mixin: Receive event and handle url change event.

```js
import { mixin } from '@mixspa/vue';
import App from './App';
import router from './router';

new Vue({
  mixins: [mixin],
  router: router,
  render: h => h(App, { props: { baseUrl: '' } })
}).$mount('#app');
```

### AppLoader: load a mixspa app.

```vue
<template>
  <app-loader app-id="vue-app" app-props="{}">
    <div v-slot:loading>Loading...</div>
    <div v-slot:fallback>Not found</div>
  </app-loader>
</template>

<script>
import { AppLoader } from '@mixspa/vue'
export default {
  components: {
    'app-loader': AppLoader
  }
}
</script>
```

### AppLink: This link will send a event to event bus.

```vue
<template>
  <app-link to="/vue-app">Vue App</app-link>
</template>

<script>
import { AppLink } from '@mixspa/vue'
export default {
  components: {
    'app-link': AppLink
  }
}
</script>
```

## License

mixspa-vue is released under the [MIT license](https://github.com/mixspa/mixspa-vue/blob/master/LICENSE).
