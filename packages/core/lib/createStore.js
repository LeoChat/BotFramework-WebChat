'use strict';

var cov_2n1mj1mtb3 = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/createStore.ts';
  var hash = '7c00d91d1ba9556bb2149ea7258fe0edb34dfd43';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/createStore.ts',
    statementMap: {
      '0': {
        start: {
          line: 11,
          column: 25
        },
        end: {
          line: 19,
          column: 4
        }
      },
      '1': {
        start: {
          line: 13,
          column: 20
        },
        end: {
          line: 13,
          column: 24
        }
      },
      '2': {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 25
        }
      },
      '3': {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 54
        }
      },
      '4': {
        start: {
          line: 21,
          column: 16
        },
        end: {
          line: 21,
          column: 105
        }
      },
      '5': {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 28
        }
      },
      '6': {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 15
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createWebChatStore',
        decl: {
          start: {
            line: 10,
            column: 24
          },
          end: {
            line: 10,
            column: 42
          }
        },
        loc: {
          start: {
            line: 10,
            column: 73
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 10
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 12,
            column: 13
          },
          end: {
            line: 12,
            column: 14
          }
        },
        loc: {
          start: {
            line: 12,
            column: 26
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 12
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 21,
            column: 37
          },
          end: {
            line: 21,
            column: 55
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 21,
              column: 37
            },
            end: {
              line: 21,
              column: 49
            }
          },
          {
            start: {
              line: 21,
              column: 53
            },
            end: {
              line: 21,
              column: 55
            }
          }
        ],
        line: 21
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
      '1': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '7c00d91d1ba9556bb2149ea7258fe0edb34dfd43'
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
exports['default'] = createWebChatStore;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _redux = require('redux');

var _reduxSaga = _interopRequireDefault(require('redux-saga'));

var _reducer = _interopRequireDefault(require('./reducer'));

var _sagas = _interopRequireDefault(require('./sagas'));

function createWebChatStore(initialState) {
  cov_2n1mj1mtb3.f[0]++;
  var sagaMiddleware =
    (cov_2n1mj1mtb3.s[0]++,
    (0, _reduxSaga['default'])({
      onError: function onError() {
        cov_2n1mj1mtb3.f[1]++;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var _ref = (cov_2n1mj1mtb3.s[1]++, args),
          _ref2 = (0, _slicedToArray2['default'])(_ref, 1),
          err = _ref2[0];

        cov_2n1mj1mtb3.s[2]++;
        console.error(err);
        cov_2n1mj1mtb3.s[3]++;
        store.dispatch({
          type: 'WEB_CHAT/SAGA_ERROR'
        });
      }
    }));

  for (var _len = arguments.length, middlewares = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    middlewares[_key - 1] = arguments[_key];
  }

  var store =
    (cov_2n1mj1mtb3.s[4]++,
    (0, _redux.createStore)(
      _reducer['default'],
      (cov_2n1mj1mtb3.b[0][0]++, initialState) || (cov_2n1mj1mtb3.b[0][1]++, {}),
      _redux.applyMiddleware.apply(void 0, middlewares.concat([sagaMiddleware]))
    ));
  cov_2n1mj1mtb3.s[5]++;
  sagaMiddleware.run(_sagas['default']);
  cov_2n1mj1mtb3.s[6]++;
  return store;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVTdG9yZS50cyJdLCJuYW1lcyI6WyJjcmVhdGVXZWJDaGF0U3RvcmUiLCJpbml0aWFsU3RhdGUiLCJzYWdhTWlkZGxld2FyZSIsIm9uRXJyb3IiLCJhcmdzIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic3RvcmUiLCJkaXNwYXRjaCIsInR5cGUiLCJtaWRkbGV3YXJlcyIsInJlZHVjZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJydW4iLCJzYWdhcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFZSxTQUFTQSxrQkFBVCxDQUE0QkMsWUFBNUIsRUFBMEQ7QUFBQTtBQUN2RSxNQUFNQyxjQUFjLDJCQUFHLDJCQUFxQjtBQUMxQ0MsSUFBQUEsT0FBTyxFQUFFLG1CQUFhO0FBQUE7O0FBQUEseUNBQVRDLElBQVM7QUFBVEEsUUFBQUEsSUFBUztBQUFBOztBQUFBLHlDQUNOQSxJQURNO0FBQUE7QUFBQSxVQUNiQyxHQURhOztBQUFBO0FBR3BCQyxNQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUhvQjtBQUtwQkcsTUFBQUEsS0FBSyxDQUFDQyxRQUFOLENBQWU7QUFBRUMsUUFBQUEsSUFBSSxFQUFFO0FBQVIsT0FBZjtBQUNEO0FBUHlDLEdBQXJCLENBQUgsQ0FBcEI7O0FBRHVFLG9DQUFiQyxXQUFhO0FBQWJBLElBQUFBLFdBQWE7QUFBQTs7QUFXdkUsTUFBTUgsS0FBSywyQkFBRyx3QkFBWUksbUJBQVosRUFBcUIsMkJBQUFYLFlBQVksZ0NBQUksRUFBSixDQUFqQyxFQUF5Q1kscUNBQW1CRixXQUFuQixTQUFnQ1QsY0FBaEMsR0FBekMsQ0FBSCxDQUFYO0FBWHVFO0FBYXZFQSxFQUFBQSxjQUFjLENBQUNZLEdBQWYsQ0FBbUJDLGlCQUFuQjtBQWJ1RTtBQWV2RSxTQUFPUCxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIGZvciB0aGUgcmFjaW5nIGJldHdlZW4gc2FnYU1pZGRsZXdhcmUgYW5kIHN0b3JlXG4vKiBlc2xpbnQgbm8tdXNlLWJlZm9yZS1kZWZpbmU6IFwib2ZmXCIgKi9cblxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCBzYWdhcyBmcm9tICcuL3NhZ2FzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlV2ViQ2hhdFN0b3JlKGluaXRpYWxTdGF0ZSwgLi4ubWlkZGxld2FyZXMpIHtcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSh7XG4gICAgb25FcnJvcjogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IFtlcnJdID0gYXJncztcblxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdXRUJfQ0hBVC9TQUdBX0VSUk9SJyB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlIHx8IHt9LCBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMsIHNhZ2FNaWRkbGV3YXJlKSk7XG5cbiAgc2FnYU1pZGRsZXdhcmUucnVuKHNhZ2FzKTtcblxuICByZXR1cm4gc3RvcmU7XG59XG4iXX0=
