'use strict';

var cov_2rkjvq15kq = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/DownloadAttachment.js';
  var hash = 'c93669c07eaca670f2f52defa0b1eed310e1c218';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/DownloadAttachment.js',
    statementMap: {
      '0': {
        start: {
          line: 10,
          column: 27
        },
        end: {
          line: 42,
          column: 1
        }
      },
      '1': {
        start: {
          line: 16,
          column: 26
        },
        end: {
          line: 16,
          column: 57
        }
      },
      '2': {
        start: {
          line: 17,
          column: 24
        },
        end: {
          line: 17,
          column: 59
        }
      },
      '3': {
        start: {
          line: 18,
          column: 15
        },
        end: {
          line: 18,
          column: 47
        }
      },
      '4': {
        start: {
          line: 19,
          column: 24
        },
        end: {
          line: 19,
          column: 64
        }
      },
      '5': {
        start: {
          line: 20,
          column: 40
        },
        end: {
          line: 26,
          column: 3
        }
      },
      '6': {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 41,
          column: 4
        }
      },
      '7': {
        start: {
          line: 44,
          column: 0
        },
        end: {
          line: 59,
          column: 2
        }
      },
      '8': {
        start: {
          line: 61,
          column: 61
        },
        end: {
          line: 61,
          column: 83
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
            line: 15,
            column: 6
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 15
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 61,
            column: 32
          },
          end: {
            line: 61,
            column: 33
          }
        },
        loc: {
          start: {
            line: 61,
            column: 61
          },
          end: {
            line: 61,
            column: 83
          }
        },
        line: 61
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
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0],
      '1': [0],
      '2': [0],
      '3': [0],
      '4': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'c93669c07eaca670f2f52defa0b1eed310e1c218'
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

var _Localize = require('../Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _DownloadIcon = _interopRequireDefault(require('./Assets/DownloadIcon'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_2rkjvq15kq.s[0]++;

var DownloadAttachment = function DownloadAttachment(_ref) {
  var _ref$activity = _ref.activity;
  _ref$activity = _ref$activity === void 0 ? (cov_2rkjvq15kq.b[0][0]++, {}) : _ref$activity;
  var _ref$activity$attachm = _ref$activity.attachments,
    attachments = _ref$activity$attachm === void 0 ? (cov_2rkjvq15kq.b[1][0]++, []) : _ref$activity$attachm,
    _ref$activity$channel = _ref$activity.channelData;
  _ref$activity$channel = _ref$activity$channel === void 0 ? (cov_2rkjvq15kq.b[2][0]++, {}) : _ref$activity$channel;
  var _ref$activity$channel2 = _ref$activity$channel.attachmentSizes,
    attachmentSizes = _ref$activity$channel2 === void 0 ? (cov_2rkjvq15kq.b[3][0]++, []) : _ref$activity$channel2,
    attachment = _ref.attachment,
    language = _ref.language,
    styleSet = _ref.styleSet;
  cov_2rkjvq15kq.f[0]++;
  var attachmentIndex = (cov_2rkjvq15kq.s[1]++, attachments.indexOf(attachment));
  var downloadLabel = (cov_2rkjvq15kq.s[2]++, (0, _Localize.localize)('Download file', language));
  var size = (cov_2rkjvq15kq.s[3]++, attachmentSizes[attachmentIndex]);
  var formattedSize =
    (cov_2rkjvq15kq.s[4]++,
    (cov_2rkjvq15kq.b[4][0]++, typeof size === 'number') && (cov_2rkjvq15kq.b[4][1]++, (0, _bytes.format)(size)));
  var downloadFileWithFileSizeLabel =
    (cov_2rkjvq15kq.s[5]++,
    (0, _Localize.localize)('DownloadFileWithFileSize', language, downloadLabel, attachment.name, formattedSize));
  cov_2rkjvq15kq.s[6]++;
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
        className: styleSet.downloadAttachment
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

cov_2rkjvq15kq.s[7]++;
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
  }).isRequired,
  language: _propTypes.default.string.isRequired,
  styleSet: _propTypes.default.shape({
    downloadAttachment: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var language = _ref2.language,
    styleSet = _ref2.styleSet;
  cov_2rkjvq15kq.f[1]++;
  cov_2rkjvq15kq.s[8]++;
  return {
    language: language,
    styleSet: styleSet
  };
})(DownloadAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0Rvd25sb2FkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJEb3dubG9hZEF0dGFjaG1lbnQiLCJhY3Rpdml0eSIsImF0dGFjaG1lbnRzIiwiY2hhbm5lbERhdGEiLCJhdHRhY2htZW50U2l6ZXMiLCJhdHRhY2htZW50IiwibGFuZ3VhZ2UiLCJzdHlsZVNldCIsImF0dGFjaG1lbnRJbmRleCIsImluZGV4T2YiLCJkb3dubG9hZExhYmVsIiwic2l6ZSIsImZvcm1hdHRlZFNpemUiLCJkb3dubG9hZEZpbGVXaXRoRmlsZVNpemVMYWJlbCIsIm5hbWUiLCJkb3dubG9hZEF0dGFjaG1lbnQiLCJjb250ZW50VXJsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJhcnJheSIsImFycmF5T2YiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixPQUtyQjtBQUFBLDJCQUpKQyxRQUlJO0FBQUEsd0VBSnlFLEVBSXpFO0FBQUEsNENBSlFDLFdBSVI7QUFBQSxN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QXBFLEVBQXVFUCxrQkFBdkUsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2J5dGVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJy4uL0xvY2FsaXphdGlvbi9Mb2NhbGl6ZSc7XG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBEb3dubG9hZEljb24gZnJvbSAnLi9Bc3NldHMvRG93bmxvYWRJY29uJztcbmltcG9ydCBTY3JlZW5SZWFkZXJUZXh0IGZyb20gJy4uL1NjcmVlblJlYWRlclRleHQnO1xuXG5jb25zdCBEb3dubG9hZEF0dGFjaG1lbnQgPSAoe1xuICBhY3Rpdml0eTogeyBhdHRhY2htZW50cyA9IFtdLCBjaGFubmVsRGF0YTogeyBhdHRhY2htZW50U2l6ZXMgPSBbXSB9ID0ge30gfSA9IHt9LFxuICBhdHRhY2htZW50LFxuICBsYW5ndWFnZSxcbiAgc3R5bGVTZXRcbn0pID0+IHtcbiAgY29uc3QgYXR0YWNobWVudEluZGV4ID0gYXR0YWNobWVudHMuaW5kZXhPZihhdHRhY2htZW50KTtcbiAgY29uc3QgZG93bmxvYWRMYWJlbCA9IGxvY2FsaXplKCdEb3dubG9hZCBmaWxlJywgbGFuZ3VhZ2UpO1xuICBjb25zdCBzaXplID0gYXR0YWNobWVudFNpemVzW2F0dGFjaG1lbnRJbmRleF07XG4gIGNvbnN0IGZvcm1hdHRlZFNpemUgPSB0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicgJiYgZm9ybWF0KHNpemUpO1xuICBjb25zdCBkb3dubG9hZEZpbGVXaXRoRmlsZVNpemVMYWJlbCA9IGxvY2FsaXplKFxuICAgICdEb3dubG9hZEZpbGVXaXRoRmlsZVNpemUnLFxuICAgIGxhbmd1YWdlLFxuICAgIGRvd25sb2FkTGFiZWwsXG4gICAgYXR0YWNobWVudC5uYW1lLFxuICAgIGZvcm1hdHRlZFNpemVcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8U2NyZWVuUmVhZGVyVGV4dCB0ZXh0PXtkb3dubG9hZEZpbGVXaXRoRmlsZVNpemVMYWJlbH0gLz5cbiAgICAgIDxkaXYgYXJpYS1oaWRkZW49e3RydWV9IGNsYXNzTmFtZT17c3R5bGVTZXQuZG93bmxvYWRBdHRhY2htZW50fT5cbiAgICAgICAgPGEgaHJlZj17YXR0YWNobWVudC5jb250ZW50VXJsfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgey8qIEFsdGhvdWdoIG5lc3RlZCwgQ2hyb21lIHY3NSBkb2VzIG5vdCByZXNwZWN0IHRoZSBhYm92ZSBhcmlhLWhpZGRlbiBhbmQgbWFrZXMgdGhlIGJlbG93IGFyaWEtaGlkZGVuIG5lY2Vzc2FyeSAqL31cbiAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPXt0cnVlfSBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57YXR0YWNobWVudC5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXplXCI+e2Zvcm1hdHRlZFNpemV9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPERvd25sb2FkSWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MS41fSAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuRG93bmxvYWRBdHRhY2htZW50LnByb3BUeXBlcyA9IHtcbiAgYWN0aXZpdHk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXR0YWNobWVudDogUHJvcFR5cGVzLmFycmF5LFxuICAgIGNoYW5uZWxEYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYXR0YWNobWVudFNpemVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKVxuICAgIH0pXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGF0dGFjaG1lbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29udGVudFVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkLFxuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdHlsZVNldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBkb3dubG9hZEF0dGFjaG1lbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IGxhbmd1YWdlLCBzdHlsZVNldCB9KSA9PiAoeyBsYW5ndWFnZSwgc3R5bGVTZXQgfSkpKERvd25sb2FkQXR0YWNobWVudCk7XG4iXX0=
