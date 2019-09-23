'use strict';

var cov_1ehceeb18w = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/createBrowserWebSpeechPonyfillFactory.js';
  var hash = '369249eb74e2a4f6b0635f167fca9bcdb843dbb2';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/createBrowserWebSpeechPonyfillFactory.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 4,
          column: 3
        }
      },
      '1': {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 95
        }
      },
      '2': {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 8,
          column: 3
        }
      },
      '3': {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 93
        }
      },
      '4': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 15,
          column: 5
        }
      },
      '5': {
        start: {
          line: 10,
          column: 16
        },
        end: {
          line: 15,
          column: 3
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createBrowserWebSpeechPonyfillFactory',
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 61
          }
        },
        loc: {
          start: {
            line: 1,
            column: 64
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 1
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 10,
            column: 9
          },
          end: {
            line: 10,
            column: 10
          }
        },
        loc: {
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 10
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 2,
              column: 2
            },
            end: {
              line: 4,
              column: 3
            }
          },
          {
            start: {
              line: 2,
              column: 2
            },
            end: {
              line: 4,
              column: 3
            }
          }
        ],
        line: 2
      },
      '1': {
        loc: {
          start: {
            line: 2,
            column: 6
          },
          end: {
            line: 2,
            column: 66
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 2,
              column: 6
            },
            end: {
              line: 2,
              column: 31
            }
          },
          {
            start: {
              line: 2,
              column: 35
            },
            end: {
              line: 2,
              column: 66
            }
          }
        ],
        line: 2
      },
      '2': {
        loc: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 6,
              column: 2
            },
            end: {
              line: 8,
              column: 3
            }
          },
          {
            start: {
              line: 6,
              column: 2
            },
            end: {
              line: 8,
              column: 3
            }
          }
        ],
        line: 6
      },
      '3': {
        loc: {
          start: {
            line: 11,
            column: 23
          },
          end: {
            line: 11,
            column: 81
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 11,
              column: 23
            },
            end: {
              line: 11,
              column: 47
            }
          },
          {
            start: {
              line: 11,
              column: 51
            },
            end: {
              line: 11,
              column: 81
            }
          }
        ],
        line: 11
      },
      '4': {
        loc: {
          start: {
            line: 12,
            column: 23
          },
          end: {
            line: 12,
            column: 81
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 12,
              column: 23
            },
            end: {
              line: 12,
              column: 47
            }
          },
          {
            start: {
              line: 12,
              column: 51
            },
            end: {
              line: 12,
              column: 81
            }
          }
        ],
        line: 12
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '369249eb74e2a4f6b0635f167fca9bcdb843dbb2'
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
exports.default = createBrowserWebSpeechPonyfillFactory;

function createBrowserWebSpeechPonyfillFactory() {
  cov_1ehceeb18w.f[0]++;
  cov_1ehceeb18w.s[0]++;

  if (
    (cov_1ehceeb18w.b[1][0]++, !window.SpeechRecognition) &&
    (cov_1ehceeb18w.b[1][1]++, !window.webkitSpeechRecognition)
  ) {
    cov_1ehceeb18w.b[0][0]++;
    cov_1ehceeb18w.s[1]++;
    console.warn('Web Chat: This browser does not support Web Speech API Speech Recognition.');
  } else {
    cov_1ehceeb18w.b[0][1]++;
  }

  cov_1ehceeb18w.s[2]++;

  if (!window.speechSynthesis) {
    cov_1ehceeb18w.b[2][0]++;
    cov_1ehceeb18w.s[3]++;
    console.warn('Web Chat: This browser does not support Web Speech API Speech Synthesis.');
  } else {
    cov_1ehceeb18w.b[2][1]++;
  }

  cov_1ehceeb18w.s[4]++;
  return function() {
    cov_1ehceeb18w.f[1]++;
    cov_1ehceeb18w.s[5]++;
    return {
      SpeechGrammarList:
        (cov_1ehceeb18w.b[3][0]++, window.SpeechGrammarList) ||
        (cov_1ehceeb18w.b[3][1]++, window.webkitSpeechGrammarList),
      SpeechRecognition:
        (cov_1ehceeb18w.b[4][0]++, window.SpeechRecognition) ||
        (cov_1ehceeb18w.b[4][1]++, window.webkitSpeechRecognition),
      speechSynthesis: window.speechSynthesis,
      SpeechSynthesisUtterance: window.SpeechSynthesisUtterance
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVCcm93c2VyV2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUJyb3dzZXJXZWJTcGVlY2hQb255ZmlsbEZhY3RvcnkiLCJ3aW5kb3ciLCJTcGVlY2hSZWNvZ25pdGlvbiIsIndlYmtpdFNwZWVjaFJlY29nbml0aW9uIiwiY29uc29sZSIsIndhcm4iLCJzcGVlY2hTeW50aGVzaXMiLCJTcGVlY2hHcmFtbWFyTGlzdCIsIndlYmtpdFNwZWVjaEdyYW1tYXJMaXN0IiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxxQ0FBVCxHQUFpRDtBQUFBO0FBQUE7O0FBQzlELE1BQUksNEJBQUNDLE1BQU0sQ0FBQ0MsaUJBQVIsZ0NBQTZCLENBQUNELE1BQU0sQ0FBQ0UsdUJBQXJDLENBQUosRUFBa0U7QUFBQTtBQUFBO0FBQ2hFQyxJQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSw0RUFBYjtBQUNELEdBRkQ7QUFBQTtBQUFBOztBQUQ4RDs7QUFLOUQsTUFBSSxDQUFDSixNQUFNLENBQUNLLGVBQVosRUFBNkI7QUFBQTtBQUFBO0FBQzNCRixJQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSwwRUFBYjtBQUNELEdBRkQ7QUFBQTtBQUFBOztBQUw4RDtBQVM5RCxTQUFPLFlBQU87QUFBQTtBQUFBO0FBQUE7QUFDWkUsTUFBQUEsaUJBQWlCLEVBQUUsMkJBQUFOLE1BQU0sQ0FBQ00saUJBQVAsZ0NBQTRCTixNQUFNLENBQUNPLHVCQUFuQyxDQURQO0FBRVpOLE1BQUFBLGlCQUFpQixFQUFFLDJCQUFBRCxNQUFNLENBQUNDLGlCQUFQLGdDQUE0QkQsTUFBTSxDQUFDRSx1QkFBbkMsQ0FGUDtBQUdaRyxNQUFBQSxlQUFlLEVBQUVMLE1BQU0sQ0FBQ0ssZUFIWjtBQUlaRyxNQUFBQSx3QkFBd0IsRUFBRVIsTUFBTSxDQUFDUTtBQUpyQjtBQUtiLEdBTEQ7QUFNRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJXZWJTcGVlY2hQb255ZmlsbEZhY3RvcnkoKSB7XG4gIGlmICghd2luZG93LlNwZWVjaFJlY29nbml0aW9uICYmICF3aW5kb3cud2Via2l0U3BlZWNoUmVjb2duaXRpb24pIHtcbiAgICBjb25zb2xlLndhcm4oJ1dlYiBDaGF0OiBUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBXZWIgU3BlZWNoIEFQSSBTcGVlY2ggUmVjb2duaXRpb24uJyk7XG4gIH1cblxuICBpZiAoIXdpbmRvdy5zcGVlY2hTeW50aGVzaXMpIHtcbiAgICBjb25zb2xlLndhcm4oJ1dlYiBDaGF0OiBUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBXZWIgU3BlZWNoIEFQSSBTcGVlY2ggU3ludGhlc2lzLicpO1xuICB9XG5cbiAgcmV0dXJuICgpID0+ICh7XG4gICAgU3BlZWNoR3JhbW1hckxpc3Q6IHdpbmRvdy5TcGVlY2hHcmFtbWFyTGlzdCB8fCB3aW5kb3cud2Via2l0U3BlZWNoR3JhbW1hckxpc3QsXG4gICAgU3BlZWNoUmVjb2duaXRpb246IHdpbmRvdy5TcGVlY2hSZWNvZ25pdGlvbiB8fCB3aW5kb3cud2Via2l0U3BlZWNoUmVjb2duaXRpb24sXG4gICAgc3BlZWNoU3ludGhlc2lzOiB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLFxuICAgIFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZTogd2luZG93LlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZVxuICB9KTtcbn1cbiJdfQ==
