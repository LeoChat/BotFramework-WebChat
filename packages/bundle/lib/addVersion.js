'use strict';

var cov_36nng1fpf = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/addVersion.js';
  var hash = '48899bce657b3731556b3ed74f81aaa22dd6e3cf';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/addVersion.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 19,
          column: 18
        }
      },
      '1': {
        start: {
          line: 9,
          column: 25
        },
        end: {
          line: 9,
          column: 31
        }
      },
      '2': {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 18,
          column: 5
        }
      },
      '3': {
        start: {
          line: 12,
          column: 19
        },
        end: {
          line: 12,
          column: 115
        }
      },
      '4': {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 38
        }
      },
      '5': {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 44
        }
      },
      '6': {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 38
        }
      },
      '7': {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 61
        }
      },
      '8': {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 85
        }
      },
      '9': {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 63
        }
      },
      '10': {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 66
        }
      }
    },
    fnMap: {
      '0': {
        name: 'setMetaTag',
        decl: {
          start: {
            line: 7,
            column: 9
          },
          end: {
            line: 7,
            column: 19
          }
        },
        loc: {
          start: {
            line: 7,
            column: 35
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 7
      },
      '1': {
        name: 'addVersion',
        decl: {
          start: {
            line: 22,
            column: 24
          },
          end: {
            line: 22,
            column: 34
          }
        },
        loc: {
          start: {
            line: 22,
            column: 44
          },
          end: {
            line: 27,
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
            line: 11,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 11,
              column: 4
            },
            end: {
              line: 18,
              column: 5
            }
          },
          {
            start: {
              line: 11,
              column: 4
            },
            end: {
              line: 18,
              column: 5
            }
          }
        ],
        line: 11
      },
      '1': {
        loc: {
          start: {
            line: 11,
            column: 8
          },
          end: {
            line: 11,
            column: 111
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 11,
              column: 8
            },
            end: {
              line: 11,
              column: 39
            }
          },
          {
            start: {
              line: 11,
              column: 43
            },
            end: {
              line: 11,
              column: 65
            }
          },
          {
            start: {
              line: 11,
              column: 69
            },
            end: {
              line: 11,
              column: 82
            }
          },
          {
            start: {
              line: 11,
              column: 86
            },
            end: {
              line: 11,
              column: 111
            }
          }
        ],
        line: 11
      },
      '2': {
        loc: {
          start: {
            line: 12,
            column: 19
          },
          end: {
            line: 12,
            column: 115
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 12,
              column: 19
            },
            end: {
              line: 12,
              column: 81
            }
          },
          {
            start: {
              line: 12,
              column: 85
            },
            end: {
              line: 12,
              column: 115
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
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0, 0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '48899bce657b3731556b3ed74f81aaa22dd6e3cf'
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
exports.default = addVersion;

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _botframeworkWebchatCore = require('botframework-webchat-core');

function setMetaTag(name, content) {
  cov_36nng1fpf.f[0]++;
  cov_36nng1fpf.s[0]++;

  try {
    var _ref = (cov_36nng1fpf.s[1]++, global),
      document = _ref.document;

    cov_36nng1fpf.s[2]++;

    if (
      (cov_36nng1fpf.b[1][0]++, typeof document !== 'undefined') &&
      (cov_36nng1fpf.b[1][1]++, document.createElement) &&
      (cov_36nng1fpf.b[1][2]++, document.head) &&
      (cov_36nng1fpf.b[1][3]++, document.head.appendChild)
    ) {
      cov_36nng1fpf.b[0][0]++;
      var meta =
        (cov_36nng1fpf.s[3]++,
        (cov_36nng1fpf.b[2][0]++, document.querySelector('html meta[name="'.concat(encodeURI(name), '"]'))) ||
          (cov_36nng1fpf.b[2][1]++, document.createElement('meta')));
      cov_36nng1fpf.s[4]++;
      meta.setAttribute('name', name);
      cov_36nng1fpf.s[5]++;
      meta.setAttribute('content', content);
      cov_36nng1fpf.s[6]++;
      document.head.appendChild(meta);
    } else {
      cov_36nng1fpf.b[0][1]++;
    }
  } catch (err) {}
}

function addVersion(variant) {
  cov_36nng1fpf.f[1]++;
  cov_36nng1fpf.s[7]++;
  setMetaTag('botframework-webchat:bundle:variant', variant);
  cov_36nng1fpf.s[8]++;
  setMetaTag('botframework-webchat:bundle:version', undefined);
  cov_36nng1fpf.s[9]++;
  setMetaTag('botframework-webchat:core:version', _botframeworkWebchatCore.version);
  cov_36nng1fpf.s[10]++;
  setMetaTag('botframework-webchat:ui:version', _botframeworkWebchatComponent.version);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hZGRWZXJzaW9uLmpzIl0sIm5hbWVzIjpbInNldE1ldGFUYWciLCJuYW1lIiwiY29udGVudCIsImdsb2JhbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIm1ldGEiLCJxdWVyeVNlbGVjdG9yIiwiZW5jb2RlVVJJIiwic2V0QXR0cmlidXRlIiwiZXJyIiwiYWRkVmVyc2lvbiIsInZhcmlhbnQiLCJjb3JlVmVyc2lvbiIsImNvbXBvbmVudFZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEJDLE9BQTFCLEVBQW1DO0FBQUE7QUFBQTs7QUFDakMsTUFBSTtBQUFBLHNDQUNtQkMsTUFEbkI7QUFBQSxRQUNNQyxRQUROLFFBQ01BLFFBRE47O0FBQUE7O0FBR0YsUUFBSSxpQ0FBT0EsUUFBUCxLQUFvQixXQUFwQiwrQkFBbUNBLFFBQVEsQ0FBQ0MsYUFBNUMsK0JBQTZERCxRQUFRLENBQUNFLElBQXRFLCtCQUE4RUYsUUFBUSxDQUFDRSxJQUFULENBQWNDLFdBQTVGLENBQUosRUFBNkc7QUFBQTtBQUMzRyxVQUFNQyxJQUFJLDBCQUFHLDBCQUFBSixRQUFRLENBQUNLLGFBQVQsNEJBQTBDQyxTQUFTLENBQUNULElBQUQsQ0FBbkQsd0NBQWtFRyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbEUsQ0FBSCxDQUFWO0FBRDJHO0FBRzNHRyxNQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEJWLElBQTFCO0FBSDJHO0FBSTNHTyxNQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkJULE9BQTdCO0FBSjJHO0FBTTNHRSxNQUFBQSxRQUFRLENBQUNFLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkMsSUFBMUI7QUFDRCxLQVBEO0FBQUE7QUFBQTtBQVFELEdBWEQsQ0FXRSxPQUFPSSxHQUFQLEVBQVksQ0FBRTtBQUNqQjs7QUFFYyxTQUFTQyxVQUFULENBQW9CQyxPQUFwQixFQUE2QjtBQUFBO0FBQUE7QUFDMUNkLEVBQUFBLFVBQVUsQ0FBQyxxQ0FBRCxFQUF3Q2MsT0FBeEMsQ0FBVjtBQUQwQztBQUUxQ2QsRUFBQUEsVUFBVSxDQUFDLHFDQUFELFlBQVY7QUFGMEM7QUFHMUNBLEVBQUFBLFVBQVUsQ0FBQyxtQ0FBRCxFQUFzQ2UsZ0NBQXRDLENBQVY7QUFIMEM7QUFJMUNmLEVBQUFBLFVBQVUsQ0FBQyxpQ0FBRCxFQUFvQ2dCLHFDQUFwQyxDQUFWO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgZ2xvYmFsOnJlYWRvbmx5LCBwcm9jZXNzOnJlYWRvbmx5ICovXG4vKiBlc2xpbnQgbm8tZW1wdHk6IFtcImVycm9yXCIsIHsgXCJhbGxvd0VtcHR5Q2F0Y2hcIjogdHJ1ZSB9XSAqL1xuXG5pbXBvcnQgeyB2ZXJzaW9uIGFzIGNvbXBvbmVudFZlcnNpb24gfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xuaW1wb3J0IHsgdmVyc2lvbiBhcyBjb3JlVmVyc2lvbiB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvcmUnO1xuXG5mdW5jdGlvbiBzZXRNZXRhVGFnKG5hbWUsIGNvbnRlbnQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRvY3VtZW50IH0gPSBnbG9iYWw7XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICYmIGRvY3VtZW50LmhlYWQgJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCkge1xuICAgICAgY29uc3QgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGh0bWwgbWV0YVtuYW1lPVwiJHtlbmNvZGVVUkkobmFtZSl9XCJdYCkgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuXG4gICAgICBtZXRhLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICAgICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBjb250ZW50KTtcblxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVmVyc2lvbih2YXJpYW50KSB7XG4gIHNldE1ldGFUYWcoJ2JvdGZyYW1ld29yay13ZWJjaGF0OmJ1bmRsZTp2YXJpYW50JywgdmFyaWFudCk7XG4gIHNldE1ldGFUYWcoJ2JvdGZyYW1ld29yay13ZWJjaGF0OmJ1bmRsZTp2ZXJzaW9uJywgcHJvY2Vzcy5lbnYuTlBNX1BBQ0tBR0VfVkVSU0lPTik7XG4gIHNldE1ldGFUYWcoJ2JvdGZyYW1ld29yay13ZWJjaGF0OmNvcmU6dmVyc2lvbicsIGNvcmVWZXJzaW9uKTtcbiAgc2V0TWV0YVRhZygnYm90ZnJhbWV3b3JrLXdlYmNoYXQ6dWk6dmVyc2lvbicsIGNvbXBvbmVudFZlcnNpb24pO1xufVxuIl19
