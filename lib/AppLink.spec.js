"use strict";

var _link = _interopRequireDefault(require("@mixspa/core/lib/link"));

var _vue = require("@testing-library/vue");

var _AppLink = _interopRequireDefault(require("./AppLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AppLink.vue', function () {
  var props = {
    "data-testid": "test",
    to: "http://www.test.com/test"
  };
  beforeEach(function () {
    _link.default.emitLink = jest.fn();
  });
  it('should render link', function () {
    var _render = (0, _vue.render)(_AppLink.default, {
      props: props,
      slots: {
        default: 'Go'
      }
    }),
        getByTestId = _render.getByTestId;

    expect(getByTestId('test')).toHaveTextContent('Go');
    expect(getByTestId('test')).toHaveAttribute('href', 'http://www.test.com/test');
  });
  it('should go to test url when click event', function () {
    var _render2 = (0, _vue.render)(_AppLink.default, {
      props: props,
      slots: {
        default: 'Go'
      }
    }),
        getByTestId = _render2.getByTestId;

    _vue.fireEvent.click(getByTestId('test'));

    expect(_link.default.emitLink).toHaveBeenCalledWith('http://www.test.com/test');
  });
});