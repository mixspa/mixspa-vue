"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _context = _interopRequireDefault(require("@mixspa/core/lib/context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  props: ['appId', 'appProps'],
  data: function data() {
    return {
      appInfo: {},
      isLoading: true,
      isSuccess: false
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
      this.appInfo = {};
      this.isLoading = true;
      this.isSuccess = false;
    },
    loadApp: function loadApp() {
      var _this = this;

      var app = _context.default.getApp(this.appId);

      app.load().then(function (appInfo) {
        _this.appInfo = appInfo;
        _this.isLoading = false;
        _this.isSuccess = true;
      }).catch(function () {
        _this.isLoading = false;
        _this.isSuccess = false;
      });
    }
  },
  render: function render(h) {
    if (this.isSuccess) {
      return h('div', {
        attrs: {
          id: this.appId
        }
      }, [h(this.appInfo.tag, {
        attrs: this.appProps
      })]);
    } else if (this.isLoading) {
      return h('div', {
        attrs: {
          id: this.appId
        }
      }, this.$slots.loading);
    } else {
      return h('div', {
        attrs: {
          id: this.appId
        }
      }, this.$slots.fallback);
    }
  }
};
exports.default = _default;