'use strict';

var cov_2pg6i9xcxv = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/sendFilesToPostActivitySaga.js';
  var hash = 'acd86dafb4cc3c9c4a65c42a4203caec86e7c279';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/sendFilesToPostActivitySaga.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 16
        },
        end: {
          line: 8,
          column: 39
        }
      },
      '1': {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 24,
          column: 4
        }
      },
      '2': {
        start: {
          line: 13,
          column: 69
        },
        end: {
          line: 18,
          column: 7
        }
      },
      '3': {
        start: {
          line: 20,
          column: 58
        },
        end: {
          line: 20,
          column: 62
        }
      },
      '4': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 109
        }
      },
      '5': {
        start: {
          line: 28,
          column: 41
        },
        end: {
          line: 28,
          column: 84
        }
      },
      '6': {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 32,
          column: 48
        }
      }
    },
    fnMap: {
      '0': {
        name: 'postActivityWithFiles',
        decl: {
          start: {
            line: 10,
            column: 10
          },
          end: {
            line: 10,
            column: 31
          }
        },
        loc: {
          start: {
            line: 10,
            column: 56
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 10
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 13,
            column: 38
          },
          end: {
            line: 13,
            column: 39
          }
        },
        loc: {
          start: {
            line: 13,
            column: 69
          },
          end: {
            line: 18,
            column: 7
          }
        },
        line: 13
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 20,
            column: 44
          },
          end: {
            line: 20,
            column: 45
          }
        },
        loc: {
          start: {
            line: 20,
            column: 58
          },
          end: {
            line: 20,
            column: 62
          }
        },
        line: 20
      },
      '3': {
        name: 'sendFilesToPostActivity',
        decl: {
          start: {
            line: 27,
            column: 10
          },
          end: {
            line: 27,
            column: 33
          }
        },
        loc: {
          start: {
            line: 27,
            column: 36
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 27
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 28,
            column: 18
          },
          end: {
            line: 28,
            column: 19
          }
        },
        loc: {
          start: {
            line: 28,
            column: 41
          },
          end: {
            line: 28,
            column: 84
          }
        },
        line: 28
      },
      '5': {
        name: 'sendFilesToPostActivitySaga',
        decl: {
          start: {
            line: 31,
            column: 25
          },
          end: {
            line: 31,
            column: 52
          }
        },
        loc: {
          start: {
            line: 31,
            column: 55
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 31
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 14,
            column: 21
          },
          end: {
            line: 14,
            column: 64
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 14,
              column: 21
            },
            end: {
              line: 14,
              column: 34
            }
          },
          {
            start: {
              line: 14,
              column: 38
            },
            end: {
              line: 14,
              column: 64
            }
          }
        ],
        line: 14
      },
      '1': {
        loc: {
          start: {
            line: 28,
            column: 41
          },
          end: {
            line: 28,
            column: 84
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 28,
              column: 41
            },
            end: {
              line: 28,
              column: 60
            }
          },
          {
            start: {
              line: 28,
              column: 64
            },
            end: {
              line: 28,
              column: 84
            }
          }
        ],
        line: 28
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'acd86dafb4cc3c9c4a65c42a4203caec86e7c279'
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return (coverage[path] = coverageData);
})();

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = sendFilesToPostActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _sendFiles = require('../actions/sendFiles');

var _mimeWrapper = _interopRequireDefault(require('../utils/mime-wrapper'));

var _postActivity = _interopRequireDefault(require('../actions/postActivity'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(postActivityWithFiles),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendFilesToPostActivity),
  _marked3 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendFilesToPostActivitySaga);

var getType = (cov_2pg6i9xcxv.s[0]++, _mimeWrapper['default'].getType.bind(_mimeWrapper['default']));

function postActivityWithFiles(_ref) {
  var files;
  return _regenerator['default'].wrap(function postActivityWithFiles$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          files = _ref.payload.files;
          cov_2pg6i9xcxv.f[0]++;
          cov_2pg6i9xcxv.s[1]++;
          _context.next = 5;
          return (0, _effects.put)(
            (0, _postActivity['default'])({
              attachments: [].map.call(files, function(_ref2) {
                var name = _ref2.name,
                  thumbnail = _ref2.thumbnail,
                  url = _ref2.url;
                cov_2pg6i9xcxv.f[1]++;
                cov_2pg6i9xcxv.s[2]++;
                return {
                  contentType:
                    (cov_2pg6i9xcxv.b[0][0]++, getType(name)) || (cov_2pg6i9xcxv.b[0][1]++, 'application/octet-stream'),
                  contentUrl: url,
                  name: name,
                  thumbnailUrl: thumbnail
                };
              }),
              channelData: {
                attachmentSizes: [].map.call(files, function(_ref3) {
                  var size = _ref3.size;
                  cov_2pg6i9xcxv.f[2]++;
                  cov_2pg6i9xcxv.s[3]++;
                  return size;
                })
              },
              type: 'message'
            })
          );

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}

function sendFilesToPostActivity() {
  return _regenerator['default'].wrap(function sendFilesToPostActivity$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          cov_2pg6i9xcxv.f[3]++;
          cov_2pg6i9xcxv.s[4]++;
          _context2.next = 4;
          return (0, _effects.takeEvery)(function(_ref4) {
            var payload = _ref4.payload,
              type = _ref4.type;
            cov_2pg6i9xcxv.f[4]++;
            cov_2pg6i9xcxv.s[5]++;
            return (
              (cov_2pg6i9xcxv.b[1][0]++, type === _sendFiles.SEND_FILES) &&
              (cov_2pg6i9xcxv.b[1][1]++, payload.files.length)
            );
          }, postActivityWithFiles);

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2);
}

function sendFilesToPostActivitySaga() {
  return _regenerator['default'].wrap(function sendFilesToPostActivitySaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          cov_2pg6i9xcxv.f[5]++;
          cov_2pg6i9xcxv.s[6]++;
          _context3.next = 4;
          return (0, _whileConnected['default'])(sendFilesToPostActivity);

        case 4:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zZW5kRmlsZXNUb1Bvc3RBY3Rpdml0eVNhZ2EuanMiXSwibmFtZXMiOlsicG9zdEFjdGl2aXR5V2l0aEZpbGVzIiwic2VuZEZpbGVzVG9Qb3N0QWN0aXZpdHkiLCJzZW5kRmlsZXNUb1Bvc3RBY3Rpdml0eVNhZ2EiLCJnZXRUeXBlIiwibWltZSIsImJpbmQiLCJmaWxlcyIsInBheWxvYWQiLCJhdHRhY2htZW50cyIsIm1hcCIsImNhbGwiLCJuYW1lIiwidGh1bWJuYWlsIiwidXJsIiwiY29udGVudFR5cGUiLCJjb250ZW50VXJsIiwidGh1bWJuYWlsVXJsIiwiY2hhbm5lbERhdGEiLCJhdHRhY2htZW50U2l6ZXMiLCJzaXplIiwidHlwZSIsIlNFTkRfRklMRVMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs2QkFJVUEscUI7Ozs2QkFpQkFDLHVCOzs7NkJBSWVDLDJCOztBQXZCekIsSUFBTUMsT0FBTywyQkFBR0Msd0JBQUtELE9BQUwsQ0FBYUUsSUFBYixDQUFrQkQsdUJBQWxCLENBQUgsQ0FBYjs7QUFFQSxTQUFVSixxQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkNNLFVBQUFBLEtBQTdDLFFBQWtDQyxPQUFsQyxDQUE2Q0QsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTSxrQkFDSiw4QkFBYTtBQUNYRSxZQUFBQSxXQUFXLEVBQUUsR0FBR0MsR0FBSCxDQUFPQyxJQUFQLENBQVlKLEtBQVosRUFBbUIsaUJBQStCO0FBQUEsa0JBQTVCSyxJQUE0QixTQUE1QkEsSUFBNEI7QUFBQSxrQkFBdEJDLFNBQXNCLFNBQXRCQSxTQUFzQjtBQUFBLGtCQUFYQyxHQUFXLFNBQVhBLEdBQVc7QUFBQTtBQUFBO0FBQUE7QUFDN0RDLGdCQUFBQSxXQUFXLEVBQUUsMkJBQUFYLE9BQU8sQ0FBQ1EsSUFBRCxDQUFQLGdDQUFpQiwwQkFBakIsQ0FEZ0Q7QUFFN0RJLGdCQUFBQSxVQUFVLEVBQUVGLEdBRmlEO0FBRzdERixnQkFBQUEsSUFBSSxFQUFKQSxJQUg2RDtBQUk3REssZ0JBQUFBLFlBQVksRUFBRUo7QUFKK0M7QUFLOUQsYUFMWSxDQURGO0FBT1hLLFlBQUFBLFdBQVcsRUFBRTtBQUNYQyxjQUFBQSxlQUFlLEVBQUUsR0FBR1QsR0FBSCxDQUFPQyxJQUFQLENBQVlKLEtBQVosRUFBbUIsaUJBQWNhO0FBQUFBLG9CQUFYQSxJQUFXQSxTQUFYQSxJQUFXQTtBQUFBQTtBQUFBQTtBQUFBQSx1QkFBQUEsSUFBSTtBQUFBLGVBQXJDO0FBRE4sYUFQRjtBQVVYQyxZQUFBQSxJQUFJLEVBQUU7QUFWSyxXQUFiLENBREksQ0FBTjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpQkEsU0FBVW5CLHVCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTSx3QkFBVSxpQkFBdUI7QUFBQSxnQkFBcEJNLE9BQW9CLFNBQXBCQSxPQUFvQjtBQUFBLGdCQUFYYSxJQUFXLFNBQVhBLElBQVc7QUFBQTtBQUFBO0FBQUEsOENBQUFBLElBQUksS0FBS0MscUJBQVQsZ0NBQXVCZCxPQUFPLENBQUNELEtBQVIsQ0FBY2dCLE1BQXJDO0FBQTJDLFdBQTVFLEVBQThFdEIscUJBQTlFLENBQU47O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUUsMkJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLGdDQUFlRCx1QkFBZixDQUFOOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBTRU5EX0ZJTEVTIH0gZnJvbSAnLi4vYWN0aW9ucy9zZW5kRmlsZXMnO1xuaW1wb3J0IG1pbWUgZnJvbSAnLi4vdXRpbHMvbWltZS13cmFwcGVyJztcbmltcG9ydCBwb3N0QWN0aXZpdHkgZnJvbSAnLi4vYWN0aW9ucy9wb3N0QWN0aXZpdHknO1xuaW1wb3J0IHdoaWxlQ29ubmVjdGVkIGZyb20gJy4vZWZmZWN0cy93aGlsZUNvbm5lY3RlZCc7XG5cbmNvbnN0IGdldFR5cGUgPSBtaW1lLmdldFR5cGUuYmluZChtaW1lKTtcblxuZnVuY3Rpb24qIHBvc3RBY3Rpdml0eVdpdGhGaWxlcyh7IHBheWxvYWQ6IHsgZmlsZXMgfSB9KSB7XG4gIHlpZWxkIHB1dChcbiAgICBwb3N0QWN0aXZpdHkoe1xuICAgICAgYXR0YWNobWVudHM6IFtdLm1hcC5jYWxsKGZpbGVzLCAoeyBuYW1lLCB0aHVtYm5haWwsIHVybCB9KSA9PiAoe1xuICAgICAgICBjb250ZW50VHlwZTogZ2V0VHlwZShuYW1lKSB8fCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICAgICAgY29udGVudFVybDogdXJsLFxuICAgICAgICBuYW1lLFxuICAgICAgICB0aHVtYm5haWxVcmw6IHRodW1ibmFpbFxuICAgICAgfSkpLFxuICAgICAgY2hhbm5lbERhdGE6IHtcbiAgICAgICAgYXR0YWNobWVudFNpemVzOiBbXS5tYXAuY2FsbChmaWxlcywgKHsgc2l6ZSB9KSA9PiBzaXplKVxuICAgICAgfSxcbiAgICAgIHR5cGU6ICdtZXNzYWdlJ1xuICAgIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uKiBzZW5kRmlsZXNUb1Bvc3RBY3Rpdml0eSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KCh7IHBheWxvYWQsIHR5cGUgfSkgPT4gdHlwZSA9PT0gU0VORF9GSUxFUyAmJiBwYXlsb2FkLmZpbGVzLmxlbmd0aCwgcG9zdEFjdGl2aXR5V2l0aEZpbGVzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHNlbmRGaWxlc1RvUG9zdEFjdGl2aXR5U2FnYSgpIHtcbiAgeWllbGQgd2hpbGVDb25uZWN0ZWQoc2VuZEZpbGVzVG9Qb3N0QWN0aXZpdHkpO1xufVxuIl19
