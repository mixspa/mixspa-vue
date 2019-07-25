import Mixspa from '@mixspa/core';

export default {
  props: ['appId', 'appProps'],
  data() {
    return {
      appTag: '',
      isError: false,
      isLoading: true,
    };
  },
  created() {
    this.loadApp();
  },
  watch: {
    appId(newVal, oldVal) {
      if (newVal != oldVal) {
        this.reset();
        this.loadApp();
      }
    }
  },
  methods: {
    reset() {
      this.isError = false;
      this.isLoading = true;
      this.appTag = '';
    },
    loadApp() {
      Mixspa.load(this.appId).then(appInfo => {
        this.isError = false;
        this.isLoading = false;
        this.appTag = appInfo.tag;
      }).catch(() => {
        this.isError = true;
        this.isLoading = false;
      });
    }
  },
  render(createElement) {
    if (this.isError) {
      return createElement('div', this.$slots.fallback);
    } else if (this.isLoading) {
      return createElement('div', this.$slots.loading);
    } else {
      return createElement('div', [createElement(this.appTag, { attrs: this.appProps })]);
    }
  }
};
