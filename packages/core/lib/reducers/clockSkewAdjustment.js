'use strict';

var cov_1opqa7oh26 = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/reducers/clockSkewAdjustment.js';
  var hash = 'f028dd416c10e75cc50fad4ec49365ef04cae357';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/core/src/reducers/clockSkewAdjustment.js',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 26,
          column: 3
        }
      },
      '1': {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 8,
          column: 15
        }
      },
      '2': {
        start: {
          line: 10,
          column: 27
        },
        end: {
          line: 10,
          column: 54
        }
      },
      '3': {
        start: {
          line: 11,
          column: 23
        },
        end: {
          line: 11,
          column: 44
        }
      },
      '4': {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 22,
          column: 5
        }
      },
      '5': {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 42
        }
      },
      '6': {
        start: {
          line: 23,
          column: 9
        },
        end: {
          line: 26,
          column: 3
        }
      },
      '7': {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 26
        }
      },
      '8': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 15
        }
      }
    },
    fnMap: {
      '0': {
        name: 'clockSkewAdjustment',
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 43
          }
        },
        loc: {
          start: {
            line: 4,
            column: 74
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 4
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 4,
            column: 44
          },
          end: {
            line: 4,
            column: 53
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 4,
              column: 52
            },
            end: {
              line: 4,
              column: 53
            }
          }
        ],
        line: 4
      },
      '1': {
        loc: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 5,
              column: 2
            },
            end: {
              line: 26,
              column: 3
            }
          },
          {
            start: {
              line: 5,
              column: 2
            },
            end: {
              line: 26,
              column: 3
            }
          }
        ],
        line: 5
      },
      '2': {
        loc: {
          start: {
            line: 7,
            column: 31
          },
          end: {
            line: 7,
            column: 55
          }
        },
        type: 'default-arg',
        locations: [
          {
            start: {
              line: 7,
              column: 53
            },
            end: {
              line: 7,
              column: 55
            }
          }
        ],
        line: 7
      },
      '3': {
        loc: {
          start: {
            line: 13,
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
              line: 13,
              column: 4
            },
            end: {
              line: 22,
              column: 5
            }
          },
          {
            start: {
              line: 13,
              column: 4
            },
            end: {
              line: 22,
              column: 5
            }
          }
        ],
        line: 13
      },
      '4': {
        loc: {
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 13,
            column: 52
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
              column: 30
            }
          },
          {
            start: {
              line: 13,
              column: 34
            },
            end: {
              line: 13,
              column: 52
            }
          }
        ],
        line: 13
      },
      '5': {
        loc: {
          start: {
            line: 23,
            column: 9
          },
          end: {
            line: 26,
            column: 3
          }
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 23,
              column: 9
            },
            end: {
              line: 26,
              column: 3
            }
          },
          {
            start: {
              line: 23,
              column: 9
            },
            end: {
              line: 26,
              column: 3
            }
          }
        ],
        line: 23
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
      '8': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0],
      '1': [0, 0],
      '2': [0],
      '3': [0, 0],
      '4': [0, 0],
      '5': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'f028dd416c10e75cc50fad4ec49365ef04cae357'
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
exports['default'] = clockSkewAdjustment;

var _incomingActivity = require('../actions/incomingActivity');

var _setClockSkewAdjustment = require('../actions/setClockSkewAdjustment');

function clockSkewAdjustment() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1opqa7oh26.b[0][0]++, 0);

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  cov_1opqa7oh26.f[0]++;
  cov_1opqa7oh26.s[0]++;

  if (type === _incomingActivity.INCOMING_ACTIVITY) {
    cov_1opqa7oh26.b[1][0]++;

    var _ref2 = (cov_1opqa7oh26.s[1]++, payload),
      _ref2$activity = _ref2.activity,
      _ref2$activity$channe = _ref2$activity.channelData;

    _ref2$activity$channe = _ref2$activity$channe === void 0 ? (cov_1opqa7oh26.b[2][0]++, {}) : _ref2$activity$channe;
    var clientTimestamp = _ref2$activity$channe.clientTimestamp,
      timestamp = _ref2$activity.timestamp;
    var clientSendTime = (cov_1opqa7oh26.s[2]++, Date.parse(clientTimestamp));
    var serverTime = (cov_1opqa7oh26.s[3]++, Date.parse(timestamp));
    cov_1opqa7oh26.s[4]++;

    if ((cov_1opqa7oh26.b[4][0]++, !isNaN(clientSendTime)) && (cov_1opqa7oh26.b[4][1]++, !isNaN(serverTime))) {
      cov_1opqa7oh26.b[3][0]++;
      cov_1opqa7oh26.s[5]++;
      // The adjustment include the latency between the client and the server.
      // This means, the adjustment is always larger than the actual value.
      // And it means, after adjustment, client time will be ahead of server time.
      // And it also means, the user-originated message has higher probability to appear below bot-originated message.
      // Although it has higher probability, if the user-originated message is still sending (i.e. did not echoback with server timestamp yet),
      // the insertion-sort logic will put the bot-originated below the user-originated message.
      state = serverTime - clientSendTime;
    } else {
      cov_1opqa7oh26.b[3][1]++;
    }
  } else {
    cov_1opqa7oh26.b[1][1]++;
    cov_1opqa7oh26.s[6]++;

    if (type === _setClockSkewAdjustment.SET_CLOCK_SKEW_ADJUSTMENT) {
      cov_1opqa7oh26.b[5][0]++;
      cov_1opqa7oh26.s[7]++;
      // Currently, this action is for testing purpose only.
      state = payload.value;
    } else {
      cov_1opqa7oh26.b[5][1]++;
    }
  }

  cov_1opqa7oh26.s[8]++;
  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9jbG9ja1NrZXdBZGp1c3RtZW50LmpzIl0sIm5hbWVzIjpbImNsb2NrU2tld0FkanVzdG1lbnQiLCJzdGF0ZSIsInBheWxvYWQiLCJ0eXBlIiwiSU5DT01JTkdfQUNUSVZJVFkiLCJhY3Rpdml0eSIsImNoYW5uZWxEYXRhIiwiY2xpZW50VGltZXN0YW1wIiwidGltZXN0YW1wIiwiY2xpZW50U2VuZFRpbWUiLCJEYXRlIiwicGFyc2UiLCJzZXJ2ZXJUaW1lIiwiaXNOYU4iLCJTRVRfQ0xPQ0tfU0tFV19BREpVU1RNRU5UIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVlLFNBQVNBLG1CQUFULEdBQTJEO0FBQUEsTUFBOUJDLEtBQThCLGtHQUF0QixDQUFzQjs7QUFBQTtBQUFBLE1BQWpCQyxPQUFpQixRQUFqQkEsT0FBaUI7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUE7QUFBQTs7QUFDeEUsTUFBSUEsSUFBSSxLQUFLQyxtQ0FBYixFQUFnQztBQUFBOztBQUFBLHdDQUcxQkYsT0FIMEI7QUFBQSwrQkFFNUJHLFFBRjRCO0FBQUEsK0NBRWhCQyxXQUZnQjs7QUFBQSwwRkFFbUIsRUFGbkI7QUFBQSxRQUVEQyxlQUZDLHlCQUVEQSxlQUZDO0FBQUEsUUFFdUJDLFNBRnZCLGtCQUV1QkEsU0FGdkI7QUFLOUIsUUFBTUMsY0FBYywyQkFBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLGVBQVgsQ0FBSCxDQUFwQjtBQUNBLFFBQU1LLFVBQVUsMkJBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxTQUFYLENBQUgsQ0FBaEI7QUFOOEI7O0FBUTlCLFFBQUksNEJBQUNLLEtBQUssQ0FBQ0osY0FBRCxDQUFOLGdDQUEwQixDQUFDSSxLQUFLLENBQUNELFVBQUQsQ0FBaEMsQ0FBSixFQUFrRDtBQUFBO0FBQUE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFYLE1BQUFBLEtBQUssR0FBR1csVUFBVSxHQUFHSCxjQUFyQjtBQUNELEtBVEQ7QUFBQTtBQUFBO0FBVUQsR0FsQkQsTUFrQk87QUFBQTtBQUFBOztBQUFBLFFBQUlOLElBQUksS0FBS1csaURBQWIsRUFBd0M7QUFBQTtBQUFBO0FBQzdDO0FBQ0FiLE1BQUFBLEtBQUssR0FBR0MsT0FBTyxDQUFDYSxLQUFoQjtBQUNELEtBSE07QUFBQTtBQUFBO0FBR047O0FBdEJ1RTtBQXdCeEUsU0FBT2QsS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU5DT01JTkdfQUNUSVZJVFkgfSBmcm9tICcuLi9hY3Rpb25zL2luY29taW5nQWN0aXZpdHknO1xuaW1wb3J0IHsgU0VUX0NMT0NLX1NLRVdfQURKVVNUTUVOVCB9IGZyb20gJy4uL2FjdGlvbnMvc2V0Q2xvY2tTa2V3QWRqdXN0bWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb2NrU2tld0FkanVzdG1lbnQoc3RhdGUgPSAwLCB7IHBheWxvYWQsIHR5cGUgfSkge1xuICBpZiAodHlwZSA9PT0gSU5DT01JTkdfQUNUSVZJVFkpIHtcbiAgICBjb25zdCB7XG4gICAgICBhY3Rpdml0eTogeyBjaGFubmVsRGF0YTogeyBjbGllbnRUaW1lc3RhbXAgfSA9IHt9LCB0aW1lc3RhbXAgfVxuICAgIH0gPSBwYXlsb2FkO1xuXG4gICAgY29uc3QgY2xpZW50U2VuZFRpbWUgPSBEYXRlLnBhcnNlKGNsaWVudFRpbWVzdGFtcCk7XG4gICAgY29uc3Qgc2VydmVyVGltZSA9IERhdGUucGFyc2UodGltZXN0YW1wKTtcblxuICAgIGlmICghaXNOYU4oY2xpZW50U2VuZFRpbWUpICYmICFpc05hTihzZXJ2ZXJUaW1lKSkge1xuICAgICAgLy8gVGhlIGFkanVzdG1lbnQgaW5jbHVkZSB0aGUgbGF0ZW5jeSBiZXR3ZWVuIHRoZSBjbGllbnQgYW5kIHRoZSBzZXJ2ZXIuXG4gICAgICAvLyBUaGlzIG1lYW5zLCB0aGUgYWRqdXN0bWVudCBpcyBhbHdheXMgbGFyZ2VyIHRoYW4gdGhlIGFjdHVhbCB2YWx1ZS5cbiAgICAgIC8vIEFuZCBpdCBtZWFucywgYWZ0ZXIgYWRqdXN0bWVudCwgY2xpZW50IHRpbWUgd2lsbCBiZSBhaGVhZCBvZiBzZXJ2ZXIgdGltZS5cbiAgICAgIC8vIEFuZCBpdCBhbHNvIG1lYW5zLCB0aGUgdXNlci1vcmlnaW5hdGVkIG1lc3NhZ2UgaGFzIGhpZ2hlciBwcm9iYWJpbGl0eSB0byBhcHBlYXIgYmVsb3cgYm90LW9yaWdpbmF0ZWQgbWVzc2FnZS5cbiAgICAgIC8vIEFsdGhvdWdoIGl0IGhhcyBoaWdoZXIgcHJvYmFiaWxpdHksIGlmIHRoZSB1c2VyLW9yaWdpbmF0ZWQgbWVzc2FnZSBpcyBzdGlsbCBzZW5kaW5nIChpLmUuIGRpZCBub3QgZWNob2JhY2sgd2l0aCBzZXJ2ZXIgdGltZXN0YW1wIHlldCksXG4gICAgICAvLyB0aGUgaW5zZXJ0aW9uLXNvcnQgbG9naWMgd2lsbCBwdXQgdGhlIGJvdC1vcmlnaW5hdGVkIGJlbG93IHRoZSB1c2VyLW9yaWdpbmF0ZWQgbWVzc2FnZS5cblxuICAgICAgc3RhdGUgPSBzZXJ2ZXJUaW1lIC0gY2xpZW50U2VuZFRpbWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFNFVF9DTE9DS19TS0VXX0FESlVTVE1FTlQpIHtcbiAgICAvLyBDdXJyZW50bHksIHRoaXMgYWN0aW9uIGlzIGZvciB0ZXN0aW5nIHB1cnBvc2Ugb25seS5cbiAgICBzdGF0ZSA9IHBheWxvYWQudmFsdWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=
