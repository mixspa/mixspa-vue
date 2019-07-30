"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _core = _interopRequireDefault(require("@mixspa/core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createApp = function createApp(tag, getOptions) {
  _core.default.define({
    tag: tag,
    render: function render(parentEl) {
      var appEl = document.createElement('div');
      parentEl.appendChild(appEl);
      parentEl.vm = new _vue.default(getOptions(_core.default.getAttributes(parentEl))).$mount(appEl);
    },
    unmount: function unmount(parentEl) {
      parentEl.vm && parentEl.vm.$destroy();
    }
  });
};

var _default = createApp;
exports.default = _default;