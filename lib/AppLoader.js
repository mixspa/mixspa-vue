"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = _interopRequireDefault(require("@mixspa/core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  props: ['appId', 'appProps'],
  data: function data() {
    return {
      appTag: '',
      isError: false,
      isLoading: true
    };
  },
  created: function created() {
    this.loadApp();
  },
  watch: {
    appId: function appId(newVal, oldVal) {
      if (newVal != oldVal) {
        this.reset();
        this.loadApp();
      }
    }
  },
  methods: {
    reset: function reset() {
      this.isError = false;
      this.isLoading = true;
      this.appTag = '';
    },
    loadApp: function loadApp() {
      var _this = this;

      _core.default.load(this.appId).then(function (appInfo) {
        _this.isError = false;
        _this.isLoading = false;
        _this.appTag = appInfo.tag;
      }).catch(function () {
        _this.isError = true;
        _this.isLoading = false;
      });
    }
  },
  render: function render(createElement) {
    if (this.isError) {
      return createElement('div', this.$slots.fallback);
    } else if (this.isLoading) {
      return createElement('div', this.$slots.loading);
    } else {
      return createElement('div', [createElement(this.appTag, {
        attrs: this.appProps
      })]);
    }
  }
};
exports.default = _default;