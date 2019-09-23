'use strict';

var cov_1oxjc0o4pd = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/sagas/markAllAsSpokenOnStopSpeakActivitySaga.js';
  var hash = '49c6acaed01b28d3a6eaeed08a8decd752e41fcf';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/sagas/markAllAsSpokenOnStopSpeakActivitySaga.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 29
        },
        end: {
          line: 9,
          column: 73
        }
      },
      '1': {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 13,
          column: 3
        }
      },
      '2': {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 54
        }
      },
      '3': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 59
        }
      }
    },
    fnMap: {
      '0': {
        name: 'markAllAsSpoken',
        decl: {
          start: {
            line: 8,
            column: 10
          },
          end: {
            line: 8,
            column: 25
          }
        },
        loc: {
          start: {
            line: 8,
            column: 28
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 8
      },
      '1': {
        name: 'markAllAsSpokenOnStopSpeakActivitySaga',
        decl: {
          start: {
            line: 17,
            column: 25
          },
          end: {
            line: 17,
            column: 63
          }
        },
        loc: {
          start: {
            line: 17,
            column: 66
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '49c6acaed01b28d3a6eaeed08a8decd752e41fcf'
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
exports['default'] = markAllAsSpokenOnStopSpeakActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _activities = require('../selectors/activities');

var _stopSpeakingActivity = require('../actions/stopSpeakingActivity');

var _markActivity = _interopRequireDefault(require('../actions/markActivity'));

var _speakingActivity = _interopRequireDefault(require('../definitions/speakingActivity'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(markAllAsSpoken),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(markAllAsSpokenOnStopSpeakActivitySaga);

function markAllAsSpoken() {
  var speakingActivities, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, activity;

  return _regenerator['default'].wrap(
    function markAllAsSpoken$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            cov_1oxjc0o4pd.f[0]++;
            cov_1oxjc0o4pd.s[0]++;
            _context.next = 4;
            return (0, _effects.select)((0, _activities.of)(_speakingActivity['default']));

          case 4:
            speakingActivities = _context.sent;
            cov_1oxjc0o4pd.s[1]++;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 9;
            _iterator = speakingActivities[Symbol.iterator]();

          case 11:
            if ((_iteratorNormalCompletion = (_step = _iterator.next()).done)) {
              _context.next = 19;
              break;
            }

            activity = _step.value;
            cov_1oxjc0o4pd.s[2]++;
            _context.next = 16;
            return (0, _effects.put)((0, _markActivity['default'])(activity, 'speak', false));

          case 16:
            _iteratorNormalCompletion = true;
            _context.next = 11;
            break;

          case 19:
            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context['catch'](9);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 25:
            _context.prev = 25;
            _context.prev = 26;

            if (!_iteratorNormalCompletion && _iterator['return'] != null) {
              _iterator['return']();
            }

          case 28:
            _context.prev = 28;

            if (!_didIteratorError) {
              _context.next = 31;
              break;
            }

            throw _iteratorError;

          case 31:
            return _context.finish(28);

          case 32:
            return _context.finish(25);

          case 33:
          case 'end':
            return _context.stop();
        }
      }
    },
    _marked,
    null,
    [[9, 21, 25, 33], [26, , 28, 32]]
  );
} // TODO: [P4] We should turn this into a reducer instead

function markAllAsSpokenOnStopSpeakActivitySaga() {
  return _regenerator['default'].wrap(function markAllAsSpokenOnStopSpeakActivitySaga$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          cov_1oxjc0o4pd.f[1]++;
          cov_1oxjc0o4pd.s[3]++;
          _context2.next = 4;
          return (0, _effects.takeEvery)(_stopSpeakingActivity.STOP_SPEAKING_ACTIVITY, markAllAsSpoken);

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9tYXJrQWxsQXNTcG9rZW5PblN0b3BTcGVha0FjdGl2aXR5U2FnYS5qcyJdLCJuYW1lcyI6WyJtYXJrQWxsQXNTcG9rZW4iLCJtYXJrQWxsQXNTcG9rZW5PblN0b3BTcGVha0FjdGl2aXR5U2FnYSIsInNwZWFraW5nQWN0aXZpdHkiLCJzcGVha2luZ0FjdGl2aXRpZXMiLCJhY3Rpdml0eSIsIlNUT1BfU1BFQUtJTkdfQUNUSVZJVFkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7NkJBRVVBLGU7Ozs2QkFTZUMsc0M7O0FBVHpCLFNBQVVELGVBQVY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM2QixpQkFBTSxxQkFBTyxvQkFBYUUsNEJBQWIsQ0FBUCxDQUFOOztBQUQ3QjtBQUNRQyxVQUFBQSxrQkFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFHeUJBLGtCQUh6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdhQyxVQUFBQSxRQUhiO0FBQUE7QUFBQTtBQUlJLGlCQUFNLGtCQUFJLDhCQUFhQSxRQUFiLEVBQXVCLE9BQXZCLEVBQWdDLEtBQWhDLENBQUosQ0FBTjs7QUFKSjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FRQTs7O0FBQ2UsU0FBVUgsc0NBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNLHdCQUFVSSw0Q0FBVixFQUFrQ0wsZUFBbEMsQ0FBTjs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1dCwgc2VsZWN0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBvZiBhcyBhY3Rpdml0aWVzT2YgfSBmcm9tICcuLi9zZWxlY3RvcnMvYWN0aXZpdGllcyc7XG5pbXBvcnQgeyBTVE9QX1NQRUFLSU5HX0FDVElWSVRZIH0gZnJvbSAnLi4vYWN0aW9ucy9zdG9wU3BlYWtpbmdBY3Rpdml0eSc7XG5pbXBvcnQgbWFya0FjdGl2aXR5IGZyb20gJy4uL2FjdGlvbnMvbWFya0FjdGl2aXR5JztcbmltcG9ydCBzcGVha2luZ0FjdGl2aXR5IGZyb20gJy4uL2RlZmluaXRpb25zL3NwZWFraW5nQWN0aXZpdHknO1xuXG5mdW5jdGlvbiogbWFya0FsbEFzU3Bva2VuKCkge1xuICBjb25zdCBzcGVha2luZ0FjdGl2aXRpZXMgPSB5aWVsZCBzZWxlY3QoYWN0aXZpdGllc09mKHNwZWFraW5nQWN0aXZpdHkpKTtcblxuICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHNwZWFraW5nQWN0aXZpdGllcykge1xuICAgIHlpZWxkIHB1dChtYXJrQWN0aXZpdHkoYWN0aXZpdHksICdzcGVhaycsIGZhbHNlKSk7XG4gIH1cbn1cblxuLy8gVE9ETzogW1A0XSBXZSBzaG91bGQgdHVybiB0aGlzIGludG8gYSByZWR1Y2VyIGluc3RlYWRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBtYXJrQWxsQXNTcG9rZW5PblN0b3BTcGVha0FjdGl2aXR5U2FnYSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFNUT1BfU1BFQUtJTkdfQUNUSVZJVFksIG1hcmtBbGxBc1Nwb2tlbik7XG59XG4iXX0=
