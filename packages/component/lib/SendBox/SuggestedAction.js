'use strict';

var cov_i30hf53r5 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/component/src/SendBox/SuggestedAction.js';
  var hash = '05d1d8ec576706c0557cabb155bf161be4046dd4';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/component/src/SendBox/SuggestedAction.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 29
        },
        end: {
          line: 16,
          column: 2
        }
      },
      '1': {
        start: {
          line: 18,
          column: 31
        },
        end: {
          line: 29,
          column: 3
        }
      },
      '2': {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 29,
          column: 3
        }
      },
      '3': {
        start: {
          line: 20,
          column: 106
        },
        end: {
          line: 27,
          column: 5
        }
      },
      '4': {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 57
        }
      },
      '5': {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 54
        }
      },
      '6': {
        start: {
          line: 31,
          column: 24
        },
        end: {
          line: 42,
          column: 1
        }
      },
      '7': {
        start: {
          line: 32,
          column: 57
        },
        end: {
          line: 32,
          column: 70
        }
      },
      '8': {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 41,
          column: 4
        }
      },
      '9': {
        start: {
          line: 44,
          column: 0
        },
        end: {
          line: 47,
          column: 2
        }
      },
      '10': {
        start: {
          line: 49,
          column: 0
        },
        end: {
          line: 54,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 18,
            column: 31
          },
          end: {
            line: 18,
            column: 32
          }
        },
        loc: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        line: 19
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        loc: {
          start: {
            line: 20,
            column: 106
          },
          end: {
            line: 27,
            column: 5
          }
        },
        line: 20
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 21,
            column: 13
          },
          end: {
            line: 21,
            column: 14
          }
        },
        loc: {
          start: {
            line: 21,
            column: 19
          },
          end: {
            line: 24,
            column: 7
          }
        },
        line: 21
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 31,
            column: 24
          },
          end: {
            line: 31,
            column: 25
          }
        },
        loc: {
          start: {
            line: 31,
            column: 68
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 31
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 23,
            column: 8
          },
          end: {
            line: 23,
            column: 53
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 23,
              column: 8
            },
            end: {
              line: 23,
              column: 26
            }
          },
          {
            start: {
              line: 23,
              column: 30
            },
            end: {
              line: 23,
              column: 53
            }
          }
        ],
        line: 23
      },
      '1': {
        loc: {
          start: {
            line: 37,
            column: 9
          },
          end: {
            line: 37,
            column: 37
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 37,
              column: 9
            },
            end: {
              line: 37,
              column: 14
            }
          },
          {
            start: {
              line: 37,
              column: 18
            },
            end: {
              line: 37,
              column: 37
            }
          }
        ],
        line: 37
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
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '05d1d8ec576706c0557cabb155bf161be4046dd4'
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
exports.connectSuggestedAction = exports.default = void 0;

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireDefault(require('react'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _useStyleSet = _interopRequireDefault(require('../hooks/useStyleSet'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === '[object Arguments]')) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var SUGGESTED_ACTION_CSS =
  (cov_i30hf53r5.s[0]++,
  (0, _glamor.css)({
    display: 'inline-block',
    whiteSpace: 'initial',
    '& > button': {
      display: 'flex'
    }
  }));
cov_i30hf53r5.s[1]++;

var connectSuggestedAction = function connectSuggestedAction() {
  cov_i30hf53r5.f[0]++;
  cov_i30hf53r5.s[2]++;

  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref, _ref2) {
        var clearSuggestedActions = _ref.clearSuggestedActions,
          disabled = _ref.disabled,
          language = _ref.language,
          onCardAction = _ref.onCardAction;
        var displayText = _ref2.displayText,
          text = _ref2.text,
          type = _ref2.type,
          value = _ref2.value;
        cov_i30hf53r5.f[1]++;
        cov_i30hf53r5.s[3]++;
        return {
          click: function click() {
            cov_i30hf53r5.f[2]++;
            cov_i30hf53r5.s[4]++;
            onCardAction({
              displayText: displayText,
              text: text,
              type: type,
              value: value
            });
            cov_i30hf53r5.s[5]++;
            (cov_i30hf53r5.b[0][0]++, type === 'openUrl') && (cov_i30hf53r5.b[0][1]++, clearSuggestedActions());
          },
          disabled: disabled,
          language: language
        };
      }
    ].concat(selectors)
  );
};

exports.connectSuggestedAction = connectSuggestedAction;
cov_i30hf53r5.s[6]++;

var SuggestedAction = function SuggestedAction(_ref3) {
  var buttonText = _ref3.buttonText,
    click = _ref3.click,
    disabled = _ref3.disabled,
    image = _ref3.image;
  cov_i30hf53r5.f[3]++;

  var _ref4 = (cov_i30hf53r5.s[7]++, (0, _useStyleSet.default)()),
    _ref5 = _slicedToArray(_ref4, 1),
    suggestedActionStyleSet = _ref5[0].suggestedAction;

  cov_i30hf53r5.s[8]++;
  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(suggestedActionStyleSet + '', SUGGESTED_ACTION_CSS + '')
    },
    _react.default.createElement(
      'button',
      {
        disabled: disabled,
        onClick: click,
        type: 'button'
      },
      (cov_i30hf53r5.b[1][0]++, image) &&
        (cov_i30hf53r5.b[1][1]++,
        _react.default.createElement('img', {
          src: image
        })),
      _react.default.createElement('nobr', null, buttonText)
    )
  );
};

cov_i30hf53r5.s[9]++;
SuggestedAction.defaultProps = {
  disabled: false,
  image: ''
};
cov_i30hf53r5.s[10]++;
SuggestedAction.propTypes = {
  buttonText: _propTypes.default.string.isRequired,
  click: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool,
  image: _propTypes.default.string
};

var _default = connectSuggestedAction()(SuggestedAction);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L1N1Z2dlc3RlZEFjdGlvbi5qcyJdLCJuYW1lcyI6WyJTVUdHRVNURURfQUNUSU9OX0NTUyIsImRpc3BsYXkiLCJ3aGl0ZVNwYWNlIiwiY29ubmVjdFN1Z2dlc3RlZEFjdGlvbiIsInNlbGVjdG9ycyIsImNsZWFyU3VnZ2VzdGVkQWN0aW9ucyIsImRpc2FibGVkIiwibGFuZ3VhZ2UiLCJvbkNhcmRBY3Rpb24iLCJkaXNwbGF5VGV4dCIsInRleHQiLCJ0eXBlIiwidmFsdWUiLCJjbGljayIsIlN1Z2dlc3RlZEFjdGlvbiIsImJ1dHRvblRleHQiLCJpbWFnZSIsInN1Z2dlc3RlZEFjdGlvblN0eWxlU2V0Iiwic3VnZ2VzdGVkQWN0aW9uIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CLDBCQUFHLGlCQUFJO0FBQy9CQyxFQUFBQSxPQUFPLEVBQUUsY0FEc0I7QUFFL0JDLEVBQUFBLFVBQVUsRUFBRSxTQUZtQjtBQUkvQixnQkFBYztBQUNaRCxJQUFBQSxPQUFPLEVBQUU7QUFERztBQUppQixDQUFKLENBQUgsQ0FBMUI7OztBQVNBLElBQU1FLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FDN0I7QUFBQTtBQUFBOztBQUFBLG9DQURpQ0MsU0FDakM7QUFEaUNBLElBQUFBLFNBQ2pDO0FBQUE7O0FBQUEsa0RBQ0UsdUJBQXNHO0FBQUEsUUFBbkdDLHFCQUFtRyxRQUFuR0EscUJBQW1HO0FBQUEsUUFBNUVDLFFBQTRFLFFBQTVFQSxRQUE0RTtBQUFBLFFBQWxFQyxRQUFrRSxRQUFsRUEsUUFBa0U7QUFBQSxRQUF4REMsWUFBd0QsUUFBeERBLFlBQXdEO0FBQUEsUUFBdENDLFdBQXNDLFNBQXRDQSxXQUFzQztBQUFBLFFBQXpCQyxJQUF5QixTQUF6QkEsSUFBeUI7QUFBQSxRQUFuQkMsSUFBbUIsU0FBbkJBLElBQW1CO0FBQUEsUUFBYkMsS0FBYSxTQUFiQSxLQUFhO0FBQUE7QUFBQTtBQUFBO0FBQ3BHQyxNQUFBQSxLQUFLLEVBQUUsaUJBQU07QUFBQTtBQUFBO0FBQ1hMLFFBQUFBLFlBQVksQ0FBQztBQUFFQyxVQUFBQSxXQUFXLEVBQVhBLFdBQUY7QUFBZUMsVUFBQUEsSUFBSSxFQUFKQSxJQUFmO0FBQXFCQyxVQUFBQSxJQUFJLEVBQUpBLElBQXJCO0FBQTJCQyxVQUFBQSxLQUFLLEVBQUxBO0FBQTNCLFNBQUQsQ0FBWjtBQURXO0FBRVgsa0NBQUFELElBQUksS0FBSyxTQUFULCtCQUFzQk4scUJBQXFCLEVBQTNDO0FBQ0QsT0FKbUc7QUFLcEdDLE1BQUFBLFFBQVEsRUFBUkEsUUFMb0c7QUFNcEdDLE1BQUFBLFFBQVEsRUFBUkE7QUFOb0c7QUFPckcsR0FSSCxTQVNLSCxTQVRMO0FBVUMsQ0FYSDs7Ozs7QUFhQSxJQUFNVSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLFFBQTRDO0FBQUEsTUFBekNDLFVBQXlDLFNBQXpDQSxVQUF5QztBQUFBLE1BQTdCRixLQUE2QixTQUE3QkEsS0FBNkI7QUFBQSxNQUF0QlAsUUFBc0IsU0FBdEJBLFFBQXNCO0FBQUEsTUFBWlUsS0FBWSxTQUFaQSxLQUFZO0FBQUE7O0FBQUEscUNBQ1gsMkJBRFc7QUFBQTtBQUFBLE1BQ3hDQyx1QkFEd0MsWUFDekRDLGVBRHlEOztBQUFBO0FBR2xFLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRSx5QkFBV0QsdUJBQXVCLEdBQUcsRUFBckMsRUFBeUNqQixvQkFBb0IsR0FBRyxFQUFoRTtBQUFoQixLQUNFO0FBQVEsSUFBQSxRQUFRLEVBQUVNLFFBQWxCO0FBQTRCLElBQUEsT0FBTyxFQUFFTyxLQUFyQztBQUE0QyxJQUFBLElBQUksRUFBQztBQUFqRCxLQUNHLDBCQUFBRyxLQUFLLCtCQUFJO0FBQUssSUFBQSxHQUFHLEVBQUVBO0FBQVYsSUFBSixDQURSLEVBRUUsMkNBQU9ELFVBQVAsQ0FGRixDQURGLENBREY7QUFRRCxDQVhEOzs7QUFhQUQsZUFBZSxDQUFDSyxZQUFoQixHQUErQjtBQUM3QmIsRUFBQUEsUUFBUSxFQUFFLEtBRG1CO0FBRTdCVSxFQUFBQSxLQUFLLEVBQUU7QUFGc0IsQ0FBL0I7O0FBS0FGLGVBQWUsQ0FBQ00sU0FBaEIsR0FBNEI7QUFDMUJMLEVBQUFBLFVBQVUsRUFBRU0sbUJBQVVDLE1BQVYsQ0FBaUJDLFVBREg7QUFFMUJWLEVBQUFBLEtBQUssRUFBRVEsbUJBQVVHLElBQVYsQ0FBZUQsVUFGSTtBQUcxQmpCLEVBQUFBLFFBQVEsRUFBRWUsbUJBQVVJLElBSE07QUFJMUJULEVBQUFBLEtBQUssRUFBRUssbUJBQVVDO0FBSlMsQ0FBNUI7O2VBT2VuQixzQkFBc0IsR0FBR1csZUFBSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlU2V0JztcblxuY29uc3QgU1VHR0VTVEVEX0FDVElPTl9DU1MgPSBjc3Moe1xuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgd2hpdGVTcGFjZTogJ2luaXRpYWwnLFxuXG4gICcmID4gYnV0dG9uJzoge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9XG59KTtcblxuY29uc3QgY29ubmVjdFN1Z2dlc3RlZEFjdGlvbiA9ICguLi5zZWxlY3RvcnMpID0+XG4gIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKHsgY2xlYXJTdWdnZXN0ZWRBY3Rpb25zLCBkaXNhYmxlZCwgbGFuZ3VhZ2UsIG9uQ2FyZEFjdGlvbiB9LCB7IGRpc3BsYXlUZXh0LCB0ZXh0LCB0eXBlLCB2YWx1ZSB9KSA9PiAoe1xuICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgb25DYXJkQWN0aW9uKHsgZGlzcGxheVRleHQsIHRleHQsIHR5cGUsIHZhbHVlIH0pO1xuICAgICAgICB0eXBlID09PSAnb3BlblVybCcgJiYgY2xlYXJTdWdnZXN0ZWRBY3Rpb25zKCk7XG4gICAgICB9LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBsYW5ndWFnZVxuICAgIH0pLFxuICAgIC4uLnNlbGVjdG9yc1xuICApO1xuXG5jb25zdCBTdWdnZXN0ZWRBY3Rpb24gPSAoeyBidXR0b25UZXh0LCBjbGljaywgZGlzYWJsZWQsIGltYWdlIH0pID0+IHtcbiAgY29uc3QgW3sgc3VnZ2VzdGVkQWN0aW9uOiBzdWdnZXN0ZWRBY3Rpb25TdHlsZVNldCB9XSA9IHVzZVN0eWxlU2V0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdWdnZXN0ZWRBY3Rpb25TdHlsZVNldCArICcnLCBTVUdHRVNURURfQUNUSU9OX0NTUyArICcnKX0+XG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH0gb25DbGljaz17Y2xpY2t9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAge2ltYWdlICYmIDxpbWcgc3JjPXtpbWFnZX0gLz59XG4gICAgICAgIDxub2JyPntidXR0b25UZXh0fTwvbm9icj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU3VnZ2VzdGVkQWN0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBpbWFnZTogJydcbn07XG5cblN1Z2dlc3RlZEFjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGJ1dHRvblRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RTdWdnZXN0ZWRBY3Rpb24oKShTdWdnZXN0ZWRBY3Rpb24pO1xuXG5leHBvcnQgeyBjb25uZWN0U3VnZ2VzdGVkQWN0aW9uIH07XG4iXX0=
