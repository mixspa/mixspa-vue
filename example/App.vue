<template>
  <div :class="$style.app">
    <div :class="$style.nav">
      <app-link :base="baseUrl" to="/">Home</app-link> |
      <app-link :base="baseUrl" to="/app-one">App One</app-link> |
      <app-link :base="baseUrl" to="/app-two">App Two</app-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" module>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import AppLink from '../src/AppLink.vue';
export default {
  props: ['baseUrl'],
  components: {
    'app-link': AppLink
  }
}
</script>
