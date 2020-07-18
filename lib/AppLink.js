"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _link = _interopRequireDefault(require("@mixspa/core/lib/link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick: function onClick(e) {
      e.preventDefault();

      _link.default.emitLink(e.target.getAttribute('href'));
    }
  },
  render: function render(h) {
    return h('a', {
      attrs: {
        href: this.to
      },
      on: {
        click: this.onClick
      }
    }, this.$slots.default);
  }
};
exports.default = _default;