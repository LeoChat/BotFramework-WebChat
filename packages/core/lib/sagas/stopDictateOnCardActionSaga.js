'use strict';

var cov_6xragczwr = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/sagas/stopDictateOnCardActionSaga.js';
  var hash = '804a414edf521f974855034648e47092450f1545';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/sagas/stopDictateOnCardActionSaga.js',
    statementMap: {
      '0': {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 19,
          column: 4
        }
      },
      '1': {
        start: {
          line: 15,
          column: 27
        },
        end: {
          line: 15,
          column: 96
        }
      },
      '2': {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 31
        }
      },
      '3': {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 48
        }
      }
    },
    fnMap: {
      '0': {
        name: 'stopDictateOnCardAction',
        decl: {
          start: {
            line: 7,
            column: 10
          },
          end: {
            line: 7,
            column: 33
          }
        },
        loc: {
          start: {
            line: 7,
            column: 36
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 7
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        loc: {
          start: {
            line: 15,
            column: 27
          },
          end: {
            line: 15,
            column: 96
          }
        },
        line: 15
      },
      '2': {
        name: 'putStopDictate',
        decl: {
          start: {
            line: 16,
            column: 14
          },
          end: {
            line: 16,
            column: 28
          }
        },
        loc: {
          start: {
            line: 16,
            column: 31
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 16
      },
      '3': {
        name: 'stopDictateOnCardActionSaga',
        decl: {
          start: {
            line: 22,
            column: 25
          },
          end: {
            line: 22,
            column: 52
          }
        },
        loc: {
          start: {
            line: 22,
            column: 55
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 22
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 15,
            column: 27
          },
          end: {
            line: 15,
            column: 96
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 15,
              column: 27
            },
            end: {
              line: 15,
              column: 57
            }
          },
          {
            start: {
              line: 15,
              column: 61
            },
            end: {
              line: 15,
              column: 96
            }
          }
        ],
        line: 15
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
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '804a414edf521f974855034648e47092450f1545'
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
exports['default'] = stopDictateOnCardActionSaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _postActivity = require('../actions/postActivity');

var _stopDictate = _interopRequireDefault(require('../actions/stopDictate'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(stopDictateOnCardAction),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(stopDictateOnCardActionSaga);

function stopDictateOnCardAction() {
  return _regenerator['default'].wrap(function stopDictateOnCardAction$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          cov_6xragczwr.f[0]++;
          cov_6xragczwr.s[0]++;
          _context2.next = 4;
          return (0, _effects.takeEvery)(
            // Currently, there are no actions that are related to card input
            // For now, we are using POST_ACTIVITY of a "message" activity
            // In the future, if we have an action for card input, we should use that instead
            function(_ref) {
              var payload = _ref.payload,
                type = _ref.type;
              cov_6xragczwr.f[1]++;
              cov_6xragczwr.s[1]++;
              return (
                (cov_6xragczwr.b[0][0]++, type === _postActivity.POST_ACTIVITY_PENDING) &&
                (cov_6xragczwr.b[0][1]++, payload.activity.type === 'message')
              );
            },
            /*#__PURE__*/
            _regenerator['default'].mark(function putStopDictate() {
              return _regenerator['default'].wrap(function putStopDictate$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      cov_6xragczwr.f[2]++;
                      cov_6xragczwr.s[2]++;
                      _context.next = 4;
                      return (0, _effects.put)((0, _stopDictate['default'])());

                    case 4:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, putStopDictate);
            })
          );

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked);
}

function stopDictateOnCardActionSaga() {
  return _regenerator['default'].wrap(function stopDictateOnCardActionSaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          cov_6xragczwr.f[3]++;
          cov_6xragczwr.s[3]++;
          _context3.next = 4;
          return (0, _whileConnected['default'])(stopDictateOnCardAction);

        case 4:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zdG9wRGljdGF0ZU9uQ2FyZEFjdGlvblNhZ2EuanMiXSwibmFtZXMiOlsic3RvcERpY3RhdGVPbkNhcmRBY3Rpb24iLCJzdG9wRGljdGF0ZU9uQ2FyZEFjdGlvblNhZ2EiLCJwYXlsb2FkIiwidHlwZSIsIlBPU1RfQUNUSVZJVFlfUEVORElORyIsImFjdGl2aXR5IiwicHV0U3RvcERpY3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs2QkFFVUEsdUI7Ozs2QkFlZUMsMkI7O0FBZnpCLFNBQVVELHVCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJRSxpQkFBTSx5QkFDSjtBQUNBO0FBQ0E7QUFDQSwwQkFBdUI7QUFBQSxnQkFBcEJFLE9BQW9CLFFBQXBCQSxPQUFvQjtBQUFBLGdCQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFBQTtBQUFBO0FBQUEsNkNBQUFBLElBQUksS0FBS0MsbUNBQVQsK0JBQWtDRixPQUFPLENBQUNHLFFBQVIsQ0FBaUJGLElBQWpCLEtBQTBCLFNBQTVEO0FBQXFFLFdBSnhGO0FBQUE7QUFBQSx1Q0FLSixTQUFVRyxjQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSwyQkFBTSxrQkFBSSw4QkFBSixDQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFVQSxjQUFWO0FBQUEsV0FMSSxFQUFOOztBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWVlLFNBQVVMLDJCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTSxnQ0FBZUQsdUJBQWYsQ0FBTjs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHsgUE9TVF9BQ1RJVklUWV9QRU5ESU5HIH0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0QWN0aXZpdHknO1xuaW1wb3J0IHN0b3BEaWN0YXRlIGZyb20gJy4uL2FjdGlvbnMvc3RvcERpY3RhdGUnO1xuaW1wb3J0IHdoaWxlQ29ubmVjdGVkIGZyb20gJy4vZWZmZWN0cy93aGlsZUNvbm5lY3RlZCc7XG5cbmZ1bmN0aW9uKiBzdG9wRGljdGF0ZU9uQ2FyZEFjdGlvbigpIHtcbiAgLy8gVE9ETzogW1AyXSBXZSBzaG91bGQgc3RvcCBzcGVlY2ggaW5wdXQgd2hlbiB0aGUgdXNlciBjbGljayBvbiBhbnl0aGluZyBvbiBhIGNhcmQsIGluY2x1ZGluZyBvcGVuIFVSTCB3aGljaCBkb2Vzbid0IGdlbmVyYXRlIHBvc3RBY3Rpdml0eVxuICAvLyAgICAgICBUaGlzIGZ1bmN0aW9uYWxpdHkgd2FzIG5vdCBpbXBsZW1lbnRlZCBpbiB2M1xuXG4gIHlpZWxkIHRha2VFdmVyeShcbiAgICAvLyBDdXJyZW50bHksIHRoZXJlIGFyZSBubyBhY3Rpb25zIHRoYXQgYXJlIHJlbGF0ZWQgdG8gY2FyZCBpbnB1dFxuICAgIC8vIEZvciBub3csIHdlIGFyZSB1c2luZyBQT1NUX0FDVElWSVRZIG9mIGEgXCJtZXNzYWdlXCIgYWN0aXZpdHlcbiAgICAvLyBJbiB0aGUgZnV0dXJlLCBpZiB3ZSBoYXZlIGFuIGFjdGlvbiBmb3IgY2FyZCBpbnB1dCwgd2Ugc2hvdWxkIHVzZSB0aGF0IGluc3RlYWRcbiAgICAoeyBwYXlsb2FkLCB0eXBlIH0pID0+IHR5cGUgPT09IFBPU1RfQUNUSVZJVFlfUEVORElORyAmJiBwYXlsb2FkLmFjdGl2aXR5LnR5cGUgPT09ICdtZXNzYWdlJyxcbiAgICBmdW5jdGlvbiogcHV0U3RvcERpY3RhdGUoKSB7XG4gICAgICB5aWVsZCBwdXQoc3RvcERpY3RhdGUoKSk7XG4gICAgfVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc3RvcERpY3RhdGVPbkNhcmRBY3Rpb25TYWdhKCkge1xuICB5aWVsZCB3aGlsZUNvbm5lY3RlZChzdG9wRGljdGF0ZU9uQ2FyZEFjdGlvbik7XG59XG4iXX0=
