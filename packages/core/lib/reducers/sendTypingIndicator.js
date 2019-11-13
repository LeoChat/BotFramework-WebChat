'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = sendTypingIndicator;

var _setSendTyping = require('../actions/setSendTyping');

var _setSendTypingIndicator = require('../actions/setSendTypingIndicator');

var DEFAULT_STATE = false;

function sendTypingIndicator() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    payload = _ref.payload,
    type = _ref.type;

  switch (type) {
    // TODO: [P3] Take this deprecation code out when releasing on or after 2020 January 13
    case _setSendTyping.SET_SEND_TYPING:
      console.warn(
        'Web Chat: "sendTyping" has been renamed to "sendTypingIndicator". Please use "sendTypingIndicator" instead. This deprecation migration will be removed on or after January 13 2020.'
      );
      state = payload.sendTyping;
      break;

    case _setSendTypingIndicator.SET_SEND_TYPING_INDICATOR:
      state = payload.sendTypingIndicator;
      break;

    default:
      break;
  }

  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zZW5kVHlwaW5nSW5kaWNhdG9yLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfU1RBVEUiLCJzZW5kVHlwaW5nSW5kaWNhdG9yIiwic3RhdGUiLCJwYXlsb2FkIiwidHlwZSIsIlNFVF9TRU5EX1RZUElORyIsImNvbnNvbGUiLCJ3YXJuIiwic2VuZFR5cGluZyIsIlNFVF9TRU5EX1RZUElOR19JTkRJQ0FUT1IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsS0FBdEI7O0FBRWUsU0FBU0MsbUJBQVQsR0FBdUU7QUFBQSxNQUExQ0MsS0FBMEMsdUVBQWxDRixhQUFrQzs7QUFBQTtBQUFBLE1BQWpCRyxPQUFpQixRQUFqQkEsT0FBaUI7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQ3BGLFVBQVFBLElBQVI7QUFDRTtBQUNBLFNBQUtDLDhCQUFMO0FBQ0VDLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUNFLHFMQURGO0FBR0FMLE1BQUFBLEtBQUssR0FBR0MsT0FBTyxDQUFDSyxVQUFoQjtBQUNBOztBQUVGLFNBQUtDLGlEQUFMO0FBQ0VQLE1BQUFBLEtBQUssR0FBR0MsT0FBTyxDQUFDRixtQkFBaEI7QUFDQTs7QUFFRjtBQUNFO0FBZEo7O0FBaUJBLFNBQU9DLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNFVF9TRU5EX1RZUElORyB9IGZyb20gJy4uL2FjdGlvbnMvc2V0U2VuZFR5cGluZyc7XG5pbXBvcnQgeyBTRVRfU0VORF9UWVBJTkdfSU5ESUNBVE9SIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXRTZW5kVHlwaW5nSW5kaWNhdG9yJztcblxuY29uc3QgREVGQVVMVF9TVEFURSA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZW5kVHlwaW5nSW5kaWNhdG9yKHN0YXRlID0gREVGQVVMVF9TVEFURSwgeyBwYXlsb2FkLCB0eXBlIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgLy8gVE9ETzogW1AzXSBUYWtlIHRoaXMgZGVwcmVjYXRpb24gY29kZSBvdXQgd2hlbiByZWxlYXNpbmcgb24gb3IgYWZ0ZXIgMjAyMCBKYW51YXJ5IDEzXG4gICAgY2FzZSBTRVRfU0VORF9UWVBJTkc6XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdXZWIgQ2hhdDogXCJzZW5kVHlwaW5nXCIgaGFzIGJlZW4gcmVuYW1lZCB0byBcInNlbmRUeXBpbmdJbmRpY2F0b3JcIi4gUGxlYXNlIHVzZSBcInNlbmRUeXBpbmdJbmRpY2F0b3JcIiBpbnN0ZWFkLiBUaGlzIGRlcHJlY2F0aW9uIG1pZ3JhdGlvbiB3aWxsIGJlIHJlbW92ZWQgb24gb3IgYWZ0ZXIgSmFudWFyeSAxMyAyMDIwLidcbiAgICAgICk7XG4gICAgICBzdGF0ZSA9IHBheWxvYWQuc2VuZFR5cGluZztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTRVRfU0VORF9UWVBJTkdfSU5ESUNBVE9SOlxuICAgICAgc3RhdGUgPSBwYXlsb2FkLnNlbmRUeXBpbmdJbmRpY2F0b3I7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==
