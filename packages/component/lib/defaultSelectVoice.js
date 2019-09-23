'use strict';

var cov_1r3wvclfi4 = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/defaultSelectVoice.js';
  var hash = '528aa5750df385a028dc3ed7ba0a45037abaec9a';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/defaultSelectVoice.js',
    statementMap: {
      '0': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 18,
          column: 4
        }
      },
      '1': {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 15,
          column: 58
        }
      },
      '2': {
        start: {
          line: 14,
          column: 40
        },
        end: {
          line: 14,
          column: 88
        }
      },
      '3': {
        start: {
          line: 15,
          column: 34
        },
        end: {
          line: 15,
          column: 57
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 1,
            column: 15
          },
          end: {
            line: 1,
            column: 16
          }
        },
        loc: {
          start: {
            line: 1,
            column: 56
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 1
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 12,
            column: 6
          },
          end: {
            line: 12,
            column: 7
          }
        },
        loc: {
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 15,
            column: 58
          }
        },
        line: 13
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 14,
            column: 20
          },
          end: {
            line: 14,
            column: 21
          }
        },
        loc: {
          start: {
            line: 14,
            column: 40
          },
          end: {
            line: 14,
            column: 88
          }
        },
        line: 14
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 15,
            column: 20
          },
          end: {
            line: 15,
            column: 21
          }
        },
        loc: {
          start: {
            line: 15,
            column: 34
          },
          end: {
            line: 15,
            column: 57
          }
        },
        line: 15
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 17,
            column: 18
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 11,
              column: 4
            },
            end: {
              line: 17,
              column: 5
            }
          },
          {
            start: {
              line: 17,
              column: 9
            },
            end: {
              line: 17,
              column: 18
            }
          }
        ],
        line: 11
      },
      '1': {
        loc: {
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 15,
            column: 58
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 13,
              column: 8
            },
            end: {
              line: 13,
              column: 14
            }
          },
          {
            start: {
              line: 14,
              column: 8
            },
            end: {
              line: 14,
              column: 89
            }
          },
          {
            start: {
              line: 15,
              column: 8
            },
            end: {
              line: 15,
              column: 58
            }
          }
        ],
        line: 13
      },
      '2': {
        loc: {
          start: {
            line: 14,
            column: 40
          },
          end: {
            line: 14,
            column: 88
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 14,
              column: 40
            },
            end: {
              line: 14,
              column: 63
            }
          },
          {
            start: {
              line: 14,
              column: 67
            },
            end: {
              line: 14,
              column: 88
            }
          }
        ],
        line: 14
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
      '0': [0, 0],
      '1': [0, 0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '528aa5750df385a028dc3ed7ba0a45037abaec9a'
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
exports.default = _default;

function _default(_ref, voices, activity) {
  var language = _ref.language;
  cov_1r3wvclfi4.f[0]++;
  cov_1r3wvclfi4.s[0]++;
  // Find the first voice based on this order:
  // 1. Voice with language same as locale as defined in the activity
  // 2. Voice with language same as locale as passed into Web Chat
  // 3. Voice with language same as browser
  // 4. English (United States)
  // 5. First voice
  // We also prioritize voices powered by deep neural network (with keyword "neural" in the voice name).
  return (
    (cov_1r3wvclfi4.b[0][0]++,
    [activity.locale, language, window.navigator.language, 'en-US'].reduce(function(result, targetLanguage) {
      cov_1r3wvclfi4.f[1]++;
      cov_1r3wvclfi4.s[1]++;
      return (
        (cov_1r3wvclfi4.b[1][0]++, result) ||
        (cov_1r3wvclfi4.b[1][1]++,
        voices.find(function(_ref2) {
          var lang = _ref2.lang,
            name = _ref2.name;
          cov_1r3wvclfi4.f[2]++;
          cov_1r3wvclfi4.s[2]++;
          return (
            (cov_1r3wvclfi4.b[2][0]++, lang === targetLanguage) && (cov_1r3wvclfi4.b[2][1]++, /neural/i.test(name))
          );
        })) ||
        (cov_1r3wvclfi4.b[1][2]++,
        voices.find(function(_ref3) {
          var lang = _ref3.lang;
          cov_1r3wvclfi4.f[3]++;
          cov_1r3wvclfi4.s[3]++;
          return lang === targetLanguage;
        }))
      );
    }, null)) || (cov_1r3wvclfi4.b[0][1]++, voices[0])
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZhdWx0U2VsZWN0Vm9pY2UuanMiXSwibmFtZXMiOlsidm9pY2VzIiwiYWN0aXZpdHkiLCJsYW5ndWFnZSIsImxvY2FsZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsInJlZHVjZSIsInJlc3VsdCIsInRhcmdldExhbmd1YWdlIiwiZmluZCIsImxhbmciLCJuYW1lIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSx3QkFBdUJBLE1BQXZCLEVBQStCQyxRQUEvQixFQUF5QztBQUFBLE1BQTlCQyxRQUE4QixRQUE5QkEsUUFBOEI7QUFBQTtBQUFBO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsU0FDRSw0QkFBQ0QsUUFBUSxDQUFDRSxNQUFWLEVBQWtCRCxRQUFsQixFQUE0QkUsTUFBTSxDQUFDQyxTQUFQLENBQWlCSCxRQUE3QyxFQUF1RCxPQUF2RCxFQUFnRUksTUFBaEUsQ0FDRSxVQUFDQyxNQUFELEVBQVNDLGNBQVQsRUFDRTtBQUFBO0FBQUE7QUFBQSxzQ0FBQUQsTUFBTSxnQ0FDTlAsTUFBTSxDQUFDUyxJQUFQLENBQVksaUJBQW9CO0FBQUEsVUFBakJDLElBQWlCLFNBQWpCQSxJQUFpQjtBQUFBLFVBQVhDLElBQVcsU0FBWEEsSUFBVztBQUFBO0FBQUE7QUFBQSx3Q0FBQUQsSUFBSSxLQUFLRixjQUFULGdDQUEyQixVQUFXSSxJQUFYLENBQWdCRCxJQUFoQixDQUEzQjtBQUFnRCxLQUFoRixDQURNLENBQU4sK0JBRUFYLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZLGlCQUFjO0FBQUEsVUFBWEMsSUFBVyxTQUFYQSxJQUFXO0FBQUE7QUFBQTtBQUFBLGFBQUFBLElBQUksS0FBS0YsY0FBVDtBQUF1QixLQUFqRCxDQUZBO0FBRWtELEdBSnRELEVBS0UsSUFMRixpQ0FNS1IsTUFBTSxDQUFDLENBQUQsQ0FOWCxDQURGO0FBU0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih7IGxhbmd1YWdlIH0sIHZvaWNlcywgYWN0aXZpdHkpIHtcbiAgLy8gRmluZCB0aGUgZmlyc3Qgdm9pY2UgYmFzZWQgb24gdGhpcyBvcmRlcjpcbiAgLy8gMS4gVm9pY2Ugd2l0aCBsYW5ndWFnZSBzYW1lIGFzIGxvY2FsZSBhcyBkZWZpbmVkIGluIHRoZSBhY3Rpdml0eVxuICAvLyAyLiBWb2ljZSB3aXRoIGxhbmd1YWdlIHNhbWUgYXMgbG9jYWxlIGFzIHBhc3NlZCBpbnRvIFdlYiBDaGF0XG4gIC8vIDMuIFZvaWNlIHdpdGggbGFuZ3VhZ2Ugc2FtZSBhcyBicm93c2VyXG4gIC8vIDQuIEVuZ2xpc2ggKFVuaXRlZCBTdGF0ZXMpXG4gIC8vIDUuIEZpcnN0IHZvaWNlXG5cbiAgLy8gV2UgYWxzbyBwcmlvcml0aXplIHZvaWNlcyBwb3dlcmVkIGJ5IGRlZXAgbmV1cmFsIG5ldHdvcmsgKHdpdGgga2V5d29yZCBcIm5ldXJhbFwiIGluIHRoZSB2b2ljZSBuYW1lKS5cbiAgcmV0dXJuIChcbiAgICBbYWN0aXZpdHkubG9jYWxlLCBsYW5ndWFnZSwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSwgJ2VuLVVTJ10ucmVkdWNlKFxuICAgICAgKHJlc3VsdCwgdGFyZ2V0TGFuZ3VhZ2UpID0+XG4gICAgICAgIHJlc3VsdCB8fFxuICAgICAgICB2b2ljZXMuZmluZCgoeyBsYW5nLCBuYW1lIH0pID0+IGxhbmcgPT09IHRhcmdldExhbmd1YWdlICYmIC9uZXVyYWwvaXUudGVzdChuYW1lKSkgfHxcbiAgICAgICAgdm9pY2VzLmZpbmQoKHsgbGFuZyB9KSA9PiBsYW5nID09PSB0YXJnZXRMYW5ndWFnZSksXG4gICAgICBudWxsXG4gICAgKSB8fCB2b2ljZXNbMF1cbiAgKTtcbn1cbiJdfQ==
