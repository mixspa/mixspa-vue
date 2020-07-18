"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vue2 = require("@testing-library/vue");

var _context4 = _interopRequireDefault(require("@mixspa/core/lib/context"));

var _createApp = _interopRequireDefault(require("./createApp"));

var _AppLoader = _interopRequireDefault(require("./AppLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('AppLoader', function () {
  var app = {
    id: 'test-id',
    tag: 'test-app'
  };
  var AppLoadWrapper = {
    name: 'AppLoadWrapper',
    render: function render(h) {
      return h(_AppLoader.default, {
        props: {
          appId: app.id,
          appProps: {
            'data-test': "Hello"
          }
        }
      }, [h('div', {
        slot: 'loading',
        attrs: {
          'data-testid': 'test-loader'
        }
      }, 'Loading Bar'), h('div', {
        slot: 'fallback',
        attrs: {
          'data-testid': 'test-error'
        }
      }, 'Load error')]);
    }
  };
  beforeAll(function () {
    (0, _createApp.default)('test-app', function (props) {
      return {
        data: {
          testName: props['data-test']
        },
        render: function render(h) {
          return h('div', {
            attrs: {
              'data-testid': 'test-app'
            }
          }, 'Test App ' + this.testName);
        }
      };
    });
    _context4.default.getApp = jest.fn().mockReturnValue(app);
  });
  describe('#load success', function () {
    var loadPromise;
    beforeEach(function () {
      loadPromise = new Promise(function (resolve) {
        return resolve(app);
      });

      app.load = function () {
        return loadPromise;
      };
    });
    it('should render loading slot', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _render, getByTestId;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _render = (0, _vue2.render)(AppLoadWrapper), getByTestId = _render.getByTestId;
              expect(getByTestId('test-loader')).toHaveTextContent('Loading Bar');

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    it('should render loaded app', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _render2, getByTestId;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _render2 = (0, _vue2.render)(AppLoadWrapper), getByTestId = _render2.getByTestId;
              _context2.next = 3;
              return _vue.default.nextTick();

            case 3:
              expect(getByTestId('test-app')).toHaveTextContent('Test App Hello');

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
  });
  describe('#load error', function () {
    var loadPromise;
    beforeEach(function () {
      loadPromise = new Promise(function (resolve, reject) {
        return reject(new Error('load app error'));
      });

      app.load = function () {
        return loadPromise;
      };
    });
    it('should render load error', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var _render3, getByTestId;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _render3 = (0, _vue2.render)(AppLoadWrapper), getByTestId = _render3.getByTestId;
              _context3.next = 3;
              return _vue.default.nextTick();

            case 3:
              _context3.next = 5;
              return _vue.default.nextTick();

            case 5:
              expect(getByTestId('test-error')).toHaveTextContent('Load error');

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  });
});