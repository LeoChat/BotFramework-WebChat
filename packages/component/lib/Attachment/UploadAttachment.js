'use strict';

var cov_trlbgbgj1 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/UploadAttachment.js';
  var hash = 'de3b91721a1903484bfd5606b2aa7f6a769b293f';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/UploadAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 11,
          column: 17
        },
        end: {
          line: 14,
          column: 2
        }
      },
      '1': {
        start: {
          line: 16,
          column: 25
        },
        end: {
          line: 36,
          column: 1
        }
      },
      '2': {
        start: {
          line: 20,
          column: 59
        },
        end: {
          line: 20,
          column: 72
        }
      },
      '3': {
        start: {
          line: 22,
          column: 26
        },
        end: {
          line: 22,
          column: 57
        }
      },
      '4': {
        start: {
          line: 23,
          column: 15
        },
        end: {
          line: 23,
          column: 47
        }
      },
      '5': {
        start: {
          line: 24,
          column: 24
        },
        end: {
          line: 24,
          column: 64
        }
      },
      '6': {
        start: {
          line: 25,
          column: 38
        },
        end: {
          line: 25,
          column: 107
        }
      },
      '7': {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 35,
          column: 4
        }
      },
      '8': {
        start: {
          line: 38,
          column: 0
        },
        end: {
          line: 48,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 16,
            column: 25
          },
          end: {
            line: 16,
            column: 26
          }
        },
        loc: {
          start: {
            line: 19,
            column: 6
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 19
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 17,
            column: 12
          },
          end: {
            line: 17,
            column: 81
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 17,
              column: 79
            },
            end: {
              line: 17,
              column: 81
            }
          }
        ],
        line: 17
      },
      '1': {
        loc: {
          start: {
            line: 17,
            column: 14
          },
          end: {
            line: 17,
            column: 30
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 17,
              column: 28
            },
            end: {
              line: 17,
              column: 30
            }
          }
        ],
        line: 17
      },
      '2': {
        loc: {
          start: {
            line: 17,
            column: 45
          },
          end: {
            line: 17,
            column: 74
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 17,
              column: 72
            },
            end: {
              line: 17,
              column: 74
            }
          }
        ],
        line: 17
      },
      '3': {
        loc: {
          start: {
            line: 17,
            column: 47
          },
          end: {
            line: 17,
            column: 67
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 17,
              column: 65
            },
            end: {
              line: 17,
              column: 67
            }
          }
        ],
        line: 17
      },
      '4': {
        loc: {
          start: {
            line: 24,
            column: 24
          },
          end: {
            line: 24,
            column: 64
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 24,
              column: 24
            },
            end: {
              line: 24,
              column: 48
            }
          },
          {
            start: {
              line: 24,
              column: 52
            },
            end: {
              line: 24,
              column: 64
            }
          }
        ],
        line: 24
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0],
      '1': [0],
      '2': [0],
      '3': [0],
      '4': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'de3b91721a1903484bfd5606b2aa7f6a769b293f'
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

var _bytes = require('bytes');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

var _useLocalize = _interopRequireDefault(require('../hooks/useLocalize'));

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

var ROOT_CSS =
  (cov_trlbgbgj1.s[0]++,
  (0, _glamor.css)({
    display: 'flex',
    flexDirection: 'column'
  }));
cov_trlbgbgj1.s[1]++;

var UploadAttachment = function UploadAttachment(_ref) {
  var _ref$activity = _ref.activity;
  _ref$activity = _ref$activity === void 0 ? (cov_trlbgbgj1.b[0][0]++, {}) : _ref$activity;
  var _ref$activity$attachm = _ref$activity.attachments,
    attachments = _ref$activity$attachm === void 0 ? (cov_trlbgbgj1.b[1][0]++, []) : _ref$activity$attachm,
    _ref$activity$channel = _ref$activity.channelData;
  _ref$activity$channel = _ref$activity$channel === void 0 ? (cov_trlbgbgj1.b[2][0]++, {}) : _ref$activity$channel;
  var _ref$activity$channel2 = _ref$activity$channel.attachmentSizes,
    attachmentSizes = _ref$activity$channel2 === void 0 ? (cov_trlbgbgj1.b[3][0]++, []) : _ref$activity$channel2,
    attachment = _ref.attachment;
  cov_trlbgbgj1.f[0]++;

  var _ref2 = (cov_trlbgbgj1.s[2]++, (0, _useStyleSet.default)()),
    _ref3 = _slicedToArray(_ref2, 1),
    uploadAttachmentStyleSet = _ref3[0].uploadAttachment;

  var attachmentIndex = (cov_trlbgbgj1.s[3]++, attachments.indexOf(attachment));
  var size = (cov_trlbgbgj1.s[4]++, attachmentSizes[attachmentIndex]);
  var formattedSize =
    (cov_trlbgbgj1.s[5]++,
    (cov_trlbgbgj1.b[4][0]++, typeof size === 'number') && (cov_trlbgbgj1.b[4][1]++, (0, _bytes.format)(size)));
  var uploadFileWithFileSizeLabel =
    (cov_trlbgbgj1.s[6]++, (0, _useLocalize.default)('UploadFileWithFileSize', attachment.name, formattedSize));
  cov_trlbgbgj1.s[7]++;
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: uploadFileWithFileSizeLabel
    }),
    _react.default.createElement(
      'div',
      {
        'aria-hidden': true,
        className: (0, _classnames.default)(ROOT_CSS + '', uploadAttachmentStyleSet + '')
      },
      _react.default.createElement(
        'div',
        {
          className: 'name'
        },
        attachment.name
      ),
      _react.default.createElement(
        'div',
        {
          className: 'size'
        },
        formattedSize
      )
    )
  );
};

cov_trlbgbgj1.s[8]++;
UploadAttachment.propTypes = {
  activity: _propTypes.default.shape({
    attachment: _propTypes.default.array,
    channelData: _propTypes.default.shape({
      attachmentSizes: _propTypes.default.arrayOf(_propTypes.default.number)
    })
  }).isRequired,
  attachment: _propTypes.default.shape({
    name: _propTypes.default.string.isRequired
  }).isRequired
};
var _default = UploadAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1VwbG9hZEF0dGFjaG1lbnQuanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIlVwbG9hZEF0dGFjaG1lbnQiLCJhY3Rpdml0eSIsImF0dGFjaG1lbnRzIiwiY2hhbm5lbERhdGEiLCJhdHRhY2htZW50U2l6ZXMiLCJhdHRhY2htZW50IiwidXBsb2FkQXR0YWNobWVudFN0eWxlU2V0IiwidXBsb2FkQXR0YWNobWVudCIsImF0dGFjaG1lbnRJbmRleCIsImluZGV4T2YiLCJzaXplIiwiZm9ybWF0dGVkU2l6ZSIsInVwbG9hZEZpbGVXaXRoRmlsZVNpemVMYWJlbCIsIm5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImFycmF5IiwiYXJyYXlPZiIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsMEJBQUcsaUJBQUk7QUFDbkJDLEVBQUFBLE9BQU8sRUFBRSxNQURVO0FBRW5CQyxFQUFBQSxhQUFhLEVBQUU7QUFGSSxDQUFKLENBQUgsQ0FBZDs7O0FBS0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUduQjtBQUFBLDJCQUZKQyxRQUVJO0FBQUEsdUVBRnlFLEVBRXpFO0FBQUEsNENBRlFDLFdBRVI7QUFBQSxNQUZRQSxXQUVSLGdFQUZzQixFQUV0QjtBQUFBLDRDQUYwQkMsV0FFMUI7QUFBQSx1RkFGa0UsRUFFbEU7QUFBQSxxREFGeUNDLGVBRXpDO0FBQUEsTUFGeUNBLGVBRXpDLGlFQUYyRCxFQUUzRDtBQUFBLE1BREpDLFVBQ0ksUUFESkEsVUFDSTtBQUFBOztBQUFBLHFDQUNxRCwyQkFEckQ7QUFBQTtBQUFBLE1BQ3VCQyx3QkFEdkIsWUFDS0MsZ0JBREw7O0FBR0osTUFBTUMsZUFBZSwwQkFBR04sV0FBVyxDQUFDTyxPQUFaLENBQW9CSixVQUFwQixDQUFILENBQXJCO0FBQ0EsTUFBTUssSUFBSSwwQkFBR04sZUFBZSxDQUFDSSxlQUFELENBQWxCLENBQVY7QUFDQSxNQUFNRyxhQUFhLDBCQUFHLGlDQUFPRCxJQUFQLEtBQWdCLFFBQWhCLCtCQUE0QixtQkFBT0EsSUFBUCxDQUE1QixDQUFILENBQW5CO0FBQ0EsTUFBTUUsMkJBQTJCLDBCQUFHLDBCQUFZLHdCQUFaLEVBQXNDUCxVQUFVLENBQUNRLElBQWpELEVBQXVERixhQUF2RCxDQUFILENBQWpDO0FBTkk7QUFRSixTQUNFLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMseUJBQUQ7QUFBa0IsSUFBQSxJQUFJLEVBQUVDO0FBQXhCLElBREYsRUFFRTtBQUFLLG1CQUFhLElBQWxCO0FBQXdCLElBQUEsU0FBUyxFQUFFLHlCQUFXZixRQUFRLEdBQUcsRUFBdEIsRUFBMEJTLHdCQUF3QixHQUFHLEVBQXJEO0FBQW5DLEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQXVCRCxVQUFVLENBQUNRLElBQWxDLENBREYsRUFFRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBdUJGLGFBQXZCLENBRkYsQ0FGRixDQURGO0FBU0QsQ0FwQkQ7OztBQXNCQVgsZ0JBQWdCLENBQUNjLFNBQWpCLEdBQTZCO0FBQzNCYixFQUFBQSxRQUFRLEVBQUVjLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3hCWCxJQUFBQSxVQUFVLEVBQUVVLG1CQUFVRSxLQURFO0FBRXhCZCxJQUFBQSxXQUFXLEVBQUVZLG1CQUFVQyxLQUFWLENBQWdCO0FBQzNCWixNQUFBQSxlQUFlLEVBQUVXLG1CQUFVRyxPQUFWLENBQWtCSCxtQkFBVUksTUFBNUI7QUFEVSxLQUFoQjtBQUZXLEdBQWhCLEVBS1BDLFVBTndCO0FBTzNCZixFQUFBQSxVQUFVLEVBQUVVLG1CQUFVQyxLQUFWLENBQWdCO0FBQzFCSCxJQUFBQSxJQUFJLEVBQUVFLG1CQUFVTSxNQUFWLENBQWlCRDtBQURHLEdBQWhCLEVBRVRBO0FBVHdCLENBQTdCO2VBWWVwQixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdieXRlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tICcuLi9TY3JlZW5SZWFkZXJUZXh0JztcbmltcG9ydCB1c2VMb2NhbGl6ZSBmcm9tICcuLi9ob29rcy91c2VMb2NhbGl6ZSc7XG5pbXBvcnQgdXNlU3R5bGVTZXQgZnJvbSAnLi4vaG9va3MvdXNlU3R5bGVTZXQnO1xuXG5jb25zdCBST09UX0NTUyA9IGNzcyh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbn0pO1xuXG5jb25zdCBVcGxvYWRBdHRhY2htZW50ID0gKHtcbiAgYWN0aXZpdHk6IHsgYXR0YWNobWVudHMgPSBbXSwgY2hhbm5lbERhdGE6IHsgYXR0YWNobWVudFNpemVzID0gW10gfSA9IHt9IH0gPSB7fSxcbiAgYXR0YWNobWVudFxufSkgPT4ge1xuICBjb25zdCBbeyB1cGxvYWRBdHRhY2htZW50OiB1cGxvYWRBdHRhY2htZW50U3R5bGVTZXQgfV0gPSB1c2VTdHlsZVNldCgpO1xuXG4gIGNvbnN0IGF0dGFjaG1lbnRJbmRleCA9IGF0dGFjaG1lbnRzLmluZGV4T2YoYXR0YWNobWVudCk7XG4gIGNvbnN0IHNpemUgPSBhdHRhY2htZW50U2l6ZXNbYXR0YWNobWVudEluZGV4XTtcbiAgY29uc3QgZm9ybWF0dGVkU2l6ZSA9IHR5cGVvZiBzaXplID09PSAnbnVtYmVyJyAmJiBmb3JtYXQoc2l6ZSk7XG4gIGNvbnN0IHVwbG9hZEZpbGVXaXRoRmlsZVNpemVMYWJlbCA9IHVzZUxvY2FsaXplKCdVcGxvYWRGaWxlV2l0aEZpbGVTaXplJywgYXR0YWNobWVudC5uYW1lLCBmb3JtYXR0ZWRTaXplKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxTY3JlZW5SZWFkZXJUZXh0IHRleHQ9e3VwbG9hZEZpbGVXaXRoRmlsZVNpemVMYWJlbH0gLz5cbiAgICAgIDxkaXYgYXJpYS1oaWRkZW49e3RydWV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhST09UX0NTUyArICcnLCB1cGxvYWRBdHRhY2htZW50U3R5bGVTZXQgKyAnJyl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57YXR0YWNobWVudC5uYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpemVcIj57Zm9ybWF0dGVkU2l6ZX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5VcGxvYWRBdHRhY2htZW50LnByb3BUeXBlcyA9IHtcbiAgYWN0aXZpdHk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXR0YWNobWVudDogUHJvcFR5cGVzLmFycmF5LFxuICAgIGNoYW5uZWxEYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYXR0YWNobWVudFNpemVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKVxuICAgIH0pXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGF0dGFjaG1lbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEF0dGFjaG1lbnQ7XG4iXX0=
