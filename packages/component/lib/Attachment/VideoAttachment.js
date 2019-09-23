'use strict';

var cov_zpx5q997d = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/VideoAttachment.js';
  var hash = '04f1a84ff89b532b5d8ca2a36e4e08deabab52ad';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/VideoAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 17
        },
        end: {
          line: 12,
          column: 2
        }
      },
      '1': {
        start: {
          line: 14,
          column: 24
        },
        end: {
          line: 18,
          column: 1
        }
      },
      '2': {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 17,
          column: 8
        }
      },
      '3': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 28,
          column: 2
        }
      },
      '4': {
        start: {
          line: 30,
          column: 51
        },
        end: {
          line: 30,
          column: 63
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 14,
            column: 24
          },
          end: {
            line: 14,
            column: 25
          }
        },
        loc: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 17,
            column: 8
          }
        },
        line: 15
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 30,
            column: 32
          },
          end: {
            line: 30,
            column: 33
          }
        },
        loc: {
          start: {
            line: 30,
            column: 51
          },
          end: {
            line: 30,
            column: 63
          }
        },
        line: 30
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
    hash: '04f1a84ff89b532b5d8ca2a36e4e08deabab52ad'
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

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _VideoContent = _interopRequireDefault(require('./VideoContent'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ROOT_CSS =
  (cov_zpx5q997d.s[0]++,
  (0, _glamor.css)({
    display: 'flex',
    flexDirection: 'column'
  }));
cov_zpx5q997d.s[1]++;

var VideoAttachment = function VideoAttachment(_ref) {
  var attachment = _ref.attachment,
    styleSet = _ref.styleSet;
  cov_zpx5q997d.f[0]++;
  cov_zpx5q997d.s[2]++;
  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(ROOT_CSS + '', styleSet.videoAttachment + '')
    },
    _react.default.createElement(_VideoContent.default, {
      alt: attachment.name,
      src: attachment.contentUrl
    })
  );
};

cov_zpx5q997d.s[3]++;
VideoAttachment.propTypes = {
  attachment: _propTypes.default.shape({
    contentUrl: _propTypes.default.string.isRequired,
    name: _propTypes.default.string
  }).isRequired,
  styleSet: _propTypes.default.shape({
    videoAttachment: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  cov_zpx5q997d.f[1]++;
  cov_zpx5q997d.s[4]++;
  return {
    styleSet: styleSet
  };
})(VideoAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1ZpZGVvQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJST09UX0NTUyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiVmlkZW9BdHRhY2htZW50IiwiYXR0YWNobWVudCIsInN0eWxlU2V0IiwidmlkZW9BdHRhY2htZW50IiwibmFtZSIsImNvbnRlbnRVcmwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUEsSUFBTUEsUUFBUSwwQkFBRyxpQkFBSTtBQUNuQkMsRUFBQUEsT0FBTyxFQUFFLE1BRFU7QUFFbkJDLEVBQUFBLGFBQWEsRUFBRTtBQUZJLENBQUosQ0FBSCxDQUFkOzs7QUFLQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQ3RCO0FBQUEsTUFEeUJDLFVBQ3pCLFFBRHlCQSxVQUN6QjtBQUFBLE1BRHFDQyxRQUNyQyxRQURxQ0EsUUFDckM7QUFBQTtBQUFBO0FBQUE7QUFBSyxJQUFBLFNBQVMsRUFBRSx5QkFBV0wsUUFBUSxHQUFHLEVBQXRCLEVBQTBCSyxRQUFRLENBQUNDLGVBQVQsR0FBMkIsRUFBckQ7QUFBaEIsS0FDRSw2QkFBQyxxQkFBRDtBQUFjLElBQUEsR0FBRyxFQUFFRixVQUFVLENBQUNHLElBQTlCO0FBQW9DLElBQUEsR0FBRyxFQUFFSCxVQUFVLENBQUNJO0FBQXBELElBREY7QUFFTSxDQUhSOzs7QUFNQUwsZUFBZSxDQUFDTSxTQUFoQixHQUE0QjtBQUMxQkwsRUFBQUEsVUFBVSxFQUFFTSxtQkFBVUMsS0FBVixDQUFnQjtBQUMxQkgsSUFBQUEsVUFBVSxFQUFFRSxtQkFBVUUsTUFBVixDQUFpQkMsVUFESDtBQUUxQk4sSUFBQUEsSUFBSSxFQUFFRyxtQkFBVUU7QUFGVSxHQUFoQixFQUdUQyxVQUp1QjtBQUsxQlIsRUFBQUEsUUFBUSxFQUFFSyxtQkFBVUMsS0FBVixDQUFnQjtBQUN4QkwsSUFBQUEsZUFBZSxFQUFFSSxtQkFBVUksR0FBVixDQUFjRDtBQURQLEdBQWhCLEVBRVBBO0FBUHVCLENBQTVCOztlQVVlLCtCQUFpQixpQkFBbUI7QUFBQSxNQUFoQlIsUUFBZ0IsU0FBaEJBLFFBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRjtBQUFZLENBQWhELEVBQW1ERixlQUFuRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IFZpZGVvQ29udGVudCBmcm9tICcuL1ZpZGVvQ29udGVudCc7XG5cbmNvbnN0IFJPT1RfQ1NTID0gY3NzKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xufSk7XG5cbmNvbnN0IFZpZGVvQXR0YWNobWVudCA9ICh7IGF0dGFjaG1lbnQsIHN0eWxlU2V0IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoUk9PVF9DU1MgKyAnJywgc3R5bGVTZXQudmlkZW9BdHRhY2htZW50ICsgJycpfT5cbiAgICA8VmlkZW9Db250ZW50IGFsdD17YXR0YWNobWVudC5uYW1lfSBzcmM9e2F0dGFjaG1lbnQuY29udGVudFVybH0gLz5cbiAgPC9kaXY+XG4pO1xuXG5WaWRlb0F0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnRVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHZpZGVvQXR0YWNobWVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1dlYkNoYXQoKHsgc3R5bGVTZXQgfSkgPT4gKHsgc3R5bGVTZXQgfSkpKFZpZGVvQXR0YWNobWVudCk7XG4iXX0=
