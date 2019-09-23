'use strict';

var cov_w4x3vrme0 = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/sagas/detectSlowConnectionSaga.js';
  var hash = '1a5fbf7b5acc85ffbbadb1d3737af2d40fb56ca6';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/sagas/detectSlowConnectionSaga.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 30
        },
        end: {
          line: 8,
          column: 35
        }
      },
      '1': {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 23,
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
          column: 53
        }
      },
      '3': {
        start: {
          line: 14,
          column: 29
        },
        end: {
          line: 18,
          column: 6
        }
      },
      '4': {
        start: {
          line: 17,
          column: 23
        },
        end: {
          line: 17,
          column: 51
        }
      },
      '5': {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 22,
          column: 5
        }
      },
      '6': {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 49
        }
      }
    },
    fnMap: {
      '0': {
        name: 'detectSlowConnectionSaga',
        decl: {
          start: {
            line: 10,
            column: 25
          },
          end: {
            line: 10,
            column: 49
          }
        },
        loc: {
          start: {
            line: 10,
            column: 52
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 10
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 17,
            column: 17
          },
          end: {
            line: 17,
            column: 18
          }
        },
        loc: {
          start: {
            line: 17,
            column: 23
          },
          end: {
            line: 17,
            column: 51
          }
        },
        line: 17
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 20,
              column: 4
            },
            end: {
              line: 22,
              column: 5
            }
          },
          {
            start: {
              line: 20,
              column: 4
            },
            end: {
              line: 22,
              column: 5
            }
          }
        ],
        line: 20
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
    hash: '1a5fbf7b5acc85ffbbadb1d3737af2d40fb56ca6'
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
exports['default'] = detectSlowConnectionSaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _connect = require('../actions/connect');

var _reconnect = require('../actions/reconnect');

var _sleep = _interopRequireDefault(require('../utils/sleep'));

var _marked =
  /*#__PURE__*/
  _regenerator['default'].mark(detectSlowConnectionSaga);

var SLOW_CONNECTION_AFTER = (cov_w4x3vrme0.s[0]++, 15000);

function detectSlowConnectionSaga() {
  var connectivityRace;
  return _regenerator['default'].wrap(function detectSlowConnectionSaga$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          cov_w4x3vrme0.f[0]++;
          cov_w4x3vrme0.s[1]++;

        case 2:
          cov_w4x3vrme0.s[2]++;
          _context.next = 5;
          return (0, _effects.take)([_connect.CONNECT_PENDING, _reconnect.RECONNECT_PENDING]);

        case 5:
          cov_w4x3vrme0.s[3]++;
          _context.next = 8;
          return (0, _effects.race)({
            fulfilled: (0, _effects.take)(_connect.CONNECT_FULFILLED),
            rejected: (0, _effects.take)(_connect.CONNECT_REJECTED),
            slow: (0, _effects.call)(function() {
              cov_w4x3vrme0.f[1]++;
              cov_w4x3vrme0.s[4]++;
              return (0, _sleep['default'])(SLOW_CONNECTION_AFTER);
            })
          });

        case 8:
          connectivityRace = _context.sent;
          cov_w4x3vrme0.s[5]++;

          if (!('slow' in connectivityRace)) {
            _context.next = 17;
            break;
          }

          cov_w4x3vrme0.b[0][0]++;
          cov_w4x3vrme0.s[6]++;
          _context.next = 15;
          return (0, _effects.put)({
            type: _connect.CONNECT_STILL_PENDING
          });

        case 15:
          _context.next = 18;
          break;

        case 17:
          cov_w4x3vrme0.b[0][1]++;

        case 18:
          _context.next = 2;
          break;

        case 20:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9kZXRlY3RTbG93Q29ubmVjdGlvblNhZ2EuanMiXSwibmFtZXMiOlsiZGV0ZWN0U2xvd0Nvbm5lY3Rpb25TYWdhIiwiU0xPV19DT05ORUNUSU9OX0FGVEVSIiwiQ09OTkVDVF9QRU5ESU5HIiwiUkVDT05ORUNUX1BFTkRJTkciLCJmdWxmaWxsZWQiLCJDT05ORUNUX0ZVTEZJTExFRCIsInJlamVjdGVkIiwiQ09OTkVDVF9SRUpFQ1RFRCIsInNsb3ciLCJjb25uZWN0aXZpdHlSYWNlIiwidHlwZSIsIkNPTk5FQ1RfU1RJTExfUEVORElORyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs2QkFJeUJBLHdCOztBQUZ6QixJQUFNQyxxQkFBcUIsMEJBQUcsS0FBSCxDQUEzQjs7QUFFZSxTQUFVRCx3QkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUVYLGlCQUFNLG1CQUFLLENBQUNFLHdCQUFELEVBQWtCQyw0QkFBbEIsQ0FBTCxDQUFOOztBQUZXO0FBQUE7QUFBQTtBQUljLGlCQUFNLG1CQUFLO0FBQ2xDQyxZQUFBQSxTQUFTLEVBQUUsbUJBQUtDLDBCQUFMLENBRHVCO0FBRWxDQyxZQUFBQSxRQUFRLEVBQUUsbUJBQUtDLHlCQUFMLENBRndCO0FBR2xDQyxZQUFBQSxJQUFJLEVBQUUsbUJBQUssWUFBTTtBQUFBO0FBQUE7QUFBQSw0Q0FBTVAscUJBQU47QUFBNEIsYUFBdkM7QUFINEIsV0FBTCxDQUFOOztBQUpkO0FBSUxRLFVBQUFBLGdCQUpLO0FBQUE7O0FBQUEsZ0JBVVAsVUFBVUEsZ0JBVkg7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV1QsaUJBQU0sa0JBQUk7QUFBRUMsWUFBQUEsSUFBSSxFQUFFQztBQUFSLFdBQUosQ0FBTjs7QUFYUztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYWxsLCBwdXQsIHJhY2UsIHRha2UgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBDT05ORUNUX0ZVTEZJTExFRCwgQ09OTkVDVF9QRU5ESU5HLCBDT05ORUNUX1JFSkVDVEVELCBDT05ORUNUX1NUSUxMX1BFTkRJTkcgfSBmcm9tICcuLi9hY3Rpb25zL2Nvbm5lY3QnO1xuXG5pbXBvcnQgeyBSRUNPTk5FQ1RfUEVORElORyB9IGZyb20gJy4uL2FjdGlvbnMvcmVjb25uZWN0JztcbmltcG9ydCBzbGVlcCBmcm9tICcuLi91dGlscy9zbGVlcCc7XG5cbmNvbnN0IFNMT1dfQ09OTkVDVElPTl9BRlRFUiA9IDE1MDAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogZGV0ZWN0U2xvd0Nvbm5lY3Rpb25TYWdhKCkge1xuICBmb3IgKDs7KSB7XG4gICAgeWllbGQgdGFrZShbQ09OTkVDVF9QRU5ESU5HLCBSRUNPTk5FQ1RfUEVORElOR10pO1xuXG4gICAgY29uc3QgY29ubmVjdGl2aXR5UmFjZSA9IHlpZWxkIHJhY2Uoe1xuICAgICAgZnVsZmlsbGVkOiB0YWtlKENPTk5FQ1RfRlVMRklMTEVEKSxcbiAgICAgIHJlamVjdGVkOiB0YWtlKENPTk5FQ1RfUkVKRUNURUQpLFxuICAgICAgc2xvdzogY2FsbCgoKSA9PiBzbGVlcChTTE9XX0NPTk5FQ1RJT05fQUZURVIpKVxuICAgIH0pO1xuXG4gICAgaWYgKCdzbG93JyBpbiBjb25uZWN0aXZpdHlSYWNlKSB7XG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBDT05ORUNUX1NUSUxMX1BFTkRJTkcgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=
