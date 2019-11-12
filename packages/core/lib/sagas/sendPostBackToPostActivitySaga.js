'use strict';

var cov_hj0nf9xvh = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/sendPostBackToPostActivitySaga.js';
  var hash = 'b698dd22597242a6277c0b266b40d3e2db7e7be7';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/sendPostBackToPostActivitySaga.js',
    statementMap: {
      '0': {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 20,
          column: 4
        }
      },
      '1': {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 109
        }
      },
      '2': {
        start: {
          line: 24,
          column: 41
        },
        end: {
          line: 24,
          column: 81
        }
      },
      '3': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 51
        }
      }
    },
    fnMap: {
      '0': {
        name: 'postActivityWithPostBack',
        decl: {
          start: {
            line: 10,
            column: 10
          },
          end: {
            line: 10,
            column: 34
          }
        },
        loc: {
          start: {
            line: 10,
            column: 59
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 10
      },
      '1': {
        name: 'sendPostBackToPostActivity',
        decl: {
          start: {
            line: 23,
            column: 10
          },
          end: {
            line: 23,
            column: 36
          }
        },
        loc: {
          start: {
            line: 23,
            column: 39
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 23
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 24,
            column: 18
          },
          end: {
            line: 24,
            column: 19
          }
        },
        loc: {
          start: {
            line: 24,
            column: 41
          },
          end: {
            line: 24,
            column: 81
          }
        },
        line: 24
      },
      '3': {
        name: 'sendPostBackToPostActivitySaga',
        decl: {
          start: {
            line: 27,
            column: 25
          },
          end: {
            line: 27,
            column: 55
          }
        },
        loc: {
          start: {
            line: 27,
            column: 58
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 27
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 16,
            column: 12
          },
          end: {
            line: 16,
            column: 57
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 16,
              column: 40
            },
            end: {
              line: 16,
              column: 45
            }
          },
          {
            start: {
              line: 16,
              column: 48
            },
            end: {
              line: 16,
              column: 57
            }
          }
        ],
        line: 16
      },
      '1': {
        loc: {
          start: {
            line: 18,
            column: 13
          },
          end: {
            line: 18,
            column: 58
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 18,
              column: 41
            },
            end: {
              line: 18,
              column: 46
            }
          },
          {
            start: {
              line: 18,
              column: 49
            },
            end: {
              line: 18,
              column: 58
            }
          }
        ],
        line: 18
      },
      '2': {
        loc: {
          start: {
            line: 24,
            column: 41
          },
          end: {
            line: 24,
            column: 81
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 24,
              column: 41
            },
            end: {
              line: 24,
              column: 64
            }
          },
          {
            start: {
              line: 24,
              column: 68
            },
            end: {
              line: 24,
              column: 81
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
      '3': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'b698dd22597242a6277c0b266b40d3e2db7e7be7'
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
exports['default'] = sendPostBackToPostActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _sendPostBack = require('../actions/sendPostBack');

var _postActivity = _interopRequireDefault(require('../actions/postActivity'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(postActivityWithPostBack),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendPostBackToPostActivity),
  _marked3 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendPostBackToPostActivitySaga);

function postActivityWithPostBack(_ref) {
  var value;
  return _regenerator['default'].wrap(function postActivityWithPostBack$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          value = _ref.payload.value;
          cov_hj0nf9xvh.f[0]++;
          cov_hj0nf9xvh.s[0]++;
          _context.next = 5;
          return (0, _effects.put)(
            (0, _postActivity['default'])({
              channelData: {
                postBack: true
              },
              text: typeof value === 'string' ? (cov_hj0nf9xvh.b[0][0]++, value) : (cov_hj0nf9xvh.b[0][1]++, undefined),
              type: 'message',
              value: typeof value !== 'string' ? (cov_hj0nf9xvh.b[1][0]++, value) : (cov_hj0nf9xvh.b[1][1]++, undefined)
            })
          );

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}

function sendPostBackToPostActivity() {
  return _regenerator['default'].wrap(function sendPostBackToPostActivity$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          cov_hj0nf9xvh.f[1]++;
          cov_hj0nf9xvh.s[1]++;
          _context2.next = 4;
          return (0, _effects.takeEvery)(function(_ref2) {
            var payload = _ref2.payload,
              type = _ref2.type;
            cov_hj0nf9xvh.f[2]++;
            cov_hj0nf9xvh.s[2]++;
            return (
              (cov_hj0nf9xvh.b[2][0]++, type === _sendPostBack.SEND_POST_BACK) &&
              (cov_hj0nf9xvh.b[2][1]++, payload.value)
            );
          }, postActivityWithPostBack);

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2);
}

function sendPostBackToPostActivitySaga() {
  return _regenerator['default'].wrap(function sendPostBackToPostActivitySaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          cov_hj0nf9xvh.f[3]++;
          cov_hj0nf9xvh.s[3]++;
          _context3.next = 4;
          return (0, _whileConnected['default'])(sendPostBackToPostActivity);

        case 4:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zZW5kUG9zdEJhY2tUb1Bvc3RBY3Rpdml0eVNhZ2EuanMiXSwibmFtZXMiOlsicG9zdEFjdGl2aXR5V2l0aFBvc3RCYWNrIiwic2VuZFBvc3RCYWNrVG9Qb3N0QWN0aXZpdHkiLCJzZW5kUG9zdEJhY2tUb1Bvc3RBY3Rpdml0eVNhZ2EiLCJ2YWx1ZSIsInBheWxvYWQiLCJjaGFubmVsRGF0YSIsInBvc3RCYWNrIiwidGV4dCIsInVuZGVmaW5lZCIsInR5cGUiLCJTRU5EX1BPU1RfQkFDSyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7NkJBRVVBLHdCOzs7NkJBYUFDLDBCOzs7NkJBSWVDLDhCOztBQWpCekIsU0FBVUYsd0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdERyxVQUFBQSxLQUFoRCxRQUFxQ0MsT0FBckMsQ0FBZ0RELEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU0sa0JBQ0osOEJBQWE7QUFDWEUsWUFBQUEsV0FBVyxFQUFFO0FBQ1hDLGNBQUFBLFFBQVEsRUFBRTtBQURDLGFBREY7QUFJWEMsWUFBQUEsSUFBSSxFQUFFLE9BQU9KLEtBQVAsS0FBaUIsUUFBakIsNkJBQTRCQSxLQUE1Qiw4QkFBb0NLLFNBQXBDLENBSks7QUFLWEMsWUFBQUEsSUFBSSxFQUFFLFNBTEs7QUFNWE4sWUFBQUEsS0FBSyxFQUFFLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsNkJBQTRCQSxLQUE1Qiw4QkFBb0NLLFNBQXBDO0FBTkksV0FBYixDQURJLENBQU47O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYUEsU0FBVVAsMEJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNLHdCQUFVLGlCQUF1QjtBQUFBLGdCQUFwQkcsT0FBb0IsU0FBcEJBLE9BQW9CO0FBQUEsZ0JBQVhLLElBQVcsU0FBWEEsSUFBVztBQUFBO0FBQUE7QUFBQSw2Q0FBQUEsSUFBSSxLQUFLQyw0QkFBVCwrQkFBMkJOLE9BQU8sQ0FBQ0QsS0FBbkM7QUFBd0MsV0FBekUsRUFBMkVILHdCQUEzRSxDQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVFLDhCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTSxnQ0FBZUQsMEJBQWYsQ0FBTjs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgZm9yIHRoZSB0ZXJuYXJ5IG9wZXJhdG9yIG9mIHRleHQgYW5kIHZhbHVlLlxuLyogZXNsaW50IG5vLXVuZGVmaW5lZDogXCJvZmZcIiAqL1xuXG5pbXBvcnQgeyBwdXQsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmltcG9ydCB7IFNFTkRfUE9TVF9CQUNLIH0gZnJvbSAnLi4vYWN0aW9ucy9zZW5kUG9zdEJhY2snO1xuaW1wb3J0IHBvc3RBY3Rpdml0eSBmcm9tICcuLi9hY3Rpb25zL3Bvc3RBY3Rpdml0eSc7XG5pbXBvcnQgd2hpbGVDb25uZWN0ZWQgZnJvbSAnLi9lZmZlY3RzL3doaWxlQ29ubmVjdGVkJztcblxuZnVuY3Rpb24qIHBvc3RBY3Rpdml0eVdpdGhQb3N0QmFjayh7IHBheWxvYWQ6IHsgdmFsdWUgfSB9KSB7XG4gIHlpZWxkIHB1dChcbiAgICBwb3N0QWN0aXZpdHkoe1xuICAgICAgY2hhbm5lbERhdGE6IHtcbiAgICAgICAgcG9zdEJhY2s6IHRydWVcbiAgICAgIH0sXG4gICAgICB0ZXh0OiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiB1bmRlZmluZWQsXG4gICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICB2YWx1ZTogdHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyA/IHZhbHVlIDogdW5kZWZpbmVkXG4gICAgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24qIHNlbmRQb3N0QmFja1RvUG9zdEFjdGl2aXR5KCkge1xuICB5aWVsZCB0YWtlRXZlcnkoKHsgcGF5bG9hZCwgdHlwZSB9KSA9PiB0eXBlID09PSBTRU5EX1BPU1RfQkFDSyAmJiBwYXlsb2FkLnZhbHVlLCBwb3N0QWN0aXZpdHlXaXRoUG9zdEJhY2spO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc2VuZFBvc3RCYWNrVG9Qb3N0QWN0aXZpdHlTYWdhKCkge1xuICB5aWVsZCB3aGlsZUNvbm5lY3RlZChzZW5kUG9zdEJhY2tUb1Bvc3RBY3Rpdml0eSk7XG59XG4iXX0=
