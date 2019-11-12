'use strict';

var cov_cej71061i = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/utils/uniqueID.js';
  var hash = 'b8fe5187ae03b53fefd9fb93e37605237d144c0e';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/utils/uniqueID.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 11,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'uniqueID',
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 32
          }
        },
        loc: {
          start: {
            line: 5,
            column: 35
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      '0': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'b8fe5187ae03b53fefd9fb93e37605237d144c0e'
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
exports['default'] = uniqueID;

var _mathRandom = _interopRequireDefault(require('math-random'));

function uniqueID() {
  cov_cej71061i.f[0]++;
  cov_cej71061i.s[0]++;
  return (
    Date.now() +
    (0, _mathRandom['default'])()
      .toString(36)
      .substr(2)
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy91bmlxdWVJRC5qcyJdLCJuYW1lcyI6WyJ1bmlxdWVJRCIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsInN1YnN0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7QUFBQTtBQUNqQyxTQUNFQyxJQUFJLENBQUNDLEdBQUwsS0FDQSw4QkFDR0MsUUFESCxDQUNZLEVBRFosRUFFR0MsTUFGSCxDQUVVLENBRlYsQ0FGRjtBQU1EIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IFtcImVycm9yXCIsIHsgXCJpZ25vcmVcIjogWzIsIDM2XSB9XSAqL1xuXG5pbXBvcnQgcmFuZG9tIGZyb20gJ21hdGgtcmFuZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5pcXVlSUQoKSB7XG4gIHJldHVybiAoXG4gICAgRGF0ZS5ub3coKSArXG4gICAgcmFuZG9tKClcbiAgICAgIC50b1N0cmluZygzNilcbiAgICAgIC5zdWJzdHIoMilcbiAgKTtcbn1cbiJdfQ==
