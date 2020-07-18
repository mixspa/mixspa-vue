"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _link = _interopRequireDefault(require("@mixspa/core/lib/link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  created: function created() {
    var _this = this;

    this._mixspaLinkListener = _link.default.onLink(function (url) {
      _this.$router && _this.$router.push(url);
    });
  },
  destroyed: function destroyed() {
    _link.default.offLink(this._mixspaLinkListener);
  }
};
exports.default = _default;