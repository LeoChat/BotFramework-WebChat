'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = setSendTyping;
exports.SET_SEND_TYPING = void 0;
// TODO: [P3] Take this deprecation code out when releasing on or after 2020 January 13
var SET_SEND_TYPING = 'WEB_CHAT/SET_SEND_TYPING';
exports.SET_SEND_TYPING = SET_SEND_TYPING;

function setSendTyping(value) {
  // Deprecation notes added to reducer
  return {
    type: SET_SEND_TYPING,
    payload: {
      sendTyping: !!value
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NldFNlbmRUeXBpbmcuanMiXSwibmFtZXMiOlsiU0VUX1NFTkRfVFlQSU5HIiwic2V0U2VuZFR5cGluZyIsInZhbHVlIiwidHlwZSIsInBheWxvYWQiLCJzZW5kVHlwaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxlQUFlLEdBQUcsMEJBQXhCOzs7QUFFZSxTQUFTQyxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUMzQztBQUNBLFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFSCxlQUREO0FBRUxJLElBQUFBLE9BQU8sRUFBRTtBQUFFQyxNQUFBQSxVQUFVLEVBQUUsQ0FBQyxDQUFDSDtBQUFoQjtBQUZKLEdBQVA7QUFJRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86IFtQM10gVGFrZSB0aGlzIGRlcHJlY2F0aW9uIGNvZGUgb3V0IHdoZW4gcmVsZWFzaW5nIG9uIG9yIGFmdGVyIDIwMjAgSmFudWFyeSAxM1xuY29uc3QgU0VUX1NFTkRfVFlQSU5HID0gJ1dFQl9DSEFUL1NFVF9TRU5EX1RZUElORyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFNlbmRUeXBpbmcodmFsdWUpIHtcbiAgLy8gRGVwcmVjYXRpb24gbm90ZXMgYWRkZWQgdG8gcmVkdWNlclxuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9TRU5EX1RZUElORyxcbiAgICBwYXlsb2FkOiB7IHNlbmRUeXBpbmc6ICEhdmFsdWUgfVxuICB9O1xufVxuXG5leHBvcnQgeyBTRVRfU0VORF9UWVBJTkcgfTtcbiJdfQ==
