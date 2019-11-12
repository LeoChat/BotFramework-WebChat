'use strict';

var cov_198zbud9oj = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/VideoAttachment.js';
  var hash = '861ef8b5f97f0aa19cce3ad5532d6d4476ce7a96';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/VideoAttachment.js',
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
          line: 22,
          column: 1
        }
      },
      '2': {
        start: {
          line: 15,
          column: 57
        },
        end: {
          line: 15,
          column: 70
        }
      },
      '3': {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 21,
          column: 4
        }
      },
      '4': {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 29,
          column: 2
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
            line: 14,
            column: 44
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 14
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
    hash: '861ef8b5f97f0aa19cce3ad5532d6d4476ce7a96'
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

var _useStyleSet = _interopRequireDefault(require('../hooks/useStyleSet'));

var _VideoContent = _interopRequireDefault(require('./VideoContent'));

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

var ROOT_CSS =
  (cov_198zbud9oj.s[0]++,
  (0, _glamor.css)({
    display: 'flex',
    flexDirection: 'column'
  }));
cov_198zbud9oj.s[1]++;

var VideoAttachment = function VideoAttachment(_ref) {
  var attachment = _ref.attachment;
  cov_198zbud9oj.f[0]++;

  var _ref2 = (cov_198zbud9oj.s[2]++, (0, _useStyleSet.default)()),
    _ref3 = _slicedToArray(_ref2, 1),
    videoAttachmentStyleSet = _ref3[0].videoAttachment;

  cov_198zbud9oj.s[3]++;
  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(ROOT_CSS + '', videoAttachmentStyleSet + '')
    },
    _react.default.createElement(_VideoContent.default, {
      alt: attachment.name,
      src: attachment.contentUrl
    })
  );
};

cov_198zbud9oj.s[4]++;
VideoAttachment.propTypes = {
  attachment: _propTypes.default.shape({
    contentUrl: _propTypes.default.string.isRequired,
    name: _propTypes.default.string
  }).isRequired
};
var _default = VideoAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1ZpZGVvQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJST09UX0NTUyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiVmlkZW9BdHRhY2htZW50IiwiYXR0YWNobWVudCIsInZpZGVvQXR0YWNobWVudFN0eWxlU2V0IiwidmlkZW9BdHRhY2htZW50IiwibmFtZSIsImNvbnRlbnRVcmwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsMkJBQUcsaUJBQUk7QUFDbkJDLEVBQUFBLE9BQU8sRUFBRSxNQURVO0FBRW5CQyxFQUFBQSxhQUFhLEVBQUU7QUFGSSxDQUFKLENBQUgsQ0FBZDs7O0FBS0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFBQTs7QUFBQSxzQ0FDYSwyQkFEYjtBQUFBO0FBQUEsTUFDaEJDLHVCQURnQixZQUNqQ0MsZUFEaUM7O0FBQUE7QUFHMUMsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFLHlCQUFXTixRQUFRLEdBQUcsRUFBdEIsRUFBMEJLLHVCQUF1QixHQUFHLEVBQXBEO0FBQWhCLEtBQ0UsNkJBQUMscUJBQUQ7QUFBYyxJQUFBLEdBQUcsRUFBRUQsVUFBVSxDQUFDRyxJQUE5QjtBQUFvQyxJQUFBLEdBQUcsRUFBRUgsVUFBVSxDQUFDSTtBQUFwRCxJQURGLENBREY7QUFLRCxDQVJEOzs7QUFVQUwsZUFBZSxDQUFDTSxTQUFoQixHQUE0QjtBQUMxQkwsRUFBQUEsVUFBVSxFQUFFTSxtQkFBVUMsS0FBVixDQUFnQjtBQUMxQkgsSUFBQUEsVUFBVSxFQUFFRSxtQkFBVUUsTUFBVixDQUFpQkMsVUFESDtBQUUxQk4sSUFBQUEsSUFBSSxFQUFFRyxtQkFBVUU7QUFGVSxHQUFoQixFQUdUQztBQUp1QixDQUE1QjtlQU9lVixlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB1c2VTdHlsZVNldCBmcm9tICcuLi9ob29rcy91c2VTdHlsZVNldCc7XG5pbXBvcnQgVmlkZW9Db250ZW50IGZyb20gJy4vVmlkZW9Db250ZW50JztcblxuY29uc3QgUk9PVF9DU1MgPSBjc3Moe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG59KTtcblxuY29uc3QgVmlkZW9BdHRhY2htZW50ID0gKHsgYXR0YWNobWVudCB9KSA9PiB7XG4gIGNvbnN0IFt7IHZpZGVvQXR0YWNobWVudDogdmlkZW9BdHRhY2htZW50U3R5bGVTZXQgfV0gPSB1c2VTdHlsZVNldCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoUk9PVF9DU1MgKyAnJywgdmlkZW9BdHRhY2htZW50U3R5bGVTZXQgKyAnJyl9PlxuICAgICAgPFZpZGVvQ29udGVudCBhbHQ9e2F0dGFjaG1lbnQubmFtZX0gc3JjPXthdHRhY2htZW50LmNvbnRlbnRVcmx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5WaWRlb0F0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnRVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvQXR0YWNobWVudDtcbiJdfQ==
