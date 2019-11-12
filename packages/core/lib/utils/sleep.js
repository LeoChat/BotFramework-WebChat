'use strict';

var cov_zllyfbpve = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/utils/sleep.js';
  var hash = '82951274d88be443a405b169cb36baca903aa87c';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/utils/sleep.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 2,
          column: 63
        }
      },
      '1': {
        start: {
          line: 2,
          column: 32
        },
        end: {
          line: 2,
          column: 61
        }
      }
    },
    fnMap: {
      '0': {
        name: 'sleep',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 29
          }
        },
        loc: {
          start: {
            line: 1,
            column: 40
          },
          end: {
            line: 3,
            column: 1
          }
        },
        line: 1
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 2,
            column: 21
          },
          end: {
            line: 2,
            column: 22
          }
        },
        loc: {
          start: {
            line: 2,
            column: 32
          },
          end: {
            line: 2,
            column: 61
          }
        },
        line: 2
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '82951274d88be443a405b169cb36baca903aa87c'
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
exports['default'] = sleep;

function sleep(interval) {
  cov_zllyfbpve.f[0]++;
  cov_zllyfbpve.s[0]++;
  return new Promise(function(resolve) {
    cov_zllyfbpve.f[1]++;
    cov_zllyfbpve.s[1]++;
    return setTimeout(resolve, interval);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zbGVlcC5qcyJdLCJuYW1lcyI6WyJzbGVlcCIsImludGVydmFsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxLQUFULENBQWVDLFFBQWYsRUFBeUI7QUFBQTtBQUFBO0FBQ3RDLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUFDLE9BQU8sRUFBSTtBQUFBO0FBQUE7QUFBQSxXQUFBQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsUUFBVixDQUFWO0FBQTZCLEdBQXBELENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsZWVwKGludGVydmFsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgaW50ZXJ2YWwpKTtcbn1cbiJdfQ==
