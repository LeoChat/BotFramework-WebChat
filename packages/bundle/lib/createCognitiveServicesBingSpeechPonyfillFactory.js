'use strict';

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
            this.grammars = new SpeechGrammarList();
            this.grammars.referenceGrammar = referenceGrammarID || '';
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
      var authorizationToken, subscriptionKey, ponyfill, SpeechGrammarList, speechSynthesis, SpeechSynthesisUtterance;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              (authorizationToken = _ref2.authorizationToken), (subscriptionKey = _ref2.subscriptionKey);
              _context.next = 3;
              return (0, _BingSpeech.default)({
                authorizationToken: authorizationToken,
                subscriptionKey: subscriptionKey
              });

            case 3:
              ponyfill = _context.sent;
              (SpeechGrammarList = ponyfill.SpeechGrammarList),
                (speechSynthesis = ponyfill.speechSynthesis),
                (SpeechSynthesisUtterance = ponyfill.SpeechSynthesisUtterance);
              return _context.abrupt('return', function(_ref3) {
                var referenceGrammarID = _ref3.referenceGrammarID;
                return {
                  SpeechGrammarList: SpeechGrammarList,
                  SpeechRecognition: injectReferenceGrammarID(ponyfill, referenceGrammarID),
                  speechSynthesis: speechSynthesis,
                  SpeechSynthesisUtterance: SpeechSynthesisUtterance
                };
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _createCognitiveServicesBingSpeechPonyfillFactory.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVDb2duaXRpdmVTZXJ2aWNlc0JpbmdTcGVlY2hQb255ZmlsbEZhY3RvcnkuanMiXSwibmFtZXMiOlsiaW5qZWN0UmVmZXJlbmNlR3JhbW1hcklEIiwicmVmZXJlbmNlR3JhbW1hcklEIiwiU3BlZWNoR3JhbW1hckxpc3QiLCJTcGVlY2hSZWNvZ25pdGlvbiIsImdyYW1tYXJzIiwicmVmZXJlbmNlR3JhbW1hciIsImNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzQmluZ1NwZWVjaFBvbnlmaWxsRmFjdG9yeSIsImF1dGhvcml6YXRpb25Ub2tlbiIsInN1YnNjcmlwdGlvbktleSIsInBvbnlmaWxsIiwic3BlZWNoU3ludGhlc2lzIiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0Esd0JBQVQsT0FBNEVDLGtCQUE1RSxFQUFnRztBQUFBLE1BQTVEQyxpQkFBNEQsUUFBNURBLGlCQUE0RDtBQUFBLE1BQXpDQyxpQkFBeUMsUUFBekNBLGlCQUF5QztBQUM5RjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsZ0NBQ1U7QUFDTixlQUFLQyxRQUFMLEdBQWdCLElBQUlGLGlCQUFKLEVBQWhCO0FBQ0EsZUFBS0UsUUFBTCxDQUFjQyxnQkFBZCxHQUFpQ0osa0JBQWtCLElBQUksRUFBdkQ7QUFFQTtBQUNEO0FBTkg7QUFBQTtBQUFBLE1BQXFCRSxpQkFBckI7QUFBQTtBQVFEOztTQUU2QkcsZ0Q7Ozs7Ozs7NEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2JDLFlBQUFBLGtCQURhLFNBQ2JBLGtCQURhLEVBRWJDLGVBRmEsU0FFYkEsZUFGYTtBQUFBO0FBQUEsbUJBSVUseUJBQWU7QUFBRUQsY0FBQUEsa0JBQWtCLEVBQWxCQSxrQkFBRjtBQUFzQkMsY0FBQUEsZUFBZSxFQUFmQTtBQUF0QixhQUFmLENBSlY7O0FBQUE7QUFJUEMsWUFBQUEsUUFKTztBQUtMUCxZQUFBQSxpQkFMSyxHQUs0RE8sUUFMNUQsQ0FLTFAsaUJBTEssRUFLY1EsZUFMZCxHQUs0REQsUUFMNUQsQ0FLY0MsZUFMZCxFQUsrQkMsd0JBTC9CLEdBSzRERixRQUw1RCxDQUsrQkUsd0JBTC9CO0FBQUEsNkNBT047QUFBQSxrQkFBR1Ysa0JBQUgsU0FBR0Esa0JBQUg7QUFBQSxxQkFBNkI7QUFDbENDLGdCQUFBQSxpQkFBaUIsRUFBakJBLGlCQURrQztBQUVsQ0MsZ0JBQUFBLGlCQUFpQixFQUFFSCx3QkFBd0IsQ0FBQ1MsUUFBRCxFQUFXUixrQkFBWCxDQUZUO0FBR2xDUyxnQkFBQUEsZUFBZSxFQUFmQSxlQUhrQztBQUlsQ0MsZ0JBQUFBLHdCQUF3QixFQUF4QkE7QUFKa0MsZUFBN0I7QUFBQSxhQVBNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlUG9ueWZpbGwgZnJvbSAnd2ViLXNwZWVjaC1jb2duaXRpdmUtc2VydmljZXMvbGliL0JpbmdTcGVlY2gnO1xuXG5mdW5jdGlvbiBpbmplY3RSZWZlcmVuY2VHcmFtbWFySUQoeyBTcGVlY2hHcmFtbWFyTGlzdCwgU3BlZWNoUmVjb2duaXRpb24gfSwgcmVmZXJlbmNlR3JhbW1hcklEKSB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIFNwZWVjaFJlY29nbml0aW9uIHtcbiAgICBzdGFydCgpIHtcbiAgICAgIHRoaXMuZ3JhbW1hcnMgPSBuZXcgU3BlZWNoR3JhbW1hckxpc3QoKTtcbiAgICAgIHRoaXMuZ3JhbW1hcnMucmVmZXJlbmNlR3JhbW1hciA9IHJlZmVyZW5jZUdyYW1tYXJJRCB8fCAnJztcblxuICAgICAgcmV0dXJuIHN1cGVyLnN0YXJ0KCk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb2duaXRpdmVTZXJ2aWNlc0JpbmdTcGVlY2hQb255ZmlsbEZhY3Rvcnkoe1xuICBhdXRob3JpemF0aW9uVG9rZW4sXG4gIHN1YnNjcmlwdGlvbktleVxufSkge1xuICBjb25zdCBwb255ZmlsbCA9IGF3YWl0IGNyZWF0ZVBvbnlmaWxsKHsgYXV0aG9yaXphdGlvblRva2VuLCBzdWJzY3JpcHRpb25LZXkgfSk7XG4gIGNvbnN0IHsgU3BlZWNoR3JhbW1hckxpc3QsIHNwZWVjaFN5bnRoZXNpcywgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIH0gPSBwb255ZmlsbDtcblxuICByZXR1cm4gKHsgcmVmZXJlbmNlR3JhbW1hcklEIH0pID0+ICh7XG4gICAgU3BlZWNoR3JhbW1hckxpc3QsXG4gICAgU3BlZWNoUmVjb2duaXRpb246IGluamVjdFJlZmVyZW5jZUdyYW1tYXJJRChwb255ZmlsbCwgcmVmZXJlbmNlR3JhbW1hcklEKSxcbiAgICBzcGVlY2hTeW50aGVzaXMsXG4gICAgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlXG4gIH0pO1xufVxuIl19
