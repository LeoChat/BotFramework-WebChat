'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = sendPostBackToPostActivitySaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _sendPostBack = require('../actions/sendPostBack');

var _postActivity = _interopRequireDefault(require('../actions/postActivity'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(postActivityWithPostBack),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendPostBackToPostActivity),
  _marked3 =
    /*#__PURE__*/
    _regenerator['default'].mark(sendPostBackToPostActivitySaga);

function postActivityWithPostBack(_ref) {
  var value;
  return _regenerator['default'].wrap(function postActivityWithPostBack$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          value = _ref.payload.value;
          _context.next = 3;
          return (0, _effects.put)(
            (0, _postActivity['default'])({
              channelData: {
                postBack: true
              },
              text: typeof value === 'string' ? value : undefined,
              type: 'message',
              value: typeof value !== 'string' ? value : undefined
            })
          );

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}

function sendPostBackToPostActivity() {
  return _regenerator['default'].wrap(function sendPostBackToPostActivity$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)(function(_ref2) {
            var payload = _ref2.payload,
              type = _ref2.type;
            return type === _sendPostBack.SEND_POST_BACK && payload.value;
          }, postActivityWithPostBack);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2);
}

function sendPostBackToPostActivitySaga() {
  return _regenerator['default'].wrap(function sendPostBackToPostActivitySaga$(_context3) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          _context3.next = 2;
          return (0, _whileConnected['default'])(sendPostBackToPostActivity);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zZW5kUG9zdEJhY2tUb1Bvc3RBY3Rpdml0eVNhZ2EuanMiXSwibmFtZXMiOlsicG9zdEFjdGl2aXR5V2l0aFBvc3RCYWNrIiwic2VuZFBvc3RCYWNrVG9Qb3N0QWN0aXZpdHkiLCJzZW5kUG9zdEJhY2tUb1Bvc3RBY3Rpdml0eVNhZ2EiLCJ2YWx1ZSIsInBheWxvYWQiLCJjaGFubmVsRGF0YSIsInBvc3RCYWNrIiwidGV4dCIsInVuZGVmaW5lZCIsInR5cGUiLCJTRU5EX1BPU1RfQkFDSyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs2QkFFVUEsd0I7Ozs2QkFhQUMsMEI7Ozs2QkFJZUMsOEI7O0FBakJ6QixTQUFVRix3QkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0RHLFVBQUFBLEtBQWhELFFBQXFDQyxPQUFyQyxDQUFnREQsS0FBaEQ7QUFBQTtBQUNFLGlCQUFNLGtCQUNKLDhCQUFhO0FBQ1hFLFlBQUFBLFdBQVcsRUFBRTtBQUNYQyxjQUFBQSxRQUFRLEVBQUU7QUFEQyxhQURGO0FBSVhDLFlBQUFBLElBQUksRUFBRSxPQUFPSixLQUFQLEtBQWlCLFFBQWpCLEdBQTRCQSxLQUE1QixHQUFvQ0ssU0FKL0I7QUFLWEMsWUFBQUEsSUFBSSxFQUFFLFNBTEs7QUFNWE4sWUFBQUEsS0FBSyxFQUFFLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsR0FBNEJBLEtBQTVCLEdBQW9DSztBQU5oQyxXQUFiLENBREksQ0FBTjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhQSxTQUFVUCwwQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTSx3QkFBVTtBQUFBLGdCQUFHRyxPQUFILFNBQUdBLE9BQUg7QUFBQSxnQkFBWUssSUFBWixTQUFZQSxJQUFaO0FBQUEsbUJBQXVCQSxJQUFJLEtBQUtDLDRCQUFULElBQTJCTixPQUFPLENBQUNELEtBQTFEO0FBQUEsV0FBVixFQUEyRUgsd0JBQTNFLENBQU47O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUUsOEJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2IsaUJBQU0sZ0NBQWVELDBCQUFmLENBQU47O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIGZvciB0aGUgdGVybmFyeSBvcGVyYXRvciBvZiB0ZXh0IGFuZCB2YWx1ZS5cbi8qIGVzbGludCBuby11bmRlZmluZWQ6IFwib2ZmXCIgKi9cblxuaW1wb3J0IHsgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBTRU5EX1BPU1RfQkFDSyB9IGZyb20gJy4uL2FjdGlvbnMvc2VuZFBvc3RCYWNrJztcbmltcG9ydCBwb3N0QWN0aXZpdHkgZnJvbSAnLi4vYWN0aW9ucy9wb3N0QWN0aXZpdHknO1xuaW1wb3J0IHdoaWxlQ29ubmVjdGVkIGZyb20gJy4vZWZmZWN0cy93aGlsZUNvbm5lY3RlZCc7XG5cbmZ1bmN0aW9uKiBwb3N0QWN0aXZpdHlXaXRoUG9zdEJhY2soeyBwYXlsb2FkOiB7IHZhbHVlIH0gfSkge1xuICB5aWVsZCBwdXQoXG4gICAgcG9zdEFjdGl2aXR5KHtcbiAgICAgIGNoYW5uZWxEYXRhOiB7XG4gICAgICAgIHBvc3RCYWNrOiB0cnVlXG4gICAgICB9LFxuICAgICAgdGV4dDogdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogdW5kZWZpbmVkLFxuICAgICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgICAgdmFsdWU6IHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgPyB2YWx1ZSA6IHVuZGVmaW5lZFxuICAgIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uKiBzZW5kUG9zdEJhY2tUb1Bvc3RBY3Rpdml0eSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KCh7IHBheWxvYWQsIHR5cGUgfSkgPT4gdHlwZSA9PT0gU0VORF9QT1NUX0JBQ0sgJiYgcGF5bG9hZC52YWx1ZSwgcG9zdEFjdGl2aXR5V2l0aFBvc3RCYWNrKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHNlbmRQb3N0QmFja1RvUG9zdEFjdGl2aXR5U2FnYSgpIHtcbiAgeWllbGQgd2hpbGVDb25uZWN0ZWQoc2VuZFBvc3RCYWNrVG9Qb3N0QWN0aXZpdHkpO1xufVxuIl19
