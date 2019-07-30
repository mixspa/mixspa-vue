"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = _interopRequireDefault(require("@mixspa/core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  props: ['base', 'to'],
  methods: {
    onClick: function onClick(event) {
      event.preventDefault();

      _core.default.emitLink(this.base + this.to);
    }
  },
  render: function render(createElement) {
    var attrs = {
      href: 'javascript:void'
    };
    var on = {
      click: this.onClick
    };
    return createElement('a', {
      attrs: attrs,
      on: on
    }, this.$slots.default);
  }
};
exports.default = _default;