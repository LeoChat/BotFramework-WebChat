'use strict';

var cov_agt14w64z = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Utils/mapMap.js';
  var hash = '5511820863d33e54e18db0114e3c04b93f4090a2';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Utils/mapMap.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 6,
          column: 9
        }
      },
      '1': {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 40
        }
      },
      '2': {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 18
        }
      }
    },
    fnMap: {
      '0': {
        name: 'mapMap',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 30
          }
        },
        loc: {
          start: {
            line: 1,
            column: 44
          },
          end: {
            line: 7,
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
            column: 33
          },
          end: {
            line: 2,
            column: 34
          }
        },
        loc: {
          start: {
            line: 2,
            column: 50
          },
          end: {
            line: 6,
            column: 3
          }
        },
        line: 2
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '5511820863d33e54e18db0114e3c04b93f4090a2'
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
exports.default = mapMap;

function mapMap(map, mapper) {
  cov_agt14w64z.f[0]++;
  cov_agt14w64z.s[0]++;
  return Object.keys(map).reduce(function(result, key) {
    cov_agt14w64z.f[1]++;
    cov_agt14w64z.s[1]++;
    result[key] = mapper(map[key], key);
    cov_agt14w64z.s[2]++;
    return result;
  }, {});
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9tYXBNYXAuanMiXSwibmFtZXMiOlsibWFwTWFwIiwibWFwIiwibWFwcGVyIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsInJlc3VsdCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxNQUFULENBQWdCQyxHQUFoQixFQUFxQkMsTUFBckIsRUFBNkI7QUFBQTtBQUFBO0FBQzFDLFNBQU9DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxHQUFaLEVBQWlCSSxNQUFqQixDQUF3QixVQUFDQyxNQUFELEVBQVNDLEdBQVQsRUFBaUI7QUFBQTtBQUFBO0FBQzlDRCxJQUFBQSxNQUFNLENBQUNDLEdBQUQsQ0FBTixHQUFjTCxNQUFNLENBQUNELEdBQUcsQ0FBQ00sR0FBRCxDQUFKLEVBQVdBLEdBQVgsQ0FBcEI7QUFEOEM7QUFHOUMsV0FBT0QsTUFBUDtBQUNELEdBSk0sRUFJSixFQUpJLENBQVA7QUFLRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcE1hcChtYXAsIG1hcHBlcikge1xuICByZXR1cm4gT2JqZWN0LmtleXMobWFwKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSBtYXBwZXIobWFwW2tleV0sIGtleSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG59XG4iXX0=
