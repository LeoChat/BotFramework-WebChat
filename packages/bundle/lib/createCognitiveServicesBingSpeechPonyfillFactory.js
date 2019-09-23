'use strict';

var cov_12k94fx19m = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/createCognitiveServicesBingSpeechPonyfillFactory.js';
  var hash = 'c2180542e0203ec9c842bd858b6701d15ce1634c';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/createCognitiveServicesBingSpeechPonyfillFactory.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 11,
          column: 4
        }
      },
      '1': {
        start: {
          line: 6,
          column: 6
        },
        end: {
          line: 6,
          column: 46
        }
      },
      '2': {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 7,
          column: 64
        }
      },
      '3': {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 9,
          column: 27
        }
      },
      '4': {
        start: {
          line: 18,
          column: 19
        },
        end: {
          line: 18,
          column: 80
        }
      },
      '5': {
        start: {
          line: 19,
          column: 75
        },
        end: {
          line: 19,
          column: 83
        }
      },
      '6': {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 26,
          column: 5
        }
      },
      '7': {
        start: {
          line: 21,
          column: 38
        },
        end: {
          line: 26,
          column: 3
        }
      }
    },
    fnMap: {
      '0': {
        name: 'injectReferenceGrammarID',
        decl: {
          start: {
            line: 3,
            column: 9
          },
          end: {
            line: 3,
            column: 33
          }
        },
        loc: {
          start: {
            line: 3,
            column: 96
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 3
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 5,
            column: 5
          }
        },
        loc: {
          start: {
            line: 5,
            column: 12
          },
          end: {
            line: 10,
            column: 5
          }
        },
        line: 5
      },
      '2': {
        name: 'createCognitiveServicesBingSpeechPonyfillFactory',
        decl: {
          start: {
            line: 14,
            column: 30
          },
          end: {
            line: 14,
            column: 78
          }
        },
        loc: {
          start: {
            line: 17,
            column: 3
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 17
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 21,
            column: 9
          },
          end: {
            line: 21,
            column: 10
          }
        },
        loc: {
          start: {
            line: 21,
            column: 38
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 21
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 7,
            column: 39
          },
          end: {
            line: 7,
            column: 63
          }
        },
        type: 'binary-expr',
        locations: [
          {
            start: {
              line: 7,
              column: 39
            },
            end: {
              line: 7,
              column: 57
            }
          },
          {
            start: {
              line: 7,
              column: 61
            },
            end: {
              line: 7,
              column: 63
            }
          }
        ],
        line: 7
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
      '7': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: 'c2180542e0203ec9c842bd858b6701d15ce1634c'
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return (coverage[path] = coverageData);
})();

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createCognitiveServicesBingSpeechPonyfillFactory;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _get2 = _interopRequireDefault(require('@babel/runtime/helpers/get'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _BingSpeech = _interopRequireDefault(require('web-speech-cognitive-services/lib/BingSpeech'));

function injectReferenceGrammarID(_ref, referenceGrammarID) {
  var SpeechGrammarList = _ref.SpeechGrammarList,
    SpeechRecognition = _ref.SpeechRecognition;
  cov_12k94fx19m.f[0]++;
  cov_12k94fx19m.s[0]++;
  return (
    /*#__PURE__*/
    (function(_SpeechRecognition) {
      (0, _inherits2.default)(_class, _SpeechRecognition);

      function _class() {
        (0, _classCallCheck2.default)(this, _class);
        return (0, _possibleConstructorReturn2.default)(
          this,
          (0, _getPrototypeOf2.default)(_class).apply(this, arguments)
        );
      }

      (0, _createClass2.default)(_class, [
        {
          key: 'start',
          value: function start() {
            cov_12k94fx19m.f[1]++;
            cov_12k94fx19m.s[1]++;
            this.grammars = new SpeechGrammarList();
            cov_12k94fx19m.s[2]++;
            this.grammars.referenceGrammar =
              (cov_12k94fx19m.b[0][0]++, referenceGrammarID) || (cov_12k94fx19m.b[0][1]++, '');
            cov_12k94fx19m.s[3]++;
            return (0, _get2.default)((0, _getPrototypeOf2.default)(_class.prototype), 'start', this).call(this);
          }
        }
      ]);
      return _class;
    })(SpeechRecognition)
  );
}

function createCognitiveServicesBingSpeechPonyfillFactory(_x) {
  return _createCognitiveServicesBingSpeechPonyfillFactory.apply(this, arguments);
}

function _createCognitiveServicesBingSpeechPonyfillFactory() {
  _createCognitiveServicesBingSpeechPonyfillFactory = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_ref2) {
      var authorizationToken,
        subscriptionKey,
        ponyfill,
        _ref3,
        SpeechGrammarList,
        speechSynthesis,
        SpeechSynthesisUtterance;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              (authorizationToken = _ref2.authorizationToken), (subscriptionKey = _ref2.subscriptionKey);
              cov_12k94fx19m.f[2]++;
              cov_12k94fx19m.s[4]++;
              _context.next = 5;
              return (0, _BingSpeech.default)({
                authorizationToken: authorizationToken,
                subscriptionKey: subscriptionKey
              });

            case 5:
              ponyfill = _context.sent;
              (_ref3 = (cov_12k94fx19m.s[5]++, ponyfill)),
                (SpeechGrammarList = _ref3.SpeechGrammarList),
                (speechSynthesis = _ref3.speechSynthesis),
                (SpeechSynthesisUtterance = _ref3.SpeechSynthesisUtterance);
              cov_12k94fx19m.s[6]++;
              return _context.abrupt('return', function(_ref4) {
                var referenceGrammarID = _ref4.referenceGrammarID;
                cov_12k94fx19m.f[3]++;
                cov_12k94fx19m.s[7]++;
                return {
                  SpeechGrammarList: SpeechGrammarList,
                  SpeechRecognition: injectReferenceGrammarID(ponyfill, referenceGrammarID),
                  speechSynthesis: speechSynthesis,
                  SpeechSynthesisUtterance: SpeechSynthesisUtterance
                };
              });

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _createCognitiveServicesBingSpeechPonyfillFactory.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVDb2duaXRpdmVTZXJ2aWNlc0JpbmdTcGVlY2hQb255ZmlsbEZhY3RvcnkuanMiXSwibmFtZXMiOlsiaW5qZWN0UmVmZXJlbmNlR3JhbW1hcklEIiwicmVmZXJlbmNlR3JhbW1hcklEIiwiU3BlZWNoR3JhbW1hckxpc3QiLCJTcGVlY2hSZWNvZ25pdGlvbiIsImdyYW1tYXJzIiwicmVmZXJlbmNlR3JhbW1hciIsImNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzQmluZ1NwZWVjaFBvbnlmaWxsRmFjdG9yeSIsImF1dGhvcml6YXRpb25Ub2tlbiIsInN1YnNjcmlwdGlvbktleSIsInBvbnlmaWxsIiwic3BlZWNoU3ludGhlc2lzIiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLHdCQUFULE9BQTRFQyxrQkFBNUUsRUFBZ0c7QUFBQSxNQUE1REMsaUJBQTRELFFBQTVEQSxpQkFBNEQ7QUFBQSxNQUF6Q0MsaUJBQXlDLFFBQXpDQSxpQkFBeUM7QUFBQTtBQUFBO0FBQzlGO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxnQ0FDVTtBQUFBO0FBQUE7QUFDTixlQUFLQyxRQUFMLEdBQWdCLElBQUlGLGlCQUFKLEVBQWhCO0FBRE07QUFFTixlQUFLRSxRQUFMLENBQWNDLGdCQUFkLEdBQWlDLDJCQUFBSixrQkFBa0IsZ0NBQUksRUFBSixDQUFuRDtBQUZNO0FBSU47QUFDRDtBQU5IO0FBQUE7QUFBQSxNQUFxQkUsaUJBQXJCO0FBQUE7QUFRRDs7U0FFNkJHLGdEOzs7Ozs7OzRCQUFmO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYkMsWUFBQUEsa0JBRGEsU0FDYkEsa0JBRGEsRUFFYkMsZUFGYSxTQUViQSxlQUZhO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSVUseUJBQWU7QUFBRUQsY0FBQUEsa0JBQWtCLEVBQWxCQSxrQkFBRjtBQUFzQkMsY0FBQUEsZUFBZSxFQUFmQTtBQUF0QixhQUFmLENBSlY7O0FBQUE7QUFJUEMsWUFBQUEsUUFKTztBQUFBLDRDQUs0REEsUUFMNUQsR0FLTFAsaUJBTEssU0FLTEEsaUJBTEssRUFLY1EsZUFMZCxTQUtjQSxlQUxkLEVBSytCQyx3QkFML0IsU0FLK0JBLHdCQUwvQjtBQUFBO0FBQUEsNkNBT04saUJBQTZCO0FBQUEsa0JBQTFCVixrQkFBMEIsU0FBMUJBLGtCQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUNsQ0MsZ0JBQUFBLGlCQUFpQixFQUFqQkEsaUJBRGtDO0FBRWxDQyxnQkFBQUEsaUJBQWlCLEVBQUVILHdCQUF3QixDQUFDUyxRQUFELEVBQVdSLGtCQUFYLENBRlQ7QUFHbENTLGdCQUFBQSxlQUFlLEVBQWZBLGVBSGtDO0FBSWxDQyxnQkFBQUEsd0JBQXdCLEVBQXhCQTtBQUprQztBQUtuQyxhQVpZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlUG9ueWZpbGwgZnJvbSAnd2ViLXNwZWVjaC1jb2duaXRpdmUtc2VydmljZXMvbGliL0JpbmdTcGVlY2gnO1xuXG5mdW5jdGlvbiBpbmplY3RSZWZlcmVuY2VHcmFtbWFySUQoeyBTcGVlY2hHcmFtbWFyTGlzdCwgU3BlZWNoUmVjb2duaXRpb24gfSwgcmVmZXJlbmNlR3JhbW1hcklEKSB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIFNwZWVjaFJlY29nbml0aW9uIHtcbiAgICBzdGFydCgpIHtcbiAgICAgIHRoaXMuZ3JhbW1hcnMgPSBuZXcgU3BlZWNoR3JhbW1hckxpc3QoKTtcbiAgICAgIHRoaXMuZ3JhbW1hcnMucmVmZXJlbmNlR3JhbW1hciA9IHJlZmVyZW5jZUdyYW1tYXJJRCB8fCAnJztcblxuICAgICAgcmV0dXJuIHN1cGVyLnN0YXJ0KCk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb2duaXRpdmVTZXJ2aWNlc0JpbmdTcGVlY2hQb255ZmlsbEZhY3Rvcnkoe1xuICBhdXRob3JpemF0aW9uVG9rZW4sXG4gIHN1YnNjcmlwdGlvbktleVxufSkge1xuICBjb25zdCBwb255ZmlsbCA9IGF3YWl0IGNyZWF0ZVBvbnlmaWxsKHsgYXV0aG9yaXphdGlvblRva2VuLCBzdWJzY3JpcHRpb25LZXkgfSk7XG4gIGNvbnN0IHsgU3BlZWNoR3JhbW1hckxpc3QsIHNwZWVjaFN5bnRoZXNpcywgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIH0gPSBwb255ZmlsbDtcblxuICByZXR1cm4gKHsgcmVmZXJlbmNlR3JhbW1hcklEIH0pID0+ICh7XG4gICAgU3BlZWNoR3JhbW1hckxpc3QsXG4gICAgU3BlZWNoUmVjb2duaXRpb246IGluamVjdFJlZmVyZW5jZUdyYW1tYXJJRChwb255ZmlsbCwgcmVmZXJlbmNlR3JhbW1hcklEKSxcbiAgICBzcGVlY2hTeW50aGVzaXMsXG4gICAgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlXG4gIH0pO1xufVxuIl19
