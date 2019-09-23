'use strict';

var cov_elhdwptov = (function() {
  var path =
    '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/createCognitiveServicesSpeechServicesPonyfillFactory.js';
  var hash = '25a9a49d1c766ccdd9de237777088be7a9995f83';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      '/Users/guy/Work/Leo/leo/BotFramework-WebChat/packages/bundle/src/createCognitiveServicesSpeechServicesPonyfillFactory.js',
    statementMap: {
      '0': {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 15,
          column: 4
        }
      },
      '1': {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 38,
          column: 4
        }
      },
      '2': {
        start: {
          line: 18,
          column: 21
        },
        end: {
          line: 28,
          column: 6
        }
      },
      '3': {
        start: {
          line: 30,
          column: 96
        },
        end: {
          line: 30,
          column: 104
        }
      },
      '4': {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 37,
          column: 6
        }
      }
    },
    fnMap: {
      '0': {
        name: 'createCognitiveServicesSpeechServicesPonyfillFactory',
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 76
          }
        },
        loc: {
          start: {
            line: 12,
            column: 3
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 12
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 17,
            column: 9
          },
          end: {
            line: 17,
            column: 10
          }
        },
        loc: {
          start: {
            line: 17,
            column: 37
          },
          end: {
            line: 38,
            column: 3
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '25a9a49d1c766ccdd9de237777088be7a9995f83'
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
exports.default = createCognitiveServicesSpeechServicesPonyfillFactory;

var _SpeechServices = _interopRequireDefault(require('web-speech-cognitive-services/lib/SpeechServices'));

function createCognitiveServicesSpeechServicesPonyfillFactory(_ref) {
  var authorizationToken = _ref.authorizationToken,
    enableTelemetry = _ref.enableTelemetry,
    region = _ref.region,
    speechRecognitionEndpointId = _ref.speechRecognitionEndpointId,
    speechSynthesisDeploymentId = _ref.speechSynthesisDeploymentId,
    speechSynthesisOutputFormat = _ref.speechSynthesisOutputFormat,
    subscriptionKey = _ref.subscriptionKey,
    textNormalization = _ref.textNormalization;
  cov_elhdwptov.f[0]++;
  cov_elhdwptov.s[0]++;
  console.warn(
    'Web Chat: Cognitive Services Speech Services support is currently in preview. If you encounter any problems, please file us an issue at https://github.com/microsoft/BotFramework-WebChat/issues/.'
  );
  cov_elhdwptov.s[1]++;
  return function(_ref2) {
    var referenceGrammarID = _ref2.referenceGrammarID;
    cov_elhdwptov.f[1]++;
    var ponyfill =
      (cov_elhdwptov.s[2]++,
      (0, _SpeechServices.default)({
        authorizationToken: authorizationToken,
        enableTelemetry: enableTelemetry,
        referenceGrammars: ['luis/'.concat(referenceGrammarID, '-PRODUCTION')],
        region: region,
        speechRecognitionEndpointId: speechRecognitionEndpointId,
        speechSynthesisDeploymentId: speechSynthesisDeploymentId,
        speechSynthesisOutputFormat: speechSynthesisOutputFormat,
        subscriptionKey: subscriptionKey,
        textNormalization: textNormalization
      }));

    var _ref3 = (cov_elhdwptov.s[3]++, ponyfill),
      SpeechGrammarList = _ref3.SpeechGrammarList,
      SpeechRecognition = _ref3.SpeechRecognition,
      speechSynthesis = _ref3.speechSynthesis,
      SpeechSynthesisUtterance = _ref3.SpeechSynthesisUtterance;

    cov_elhdwptov.s[4]++;
    return {
      SpeechGrammarList: SpeechGrammarList,
      SpeechRecognition: SpeechRecognition,
      speechSynthesis: speechSynthesis,
      SpeechSynthesisUtterance: SpeechSynthesisUtterance
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVDb2duaXRpdmVTZXJ2aWNlc1NwZWVjaFNlcnZpY2VzUG9ueWZpbGxGYWN0b3J5LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzU3BlZWNoU2VydmljZXNQb255ZmlsbEZhY3RvcnkiLCJhdXRob3JpemF0aW9uVG9rZW4iLCJlbmFibGVUZWxlbWV0cnkiLCJyZWdpb24iLCJzcGVlY2hSZWNvZ25pdGlvbkVuZHBvaW50SWQiLCJzcGVlY2hTeW50aGVzaXNEZXBsb3ltZW50SWQiLCJzcGVlY2hTeW50aGVzaXNPdXRwdXRGb3JtYXQiLCJzdWJzY3JpcHRpb25LZXkiLCJ0ZXh0Tm9ybWFsaXphdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwicmVmZXJlbmNlR3JhbW1hcklEIiwicG9ueWZpbGwiLCJyZWZlcmVuY2VHcmFtbWFycyIsIlNwZWVjaEdyYW1tYXJMaXN0IiwiU3BlZWNoUmVjb2duaXRpb24iLCJzcGVlY2hTeW50aGVzaXMiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWUsU0FBU0Esb0RBQVQsT0FTWjtBQUFBLE1BUkRDLGtCQVFDLFFBUkRBLGtCQVFDO0FBQUEsTUFQREMsZUFPQyxRQVBEQSxlQU9DO0FBQUEsTUFOREMsTUFNQyxRQU5EQSxNQU1DO0FBQUEsTUFMREMsMkJBS0MsUUFMREEsMkJBS0M7QUFBQSxNQUpEQywyQkFJQyxRQUpEQSwyQkFJQztBQUFBLE1BSERDLDJCQUdDLFFBSERBLDJCQUdDO0FBQUEsTUFGREMsZUFFQyxRQUZEQSxlQUVDO0FBQUEsTUFEREMsaUJBQ0MsUUFEREEsaUJBQ0M7QUFBQTtBQUFBO0FBQ0RDLEVBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUNFLG9NQURGO0FBREM7QUFLRCxTQUFPLGlCQUE0QjtBQUFBLFFBQXpCQyxrQkFBeUIsU0FBekJBLGtCQUF5QjtBQUFBO0FBQ2pDLFFBQU1DLFFBQVEsMEJBQUcsNkJBQWU7QUFDOUJYLE1BQUFBLGtCQUFrQixFQUFsQkEsa0JBRDhCO0FBRTlCQyxNQUFBQSxlQUFlLEVBQWZBLGVBRjhCO0FBRzlCVyxNQUFBQSxpQkFBaUIsRUFBRSxnQkFBU0Ysa0JBQVQsaUJBSFc7QUFJOUJSLE1BQUFBLE1BQU0sRUFBTkEsTUFKOEI7QUFLOUJDLE1BQUFBLDJCQUEyQixFQUEzQkEsMkJBTDhCO0FBTTlCQyxNQUFBQSwyQkFBMkIsRUFBM0JBLDJCQU44QjtBQU85QkMsTUFBQUEsMkJBQTJCLEVBQTNCQSwyQkFQOEI7QUFROUJDLE1BQUFBLGVBQWUsRUFBZkEsZUFSOEI7QUFTOUJDLE1BQUFBLGlCQUFpQixFQUFqQkE7QUFUOEIsS0FBZixDQUFILENBQWQ7O0FBRGlDLHVDQWEyREksUUFiM0Q7QUFBQSxRQWF6QkUsaUJBYnlCLFNBYXpCQSxpQkFieUI7QUFBQSxRQWFOQyxpQkFiTSxTQWFOQSxpQkFiTTtBQUFBLFFBYWFDLGVBYmIsU0FhYUEsZUFiYjtBQUFBLFFBYThCQyx3QkFiOUIsU0FhOEJBLHdCQWI5Qjs7QUFBQTtBQWVqQyxXQUFPO0FBQ0xILE1BQUFBLGlCQUFpQixFQUFqQkEsaUJBREs7QUFFTEMsTUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFGSztBQUdMQyxNQUFBQSxlQUFlLEVBQWZBLGVBSEs7QUFJTEMsTUFBQUEsd0JBQXdCLEVBQXhCQTtBQUpLLEtBQVA7QUFNRCxHQXJCRDtBQXNCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVQb255ZmlsbCBmcm9tICd3ZWItc3BlZWNoLWNvZ25pdGl2ZS1zZXJ2aWNlcy9saWIvU3BlZWNoU2VydmljZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb2duaXRpdmVTZXJ2aWNlc1NwZWVjaFNlcnZpY2VzUG9ueWZpbGxGYWN0b3J5KHtcbiAgYXV0aG9yaXphdGlvblRva2VuLFxuICBlbmFibGVUZWxlbWV0cnksXG4gIHJlZ2lvbixcbiAgc3BlZWNoUmVjb2duaXRpb25FbmRwb2ludElkLFxuICBzcGVlY2hTeW50aGVzaXNEZXBsb3ltZW50SWQsXG4gIHNwZWVjaFN5bnRoZXNpc091dHB1dEZvcm1hdCxcbiAgc3Vic2NyaXB0aW9uS2V5LFxuICB0ZXh0Tm9ybWFsaXphdGlvblxufSkge1xuICBjb25zb2xlLndhcm4oXG4gICAgJ1dlYiBDaGF0OiBDb2duaXRpdmUgU2VydmljZXMgU3BlZWNoIFNlcnZpY2VzIHN1cHBvcnQgaXMgY3VycmVudGx5IGluIHByZXZpZXcuIElmIHlvdSBlbmNvdW50ZXIgYW55IHByb2JsZW1zLCBwbGVhc2UgZmlsZSB1cyBhbiBpc3N1ZSBhdCBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L0JvdEZyYW1ld29yay1XZWJDaGF0L2lzc3Vlcy8uJ1xuICApO1xuXG4gIHJldHVybiAoeyByZWZlcmVuY2VHcmFtbWFySUQgfSkgPT4ge1xuICAgIGNvbnN0IHBvbnlmaWxsID0gY3JlYXRlUG9ueWZpbGwoe1xuICAgICAgYXV0aG9yaXphdGlvblRva2VuLFxuICAgICAgZW5hYmxlVGVsZW1ldHJ5LFxuICAgICAgcmVmZXJlbmNlR3JhbW1hcnM6IFtgbHVpcy8ke3JlZmVyZW5jZUdyYW1tYXJJRH0tUFJPRFVDVElPTmBdLFxuICAgICAgcmVnaW9uLFxuICAgICAgc3BlZWNoUmVjb2duaXRpb25FbmRwb2ludElkLFxuICAgICAgc3BlZWNoU3ludGhlc2lzRGVwbG95bWVudElkLFxuICAgICAgc3BlZWNoU3ludGhlc2lzT3V0cHV0Rm9ybWF0LFxuICAgICAgc3Vic2NyaXB0aW9uS2V5LFxuICAgICAgdGV4dE5vcm1hbGl6YXRpb25cbiAgICB9KTtcblxuICAgIGNvbnN0IHsgU3BlZWNoR3JhbW1hckxpc3QsIFNwZWVjaFJlY29nbml0aW9uLCBzcGVlY2hTeW50aGVzaXMsIFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSB9ID0gcG9ueWZpbGw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgU3BlZWNoR3JhbW1hckxpc3QsXG4gICAgICBTcGVlY2hSZWNvZ25pdGlvbixcbiAgICAgIHNwZWVjaFN5bnRoZXNpcyxcbiAgICAgIFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZVxuICAgIH07XG4gIH07XG59XG4iXX0=
