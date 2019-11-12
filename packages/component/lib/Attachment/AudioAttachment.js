'use strict';

var cov_2q5ro0bh6y = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/AudioAttachment.js';
  var hash = '4c79730374304456f87478686834e2079949f76d';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/AudioAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 24
        },
        end: {
          line: 15,
          column: 1
        }
      },
      '1': {
        start: {
          line: 8,
          column: 57
        },
        end: {
          line: 8,
          column: 70
        }
      },
      '2': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 14,
          column: 4
        }
      },
      '3': {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 22,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 7,
            column: 24
          },
          end: {
            line: 7,
            column: 25
          }
        },
        loc: {
          start: {
            line: 7,
            column: 44
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '4c79730374304456f87478686834e2079949f76d'
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

var _AudioContent = _interopRequireDefault(require('./AudioContent'));

var _useStyleSet = _interopRequireDefault(require('../hooks/useStyleSet'));

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

cov_2q5ro0bh6y.s[0]++;

var AudioAttachment = function AudioAttachment(_ref) {
  var attachment = _ref.attachment;
  cov_2q5ro0bh6y.f[0]++;

  var _ref2 = (cov_2q5ro0bh6y.s[1]++, (0, _useStyleSet.default)()),
    _ref3 = _slicedToArray(_ref2, 1),
    audioAttachmentStyleSet = _ref3[0].audioAttachment;

  cov_2q5ro0bh6y.s[2]++;
  return _react.default.createElement(
    'div',
    {
      className: audioAttachmentStyleSet
    },
    _react.default.createElement(_AudioContent.default, {
      alt: attachment.name,
      src: attachment.contentUrl
    })
  );
};

cov_2q5ro0bh6y.s[3]++;
AudioAttachment.propTypes = {
  attachment: _propTypes.default.shape({
    contentUrl: _propTypes.default.string.isRequired,
    name: _propTypes.default.string
  }).isRequired
};
var _default = AudioAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0F1ZGlvQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJBdWRpb0F0dGFjaG1lbnQiLCJhdHRhY2htZW50IiwiYXVkaW9BdHRhY2htZW50U3R5bGVTZXQiLCJhdWRpb0F0dGFjaG1lbnQiLCJuYW1lIiwiY29udGVudFVybCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFBQTs7QUFBQSxzQ0FDYSwyQkFEYjtBQUFBO0FBQUEsTUFDaEJDLHVCQURnQixZQUNqQ0MsZUFEaUM7O0FBQUE7QUFHMUMsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFRDtBQUFoQixLQUNFLDZCQUFDLHFCQUFEO0FBQWMsSUFBQSxHQUFHLEVBQUVELFVBQVUsQ0FBQ0csSUFBOUI7QUFBb0MsSUFBQSxHQUFHLEVBQUVILFVBQVUsQ0FBQ0k7QUFBcEQsSUFERixDQURGO0FBS0QsQ0FSRDs7O0FBVUFMLGVBQWUsQ0FBQ00sU0FBaEIsR0FBNEI7QUFDMUJMLEVBQUFBLFVBQVUsRUFBRU0sbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDMUJILElBQUFBLFVBQVUsRUFBRUUsbUJBQVVFLE1BQVYsQ0FBaUJDLFVBREg7QUFFMUJOLElBQUFBLElBQUksRUFBRUcsbUJBQVVFO0FBRlUsR0FBaEIsRUFHVEM7QUFKdUIsQ0FBNUI7ZUFPZVYsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQXVkaW9Db250ZW50IGZyb20gJy4vQXVkaW9Db250ZW50JztcbmltcG9ydCB1c2VTdHlsZVNldCBmcm9tICcuLi9ob29rcy91c2VTdHlsZVNldCc7XG5cbmNvbnN0IEF1ZGlvQXR0YWNobWVudCA9ICh7IGF0dGFjaG1lbnQgfSkgPT4ge1xuICBjb25zdCBbeyBhdWRpb0F0dGFjaG1lbnQ6IGF1ZGlvQXR0YWNobWVudFN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXthdWRpb0F0dGFjaG1lbnRTdHlsZVNldH0+XG4gICAgICA8QXVkaW9Db250ZW50IGFsdD17YXR0YWNobWVudC5uYW1lfSBzcmM9e2F0dGFjaG1lbnQuY29udGVudFVybH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkF1ZGlvQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XG4gIGF0dGFjaG1lbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29udGVudFVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9BdHRhY2htZW50O1xuIl19
