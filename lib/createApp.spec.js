"use strict";

var _vue = require("@testing-library/vue");

var _createApp = _interopRequireDefault(require("./createApp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('createApp', function () {
  beforeEach(function () {
    (0, _createApp.default)('app-test', function (props) {
      return {
        data: {
          testName: props['data-test']
        },
        render: function render(h) {
          return h('div', {
            attrs: {
              'data-testid': 'test'
            }
          }, 'Test App ' + this.testName);
        }
      };
    });
  });
  it('should render app', function () {
    var Container = {
      name: 'Container',
      render: function render(h) {
        return h('app-test', {
          attrs: {
            'data-test': 'Attribute'
          }
        });
      }
    };

    var _render = (0, _vue.render)(Container),
        getAllByTestId = _render.getAllByTestId;

    expect(getAllByTestId('test')[0]).toHaveTextContent('Test App Attribute');
  });
});