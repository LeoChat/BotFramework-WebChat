'use strict';

var cov_1ynhngtm6v = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/AudioAttachment.js';
  var hash = 'dce3bf27eb6a9b1df7912e9a740f7869db9335fc';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/AudioAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 24
        },
        end: {
          line: 11,
          column: 1
        }
      },
      '1': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 10,
          column: 8
        }
      },
      '2': {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 21,
          column: 2
        }
      },
      '3': {
        start: {
          line: 23,
          column: 51
        },
        end: {
          line: 23,
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
            column: 24
          },
          end: {
            line: 7,
            column: 25
          }
        },
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 10,
            column: 8
          }
        },
        line: 8
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 23,
            column: 32
          },
          end: {
            line: 23,
            column: 33
          }
        },
        loc: {
          start: {
            line: 23,
            column: 51
          },
          end: {
            line: 23,
            column: 63
          }
        },
        line: 23
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
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'dce3bf27eb6a9b1df7912e9a740f7869db9335fc'
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

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_1ynhngtm6v.s[0]++;

var AudioAttachment = function AudioAttachment(_ref) {
  var attachment = _ref.attachment,
    styleSet = _ref.styleSet;
  cov_1ynhngtm6v.f[0]++;
  cov_1ynhngtm6v.s[1]++;
  return _react.default.createElement(
    'div',
    {
      className: styleSet.audioAttachment
    },
    _react.default.createElement(_AudioContent.default, {
      alt: attachment.name,
      src: attachment.contentUrl
    })
  );
};

cov_1ynhngtm6v.s[2]++;
AudioAttachment.propTypes = {
  attachment: _propTypes.default.shape({
    contentUrl: _propTypes.default.string.isRequired,
    name: _propTypes.default.string
  }).isRequired,
  styleSet: _propTypes.default.shape({
    audioAttachment: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  cov_1ynhngtm6v.f[1]++;
  cov_1ynhngtm6v.s[3]++;
  return {
    styleSet: styleSet
  };
})(AudioAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0F1ZGlvQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJBdWRpb0F0dGFjaG1lbnQiLCJhdHRhY2htZW50Iiwic3R5bGVTZXQiLCJhdWRpb0F0dGFjaG1lbnQiLCJuYW1lIiwiY29udGVudFVybCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQ3RCO0FBQUEsTUFEeUJDLFVBQ3pCLFFBRHlCQSxVQUN6QjtBQUFBLE1BRHFDQyxRQUNyQyxRQURxQ0EsUUFDckM7QUFBQTtBQUFBO0FBQUE7QUFBSyxJQUFBLFNBQVMsRUFBRUEsUUFBUSxDQUFDQztBQUF6QixLQUNFLDZCQUFDLHFCQUFEO0FBQWMsSUFBQSxHQUFHLEVBQUVGLFVBQVUsQ0FBQ0csSUFBOUI7QUFBb0MsSUFBQSxHQUFHLEVBQUVILFVBQVUsQ0FBQ0k7QUFBcEQsSUFERjtBQUVNLENBSFI7OztBQU1BTCxlQUFlLENBQUNNLFNBQWhCLEdBQTRCO0FBQzFCTCxFQUFBQSxVQUFVLEVBQUVNLG1CQUFVQyxLQUFWLENBQWdCO0FBQzFCSCxJQUFBQSxVQUFVLEVBQUVFLG1CQUFVRSxNQUFWLENBQWlCQyxVQURIO0FBRTFCTixJQUFBQSxJQUFJLEVBQUVHLG1CQUFVRTtBQUZVLEdBQWhCLEVBR1RDLFVBSnVCO0FBSzFCUixFQUFBQSxRQUFRLEVBQUVLLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3hCTCxJQUFBQSxlQUFlLEVBQUVJLG1CQUFVSSxHQUFWLENBQWNEO0FBRFAsR0FBaEIsRUFFUEE7QUFQdUIsQ0FBNUI7O2VBVWUsK0JBQWlCLGlCQUFtQjtBQUFBLE1BQWhCUixRQUFnQixTQUFoQkEsUUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBRUEsSUFBQUEsUUFBUSxFQUFSQTtBQUFGO0FBQVksQ0FBaEQsRUFBbURGLGVBQW5ELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEF1ZGlvQ29udGVudCBmcm9tICcuL0F1ZGlvQ29udGVudCc7XG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcblxuY29uc3QgQXVkaW9BdHRhY2htZW50ID0gKHsgYXR0YWNobWVudCwgc3R5bGVTZXQgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVTZXQuYXVkaW9BdHRhY2htZW50fT5cbiAgICA8QXVkaW9Db250ZW50IGFsdD17YXR0YWNobWVudC5uYW1lfSBzcmM9e2F0dGFjaG1lbnQuY29udGVudFVybH0gLz5cbiAgPC9kaXY+XG4pO1xuXG5BdWRpb0F0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnRVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGF1ZGlvQXR0YWNobWVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1dlYkNoYXQoKHsgc3R5bGVTZXQgfSkgPT4gKHsgc3R5bGVTZXQgfSkpKEF1ZGlvQXR0YWNobWVudCk7XG4iXX0=
