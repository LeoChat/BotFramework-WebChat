'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = speakActivityAndStartDictateOnIncomingActivityFromOthersSaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _incomingActivity = require('../actions/incomingActivity');

var _markActivity = _interopRequireDefault(require('../actions/markActivity'));

var _shouldSpeakIncomingActivity = _interopRequireDefault(require('../selectors/shouldSpeakIncomingActivity'));

var _speakableActivity = _interopRequireDefault(require('../definitions/speakableActivity'));

var _startDictate = _interopRequireDefault(require('../actions/startDictate'));

var _stopDictate = _interopRequireDefault(require('../actions/stopDictate'));

var _whileConnected = _interopRequireDefault(require('./effects/whileConnected'));

var _marked =
    /*#__PURE__*/
    _regenerator['default'].mark(speakActivityAndStartDictateOnIncomingActivityFromOthers),
  _marked2 =
    /*#__PURE__*/
    _regenerator['default'].mark(speakActivityAndStartDictateOnIncomingActivityFromOthersSaga);

function speakActivityAndStartDictateOnIncomingActivityFromOthers(_ref) {
  var userID;
  return _regenerator['default'].wrap(function speakActivityAndStartDictateOnIncomingActivityFromOthers$(_context2) {
    while (1) {
      switch ((_context2.prev = _context2.next)) {
        case 0:
          userID = _ref.userID;
          _context2.next = 3;
          return (0, _effects.takeEvery)(
            function(_ref2) {
              var payload = _ref2.payload,
                type = _ref2.type;
              return type === _incomingActivity.INCOMING_ACTIVITY && payload.activity.from.id !== userID;
            },
            /*#__PURE__*/
            _regenerator['default'].mark(function _callee(_ref3) {
              var activity, shouldSpeakIncomingActivity, shouldSpeak;
              return _regenerator['default'].wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      activity = _ref3.payload.activity;
                      _context.next = 3;
                      return (0, _effects.select)(_shouldSpeakIncomingActivity['default']);

                    case 3:
                      shouldSpeakIncomingActivity = _context.sent;
                      shouldSpeak = (0, _speakableActivity['default'])(activity) && shouldSpeakIncomingActivity;

                      if (
                        !(
                          shouldSpeak &&
                          (activity.speak ||
                            activity.text ||
                            ~(activity.attachments || []).findIndex(function(_ref4) {
                              var _ref4$content = _ref4.content;
                              _ref4$content = _ref4$content === void 0 ? {} : _ref4$content;
                              var speak = _ref4$content.speak;
                              return speak;
                            }))
                        )
                      ) {
                        _context.next = 8;
                        break;
                      }

                      _context.next = 8;
                      return (0, _effects.put)((0, _markActivity['default'])(activity, 'speak', true));

                    case 8:
                      if (!(shouldSpeak && activity.inputHint === 'expectingInput')) {
                        _context.next = 13;
                        break;
                      }

                      _context.next = 11;
                      return (0, _effects.put)((0, _startDictate['default'])());

                    case 11:
                      _context.next = 16;
                      break;

                    case 13:
                      if (!(activity.inputHint === 'ignoringInput')) {
                        _context.next = 16;
                        break;
                      }

                      _context.next = 16;
                      return (0, _effects.put)((0, _stopDictate['default'])());

                    case 16:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          );

        case 3:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked);
}

function speakActivityAndStartDictateOnIncomingActivityFromOthersSaga() {
  return _regenerator['default'].wrap(function speakActivityAndStartDictateOnIncomingActivityFromOthersSaga$(
    _context3
  ) {
    while (1) {
      switch ((_context3.prev = _context3.next)) {
        case 0:
          _context3.next = 2;
          return (0, _whileConnected['default'])(speakActivityAndStartDictateOnIncomingActivityFromOthers);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  },
  _marked2);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zcGVha0FjdGl2aXR5QW5kU3RhcnREaWN0YXRlT25JbmNvbWluZ0FjdGl2aXR5RnJvbU90aGVyc1NhZ2EuanMiXSwibmFtZXMiOlsic3BlYWtBY3Rpdml0eUFuZFN0YXJ0RGljdGF0ZU9uSW5jb21pbmdBY3Rpdml0eUZyb21PdGhlcnMiLCJzcGVha0FjdGl2aXR5QW5kU3RhcnREaWN0YXRlT25JbmNvbWluZ0FjdGl2aXR5RnJvbU90aGVyc1NhZ2EiLCJ1c2VySUQiLCJwYXlsb2FkIiwidHlwZSIsIklOQ09NSU5HX0FDVElWSVRZIiwiYWN0aXZpdHkiLCJmcm9tIiwiaWQiLCJzaG91bGRTcGVha0luY29taW5nQWN0aXZpdHlTZWxlY3RvciIsInNob3VsZFNwZWFrSW5jb21pbmdBY3Rpdml0eSIsInNob3VsZFNwZWFrIiwic3BlYWsiLCJ0ZXh0IiwiYXR0YWNobWVudHMiLCJmaW5kSW5kZXgiLCJjb250ZW50IiwiaW5wdXRIaW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7OzZCQUVVQSx3RDs7OzZCQXdCZUMsNEQ7O0FBeEJ6QixTQUFVRCx3REFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUVFLFVBQUFBLE1BQXJFLFFBQXFFQSxNQUFyRTtBQUFBO0FBQ0UsaUJBQU0sd0JBQVU7QUFBQSxnQkFBR0MsT0FBSCxTQUFHQSxPQUFIO0FBQUEsZ0JBQVlDLElBQVosU0FBWUEsSUFBWjtBQUFBLG1CQUF1QkEsSUFBSSxLQUFLQyxtQ0FBVCxJQUE4QkYsT0FBTyxDQUFDRyxRQUFSLENBQWlCQyxJQUFqQixDQUFzQkMsRUFBdEIsS0FBNkJOLE1BQWxGO0FBQUEsV0FBVjtBQUFBO0FBQUEsdUNBQW9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM3Rkksb0JBQUFBLFFBRDZGLFNBQ3hHSCxPQUR3RyxDQUM3RkcsUUFENkY7QUFBQTtBQUdwRSwyQkFBTSxxQkFBT0csdUNBQVAsQ0FBTjs7QUFIb0U7QUFHbEdDLG9CQUFBQSwyQkFIa0c7QUFJbEdDLG9CQUFBQSxXQUprRyxHQUlwRixtQ0FBa0JMLFFBQWxCLEtBQStCSSwyQkFKcUQ7O0FBQUEsMEJBT3RHQyxXQUFXLEtBQ1ZMLFFBQVEsQ0FBQ00sS0FBVCxJQUNDTixRQUFRLENBQUNPLElBRFYsSUFFQyxDQUFDLENBQUNQLFFBQVEsQ0FBQ1EsV0FBVCxJQUF3QixFQUF6QixFQUE2QkMsU0FBN0IsQ0FBdUM7QUFBQSxnREFBR0MsT0FBSDtBQUFBLGlFQUF3QixFQUF4QjtBQUFBLDBCQUFjSixLQUFkLGlCQUFjQSxLQUFkO0FBQUEsNkJBQWlDQSxLQUFqQztBQUFBLHFCQUF2QyxDQUhRLENBUDJGO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBWXRHLDJCQUFNLGtCQUFJLDhCQUFhTixRQUFiLEVBQXVCLE9BQXZCLEVBQWdDLElBQWhDLENBQUosQ0FBTjs7QUFac0c7QUFBQSwwQkFlcEdLLFdBQVcsSUFBSUwsUUFBUSxDQUFDVyxTQUFULEtBQXVCLGdCQWY4RDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQWdCdEcsMkJBQU0sa0JBQUksK0JBQUosQ0FBTjs7QUFoQnNHO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBCQWlCN0ZYLFFBQVEsQ0FBQ1csU0FBVCxLQUF1QixlQWpCc0U7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFrQnRHLDJCQUFNLGtCQUFJLDhCQUFKLENBQU47O0FBbEJzRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFwRyxFQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXdCZSxTQUFVaEIsNERBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2IsaUJBQU0sZ0NBQWVELHdEQUFmLENBQU47O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdXQsIHNlbGVjdCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHsgSU5DT01JTkdfQUNUSVZJVFkgfSBmcm9tICcuLi9hY3Rpb25zL2luY29taW5nQWN0aXZpdHknO1xuaW1wb3J0IG1hcmtBY3Rpdml0eSBmcm9tICcuLi9hY3Rpb25zL21hcmtBY3Rpdml0eSc7XG5pbXBvcnQgc2hvdWxkU3BlYWtJbmNvbWluZ0FjdGl2aXR5U2VsZWN0b3IgZnJvbSAnLi4vc2VsZWN0b3JzL3Nob3VsZFNwZWFrSW5jb21pbmdBY3Rpdml0eSc7XG5pbXBvcnQgc3BlYWthYmxlQWN0aXZpdHkgZnJvbSAnLi4vZGVmaW5pdGlvbnMvc3BlYWthYmxlQWN0aXZpdHknO1xuaW1wb3J0IHN0YXJ0RGljdGF0ZSBmcm9tICcuLi9hY3Rpb25zL3N0YXJ0RGljdGF0ZSc7XG5pbXBvcnQgc3RvcERpY3RhdGUgZnJvbSAnLi4vYWN0aW9ucy9zdG9wRGljdGF0ZSc7XG5pbXBvcnQgd2hpbGVDb25uZWN0ZWQgZnJvbSAnLi9lZmZlY3RzL3doaWxlQ29ubmVjdGVkJztcblxuZnVuY3Rpb24qIHNwZWFrQWN0aXZpdHlBbmRTdGFydERpY3RhdGVPbkluY29taW5nQWN0aXZpdHlGcm9tT3RoZXJzKHsgdXNlcklEIH0pIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KCh7IHBheWxvYWQsIHR5cGUgfSkgPT4gdHlwZSA9PT0gSU5DT01JTkdfQUNUSVZJVFkgJiYgcGF5bG9hZC5hY3Rpdml0eS5mcm9tLmlkICE9PSB1c2VySUQsIGZ1bmN0aW9uKih7XG4gICAgcGF5bG9hZDogeyBhY3Rpdml0eSB9XG4gIH0pIHtcbiAgICBjb25zdCBzaG91bGRTcGVha0luY29taW5nQWN0aXZpdHkgPSB5aWVsZCBzZWxlY3Qoc2hvdWxkU3BlYWtJbmNvbWluZ0FjdGl2aXR5U2VsZWN0b3IpO1xuICAgIGNvbnN0IHNob3VsZFNwZWFrID0gc3BlYWthYmxlQWN0aXZpdHkoYWN0aXZpdHkpICYmIHNob3VsZFNwZWFrSW5jb21pbmdBY3Rpdml0eTtcblxuICAgIGlmIChcbiAgICAgIHNob3VsZFNwZWFrICYmXG4gICAgICAoYWN0aXZpdHkuc3BlYWsgfHxcbiAgICAgICAgYWN0aXZpdHkudGV4dCB8fFxuICAgICAgICB+KGFjdGl2aXR5LmF0dGFjaG1lbnRzIHx8IFtdKS5maW5kSW5kZXgoKHsgY29udGVudDogeyBzcGVhayB9ID0ge30gfSkgPT4gc3BlYWspKVxuICAgICkge1xuICAgICAgeWllbGQgcHV0KG1hcmtBY3Rpdml0eShhY3Rpdml0eSwgJ3NwZWFrJywgdHJ1ZSkpO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRTcGVhayAmJiBhY3Rpdml0eS5pbnB1dEhpbnQgPT09ICdleHBlY3RpbmdJbnB1dCcpIHtcbiAgICAgIHlpZWxkIHB1dChzdGFydERpY3RhdGUoKSk7XG4gICAgfSBlbHNlIGlmIChhY3Rpdml0eS5pbnB1dEhpbnQgPT09ICdpZ25vcmluZ0lucHV0Jykge1xuICAgICAgeWllbGQgcHV0KHN0b3BEaWN0YXRlKCkpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBzcGVha0FjdGl2aXR5QW5kU3RhcnREaWN0YXRlT25JbmNvbWluZ0FjdGl2aXR5RnJvbU90aGVyc1NhZ2EoKSB7XG4gIHlpZWxkIHdoaWxlQ29ubmVjdGVkKHNwZWFrQWN0aXZpdHlBbmRTdGFydERpY3RhdGVPbkluY29taW5nQWN0aXZpdHlGcm9tT3RoZXJzKTtcbn1cbiJdfQ==
