'use strict';

var cov_1r450gvqp4 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/ImageAttachment.js';
  var hash = 'b3fe75e49325ade458515c71f63a801695f72b9a';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/ImageAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 24
        },
        end: {
          line: 8,
          column: 1
        }
      },
      '1': {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 95
        }
      },
      '2': {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 19,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 25
          }
        },
        loc: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 95
          }
        },
        line: 7
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 7,
            column: 43
          },
          end: {
            line: 7,
            column: 91
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 7,
              column: 43
            },
            end: {
              line: 7,
              column: 66
            }
          },
          {
            start: {
              line: 7,
              column: 70
            },
            end: {
              line: 7,
              column: 91
            }
          }
        ],
        line: 7
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'b3fe75e49325ade458515c71f63a801695f72b9a'
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

var _ImageContent = _interopRequireDefault(require('./ImageContent'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_1r450gvqp4.s[0]++;

var ImageAttachment = function ImageAttachment(_ref) {
  var attachment = _ref.attachment;
  cov_1r450gvqp4.f[0]++;
  cov_1r450gvqp4.s[1]++;
  return _react.default.createElement(_ImageContent.default, {
    alt: attachment.name,
    src: (cov_1r450gvqp4.b[0][0]++, attachment.thumbnailUrl) || (cov_1r450gvqp4.b[0][1]++, attachment.contentUrl)
  });
};

cov_1r450gvqp4.s[2]++;
ImageAttachment.propTypes = {
  activity: _propTypes.default.shape({
    attachments: _propTypes.default.array.isRequired
  }).isRequired,
  attachment: _propTypes.default.shape({
    contentUrl: _propTypes.default.string.isRequired,
    name: _propTypes.default.string,
    thumbnailUrl: _propTypes.default.string
  }).isRequired
};
var _default = ImageAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0ltYWdlQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJJbWFnZUF0dGFjaG1lbnQiLCJhdHRhY2htZW50IiwibmFtZSIsInRodW1ibmFpbFVybCIsImNvbnRlbnRVcmwiLCJwcm9wVHlwZXMiLCJhY3Rpdml0eSIsIlByb3BUeXBlcyIsInNoYXBlIiwiYXR0YWNobWVudHMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUN0QjtBQUFBLE1BRHlCQyxVQUN6QixRQUR5QkEsVUFDekI7QUFBQTtBQUFBO0FBQUEsc0NBQUMscUJBQUQ7QUFBYyxJQUFBLEdBQUcsRUFBRUEsVUFBVSxDQUFDQyxJQUE5QjtBQUFvQyxJQUFBLEdBQUcsRUFBRSwyQkFBQUQsVUFBVSxDQUFDRSxZQUFYLGdDQUEyQkYsVUFBVSxDQUFDRyxVQUF0QztBQUF6QztBQUE2RixDQUQvRjs7O0FBSUFKLGVBQWUsQ0FBQ0ssU0FBaEIsR0FBNEI7QUFDMUJDLEVBQUFBLFFBQVEsRUFBRUMsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDeEJDLElBQUFBLFdBQVcsRUFBRUYsbUJBQVVHLEtBQVYsQ0FBZ0JDO0FBREwsR0FBaEIsRUFFUEEsVUFIdUI7QUFJMUJWLEVBQUFBLFVBQVUsRUFBRU0sbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDMUJKLElBQUFBLFVBQVUsRUFBRUcsbUJBQVVLLE1BQVYsQ0FBaUJELFVBREg7QUFFMUJULElBQUFBLElBQUksRUFBRUssbUJBQVVLLE1BRlU7QUFHMUJULElBQUFBLFlBQVksRUFBRUksbUJBQVVLO0FBSEUsR0FBaEIsRUFJVEQ7QUFSdUIsQ0FBNUI7ZUFXZVgsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSW1hZ2VDb250ZW50IGZyb20gJy4vSW1hZ2VDb250ZW50JztcblxuY29uc3QgSW1hZ2VBdHRhY2htZW50ID0gKHsgYXR0YWNobWVudCB9KSA9PiAoXG4gIDxJbWFnZUNvbnRlbnQgYWx0PXthdHRhY2htZW50Lm5hbWV9IHNyYz17YXR0YWNobWVudC50aHVtYm5haWxVcmwgfHwgYXR0YWNobWVudC5jb250ZW50VXJsfSAvPlxuKTtcblxuSW1hZ2VBdHRhY2htZW50LnByb3BUeXBlcyA9IHtcbiAgYWN0aXZpdHk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXR0YWNobWVudHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGF0dGFjaG1lbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29udGVudFVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGh1bWJuYWlsVXJsOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQXR0YWNobWVudDtcbiJdfQ==
