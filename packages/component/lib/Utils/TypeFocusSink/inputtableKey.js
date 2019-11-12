'use strict';

var cov_2dafm5tibu = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/Utils/TypeFocusSink/inputtableKey.ts';
  var hash = '1e0f228f1ef09191e1d75a4113cda4174596f9f8';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/Utils/TypeFocusSink/inputtableKey.ts',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 23
        },
        end: {
          line: 11,
          column: 1
        }
      },
      '1': {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 54
        }
      }
    },
    fnMap: {
      '0': {
        name: 'inputtableKey',
        decl: {
          start: {
            line: 13,
            column: 24
          },
          end: {
            line: 13,
            column: 37
          }
        },
        loc: {
          start: {
            line: 13,
            column: 43
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 14,
            column: 9
          },
          end: {
            line: 14,
            column: 53
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 14,
              column: 28
            },
            end: {
              line: 14,
              column: 31
            }
          },
          {
            start: {
              line: 14,
              column: 34
            },
            end: {
              line: 14,
              column: 53
            }
          }
        ],
        line: 14
      }
    },
    s: {
      '0': 0,
      '1': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '1e0f228f1ef09191e1d75a4113cda4174596f9f8'
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
exports.default = inputtableKey;
// For auto-focus in some browsers, we synthetically insert keys into the chatbox.
// By default, we insert keys when:
// 1. evt.key.length === 1 (e.g. "1", "A", "=" keys), or
// 2. evt.key is one of the map keys below (e.g. "Add" will insert "+", "Decimal" will insert ".")
var INPUTTABLE_KEY =
  (cov_2dafm5tibu.s[0]++,
  {
    Add: '+',
    // Numpad add key
    Decimal: '.',
    // Numpad decimal key
    Divide: '/',
    // Numpad divide key
    Multiply: '*',
    // Numpad multiply key
    Subtract: '-' // Numpad subtract key
  });

function inputtableKey(key) {
  cov_2dafm5tibu.f[0]++;
  cov_2dafm5tibu.s[1]++;
  return key.length === 1 ? (cov_2dafm5tibu.b[0][0]++, key) : (cov_2dafm5tibu.b[0][1]++, INPUTTABLE_KEY[key]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9VdGlscy9UeXBlRm9jdXNTaW5rL2lucHV0dGFibGVLZXkudHMiXSwibmFtZXMiOlsiSU5QVVRUQUJMRV9LRVkiLCJBZGQiLCJEZWNpbWFsIiwiRGl2aWRlIiwiTXVsdGlwbHkiLCJTdWJ0cmFjdCIsImlucHV0dGFibGVLZXkiLCJrZXkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGNBQWMsMkJBQUc7QUFDckJDLEVBQUFBLEdBQUcsRUFBRSxHQURnQjtBQUNYO0FBQ1ZDLEVBQUFBLE9BQU8sRUFBRSxHQUZZO0FBRVA7QUFDZEMsRUFBQUEsTUFBTSxFQUFFLEdBSGE7QUFHUjtBQUNiQyxFQUFBQSxRQUFRLEVBQUUsR0FKVztBQUlOO0FBQ2ZDLEVBQUFBLFFBQVEsRUFBRSxHQUxXLENBS1A7O0FBTE8sQ0FBSCxDQUFwQjs7QUFRZSxTQUFTQyxhQUFULENBQXVCQyxHQUF2QixFQUE0QjtBQUFBO0FBQUE7QUFDekMsU0FBT0EsR0FBRyxDQUFDQyxNQUFKLEtBQWUsQ0FBZiw4QkFBbUJELEdBQW5CLCtCQUF5QlAsY0FBYyxDQUFDTyxHQUFELENBQXZDLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvciBhdXRvLWZvY3VzIGluIHNvbWUgYnJvd3NlcnMsIHdlIHN5bnRoZXRpY2FsbHkgaW5zZXJ0IGtleXMgaW50byB0aGUgY2hhdGJveC5cbi8vIEJ5IGRlZmF1bHQsIHdlIGluc2VydCBrZXlzIHdoZW46XG4vLyAxLiBldnQua2V5Lmxlbmd0aCA9PT0gMSAoZS5nLiBcIjFcIiwgXCJBXCIsIFwiPVwiIGtleXMpLCBvclxuLy8gMi4gZXZ0LmtleSBpcyBvbmUgb2YgdGhlIG1hcCBrZXlzIGJlbG93IChlLmcuIFwiQWRkXCIgd2lsbCBpbnNlcnQgXCIrXCIsIFwiRGVjaW1hbFwiIHdpbGwgaW5zZXJ0IFwiLlwiKVxuY29uc3QgSU5QVVRUQUJMRV9LRVkgPSB7XG4gIEFkZDogJysnLCAvLyBOdW1wYWQgYWRkIGtleVxuICBEZWNpbWFsOiAnLicsIC8vIE51bXBhZCBkZWNpbWFsIGtleVxuICBEaXZpZGU6ICcvJywgLy8gTnVtcGFkIGRpdmlkZSBrZXlcbiAgTXVsdGlwbHk6ICcqJywgLy8gTnVtcGFkIG11bHRpcGx5IGtleVxuICBTdWJ0cmFjdDogJy0nIC8vIE51bXBhZCBzdWJ0cmFjdCBrZXlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlucHV0dGFibGVLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkubGVuZ3RoID09PSAxID8ga2V5IDogSU5QVVRUQUJMRV9LRVlba2V5XTtcbn1cbiJdfQ==
