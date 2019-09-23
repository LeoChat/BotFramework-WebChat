'use strict';

var cov_1iybbs9s0j = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/sendFiles.js';
  var hash = '13e904298281769f76ce75d4cead4ce2ecdf1211';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/actions/sendFiles.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 19
        },
        end: {
          line: 1,
          column: 40
        }
      },
      '1': {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 7,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'sendFiles',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 33
          }
        },
        loc: {
          start: {
            line: 3,
            column: 41
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '13e904298281769f76ce75d4cead4ce2ecdf1211'
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
exports['default'] = sendFiles;
exports.SEND_FILES = void 0;
var SEND_FILES = (cov_1iybbs9s0j.s[0]++, 'WEB_CHAT/SEND_FILES');
exports.SEND_FILES = SEND_FILES;

function sendFiles(files) {
  cov_1iybbs9s0j.f[0]++;
  cov_1iybbs9s0j.s[1]++;
  return {
    type: SEND_FILES,
    payload: {
      files: files
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NlbmRGaWxlcy5qcyJdLCJuYW1lcyI6WyJTRU5EX0ZJTEVTIiwic2VuZEZpbGVzIiwiZmlsZXMiLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxVQUFVLDJCQUFHLHFCQUFILENBQWhCOzs7QUFFZSxTQUFTQyxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFBO0FBQUE7QUFDdkMsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUVILFVBREQ7QUFFTEksSUFBQUEsT0FBTyxFQUFFO0FBQUVGLE1BQUFBLEtBQUssRUFBTEE7QUFBRjtBQUZKLEdBQVA7QUFJRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNFTkRfRklMRVMgPSAnV0VCX0NIQVQvU0VORF9GSUxFUyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbmRGaWxlcyhmaWxlcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFTkRfRklMRVMsXG4gICAgcGF5bG9hZDogeyBmaWxlcyB9XG4gIH07XG59XG5cbmV4cG9ydCB7IFNFTkRfRklMRVMgfTtcbiJdfQ==
