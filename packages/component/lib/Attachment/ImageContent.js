'use strict';

var cov_19o8jkg3zd = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/ImageContent.js';
  var hash = '30bcb1af9e6ee7f6479e7264de6306fc30ce31d3';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/ImageContent.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 21
        },
        end: {
          line: 12,
          column: 1
        }
      },
      '1': {
        start: {
          line: 9,
          column: 34
        },
        end: {
          line: 9,
          column: 51
        }
      },
      '2': {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 86
        }
      },
      '3': {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 16,
          column: 2
        }
      },
      '4': {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 21,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 8,
            column: 21
          },
          end: {
            line: 8,
            column: 22
          }
        },
        loc: {
          start: {
            line: 8,
            column: 39
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 8
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
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '30bcb1af9e6ee7f6479e7264de6306fc30ce31d3'
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

var _CroppedImage = _interopRequireDefault(require('../Utils/CroppedImage'));

var _useStyleOptions = _interopRequireDefault(require('../hooks/useStyleOptions'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === '[object Arguments]')) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

cov_19o8jkg3zd.s[0]++;

var ImageContent = function ImageContent(_ref) {
  var alt = _ref.alt,
    src = _ref.src;
  cov_19o8jkg3zd.f[0]++;

  var _ref2 = (cov_19o8jkg3zd.s[1]++, (0, _useStyleOptions.default)()),
    _ref3 = _slicedToArray(_ref2, 1),
    bubbleImageHeight = _ref3[0].bubbleImageHeight;

  cov_19o8jkg3zd.s[2]++;
  return _react.default.createElement(_CroppedImage.default, {
    alt: alt,
    height: bubbleImageHeight,
    src: src,
    width: '100%'
  });
};

cov_19o8jkg3zd.s[3]++;
ImageContent.defaultProps = {
  alt: ''
};
cov_19o8jkg3zd.s[4]++;
ImageContent.propTypes = {
  alt: _propTypes.default.string,
  src: _propTypes.default.string.isRequired
};
var _default = ImageContent;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0ltYWdlQ29udGVudC5qcyJdLCJuYW1lcyI6WyJJbWFnZUNvbnRlbnQiLCJhbHQiLCJzcmMiLCJidWJibGVJbWFnZUhlaWdodCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQSxNQUFmQyxHQUFlLFFBQWZBLEdBQWU7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFBQTs7QUFBQSxzQ0FDTCwrQkFESztBQUFBO0FBQUEsTUFDNUJDLGlCQUQ0QixZQUM1QkEsaUJBRDRCOztBQUFBO0FBR3JDLFNBQU8sNkJBQUMscUJBQUQ7QUFBYyxJQUFBLEdBQUcsRUFBRUYsR0FBbkI7QUFBd0IsSUFBQSxNQUFNLEVBQUVFLGlCQUFoQztBQUFtRCxJQUFBLEdBQUcsRUFBRUQsR0FBeEQ7QUFBNkQsSUFBQSxLQUFLLEVBQUM7QUFBbkUsSUFBUDtBQUNELENBSkQ7OztBQU1BRixZQUFZLENBQUNJLFlBQWIsR0FBNEI7QUFDMUJILEVBQUFBLEdBQUcsRUFBRTtBQURxQixDQUE1Qjs7QUFJQUQsWUFBWSxDQUFDSyxTQUFiLEdBQXlCO0FBQ3ZCSixFQUFBQSxHQUFHLEVBQUVLLG1CQUFVQyxNQURRO0FBRXZCTCxFQUFBQSxHQUFHLEVBQUVJLG1CQUFVQyxNQUFWLENBQWlCQztBQUZDLENBQXpCO2VBS2VSLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENyb3BwZWRJbWFnZSBmcm9tICcuLi9VdGlscy9Dcm9wcGVkSW1hZ2UnO1xuXG5pbXBvcnQgdXNlU3R5bGVPcHRpb25zIGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlT3B0aW9ucyc7XG5cbmNvbnN0IEltYWdlQ29udGVudCA9ICh7IGFsdCwgc3JjIH0pID0+IHtcbiAgY29uc3QgW3sgYnViYmxlSW1hZ2VIZWlnaHQgfV0gPSB1c2VTdHlsZU9wdGlvbnMoKTtcblxuICByZXR1cm4gPENyb3BwZWRJbWFnZSBhbHQ9e2FsdH0gaGVpZ2h0PXtidWJibGVJbWFnZUhlaWdodH0gc3JjPXtzcmN9IHdpZHRoPVwiMTAwJVwiIC8+O1xufTtcblxuSW1hZ2VDb250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgYWx0OiAnJ1xufTtcblxuSW1hZ2VDb250ZW50LnByb3BUeXBlcyA9IHtcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDb250ZW50O1xuIl19
