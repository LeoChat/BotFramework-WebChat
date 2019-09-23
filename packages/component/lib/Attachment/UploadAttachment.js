'use strict';

var cov_2gluov4ri = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/UploadAttachment.js';
  var hash = '9efdee2769d56cd64c04ee569109e74d9c2b98e2';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/UploadAttachment.js',
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
          line: 35,
          column: 1
        }
      },
      '2': {
        start: {
          line: 22,
          column: 26
        },
        end: {
          line: 22,
          column: 57
        }
      },
      '3': {
        start: {
          line: 23,
          column: 15
        },
        end: {
          line: 23,
          column: 47
        }
      },
      '4': {
        start: {
          line: 24,
          column: 24
        },
        end: {
          line: 24,
          column: 64
        }
      },
      '5': {
        start: {
          line: 25,
          column: 38
        },
        end: {
          line: 25,
          column: 114
        }
      },
      '6': {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 34,
          column: 4
        }
      },
      '7': {
        start: {
          line: 37,
          column: 0
        },
        end: {
          line: 51,
          column: 2
        }
      },
      '8': {
        start: {
          line: 53,
          column: 61
        },
        end: {
          line: 53,
          column: 83
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
            line: 21,
            column: 6
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 21
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 53,
            column: 32
          },
          end: {
            line: 53,
            column: 33
          }
        },
        loc: {
          start: {
            line: 53,
            column: 61
          },
          end: {
            line: 53,
            column: 83
          }
        },
        line: 53
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
    hash: '9efdee2769d56cd64c04ee569109e74d9c2b98e2'
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

var _Localize = require('../Localization/Localize');

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _ScreenReaderText = _interopRequireDefault(require('../ScreenReaderText'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ROOT_CSS =
  (cov_2gluov4ri.s[0]++,
  (0, _glamor.css)({
    display: 'flex',
    flexDirection: 'column'
  }));
cov_2gluov4ri.s[1]++;

var UploadAttachment = function UploadAttachment(_ref) {
  var _ref$activity = _ref.activity;
  _ref$activity = _ref$activity === void 0 ? (cov_2gluov4ri.b[0][0]++, {}) : _ref$activity;
  var _ref$activity$attachm = _ref$activity.attachments,
    attachments = _ref$activity$attachm === void 0 ? (cov_2gluov4ri.b[1][0]++, []) : _ref$activity$attachm,
    _ref$activity$channel = _ref$activity.channelData;
  _ref$activity$channel = _ref$activity$channel === void 0 ? (cov_2gluov4ri.b[2][0]++, {}) : _ref$activity$channel;
  var _ref$activity$channel2 = _ref$activity$channel.attachmentSizes,
    attachmentSizes = _ref$activity$channel2 === void 0 ? (cov_2gluov4ri.b[3][0]++, []) : _ref$activity$channel2,
    attachment = _ref.attachment,
    language = _ref.language,
    styleSet = _ref.styleSet;
  cov_2gluov4ri.f[0]++;
  var attachmentIndex = (cov_2gluov4ri.s[2]++, attachments.indexOf(attachment));
  var size = (cov_2gluov4ri.s[3]++, attachmentSizes[attachmentIndex]);
  var formattedSize =
    (cov_2gluov4ri.s[4]++,
    (cov_2gluov4ri.b[4][0]++, typeof size === 'number') && (cov_2gluov4ri.b[4][1]++, (0, _bytes.format)(size)));
  var uploadFileWithFileSizeLabel =
    (cov_2gluov4ri.s[5]++, (0, _Localize.localize)('UploadFileWithFileSize', language, attachment.name, formattedSize));
  cov_2gluov4ri.s[6]++;
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
        className: (0, _classnames.default)(ROOT_CSS + '', styleSet.uploadAttachment + '')
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

cov_2gluov4ri.s[7]++;
UploadAttachment.propTypes = {
  activity: _propTypes.default.shape({
    attachment: _propTypes.default.array,
    channelData: _propTypes.default.shape({
      attachmentSizes: _propTypes.default.arrayOf(_propTypes.default.number)
    })
  }).isRequired,
  attachment: _propTypes.default.shape({
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
  cov_2gluov4ri.f[1]++;
  cov_2gluov4ri.s[8]++;
  return {
    language: language,
    styleSet: styleSet
  };
})(UploadAttachment);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1VwbG9hZEF0dGFjaG1lbnQuanMiXSwibmFtZXMiOlsiUk9PVF9DU1MiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIlVwbG9hZEF0dGFjaG1lbnQiLCJhY3Rpdml0eSIsImF0dGFjaG1lbnRzIiwiY2hhbm5lbERhdGEiLCJhdHRhY2htZW50U2l6ZXMiLCJhdHRhY2htZW50IiwibGFuZ3VhZ2UiLCJzdHlsZVNldCIsImF0dGFjaG1lbnRJbmRleCIsImluZGV4T2YiLCJzaXplIiwiZm9ybWF0dGVkU2l6ZSIsInVwbG9hZEZpbGVXaXRoRmlsZVNpemVMYWJlbCIsIm5hbWUiLCJ1cGxvYWRBdHRhY2htZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJhcnJheSIsImFycmF5T2YiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZG93bmxvYWRBdHRhY2htZW50IiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFFBQVEsMEJBQUcsaUJBQUk7QUFDbkJDLEVBQUFBLE9BQU8sRUFBRSxNQURVO0FBRW5CQyxFQUFBQSxhQUFhLEVBQUU7QUFGSSxDQUFKLENBQUgsQ0FBZDs7O0FBS0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUtuQjtBQUFBLDJCQUpKQyxRQUlJO0FBQUEsdUVBSnlFLEVBSXpFO0FBQUEsNENBSlFDLFdBSVI7QUFBQSxNQUpRQSxXQUlSLGdFQUpzQixFQUl0QjtBQUFBLDRDQUowQkMsV0FJMUI7QUFBQSx1RkFKa0UsRUFJbEU7QUFBQSxxREFKeUNDLGVBSXpDO0FBQUEsTUFKeUNBLGVBSXpDLGlFQUoyRCxFQUkzRDtBQUFBLE1BSEpDLFVBR0ksUUFISkEsVUFHSTtBQUFBLE1BRkpDLFFBRUksUUFGSkEsUUFFSTtBQUFBLE1BREpDLFFBQ0ksUUFESkEsUUFDSTtBQUFBO0FBQ0osTUFBTUMsZUFBZSwwQkFBR04sV0FBVyxDQUFDTyxPQUFaLENBQW9CSixVQUFwQixDQUFILENBQXJCO0FBQ0EsTUFBTUssSUFBSSwwQkFBR04sZUFBZSxDQUFDSSxlQUFELENBQWxCLENBQVY7QUFDQSxNQUFNRyxhQUFhLDBCQUFHLGlDQUFPRCxJQUFQLEtBQWdCLFFBQWhCLCtCQUE0QixtQkFBT0EsSUFBUCxDQUE1QixDQUFILENBQW5CO0FBQ0EsTUFBTUUsMkJBQTJCLDBCQUFHLHdCQUFTLHdCQUFULEVBQW1DTixRQUFuQyxFQUE2Q0QsVUFBVSxDQUFDUSxJQUF4RCxFQUE4REYsYUFBOUQsQ0FBSCxDQUFqQztBQUpJO0FBS0osU0FDRSw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNFLDZCQUFDLHlCQUFEO0FBQWtCLElBQUEsSUFBSSxFQUFFQztBQUF4QixJQURGLEVBRUU7QUFBSyxtQkFBYSxJQUFsQjtBQUF3QixJQUFBLFNBQVMsRUFBRSx5QkFBV2YsUUFBUSxHQUFHLEVBQXRCLEVBQTBCVSxRQUFRLENBQUNPLGdCQUFULEdBQTRCLEVBQXREO0FBQW5DLEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQXVCVCxVQUFVLENBQUNRLElBQWxDLENBREYsRUFFRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBdUJGLGFBQXZCLENBRkYsQ0FGRixDQURGO0FBU0QsQ0FuQkQ7OztBQXFCQVgsZ0JBQWdCLENBQUNlLFNBQWpCLEdBQTZCO0FBQzNCZCxFQUFBQSxRQUFRLEVBQUVlLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3hCWixJQUFBQSxVQUFVLEVBQUVXLG1CQUFVRSxLQURFO0FBRXhCZixJQUFBQSxXQUFXLEVBQUVhLG1CQUFVQyxLQUFWLENBQWdCO0FBQzNCYixNQUFBQSxlQUFlLEVBQUVZLG1CQUFVRyxPQUFWLENBQWtCSCxtQkFBVUksTUFBNUI7QUFEVSxLQUFoQjtBQUZXLEdBQWhCLEVBS1BDLFVBTndCO0FBTzNCaEIsRUFBQUEsVUFBVSxFQUFFVyxtQkFBVUMsS0FBVixDQUFnQjtBQUMxQkosSUFBQUEsSUFBSSxFQUFFRyxtQkFBVU0sTUFBVixDQUFpQkQ7QUFERyxHQUFoQixFQUVUQSxVQVR3QjtBQVUzQmYsRUFBQUEsUUFBUSxFQUFFVSxtQkFBVU0sTUFBVixDQUFpQkQsVUFWQTtBQVczQmQsRUFBQUEsUUFBUSxFQUFFUyxtQkFBVUMsS0FBVixDQUFnQjtBQUN4Qk0sSUFBQUEsa0JBQWtCLEVBQUVQLG1CQUFVUSxHQUFWLENBQWNIO0FBRFYsR0FBaEIsRUFFUEE7QUFid0IsQ0FBN0I7O2VBZ0JlLCtCQUFpQixpQkFBNkI7QUFBQSxNQUExQmYsUUFBMEIsU0FBMUJBLFFBQTBCO0FBQUEsTUFBaEJDLFFBQWdCLFNBQWhCQSxRQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFFRCxJQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWUMsSUFBQUEsUUFBUSxFQUFSQTtBQUFaO0FBQXNCLENBQXBFLEVBQXVFUCxnQkFBdkUsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdieXRlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJy4uL0xvY2FsaXphdGlvbi9Mb2NhbGl6ZSc7XG5pbXBvcnQgY29ubmVjdFRvV2ViQ2hhdCBmcm9tICcuLi9jb25uZWN0VG9XZWJDaGF0JztcbmltcG9ydCBTY3JlZW5SZWFkZXJUZXh0IGZyb20gJy4uL1NjcmVlblJlYWRlclRleHQnO1xuXG5jb25zdCBST09UX0NTUyA9IGNzcyh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbn0pO1xuXG5jb25zdCBVcGxvYWRBdHRhY2htZW50ID0gKHtcbiAgYWN0aXZpdHk6IHsgYXR0YWNobWVudHMgPSBbXSwgY2hhbm5lbERhdGE6IHsgYXR0YWNobWVudFNpemVzID0gW10gfSA9IHt9IH0gPSB7fSxcbiAgYXR0YWNobWVudCxcbiAgbGFuZ3VhZ2UsXG4gIHN0eWxlU2V0XG59KSA9PiB7XG4gIGNvbnN0IGF0dGFjaG1lbnRJbmRleCA9IGF0dGFjaG1lbnRzLmluZGV4T2YoYXR0YWNobWVudCk7XG4gIGNvbnN0IHNpemUgPSBhdHRhY2htZW50U2l6ZXNbYXR0YWNobWVudEluZGV4XTtcbiAgY29uc3QgZm9ybWF0dGVkU2l6ZSA9IHR5cGVvZiBzaXplID09PSAnbnVtYmVyJyAmJiBmb3JtYXQoc2l6ZSk7XG4gIGNvbnN0IHVwbG9hZEZpbGVXaXRoRmlsZVNpemVMYWJlbCA9IGxvY2FsaXplKCdVcGxvYWRGaWxlV2l0aEZpbGVTaXplJywgbGFuZ3VhZ2UsIGF0dGFjaG1lbnQubmFtZSwgZm9ybWF0dGVkU2l6ZSk7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNjcmVlblJlYWRlclRleHQgdGV4dD17dXBsb2FkRmlsZVdpdGhGaWxlU2l6ZUxhYmVsfSAvPlxuICAgICAgPGRpdiBhcmlhLWhpZGRlbj17dHJ1ZX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKFJPT1RfQ1NTICsgJycsIHN0eWxlU2V0LnVwbG9hZEF0dGFjaG1lbnQgKyAnJyl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57YXR0YWNobWVudC5uYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpemVcIj57Zm9ybWF0dGVkU2l6ZX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5VcGxvYWRBdHRhY2htZW50LnByb3BUeXBlcyA9IHtcbiAgYWN0aXZpdHk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXR0YWNobWVudDogUHJvcFR5cGVzLmFycmF5LFxuICAgIGNoYW5uZWxEYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYXR0YWNobWVudFNpemVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKVxuICAgIH0pXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGF0dGFjaG1lbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0eWxlU2V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRvd25sb2FkQXR0YWNobWVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1dlYkNoYXQoKHsgbGFuZ3VhZ2UsIHN0eWxlU2V0IH0pID0+ICh7IGxhbmd1YWdlLCBzdHlsZVNldCB9KSkoVXBsb2FkQXR0YWNobWVudCk7XG4iXX0=
