"use strict";

var _core = _interopRequireDefault(require("@mixspa/core"));

var _testUtils = require("@vue/test-utils");

var _AppLink = _interopRequireDefault(require("./AppLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AppLink.vue', function () {
  beforeEach(function () {
    _core.default.emitLink = jest.fn();
  });
  it('should render app link with a link', function () {
    var wrapper = (0, _testUtils.shallowMount)(_AppLink.default, {
      propsData: {
        base: '',
        to: '/to'
      }
    });
    expect(wrapper.findAll('a')).toHaveLength(1);
  });
  it('should emit link event when click app link', function () {
    var wrapper = (0, _testUtils.shallowMount)(_AppLink.default, {
      propsData: {
        base: '',
        to: '/to'
      }
    });
    wrapper.trigger('click');
    expect(_core.default.emitLink).toHaveBeenCalledWith('/to');
  });
});