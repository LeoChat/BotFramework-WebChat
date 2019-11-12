'use strict';

var cov_2ankhsmdj2 = (function() {
  var path = '/home/guy/leo/BotFramework-WebChat/packages/core/src/reducer.ts';
  var hash = '37866d8c943ef59914f894efdcc89c51fed7cc5e';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path: '/home/guy/leo/BotFramework-WebChat/packages/core/src/reducer.ts',
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
    hash: '37866d8c943ef59914f894efdcc89c51fed7cc5e'
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
exports['default'] = void 0;

var _redux = require('redux');

var _activities = _interopRequireDefault(require('./reducers/activities'));

var _clockSkewAdjustment = _interopRequireDefault(require('./reducers/clockSkewAdjustment'));

var _connectivityStatus = _interopRequireDefault(require('./reducers/connectivityStatus'));

var _dictateInterims = _interopRequireDefault(require('./reducers/dictateInterims'));

var _dictateState = _interopRequireDefault(require('./reducers/dictateState'));

var _direction = _interopRequireDefault(require('./reducers/direction'));

var _language = _interopRequireDefault(require('./reducers/language'));

var _lastTypingAt = _interopRequireDefault(require('./reducers/lastTypingAt'));

var _readyState = _interopRequireDefault(require('./reducers/readyState'));

var _referenceGrammarID = _interopRequireDefault(require('./reducers/referenceGrammarID'));

var _sendBoxValue = _interopRequireDefault(require('./reducers/sendBoxValue'));

var _sendTimeout = _interopRequireDefault(require('./reducers/sendTimeout'));

var _sendTypingIndicator = _interopRequireDefault(require('./reducers/sendTypingIndicator'));

var _shouldSpeakIncomingActivity = _interopRequireDefault(require('./reducers/shouldSpeakIncomingActivity'));

var _suggestedActions = _interopRequireDefault(require('./reducers/suggestedActions'));

var _default = (0, _redux.combineReducers)({
  activities: _activities['default'],
  clockSkewAdjustment: _clockSkewAdjustment['default'],
  connectivityStatus: _connectivityStatus['default'],
  dictateInterims: _dictateInterims['default'],
  dictateState: _dictateState['default'],
  direction: _direction['default'],
  language: _language['default'],
  lastTypingAt: _lastTypingAt['default'],
  readyState: _readyState['default'],
  referenceGrammarID: _referenceGrammarID['default'],
  sendBoxValue: _sendBoxValue['default'],
  sendTimeout: _sendTimeout['default'],
  sendTypingIndicator: _sendTypingIndicator['default'],
  shouldSpeakIncomingActivity: _shouldSpeakIncomingActivity['default'],
  suggestedActions: _suggestedActions['default'],
  // TODO: [P3] Take this deprecation code out when releasing on or after January 13 2020
  sendTyping: _sendTypingIndicator['default']
});

exports['default'] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbImFjdGl2aXRpZXMiLCJjbG9ja1NrZXdBZGp1c3RtZW50IiwiY29ubmVjdGl2aXR5U3RhdHVzIiwiZGljdGF0ZUludGVyaW1zIiwiZGljdGF0ZVN0YXRlIiwiZGlyZWN0aW9uIiwibGFuZ3VhZ2UiLCJsYXN0VHlwaW5nQXQiLCJyZWFkeVN0YXRlIiwicmVmZXJlbmNlR3JhbW1hcklEIiwic2VuZEJveFZhbHVlIiwic2VuZFRpbWVvdXQiLCJzZW5kVHlwaW5nSW5kaWNhdG9yIiwic2hvdWxkU3BlYWtJbmNvbWluZ0FjdGl2aXR5Iiwic3VnZ2VzdGVkQWN0aW9ucyIsInNlbmRUeXBpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7ZUFFZSw0QkFBZ0I7QUFDN0JBLEVBQUFBLFVBQVUsRUFBVkEsc0JBRDZCO0FBRTdCQyxFQUFBQSxtQkFBbUIsRUFBbkJBLCtCQUY2QjtBQUc3QkMsRUFBQUEsa0JBQWtCLEVBQWxCQSw4QkFINkI7QUFJN0JDLEVBQUFBLGVBQWUsRUFBZkEsMkJBSjZCO0FBSzdCQyxFQUFBQSxZQUFZLEVBQVpBLHdCQUw2QjtBQU03QkMsRUFBQUEsU0FBUyxFQUFUQSxxQkFONkI7QUFPN0JDLEVBQUFBLFFBQVEsRUFBUkEsb0JBUDZCO0FBUTdCQyxFQUFBQSxZQUFZLEVBQVpBLHdCQVI2QjtBQVM3QkMsRUFBQUEsVUFBVSxFQUFWQSxzQkFUNkI7QUFVN0JDLEVBQUFBLGtCQUFrQixFQUFsQkEsOEJBVjZCO0FBVzdCQyxFQUFBQSxZQUFZLEVBQVpBLHdCQVg2QjtBQVk3QkMsRUFBQUEsV0FBVyxFQUFYQSx1QkFaNkI7QUFhN0JDLEVBQUFBLG1CQUFtQixFQUFuQkEsK0JBYjZCO0FBYzdCQyxFQUFBQSwyQkFBMkIsRUFBM0JBLHVDQWQ2QjtBQWU3QkMsRUFBQUEsZ0JBQWdCLEVBQWhCQSw0QkFmNkI7QUFpQjdCO0FBQ0FDLEVBQUFBLFVBQVUsRUFBRUg7QUFsQmlCLENBQWhCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBhY3Rpdml0aWVzIGZyb20gJy4vcmVkdWNlcnMvYWN0aXZpdGllcyc7XG5pbXBvcnQgY2xvY2tTa2V3QWRqdXN0bWVudCBmcm9tICcuL3JlZHVjZXJzL2Nsb2NrU2tld0FkanVzdG1lbnQnO1xuaW1wb3J0IGNvbm5lY3Rpdml0eVN0YXR1cyBmcm9tICcuL3JlZHVjZXJzL2Nvbm5lY3Rpdml0eVN0YXR1cyc7XG5pbXBvcnQgZGljdGF0ZUludGVyaW1zIGZyb20gJy4vcmVkdWNlcnMvZGljdGF0ZUludGVyaW1zJztcbmltcG9ydCBkaWN0YXRlU3RhdGUgZnJvbSAnLi9yZWR1Y2Vycy9kaWN0YXRlU3RhdGUnO1xuaW1wb3J0IGRpcmVjdGlvbiBmcm9tICcuL3JlZHVjZXJzL2RpcmVjdGlvbic7XG5pbXBvcnQgbGFuZ3VhZ2UgZnJvbSAnLi9yZWR1Y2Vycy9sYW5ndWFnZSc7XG5pbXBvcnQgbGFzdFR5cGluZ0F0IGZyb20gJy4vcmVkdWNlcnMvbGFzdFR5cGluZ0F0JztcbmltcG9ydCByZWFkeVN0YXRlIGZyb20gJy4vcmVkdWNlcnMvcmVhZHlTdGF0ZSc7XG5pbXBvcnQgcmVmZXJlbmNlR3JhbW1hcklEIGZyb20gJy4vcmVkdWNlcnMvcmVmZXJlbmNlR3JhbW1hcklEJztcbmltcG9ydCBzZW5kQm94VmFsdWUgZnJvbSAnLi9yZWR1Y2Vycy9zZW5kQm94VmFsdWUnO1xuaW1wb3J0IHNlbmRUaW1lb3V0IGZyb20gJy4vcmVkdWNlcnMvc2VuZFRpbWVvdXQnO1xuaW1wb3J0IHNlbmRUeXBpbmdJbmRpY2F0b3IgZnJvbSAnLi9yZWR1Y2Vycy9zZW5kVHlwaW5nSW5kaWNhdG9yJztcbmltcG9ydCBzaG91bGRTcGVha0luY29taW5nQWN0aXZpdHkgZnJvbSAnLi9yZWR1Y2Vycy9zaG91bGRTcGVha0luY29taW5nQWN0aXZpdHknO1xuaW1wb3J0IHN1Z2dlc3RlZEFjdGlvbnMgZnJvbSAnLi9yZWR1Y2Vycy9zdWdnZXN0ZWRBY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgYWN0aXZpdGllcyxcbiAgY2xvY2tTa2V3QWRqdXN0bWVudCxcbiAgY29ubmVjdGl2aXR5U3RhdHVzLFxuICBkaWN0YXRlSW50ZXJpbXMsXG4gIGRpY3RhdGVTdGF0ZSxcbiAgZGlyZWN0aW9uLFxuICBsYW5ndWFnZSxcbiAgbGFzdFR5cGluZ0F0LFxuICByZWFkeVN0YXRlLFxuICByZWZlcmVuY2VHcmFtbWFySUQsXG4gIHNlbmRCb3hWYWx1ZSxcbiAgc2VuZFRpbWVvdXQsXG4gIHNlbmRUeXBpbmdJbmRpY2F0b3IsXG4gIHNob3VsZFNwZWFrSW5jb21pbmdBY3Rpdml0eSxcbiAgc3VnZ2VzdGVkQWN0aW9ucyxcblxuICAvLyBUT0RPOiBbUDNdIFRha2UgdGhpcyBkZXByZWNhdGlvbiBjb2RlIG91dCB3aGVuIHJlbGVhc2luZyBvbiBvciBhZnRlciBKYW51YXJ5IDEzIDIwMjBcbiAgc2VuZFR5cGluZzogc2VuZFR5cGluZ0luZGljYXRvclxufSk7XG4iXX0=
