'use strict';

var cov_1t0n1o2qou = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/DownloadAttachment.js';
  var hash = '58caef5fdf627b9f192a5edfb7b27de81c27fd5f';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Attachment/DownloadAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 10,
          column: 27
        },
        end: {
          line: 43,
          column: 1
        }
      },
      '1': {
        start: {
          line: 14,
          column: 63
        },
        end: {
          line: 14,
          column: 76
        }
      },
      '2': {
        start: {
          line: 15,
          column: 24
        },
        end: {
          line: 15,
          column: 52
        }
      },
      '3': {
        start: {
          line: 17,
          column: 26
        },
        end: {
          line: 17,
          column: 57
        }
      },
      '4': {
        start: {
          line: 18,
          column: 15
        },
        end: {
          line: 18,
          column: 47
        }
      },
      '5': {
        start: {
          line: 19,
          column: 24
        },
        end: {
          line: 19,
          column: 64
        }
      },
      '6': {
        start: {
          line: 21,
          column: 40
        },
        end: {
          line: 26,
          column: 3
        }
      },
      '7': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 42,
          column: 4
        }
      },
      '8': {
        start: {
          line: 45,
          column: 0
        },
        end: {
          line: 56,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 10,
            column: 27
          },
          end: {
            line: 10,
            column: 28
          }
        },
        loc: {
          start: {
            line: 13,
            column: 6
          },
          end: {
            line: 43,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 11,
            column: 81
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 11,
              column: 79
            },
            end: {
              line: 11,
              column: 81
            }
          }
        ],
        line: 11
      },
      '1': {
        loc: {
          start: {
            line: 11,
            column: 14
          },
          end: {
            line: 11,
            column: 30
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 11,
              column: 28
            },
            end: {
              line: 11,
              column: 30
            }
          }
        ],
        line: 11
      },
      '2': {
        loc: {
          start: {
            line: 11,
            column: 45
          },
          end: {
            line: 11,
            column: 74
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 11,
              column: 72
            },
            end: {
              line: 11,
              column: 74
            }
          }
        ],
        line: 11
      },
      '3': {
        loc: {
          start: {
            line: 11,
            column: 47
          },
          end: {
            line: 11,
            column: 67
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 11,
              column: 65
            },
            end: {
              line: 11,
              column: 67
            }
          }
        ],
        line: 11
      },
      '4': {
        loc: {
          start: {
            line: 19,
            column: 24
          },
          end: {
            line: 19,
            column: 64
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 19,
              column: 24
            },
            end: {
              line: 19,
              column: 48
            }
          },
          {
            start: {
              line: 19,
              column: 52
            },
            end: {
              line: 19,
              column: 64
            }
          }
        ],
        line: 19
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
    hash: '58caef5fdf627b9f192a5edfb7b27de81c27fd5f'
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

var _bytes = require('bytes');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _DownloadIcon = _interopRequireDefault(require('./Assets/DownloadIcon'));

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

cov_1t0n1o2qou.s[0]++;

var DownloadAttachment = function DownloadAttachment(_ref) {
  var _ref$activity = _ref.activity;
  _ref$activity = _ref$activity === void 0 ? (cov_1t0n1o2qou.b[0][0]++, {}) : _ref$activity;
  var _ref$activity$attachm = _ref$activity.attachments,
    attachments = _ref$activity$attachm === void 0 ? (cov_1t0n1o2qou.b[1][0]++, []) : _ref$activity$attachm,
    _ref$activity$channel = _ref$activity.channelData;
  _ref$activity$channel = _ref$activity$channel === void 0 ? (cov_1t0n1o2qou.b[2][0]++, {}) : _ref$activity$channel;
  var _ref$activity$channel2 = _ref$activity$channel.attachmentSizes,
    attachmentSizes = _ref$activity$channel2 === void 0 ? (cov_1t0n1o2qou.b[3][0]++, []) : _ref$activity$channel2,
    attachment = _ref.attachment;
  cov_1t0n1o2qou.f[0]++;

  var _ref2 = (cov_1t0n1o2qou.s[1]++, (0, _useStyleSet.default)()),
    _ref3 = _slicedToArray(_ref2, 1),
    downloadAttachmentStyleSet = _ref3[0].downloadAttachment;

  var downloadLabel = (cov_1t0n1o2qou.s[2]++, (0, _useLocalize.default)('Download file'));
  var attachmentIndex = (cov_1t0n1o2qou.s[3]++, attachments.indexOf(attachment));
  var size = (cov_1t0n1o2qou.s[4]++, attachmentSizes[attachmentIndex]);
  var formattedSize =
    (cov_1t0n1o2qou.s[5]++,
    (cov_1t0n1o2qou.b[4][0]++, typeof size === 'number') && (cov_1t0n1o2qou.b[4][1]++, (0, _bytes.format)(size)));
  var downloadFileWithFileSizeLabel =
    (cov_1t0n1o2qou.s[6]++,
    (0, _useLocalize.default)('DownloadFileWithFileSize', downloadLabel, attachment.name, formattedSize));
  cov_1t0n1o2qou.s[7]++;
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(_ScreenReaderText.default, {
      text: downloadFileWithFileSizeLabel
    }),
    _react.default.createElement(
      'div',
      {
        'aria-hidden': true,
        className: downloadAttachmentStyleSet
      },
      _react.default.createElement(
        'a',
        {
          href: attachment.contentUrl,
          rel: 'noopener noreferrer',
          target: '_blank'
        },
        _react.default.createElement(
          'div',
          {
            'aria-hidden': true,
            className: 'details'
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
        ),
        _react.default.createElement(_DownloadIcon.default, {
          className: 'icon',
          size: 1.5
        })
      )
    )
  );
};

cov_1t0n1o2qou.s[8]++;
DownloadAttachment.propTypes = {
  activity: _propTypes.default.shape({
    attachment: _propTypes.default.array,
    channelData: _propTypes.default.shape({
      attachmentSizes: _propTypes.default.arrayOf(_propTypes.default.number)
    })
  }).isRequired,
  attachment: _propTypes.default.shape({
    contentUrl: _propTypes.default.string.isRequired,
    name: _propTypes.default.string.isRequired
  }).isRequired
};
var _default = DownloadAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0Rvd25sb2FkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJEb3dubG9hZEF0dGFjaG1lbnQiLCJhY3Rpdml0eSIsImF0dGFjaG1lbnRzIiwiY2hhbm5lbERhdGEiLCJhdHRhY2htZW50U2l6ZXMiLCJhdHRhY2htZW50IiwiZG93bmxvYWRBdHRhY2htZW50U3R5bGVTZXQiLCJkb3dubG9hZEF0dGFjaG1lbnQiLCJkb3dubG9hZExhYmVsIiwiYXR0YWNobWVudEluZGV4IiwiaW5kZXhPZiIsInNpemUiLCJmb3JtYXR0ZWRTaXplIiwiZG93bmxvYWRGaWxlV2l0aEZpbGVTaXplTGFiZWwiLCJuYW1lIiwiY29udGVudFVybCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwiYXJyYXkiLCJhcnJheU9mIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BR3JCO0FBQUEsMkJBRkpDLFFBRUk7QUFBQSx3RUFGeUUsRUFFekU7QUFBQSw0Q0FGUUMsV0FFUjtBQUFBLE1BRlFBLFdBRVIsaUVBRnNCLEVBRXRCO0FBQUEsNENBRjBCQyxXQUUxQjtBQUFBLHdGQUZrRSxFQUVsRTtBQUFBLHFEQUZ5Q0MsZUFFekM7QUFBQSxNQUZ5Q0EsZUFFekMsa0VBRjJELEVBRTNEO0FBQUEsTUFESkMsVUFDSSxRQURKQSxVQUNJO0FBQUE7O0FBQUEsc0NBQ3lELDJCQUR6RDtBQUFBO0FBQUEsTUFDeUJDLDBCQUR6QixZQUNLQyxrQkFETDs7QUFFSixNQUFNQyxhQUFhLDJCQUFHLDBCQUFZLGVBQVosQ0FBSCxDQUFuQjtBQUVBLE1BQU1DLGVBQWUsMkJBQUdQLFdBQVcsQ0FBQ1EsT0FBWixDQUFvQkwsVUFBcEIsQ0FBSCxDQUFyQjtBQUNBLE1BQU1NLElBQUksMkJBQUdQLGVBQWUsQ0FBQ0ssZUFBRCxDQUFsQixDQUFWO0FBQ0EsTUFBTUcsYUFBYSwyQkFBRyxrQ0FBT0QsSUFBUCxLQUFnQixRQUFoQixnQ0FBNEIsbUJBQU9BLElBQVAsQ0FBNUIsQ0FBSCxDQUFuQjtBQUVBLE1BQU1FLDZCQUE2QiwyQkFBRywwQkFDcEMsMEJBRG9DLEVBRXBDTCxhQUZvQyxFQUdwQ0gsVUFBVSxDQUFDUyxJQUh5QixFQUlwQ0YsYUFKb0MsQ0FBSCxDQUFuQztBQVJJO0FBZUosU0FDRSw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNFLDZCQUFDLHlCQUFEO0FBQWtCLElBQUEsSUFBSSxFQUFFQztBQUF4QixJQURGLEVBRUU7QUFBSyxtQkFBYSxJQUFsQjtBQUF3QixJQUFBLFNBQVMsRUFBRVA7QUFBbkMsS0FDRTtBQUFHLElBQUEsSUFBSSxFQUFFRCxVQUFVLENBQUNVLFVBQXBCO0FBQWdDLElBQUEsR0FBRyxFQUFDLHFCQUFwQztBQUEwRCxJQUFBLE1BQU0sRUFBQztBQUFqRSxLQUVFO0FBQUssbUJBQWEsSUFBbEI7QUFBd0IsSUFBQSxTQUFTLEVBQUM7QUFBbEMsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBdUJWLFVBQVUsQ0FBQ1MsSUFBbEMsQ0FERixFQUVFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUF1QkYsYUFBdkIsQ0FGRixDQUZGLEVBTUUsNkJBQUMscUJBQUQ7QUFBYyxJQUFBLFNBQVMsRUFBQyxNQUF4QjtBQUErQixJQUFBLElBQUksRUFBRTtBQUFyQyxJQU5GLENBREYsQ0FGRixDQURGO0FBZUQsQ0FqQ0Q7OztBQW1DQVosa0JBQWtCLENBQUNnQixTQUFuQixHQUErQjtBQUM3QmYsRUFBQUEsUUFBUSxFQUFFZ0IsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDeEJiLElBQUFBLFVBQVUsRUFBRVksbUJBQVVFLEtBREU7QUFFeEJoQixJQUFBQSxXQUFXLEVBQUVjLG1CQUFVQyxLQUFWLENBQWdCO0FBQzNCZCxNQUFBQSxlQUFlLEVBQUVhLG1CQUFVRyxPQUFWLENBQWtCSCxtQkFBVUksTUFBNUI7QUFEVSxLQUFoQjtBQUZXLEdBQWhCLEVBS1BDLFVBTjBCO0FBTzdCakIsRUFBQUEsVUFBVSxFQUFFWSxtQkFBVUMsS0FBVixDQUFnQjtBQUMxQkgsSUFBQUEsVUFBVSxFQUFFRSxtQkFBVU0sTUFBVixDQUFpQkQsVUFESDtBQUUxQlIsSUFBQUEsSUFBSSxFQUFFRyxtQkFBVU0sTUFBVixDQUFpQkQ7QUFGRyxHQUFoQixFQUdUQTtBQVYwQixDQUEvQjtlQWFldEIsa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdieXRlcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IERvd25sb2FkSWNvbiBmcm9tICcuL0Fzc2V0cy9Eb3dubG9hZEljb24nO1xuaW1wb3J0IFNjcmVlblJlYWRlclRleHQgZnJvbSAnLi4vU2NyZWVuUmVhZGVyVGV4dCc7XG5pbXBvcnQgdXNlTG9jYWxpemUgZnJvbSAnLi4vaG9va3MvdXNlTG9jYWxpemUnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlU2V0JztcblxuY29uc3QgRG93bmxvYWRBdHRhY2htZW50ID0gKHtcbiAgYWN0aXZpdHk6IHsgYXR0YWNobWVudHMgPSBbXSwgY2hhbm5lbERhdGE6IHsgYXR0YWNobWVudFNpemVzID0gW10gfSA9IHt9IH0gPSB7fSxcbiAgYXR0YWNobWVudFxufSkgPT4ge1xuICBjb25zdCBbeyBkb3dubG9hZEF0dGFjaG1lbnQ6IGRvd25sb2FkQXR0YWNobWVudFN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcbiAgY29uc3QgZG93bmxvYWRMYWJlbCA9IHVzZUxvY2FsaXplKCdEb3dubG9hZCBmaWxlJyk7XG5cbiAgY29uc3QgYXR0YWNobWVudEluZGV4ID0gYXR0YWNobWVudHMuaW5kZXhPZihhdHRhY2htZW50KTtcbiAgY29uc3Qgc2l6ZSA9IGF0dGFjaG1lbnRTaXplc1thdHRhY2htZW50SW5kZXhdO1xuICBjb25zdCBmb3JtYXR0ZWRTaXplID0gdHlwZW9mIHNpemUgPT09ICdudW1iZXInICYmIGZvcm1hdChzaXplKTtcblxuICBjb25zdCBkb3dubG9hZEZpbGVXaXRoRmlsZVNpemVMYWJlbCA9IHVzZUxvY2FsaXplKFxuICAgICdEb3dubG9hZEZpbGVXaXRoRmlsZVNpemUnLFxuICAgIGRvd25sb2FkTGFiZWwsXG4gICAgYXR0YWNobWVudC5uYW1lLFxuICAgIGZvcm1hdHRlZFNpemVcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxTY3JlZW5SZWFkZXJUZXh0IHRleHQ9e2Rvd25sb2FkRmlsZVdpdGhGaWxlU2l6ZUxhYmVsfSAvPlxuICAgICAgPGRpdiBhcmlhLWhpZGRlbj17dHJ1ZX0gY2xhc3NOYW1lPXtkb3dubG9hZEF0dGFjaG1lbnRTdHlsZVNldH0+XG4gICAgICAgIDxhIGhyZWY9e2F0dGFjaG1lbnQuY29udGVudFVybH0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIHsvKiBBbHRob3VnaCBuZXN0ZWQsIENocm9tZSB2NzUgZG9lcyBub3QgcmVzcGVjdCB0aGUgYWJvdmUgYXJpYS1oaWRkZW4gYW5kIG1ha2VzIHRoZSBiZWxvdyBhcmlhLWhpZGRlbiBuZWNlc3NhcnkgKi99XG4gICAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj17dHJ1ZX0gY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2F0dGFjaG1lbnQubmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l6ZVwiPntmb3JtYXR0ZWRTaXplfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxEb3dubG9hZEljb24gY2xhc3NOYW1lPVwiaWNvblwiIHNpemU9ezEuNX0gLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbkRvd25sb2FkQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2aXR5OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGF0dGFjaG1lbnQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICBjaGFubmVsRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGF0dGFjaG1lbnRTaXplczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcilcbiAgICB9KVxuICB9KS5pc1JlcXVpcmVkLFxuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnRVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRG93bmxvYWRBdHRhY2htZW50O1xuIl19
