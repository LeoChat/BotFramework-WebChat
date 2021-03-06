'use strict';

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
  console.warn(
    'Web Chat: Cognitive Services Speech Services support is currently in preview. If you encounter any problems, please file us an issue at https://github.com/microsoft/BotFramework-WebChat/issues/.'
  );
  return function(_ref2) {
    var referenceGrammarID = _ref2.referenceGrammarID;
    var ponyfill = (0, _SpeechServices.default)({
      authorizationToken: authorizationToken,
      enableTelemetry: enableTelemetry,
      referenceGrammars: ['luis/'.concat(referenceGrammarID, '-PRODUCTION')],
      region: region,
      speechRecognitionEndpointId: speechRecognitionEndpointId,
      speechSynthesisDeploymentId: speechSynthesisDeploymentId,
      speechSynthesisOutputFormat: speechSynthesisOutputFormat,
      subscriptionKey: subscriptionKey,
      textNormalization: textNormalization
    });
    var SpeechGrammarList = ponyfill.SpeechGrammarList,
      SpeechRecognition = ponyfill.SpeechRecognition,
      speechSynthesis = ponyfill.speechSynthesis,
      SpeechSynthesisUtterance = ponyfill.SpeechSynthesisUtterance;
    return {
      SpeechGrammarList: SpeechGrammarList,
      SpeechRecognition: SpeechRecognition,
      speechSynthesis: speechSynthesis,
      SpeechSynthesisUtterance: SpeechSynthesisUtterance
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVDb2duaXRpdmVTZXJ2aWNlc1NwZWVjaFNlcnZpY2VzUG9ueWZpbGxGYWN0b3J5LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzU3BlZWNoU2VydmljZXNQb255ZmlsbEZhY3RvcnkiLCJhdXRob3JpemF0aW9uVG9rZW4iLCJlbmFibGVUZWxlbWV0cnkiLCJyZWdpb24iLCJzcGVlY2hSZWNvZ25pdGlvbkVuZHBvaW50SWQiLCJzcGVlY2hTeW50aGVzaXNEZXBsb3ltZW50SWQiLCJzcGVlY2hTeW50aGVzaXNPdXRwdXRGb3JtYXQiLCJzdWJzY3JpcHRpb25LZXkiLCJ0ZXh0Tm9ybWFsaXphdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwicmVmZXJlbmNlR3JhbW1hcklEIiwicG9ueWZpbGwiLCJyZWZlcmVuY2VHcmFtbWFycyIsIlNwZWVjaEdyYW1tYXJMaXN0IiwiU3BlZWNoUmVjb2duaXRpb24iLCJzcGVlY2hTeW50aGVzaXMiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVlLFNBQVNBLG9EQUFULE9BU1o7QUFBQSxNQVJEQyxrQkFRQyxRQVJEQSxrQkFRQztBQUFBLE1BUERDLGVBT0MsUUFQREEsZUFPQztBQUFBLE1BTkRDLE1BTUMsUUFOREEsTUFNQztBQUFBLE1BTERDLDJCQUtDLFFBTERBLDJCQUtDO0FBQUEsTUFKREMsMkJBSUMsUUFKREEsMkJBSUM7QUFBQSxNQUhEQywyQkFHQyxRQUhEQSwyQkFHQztBQUFBLE1BRkRDLGVBRUMsUUFGREEsZUFFQztBQUFBLE1BRERDLGlCQUNDLFFBRERBLGlCQUNDO0FBQ0RDLEVBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUNFLG9NQURGO0FBSUEsU0FBTyxpQkFBNEI7QUFBQSxRQUF6QkMsa0JBQXlCLFNBQXpCQSxrQkFBeUI7QUFDakMsUUFBTUMsUUFBUSxHQUFHLDZCQUFlO0FBQzlCWCxNQUFBQSxrQkFBa0IsRUFBbEJBLGtCQUQ4QjtBQUU5QkMsTUFBQUEsZUFBZSxFQUFmQSxlQUY4QjtBQUc5QlcsTUFBQUEsaUJBQWlCLEVBQUUsZ0JBQVNGLGtCQUFULGlCQUhXO0FBSTlCUixNQUFBQSxNQUFNLEVBQU5BLE1BSjhCO0FBSzlCQyxNQUFBQSwyQkFBMkIsRUFBM0JBLDJCQUw4QjtBQU05QkMsTUFBQUEsMkJBQTJCLEVBQTNCQSwyQkFOOEI7QUFPOUJDLE1BQUFBLDJCQUEyQixFQUEzQkEsMkJBUDhCO0FBUTlCQyxNQUFBQSxlQUFlLEVBQWZBLGVBUjhCO0FBUzlCQyxNQUFBQSxpQkFBaUIsRUFBakJBO0FBVDhCLEtBQWYsQ0FBakI7QUFEaUMsUUFhekJNLGlCQWJ5QixHQWEyREYsUUFiM0QsQ0FhekJFLGlCQWJ5QjtBQUFBLFFBYU5DLGlCQWJNLEdBYTJESCxRQWIzRCxDQWFORyxpQkFiTTtBQUFBLFFBYWFDLGVBYmIsR0FhMkRKLFFBYjNELENBYWFJLGVBYmI7QUFBQSxRQWE4QkMsd0JBYjlCLEdBYTJETCxRQWIzRCxDQWE4Qkssd0JBYjlCO0FBZWpDLFdBQU87QUFDTEgsTUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFESztBQUVMQyxNQUFBQSxpQkFBaUIsRUFBakJBLGlCQUZLO0FBR0xDLE1BQUFBLGVBQWUsRUFBZkEsZUFISztBQUlMQyxNQUFBQSx3QkFBd0IsRUFBeEJBO0FBSkssS0FBUDtBQU1ELEdBckJEO0FBc0JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZVBvbnlmaWxsIGZyb20gJ3dlYi1zcGVlY2gtY29nbml0aXZlLXNlcnZpY2VzL2xpYi9TcGVlY2hTZXJ2aWNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzU3BlZWNoU2VydmljZXNQb255ZmlsbEZhY3Rvcnkoe1xuICBhdXRob3JpemF0aW9uVG9rZW4sXG4gIGVuYWJsZVRlbGVtZXRyeSxcbiAgcmVnaW9uLFxuICBzcGVlY2hSZWNvZ25pdGlvbkVuZHBvaW50SWQsXG4gIHNwZWVjaFN5bnRoZXNpc0RlcGxveW1lbnRJZCxcbiAgc3BlZWNoU3ludGhlc2lzT3V0cHV0Rm9ybWF0LFxuICBzdWJzY3JpcHRpb25LZXksXG4gIHRleHROb3JtYWxpemF0aW9uXG59KSB7XG4gIGNvbnNvbGUud2FybihcbiAgICAnV2ViIENoYXQ6IENvZ25pdGl2ZSBTZXJ2aWNlcyBTcGVlY2ggU2VydmljZXMgc3VwcG9ydCBpcyBjdXJyZW50bHkgaW4gcHJldmlldy4gSWYgeW91IGVuY291bnRlciBhbnkgcHJvYmxlbXMsIHBsZWFzZSBmaWxlIHVzIGFuIGlzc3VlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvQm90RnJhbWV3b3JrLVdlYkNoYXQvaXNzdWVzLy4nXG4gICk7XG5cbiAgcmV0dXJuICh7IHJlZmVyZW5jZUdyYW1tYXJJRCB9KSA9PiB7XG4gICAgY29uc3QgcG9ueWZpbGwgPSBjcmVhdGVQb255ZmlsbCh7XG4gICAgICBhdXRob3JpemF0aW9uVG9rZW4sXG4gICAgICBlbmFibGVUZWxlbWV0cnksXG4gICAgICByZWZlcmVuY2VHcmFtbWFyczogW2BsdWlzLyR7cmVmZXJlbmNlR3JhbW1hcklEfS1QUk9EVUNUSU9OYF0sXG4gICAgICByZWdpb24sXG4gICAgICBzcGVlY2hSZWNvZ25pdGlvbkVuZHBvaW50SWQsXG4gICAgICBzcGVlY2hTeW50aGVzaXNEZXBsb3ltZW50SWQsXG4gICAgICBzcGVlY2hTeW50aGVzaXNPdXRwdXRGb3JtYXQsXG4gICAgICBzdWJzY3JpcHRpb25LZXksXG4gICAgICB0ZXh0Tm9ybWFsaXphdGlvblxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBTcGVlY2hHcmFtbWFyTGlzdCwgU3BlZWNoUmVjb2duaXRpb24sIHNwZWVjaFN5bnRoZXNpcywgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIH0gPSBwb255ZmlsbDtcblxuICAgIHJldHVybiB7XG4gICAgICBTcGVlY2hHcmFtbWFyTGlzdCxcbiAgICAgIFNwZWVjaFJlY29nbml0aW9uLFxuICAgICAgc3BlZWNoU3ludGhlc2lzLFxuICAgICAgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlXG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==
