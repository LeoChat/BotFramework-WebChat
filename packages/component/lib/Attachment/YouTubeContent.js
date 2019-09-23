'use strict';

var cov_ofxro8l1l = (function() {
  var path = '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/YouTubeContent.js';
  var hash = 'b1c6ae94b2fa831e13cfa47b3e6652ed22055f2e';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/component/src/Attachment/YouTubeContent.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 21,
          column: 1
        }
      },
      '1': {
        start: {
          line: 7,
          column: 17
        },
        end: {
          line: 11,
          column: 15
        }
      },
      '2': {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 20,
          column: 4
        }
      },
      '3': {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 27,
          column: 2
        }
      },
      '4': {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 37,
          column: 2
        }
      },
      '5': {
        start: {
          line: 39,
          column: 51
        },
        end: {
          line: 39,
          column: 63
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 6,
            column: 23
          },
          end: {
            line: 6,
            column: 24
          }
        },
        loc: {
          start: {
            line: 6,
            column: 71
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 6
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 39,
            column: 32
          },
          end: {
            line: 39,
            column: 33
          }
        },
        loc: {
          start: {
            line: 39,
            column: 51
          },
          end: {
            line: 39,
            column: 63
          }
        },
        line: 39
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 8,
            column: 14
          },
          end: {
            line: 8,
            column: 30
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 8,
              column: 25
            },
            end: {
              line: 8,
              column: 26
            }
          },
          {
            start: {
              line: 8,
              column: 29
            },
            end: {
              line: 8,
              column: 30
            }
          }
        ],
        line: 8
      },
      '1': {
        loc: {
          start: {
            line: 9,
            column: 10
          },
          end: {
            line: 9,
            column: 22
          }
        },
        type: 'cond-expr',
        locations: [
          {
            start: {
              line: 9,
              column: 17
            },
            end: {
              line: 9,
              column: 18
            }
          },
          {
            start: {
              line: 9,
              column: 21
            },
            end: {
              line: 9,
              column: 22
            }
          }
        ],
        line: 9
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
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'b1c6ae94b2fa831e13cfa47b3e6652ed22055f2e'
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
exports.default = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

cov_ofxro8l1l.s[0]++;

var YouTubeContent = function YouTubeContent(_ref) {
  var alt = _ref.alt,
    autoPlay = _ref.autoPlay,
    embedID = _ref.embedID,
    loop = _ref.loop,
    styleSet = _ref.styleSet;
  cov_ofxro8l1l.f[0]++;
  var search =
    (cov_ofxro8l1l.s[1]++,
    new URLSearchParams({
      autoplay: autoPlay ? (cov_ofxro8l1l.b[0][0]++, 1) : (cov_ofxro8l1l.b[0][1]++, 0),
      loop: loop ? (cov_ofxro8l1l.b[1][0]++, 1) : (cov_ofxro8l1l.b[1][1]++, 0),
      modestbranding: 1
    }).toString());
  cov_ofxro8l1l.s[2]++;
  return (
    // TODO: We should encodeURI the URL
    _react.default.createElement('iframe', {
      'aria-label': alt,
      className: styleSet.youTubeContent,
      src: 'https://youtube.com/embed/'.concat(embedID, '?').concat(search)
    })
  );
};

cov_ofxro8l1l.s[3]++;
YouTubeContent.defaultProps = {
  alt: '',
  autoPlay: false,
  loop: false
};
cov_ofxro8l1l.s[4]++;
YouTubeContent.propTypes = {
  alt: _propTypes.default.string,
  autoPlay: _propTypes.default.bool,
  embedID: _propTypes.default.string.isRequired,
  loop: _propTypes.default.bool,
  styleSet: _propTypes.default.shape({
    youTubeContent: _propTypes.default.any.isRequired
  }).isRequired
};

var _default = (0, _connectToWebChat.default)(function(_ref2) {
  var styleSet = _ref2.styleSet;
  cov_ofxro8l1l.f[1]++;
  cov_ofxro8l1l.s[5]++;
  return {
    styleSet: styleSet
  };
})(YouTubeContent);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L1lvdVR1YmVDb250ZW50LmpzIl0sIm5hbWVzIjpbIllvdVR1YmVDb250ZW50IiwiYWx0IiwiYXV0b1BsYXkiLCJlbWJlZElEIiwibG9vcCIsInN0eWxlU2V0Iiwic2VhcmNoIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXV0b3BsYXkiLCJtb2Rlc3RicmFuZGluZyIsInRvU3RyaW5nIiwieW91VHViZUNvbnRlbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFnRDtBQUFBLE1BQTdDQyxHQUE2QyxRQUE3Q0EsR0FBNkM7QUFBQSxNQUF4Q0MsUUFBd0MsUUFBeENBLFFBQXdDO0FBQUEsTUFBOUJDLE9BQThCLFFBQTlCQSxPQUE4QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFBQTtBQUNyRSxNQUFNQyxNQUFNLDBCQUFHLElBQUlDLGVBQUosQ0FBb0I7QUFDakNDLElBQUFBLFFBQVEsRUFBRU4sUUFBUSw2QkFBRyxDQUFILDhCQUFPLENBQVAsQ0FEZTtBQUVqQ0UsSUFBQUEsSUFBSSxFQUFFQSxJQUFJLDZCQUFHLENBQUgsOEJBQU8sQ0FBUCxDQUZ1QjtBQUdqQ0ssSUFBQUEsY0FBYyxFQUFFO0FBSGlCLEdBQXBCLEVBSVpDLFFBSlksRUFBSCxDQUFaO0FBRHFFO0FBT3JFLFNBQ0U7QUFDQTtBQUNFLG9CQUFZVCxHQURkO0FBRUUsTUFBQSxTQUFTLEVBQUVJLFFBQVEsQ0FBQ00sY0FGdEI7QUFHRSxNQUFBLEdBQUcsc0NBQStCUixPQUEvQixjQUEwQ0csTUFBMUM7QUFITDtBQUZGO0FBUUQsQ0FmRDs7O0FBaUJBTixjQUFjLENBQUNZLFlBQWYsR0FBOEI7QUFDNUJYLEVBQUFBLEdBQUcsRUFBRSxFQUR1QjtBQUU1QkMsRUFBQUEsUUFBUSxFQUFFLEtBRmtCO0FBRzVCRSxFQUFBQSxJQUFJLEVBQUU7QUFIc0IsQ0FBOUI7O0FBTUFKLGNBQWMsQ0FBQ2EsU0FBZixHQUEyQjtBQUN6QlosRUFBQUEsR0FBRyxFQUFFYSxtQkFBVUMsTUFEVTtBQUV6QmIsRUFBQUEsUUFBUSxFQUFFWSxtQkFBVUUsSUFGSztBQUd6QmIsRUFBQUEsT0FBTyxFQUFFVyxtQkFBVUMsTUFBVixDQUFpQkUsVUFIRDtBQUl6QmIsRUFBQUEsSUFBSSxFQUFFVSxtQkFBVUUsSUFKUztBQUt6QlgsRUFBQUEsUUFBUSxFQUFFUyxtQkFBVUksS0FBVixDQUFnQjtBQUN4QlAsSUFBQUEsY0FBYyxFQUFFRyxtQkFBVUssR0FBVixDQUFjRjtBQUROLEdBQWhCLEVBRVBBO0FBUHNCLENBQTNCOztlQVVlLCtCQUFpQixpQkFBbUI7QUFBQSxNQUFoQlosUUFBZ0IsU0FBaEJBLFFBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRjtBQUFZLENBQWhELEVBQW1ETCxjQUFuRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuXG5jb25zdCBZb3VUdWJlQ29udGVudCA9ICh7IGFsdCwgYXV0b1BsYXksIGVtYmVkSUQsIGxvb3AsIHN0eWxlU2V0IH0pID0+IHtcbiAgY29uc3Qgc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgYXV0b3BsYXk6IGF1dG9QbGF5ID8gMSA6IDAsXG4gICAgbG9vcDogbG9vcCA/IDEgOiAwLFxuICAgIG1vZGVzdGJyYW5kaW5nOiAxXG4gIH0pLnRvU3RyaW5nKCk7XG5cbiAgcmV0dXJuIChcbiAgICAvLyBUT0RPOiBXZSBzaG91bGQgZW5jb2RlVVJJIHRoZSBVUkxcbiAgICA8aWZyYW1lXG4gICAgICBhcmlhLWxhYmVsPXthbHR9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlU2V0LnlvdVR1YmVDb250ZW50fVxuICAgICAgc3JjPXtgaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8ke2VtYmVkSUR9PyR7c2VhcmNofWB9XG4gICAgLz5cbiAgKTtcbn07XG5cbllvdVR1YmVDb250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgYWx0OiAnJyxcbiAgYXV0b1BsYXk6IGZhbHNlLFxuICBsb29wOiBmYWxzZVxufTtcblxuWW91VHViZUNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGF1dG9QbGF5OiBQcm9wVHlwZXMuYm9vbCxcbiAgZW1iZWRJRDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsb29wOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3R5bGVTZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgeW91VHViZUNvbnRlbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9XZWJDaGF0KCh7IHN0eWxlU2V0IH0pID0+ICh7IHN0eWxlU2V0IH0pKShZb3VUdWJlQ29udGVudCk7XG4iXX0=
