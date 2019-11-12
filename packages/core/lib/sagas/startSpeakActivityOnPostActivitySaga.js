'use strict';

var cov_3yys68hdu = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/startSpeakActivityOnPostActivitySaga.js';
  var hash = '66222ed165af924ae695ee9fef07be3b81266f7e';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/sagas/startSpeakActivityOnPostActivitySaga.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 14,
          column: 4
        }
      },
      '1': {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 103
        }
      },
      '2': {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 41
        }
      },
      '3': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 57
        }
      }
    },
    fnMap: {
      '0': {
        name: 'startSpeakActivityOnPostActivity',
        decl: {
          start: {
            line: 7,
            column: 10
          },
          end: {
            line: 7,
            column: 42
          }
        },
        loc: {
          start: {
            line: 7,
            column: 45
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 7
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        },
        loc: {
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 10,
            column: 103
          }
        },
        line: 10
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        },
        loc: {
          start: {
            line: 11,
            column: 16
          },
          end: {
            line: 13,
            column: 5
          }
        },
        line: 11
      },
      '3': {
        name: 'startSpeakActivityOnPostActivitySaga',
        decl: {
          start: {
            line: 17,
            column: 25
          },
          end: {
            line: 17,
            column: 61
          }
        },
        loc: {
          start: {
            line: 17,
            column: 64
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 10,
            column: 103
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 10,
              column: 6
            },
            end: {
              line: 10,
              column: 36
            }
          },
          {
            start: {
              line: 10,
              column: 40
            },
            end: {
              line: 10,
              column: 64
            }
          },
          {
            start: {
              line: 10,
              column: 68
            },
            end: {
              line: 10,
              column: 103
            }
          }
        ],
        line: 10
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
      '0': [0, 0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '66222ed165af924ae695ee9fef07be3b81266f7e'
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
exports['default'] = startSpeakActivityOnPostActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _postActivity = require('../actions/postActivity');

var _startSpeakingActivity = _interopRequireDefault(require('../actions/startSpeakingActivity'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(startSpeakActivityOnPostActivity),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(startSpeakActivityOnPostActivitySaga);

function startSpeakActivityOnPostActivity() {
  return _regenerator['default'].wrap(function startSpeakActivityOnPostActivity$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          cov_3yys68hdu.f[0]++;
          cov_3yys68hdu.s[0]++;
          _context2.next = 4;
          return (0, _effects.takeEvery)(
            function(_ref) {
              var meta = _ref.meta,
                payload = _ref.payload,
                type = _ref.type;
              cov_3yys68hdu.f[1]++;
              cov_3yys68hdu.s[1]++;
              return (
                (cov_3yys68hdu.b[0][0]++, type === _postActivity.POST_ACTIVITY_PENDING) &&
                (cov_3yys68hdu.b[0][1]++, meta.method === 'speech') &&
                (cov_3yys68hdu.b[0][2]++, payload.activity.type === 'message')
              );
            },
            /*#__PURE__*/
            _regenerator['default'].mark(function _callee() {
              return _regenerator['default'].wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      cov_3yys68hdu.f[2]++;
                      cov_3yys68hdu.s[2]++;
                      _context.next = 4;
                      return (0, _effects.put)((0, _startSpeakingActivity['default'])());

                    case 4:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          );

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked);
}

function startSpeakActivityOnPostActivitySaga() {
  return _regenerator['default'].wrap(function startSpeakActivityOnPostActivitySaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          cov_3yys68hdu.f[3]++;
          cov_3yys68hdu.s[3]++;
          _context3.next = 4;
          return (0, _whileConnected['default'])(startSpeakActivityOnPostActivity);

        case 4:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zdGFydFNwZWFrQWN0aXZpdHlPblBvc3RBY3Rpdml0eVNhZ2EuanMiXSwibmFtZXMiOlsic3RhcnRTcGVha0FjdGl2aXR5T25Qb3N0QWN0aXZpdHkiLCJzdGFydFNwZWFrQWN0aXZpdHlPblBvc3RBY3Rpdml0eVNhZ2EiLCJtZXRhIiwicGF5bG9hZCIsInR5cGUiLCJQT1NUX0FDVElWSVRZX1BFTkRJTkciLCJtZXRob2QiLCJhY3Rpdml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOzs7OzZCQUVVQSxnQzs7OzZCQVVlQyxvQzs7QUFWekIsU0FBVUQsZ0NBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNLHdCQUNKLGdCQUNFO0FBQUEsZ0JBRENFLElBQ0QsUUFEQ0EsSUFDRDtBQUFBLGdCQURPQyxPQUNQLFFBRE9BLE9BQ1A7QUFBQSxnQkFEZ0JDLElBQ2hCLFFBRGdCQSxJQUNoQjtBQUFBO0FBQUE7QUFBQSw2Q0FBQUEsSUFBSSxLQUFLQyxtQ0FBVCwrQkFBa0NILElBQUksQ0FBQ0ksTUFBTCxLQUFnQixRQUFsRCwrQkFBOERILE9BQU8sQ0FBQ0ksUUFBUixDQUFpQkgsSUFBakIsS0FBMEIsU0FBeEY7QUFBaUcsV0FGL0Y7QUFBQTtBQUFBLHVDQUdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSwyQkFBTSxrQkFBSSx3Q0FBSixDQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEksRUFBTjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVZSxTQUFVSCxvQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2IsaUJBQU0sZ0NBQWVELGdDQUFmLENBQU47O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdXQsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmltcG9ydCB7IFBPU1RfQUNUSVZJVFlfUEVORElORyB9IGZyb20gJy4uL2FjdGlvbnMvcG9zdEFjdGl2aXR5JztcbmltcG9ydCBzdGFydFNwZWFraW5nQWN0aXZpdHkgZnJvbSAnLi4vYWN0aW9ucy9zdGFydFNwZWFraW5nQWN0aXZpdHknO1xuaW1wb3J0IHdoaWxlQ29ubmVjdGVkIGZyb20gJy4vZWZmZWN0cy93aGlsZUNvbm5lY3RlZCc7XG5cbmZ1bmN0aW9uKiBzdGFydFNwZWFrQWN0aXZpdHlPblBvc3RBY3Rpdml0eSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFxuICAgICh7IG1ldGEsIHBheWxvYWQsIHR5cGUgfSkgPT5cbiAgICAgIHR5cGUgPT09IFBPU1RfQUNUSVZJVFlfUEVORElORyAmJiBtZXRhLm1ldGhvZCA9PT0gJ3NwZWVjaCcgJiYgcGF5bG9hZC5hY3Rpdml0eS50eXBlID09PSAnbWVzc2FnZScsXG4gICAgZnVuY3Rpb24qKCkge1xuICAgICAgeWllbGQgcHV0KHN0YXJ0U3BlYWtpbmdBY3Rpdml0eSgpKTtcbiAgICB9XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBzdGFydFNwZWFrQWN0aXZpdHlPblBvc3RBY3Rpdml0eVNhZ2EoKSB7XG4gIHlpZWxkIHdoaWxlQ29ubmVjdGVkKHN0YXJ0U3BlYWtBY3Rpdml0eU9uUG9zdEFjdGl2aXR5KTtcbn1cbiJdfQ==
