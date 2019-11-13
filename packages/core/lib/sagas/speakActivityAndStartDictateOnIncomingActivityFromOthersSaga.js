'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = speakActivityAndStartDictateOnIncomingActivityFromOthersSaga;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _effects = require('redux-saga/effects');

var _incomingActivity = require('../actions/incomingActivity');

var _DictateState = require('../constants/DictateState');

var _markActivity = _interopRequireDefault(require('../actions/markActivity'));

var _setDictateState = _interopRequireDefault(require('../actions/setDictateState'));

var _shouldSpeakIncomingActivity = _interopRequireDefault(require('../selectors/shouldSpeakIncomingActivity'));

var _speakableActivity = _interopRequireDefault(require('../definitions/speakableActivity'));

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
                      return (0, _effects.put)((0, _setDictateState['default'])(_DictateState.WILL_START));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9zcGVha0FjdGl2aXR5QW5kU3RhcnREaWN0YXRlT25JbmNvbWluZ0FjdGl2aXR5RnJvbU90aGVyc1NhZ2EuanMiXSwibmFtZXMiOlsic3BlYWtBY3Rpdml0eUFuZFN0YXJ0RGljdGF0ZU9uSW5jb21pbmdBY3Rpdml0eUZyb21PdGhlcnMiLCJzcGVha0FjdGl2aXR5QW5kU3RhcnREaWN0YXRlT25JbmNvbWluZ0FjdGl2aXR5RnJvbU90aGVyc1NhZ2EiLCJ1c2VySUQiLCJwYXlsb2FkIiwidHlwZSIsIklOQ09NSU5HX0FDVElWSVRZIiwiYWN0aXZpdHkiLCJmcm9tIiwiaWQiLCJzaG91bGRTcGVha0luY29taW5nQWN0aXZpdHlTZWxlY3RvciIsInNob3VsZFNwZWFrSW5jb21pbmdBY3Rpdml0eSIsInNob3VsZFNwZWFrIiwic3BlYWsiLCJ0ZXh0IiwiYXR0YWNobWVudHMiLCJmaW5kSW5kZXgiLCJjb250ZW50IiwiaW5wdXRIaW50IiwiV0lMTF9TVEFSVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs2QkFFVUEsd0Q7Ozs2QkF3QmVDLDREOztBQXhCekIsU0FBVUQsd0RBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFFRSxVQUFBQSxNQUFyRSxRQUFxRUEsTUFBckU7QUFBQTtBQUNFLGlCQUFNLHdCQUFVO0FBQUEsZ0JBQUdDLE9BQUgsU0FBR0EsT0FBSDtBQUFBLGdCQUFZQyxJQUFaLFNBQVlBLElBQVo7QUFBQSxtQkFBdUJBLElBQUksS0FBS0MsbUNBQVQsSUFBOEJGLE9BQU8sQ0FBQ0csUUFBUixDQUFpQkMsSUFBakIsQ0FBc0JDLEVBQXRCLEtBQTZCTixNQUFsRjtBQUFBLFdBQVY7QUFBQTtBQUFBLHVDQUFvRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDN0ZJLG9CQUFBQSxRQUQ2RixTQUN4R0gsT0FEd0csQ0FDN0ZHLFFBRDZGO0FBQUE7QUFHcEUsMkJBQU0scUJBQU9HLHVDQUFQLENBQU47O0FBSG9FO0FBR2xHQyxvQkFBQUEsMkJBSGtHO0FBSWxHQyxvQkFBQUEsV0FKa0csR0FJcEYsbUNBQWtCTCxRQUFsQixLQUErQkksMkJBSnFEOztBQUFBLDBCQU90R0MsV0FBVyxLQUNWTCxRQUFRLENBQUNNLEtBQVQsSUFDQ04sUUFBUSxDQUFDTyxJQURWLElBRUMsQ0FBQyxDQUFDUCxRQUFRLENBQUNRLFdBQVQsSUFBd0IsRUFBekIsRUFBNkJDLFNBQTdCLENBQXVDO0FBQUEsZ0RBQUdDLE9BQUg7QUFBQSxpRUFBd0IsRUFBeEI7QUFBQSwwQkFBY0osS0FBZCxpQkFBY0EsS0FBZDtBQUFBLDZCQUFpQ0EsS0FBakM7QUFBQSxxQkFBdkMsQ0FIUSxDQVAyRjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQVl0RywyQkFBTSxrQkFBSSw4QkFBYU4sUUFBYixFQUF1QixPQUF2QixFQUFnQyxJQUFoQyxDQUFKLENBQU47O0FBWnNHO0FBQUEsMEJBZXBHSyxXQUFXLElBQUlMLFFBQVEsQ0FBQ1csU0FBVCxLQUF1QixnQkFmOEQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFnQnRHLDJCQUFNLGtCQUFJLGlDQUFnQkMsd0JBQWhCLENBQUosQ0FBTjs7QUFoQnNHO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBCQWlCN0ZaLFFBQVEsQ0FBQ1csU0FBVCxLQUF1QixlQWpCc0U7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFrQnRHLDJCQUFNLGtCQUFJLDhCQUFKLENBQU47O0FBbEJzRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFwRyxFQUFOOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXdCZSxTQUFVaEIsNERBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2IsaUJBQU0sZ0NBQWVELHdEQUFmLENBQU47O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdXQsIHNlbGVjdCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHsgSU5DT01JTkdfQUNUSVZJVFkgfSBmcm9tICcuLi9hY3Rpb25zL2luY29taW5nQWN0aXZpdHknO1xuaW1wb3J0IHsgV0lMTF9TVEFSVCB9IGZyb20gJy4uL2NvbnN0YW50cy9EaWN0YXRlU3RhdGUnO1xuaW1wb3J0IG1hcmtBY3Rpdml0eSBmcm9tICcuLi9hY3Rpb25zL21hcmtBY3Rpdml0eSc7XG5pbXBvcnQgc2V0RGljdGF0ZVN0YXRlIGZyb20gJy4uL2FjdGlvbnMvc2V0RGljdGF0ZVN0YXRlJztcbmltcG9ydCBzaG91bGRTcGVha0luY29taW5nQWN0aXZpdHlTZWxlY3RvciBmcm9tICcuLi9zZWxlY3RvcnMvc2hvdWxkU3BlYWtJbmNvbWluZ0FjdGl2aXR5JztcbmltcG9ydCBzcGVha2FibGVBY3Rpdml0eSBmcm9tICcuLi9kZWZpbml0aW9ucy9zcGVha2FibGVBY3Rpdml0eSc7XG5pbXBvcnQgc3RvcERpY3RhdGUgZnJvbSAnLi4vYWN0aW9ucy9zdG9wRGljdGF0ZSc7XG5pbXBvcnQgd2hpbGVDb25uZWN0ZWQgZnJvbSAnLi9lZmZlY3RzL3doaWxlQ29ubmVjdGVkJztcblxuZnVuY3Rpb24qIHNwZWFrQWN0aXZpdHlBbmRTdGFydERpY3RhdGVPbkluY29taW5nQWN0aXZpdHlGcm9tT3RoZXJzKHsgdXNlcklEIH0pIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KCh7IHBheWxvYWQsIHR5cGUgfSkgPT4gdHlwZSA9PT0gSU5DT01JTkdfQUNUSVZJVFkgJiYgcGF5bG9hZC5hY3Rpdml0eS5mcm9tLmlkICE9PSB1c2VySUQsIGZ1bmN0aW9uKih7XG4gICAgcGF5bG9hZDogeyBhY3Rpdml0eSB9XG4gIH0pIHtcbiAgICBjb25zdCBzaG91bGRTcGVha0luY29taW5nQWN0aXZpdHkgPSB5aWVsZCBzZWxlY3Qoc2hvdWxkU3BlYWtJbmNvbWluZ0FjdGl2aXR5U2VsZWN0b3IpO1xuICAgIGNvbnN0IHNob3VsZFNwZWFrID0gc3BlYWthYmxlQWN0aXZpdHkoYWN0aXZpdHkpICYmIHNob3VsZFNwZWFrSW5jb21pbmdBY3Rpdml0eTtcblxuICAgIGlmIChcbiAgICAgIHNob3VsZFNwZWFrICYmXG4gICAgICAoYWN0aXZpdHkuc3BlYWsgfHxcbiAgICAgICAgYWN0aXZpdHkudGV4dCB8fFxuICAgICAgICB+KGFjdGl2aXR5LmF0dGFjaG1lbnRzIHx8IFtdKS5maW5kSW5kZXgoKHsgY29udGVudDogeyBzcGVhayB9ID0ge30gfSkgPT4gc3BlYWspKVxuICAgICkge1xuICAgICAgeWllbGQgcHV0KG1hcmtBY3Rpdml0eShhY3Rpdml0eSwgJ3NwZWFrJywgdHJ1ZSkpO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRTcGVhayAmJiBhY3Rpdml0eS5pbnB1dEhpbnQgPT09ICdleHBlY3RpbmdJbnB1dCcpIHtcbiAgICAgIHlpZWxkIHB1dChzZXREaWN0YXRlU3RhdGUoV0lMTF9TVEFSVCkpO1xuICAgIH0gZWxzZSBpZiAoYWN0aXZpdHkuaW5wdXRIaW50ID09PSAnaWdub3JpbmdJbnB1dCcpIHtcbiAgICAgIHlpZWxkIHB1dChzdG9wRGljdGF0ZSgpKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc3BlYWtBY3Rpdml0eUFuZFN0YXJ0RGljdGF0ZU9uSW5jb21pbmdBY3Rpdml0eUZyb21PdGhlcnNTYWdhKCkge1xuICB5aWVsZCB3aGlsZUNvbm5lY3RlZChzcGVha0FjdGl2aXR5QW5kU3RhcnREaWN0YXRlT25JbmNvbWluZ0FjdGl2aXR5RnJvbU90aGVycyk7XG59XG4iXX0=
