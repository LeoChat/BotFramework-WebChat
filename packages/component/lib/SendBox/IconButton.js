'use strict';

var cov_p7gqfqv8x = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/SendBox/IconButton.js';
  var hash = 'fb182a8a08de9cc6c3f1ba46660b11bb9b3a879b';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/SendBox/IconButton.js',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 17,
          column: 1
        }
      },
      '1': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 16,
          column: 11
        }
      },
      '2': {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 26,
          column: 2
        }
      },
      '3': {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 38,
          column: 2
        }
      },
      '4': {
        start: {
          line: 40,
          column: 62
        },
        end: {
          line: 40,
          column: 85
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 7,
            column: 19
          },
          end: {
            line: 7,
            column: 20
          }
        },
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 16,
            column: 11
          }
        },
        line: 8
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 40,
            column: 32
          },
          end: {
            line: 40,
            column: 33
          }
        },
        loc: {
          start: {
            line: 40,
            column: 62
          },
          end: {
            line: 40,
            column: 85
          }
        },
        line: 40
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'fb182a8a08de9cc6c3f1ba46660b11bb9b3a879b'
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return (coverage[path] = coverageData);
})();

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_p7gqfqv8x.s[0]++;

var IconButton = function IconButton(_ref) {
  var alt = _ref.alt,
    children = _ref.children,
    className = _ref.className,
    direction = _ref.direction,
    disabled = _ref.disabled,
    onClick = _ref.onClick,
    styleSet = _ref.styleSet;
  cov_p7gqfqv8x.f[0]++;
  cov_p7gqfqv8x.s[1]++;
  return _react.default.createElement(
    'button',
    {
      className: (0, _classnames.default)(styleSet.sendBoxButton + '', className + '', 'btn-' + direction),
      disabled: disabled,
      onClick: onClick,
      title: alt,
      type: 'button'
    },
    children
  );
};

cov_p7gqfqv8x.s[2]++;
IconButton.defaultProps = {
  alt: '',
  children: undefined,
  className: '',
  direction: 'ltr',
  disabled: false,
  onClick: undefined
};
cov_p7gqfqv8x.s[3]++;
IconButton.propTypes = {
  alt: _propTypes.default.string,
  children: _propTypes.default.any,
  className: _propTypes.default.string,
  direction: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  styleSet: _propTypes.default.shape({
    sendBoxButton: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var direction = _ref2.direction,
    styleSet = _ref2.styleSet;
  cov_p7gqfqv8x.f[1]++;
  cov_p7gqfqv8x.s[4]++;
  return {
    direction: direction,
    styleSet: styleSet
  };
})(IconButton);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L0ljb25CdXR0b24uanMiXSwibmFtZXMiOlsiSWNvbkJ1dHRvbiIsImFsdCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGlyZWN0aW9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwic3R5bGVTZXQiLCJzZW5kQm94QnV0dG9uIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiYm9vbCIsImZ1bmMiLCJzaGFwZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUNqQjtBQUFBLE1BRG9CQyxHQUNwQixRQURvQkEsR0FDcEI7QUFBQSxNQUR5QkMsUUFDekIsUUFEeUJBLFFBQ3pCO0FBQUEsTUFEbUNDLFNBQ25DLFFBRG1DQSxTQUNuQztBQUFBLE1BRDhDQyxTQUM5QyxRQUQ4Q0EsU0FDOUM7QUFBQSxNQUR5REMsUUFDekQsUUFEeURBLFFBQ3pEO0FBQUEsTUFEbUVDLE9BQ25FLFFBRG1FQSxPQUNuRTtBQUFBLE1BRDRFQyxRQUM1RSxRQUQ0RUEsUUFDNUU7QUFBQTtBQUFBO0FBQUE7QUFDRSxJQUFBLFNBQVMsRUFBRSx5QkFBV0EsUUFBUSxDQUFDQyxhQUFULEdBQXlCLEVBQXBDLEVBQXdDTCxTQUFTLEdBQUcsRUFBcEQsRUFBd0QsU0FBU0MsU0FBakUsQ0FEYjtBQUVFLElBQUEsUUFBUSxFQUFFQyxRQUZaO0FBR0UsSUFBQSxPQUFPLEVBQUVDLE9BSFg7QUFJRSxJQUFBLEtBQUssRUFBRUwsR0FKVDtBQUtFLElBQUEsSUFBSSxFQUFDO0FBTFAsS0FPR0MsUUFQSDtBQVFTLENBVFg7OztBQVlBRixVQUFVLENBQUNTLFlBQVgsR0FBMEI7QUFDeEJSLEVBQUFBLEdBQUcsRUFBRSxFQURtQjtBQUV4QkMsRUFBQUEsUUFBUSxFQUFFUSxTQUZjO0FBR3hCUCxFQUFBQSxTQUFTLEVBQUUsRUFIYTtBQUl4QkMsRUFBQUEsU0FBUyxFQUFFLEtBSmE7QUFLeEJDLEVBQUFBLFFBQVEsRUFBRSxLQUxjO0FBTXhCQyxFQUFBQSxPQUFPLEVBQUVJO0FBTmUsQ0FBMUI7O0FBU0FWLFVBQVUsQ0FBQ1csU0FBWCxHQUF1QjtBQUNyQlYsRUFBQUEsR0FBRyxFQUFFVyxtQkFBVUMsTUFETTtBQUVyQlgsRUFBQUEsUUFBUSxFQUFFVSxtQkFBVUUsR0FGQztBQUdyQlgsRUFBQUEsU0FBUyxFQUFFUyxtQkFBVUMsTUFIQTtBQUlyQlQsRUFBQUEsU0FBUyxFQUFFUSxtQkFBVUMsTUFKQTtBQUtyQlIsRUFBQUEsUUFBUSxFQUFFTyxtQkFBVUcsSUFMQztBQU1yQlQsRUFBQUEsT0FBTyxFQUFFTSxtQkFBVUksSUFORTtBQU9yQlQsRUFBQUEsUUFBUSxFQUFFSyxtQkFBVUssS0FBVixDQUFnQjtBQUN4QlQsSUFBQUEsYUFBYSxFQUFFSSxtQkFBVUUsR0FBVixDQUFjSTtBQURMLEdBQWhCLEVBRVBBO0FBVGtCLENBQXZCOztlQVllLCtCQUFpQixpQkFBOEI7QUFBQSxNQUEzQmQsU0FBMkIsU0FBM0JBLFNBQTJCO0FBQUEsTUFBaEJHLFFBQWdCLFNBQWhCQSxRQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFFSCxJQUFBQSxTQUFTLEVBQVRBLFNBQUY7QUFBYUcsSUFBQUEsUUFBUSxFQUFSQTtBQUFiO0FBQXVCLENBQXRFLEVBQXlFUCxVQUF6RSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5cbmNvbnN0IEljb25CdXR0b24gPSAoeyBhbHQsIGNoaWxkcmVuLCBjbGFzc05hbWUsIGRpcmVjdGlvbiwgZGlzYWJsZWQsIG9uQ2xpY2ssIHN0eWxlU2V0IH0pID0+IChcbiAgPGJ1dHRvblxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZVNldC5zZW5kQm94QnV0dG9uICsgJycsIGNsYXNzTmFtZSArICcnLCAnYnRuLScgKyBkaXJlY3Rpb24pfVxuICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgIHRpdGxlPXthbHR9XG4gICAgdHlwZT1cImJ1dHRvblwiXG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvYnV0dG9uPlxuKTtcblxuSWNvbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsdDogJycsXG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogJycsXG4gIGRpcmVjdGlvbjogJ2x0cicsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgb25DbGljazogdW5kZWZpbmVkXG59O1xuXG5JY29uQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHNlbmRCb3hCdXR0b246IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IGRpcmVjdGlvbiwgc3R5bGVTZXQgfSkgPT4gKHsgZGlyZWN0aW9uLCBzdHlsZVNldCB9KSkoSWNvbkJ1dHRvbik7XG4iXX0=
