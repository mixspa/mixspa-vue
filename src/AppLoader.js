import MixspaContext from '@mixspa/core/lib/context';

export default {
  props: ['appId', 'appProps'],
  data() {
    return {
      appInfo: {},
      isLoading: true,
      isSuccess: false,
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
      this.appInfo = {};
      this.isLoading = true;
      this.isSuccess = false;
    },
    loadApp() {
      let app = MixspaContext.getApp(this.appId);
      app.load().then(appInfo => {
        this.appInfo = appInfo;
        this.isLoading = false;
        this.isSuccess = true;
      }).catch(() => {
        this.isLoading = false;
        this.isSuccess = false;
      });
    }
  },
  render(h) {
    if (this.isSuccess) {
      return h('div', { attrs: { id: this.appId } }, [h(this.appInfo.tag, { attrs: this.appProps })]);
    } else if (this.isLoading) {
      return h('div', { attrs: { id: this.appId } }, this.$slots.loading);
    } else {
      return h('div', { attrs: { id: this.appId } }, this.$slots.fallback);
    }
  }
};
