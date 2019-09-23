'use strict';

var cov_133w49795t = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/ImageContent.js';
  var hash = '844b6a8ad88aa4b78a7215fe0fd3194affb1ffde';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/ImageContent.js',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 21
        },
        end: {
          line: 9,
          column: 1
        }
      },
      '1': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 95
        }
      },
      '2': {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 13,
          column: 2
        }
      },
      '3': {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 23,
          column: 2
        }
      },
      '4': {
        start: {
          line: 25,
          column: 51
        },
        end: {
          line: 25,
          column: 63
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 7,
            column: 21
          },
          end: {
            line: 7,
            column: 22
          }
        },
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 8,
            column: 95
          }
        },
        line: 8
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 25,
            column: 32
          },
          end: {
            line: 25,
            column: 33
          }
        },
        loc: {
          start: {
            line: 25,
            column: 51
          },
          end: {
            line: 25,
            column: 63
          }
        },
        line: 25
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
    hash: '844b6a8ad88aa4b78a7215fe0fd3194affb1ffde'
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

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _CroppedImage = _interopRequireDefault(require('../Utils/CroppedImage'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_133w49795t.s[0]++;

var ImageContent = function ImageContent(_ref) {
  var alt = _ref.alt,
    src = _ref.src,
    styleSet = _ref.styleSet;
  cov_133w49795t.f[0]++;
  cov_133w49795t.s[1]++;
  return _react.default.createElement(_CroppedImage.default, {
    alt: alt,
    height: styleSet.options.bubbleImageHeight,
    src: src,
    width: '100%'
  });
};

cov_133w49795t.s[2]++;
ImageContent.defaultProps = {
  alt: ''
};
cov_133w49795t.s[3]++;
ImageContent.propTypes = {
  alt: _propTypes.default.string,
  src: _propTypes.default.string.isRequired,
  styleSet: _propTypes.default.shape({
    options: _propTypes.default.shape({
      bubbleImageHeight: _propTypes.default.number.isRequired
    }).isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  cov_133w49795t.f[1]++;
  cov_133w49795t.s[4]++;
  return {
    styleSet: styleSet
  };
})(ImageContent);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0ltYWdlQ29udGVudC5qcyJdLCJuYW1lcyI6WyJJbWFnZUNvbnRlbnQiLCJhbHQiLCJzcmMiLCJzdHlsZVNldCIsIm9wdGlvbnMiLCJidWJibGVJbWFnZUhlaWdodCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzaGFwZSIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQ25CO0FBQUEsTUFEc0JDLEdBQ3RCLFFBRHNCQSxHQUN0QjtBQUFBLE1BRDJCQyxHQUMzQixRQUQyQkEsR0FDM0I7QUFBQSxNQURnQ0MsUUFDaEMsUUFEZ0NBLFFBQ2hDO0FBQUE7QUFBQTtBQUFBLHNDQUFDLHFCQUFEO0FBQWMsSUFBQSxHQUFHLEVBQUVGLEdBQW5CO0FBQXdCLElBQUEsTUFBTSxFQUFFRSxRQUFRLENBQUNDLE9BQVQsQ0FBaUJDLGlCQUFqRDtBQUFvRSxJQUFBLEdBQUcsRUFBRUgsR0FBekU7QUFBOEUsSUFBQSxLQUFLLEVBQUM7QUFBcEY7QUFBNkYsQ0FEL0Y7OztBQUlBRixZQUFZLENBQUNNLFlBQWIsR0FBNEI7QUFDMUJMLEVBQUFBLEdBQUcsRUFBRTtBQURxQixDQUE1Qjs7QUFJQUQsWUFBWSxDQUFDTyxTQUFiLEdBQXlCO0FBQ3ZCTixFQUFBQSxHQUFHLEVBQUVPLG1CQUFVQyxNQURRO0FBRXZCUCxFQUFBQSxHQUFHLEVBQUVNLG1CQUFVQyxNQUFWLENBQWlCQyxVQUZDO0FBR3ZCUCxFQUFBQSxRQUFRLEVBQUVLLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3hCUCxJQUFBQSxPQUFPLEVBQUVJLG1CQUFVRyxLQUFWLENBQWdCO0FBQ3ZCTixNQUFBQSxpQkFBaUIsRUFBRUcsbUJBQVVJLE1BQVYsQ0FBaUJGO0FBRGIsS0FBaEIsRUFFTkE7QUFIcUIsR0FBaEIsRUFJUEE7QUFQb0IsQ0FBekI7O2VBVWUsK0JBQWlCLGlCQUFtQjtBQUFBLE1BQWhCUCxRQUFnQixTQUFoQkEsUUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGO0FBQVksQ0FBaEQsRUFBbURILFlBQW5ELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbm5lY3RUb1dlYkNoYXQgZnJvbSAnLi4vY29ubmVjdFRvV2ViQ2hhdCc7XG5pbXBvcnQgQ3JvcHBlZEltYWdlIGZyb20gJy4uL1V0aWxzL0Nyb3BwZWRJbWFnZSc7XG5cbmNvbnN0IEltYWdlQ29udGVudCA9ICh7IGFsdCwgc3JjLCBzdHlsZVNldCB9KSA9PiAoXG4gIDxDcm9wcGVkSW1hZ2UgYWx0PXthbHR9IGhlaWdodD17c3R5bGVTZXQub3B0aW9ucy5idWJibGVJbWFnZUhlaWdodH0gc3JjPXtzcmN9IHdpZHRoPVwiMTAwJVwiIC8+XG4pO1xuXG5JbWFnZUNvbnRlbnQuZGVmYXVsdFByb3BzID0ge1xuICBhbHQ6ICcnXG59O1xuXG5JbWFnZUNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYnViYmxlSW1hZ2VIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvV2ViQ2hhdCgoeyBzdHlsZVNldCB9KSA9PiAoeyBzdHlsZVNldCB9KSkoSW1hZ2VDb250ZW50KTtcbiJdfQ==
