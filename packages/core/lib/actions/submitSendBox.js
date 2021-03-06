'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = submitSendBox;
exports.SUBMIT_SEND_BOX = void 0;
var SUBMIT_SEND_BOX = 'WEB_CHAT/SUBMIT_SEND_BOX';
exports.SUBMIT_SEND_BOX = SUBMIT_SEND_BOX;

function submitSendBox() {
  var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'keyboard';
  return {
    type: SUBMIT_SEND_BOX,
    payload: {
      method: method
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3N1Ym1pdFNlbmRCb3guanMiXSwibmFtZXMiOlsiU1VCTUlUX1NFTkRfQk9YIiwic3VibWl0U2VuZEJveCIsIm1ldGhvZCIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBTUEsZUFBZSxHQUFHLDBCQUF4Qjs7O0FBRWUsU0FBU0MsYUFBVCxHQUE0QztBQUFBLE1BQXJCQyxNQUFxQix1RUFBWixVQUFZO0FBQ3pELFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFSCxlQUREO0FBRUxJLElBQUFBLE9BQU8sRUFBRTtBQUFFRixNQUFBQSxNQUFNLEVBQU5BO0FBQUY7QUFGSixHQUFQO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTVUJNSVRfU0VORF9CT1ggPSAnV0VCX0NIQVQvU1VCTUlUX1NFTkRfQk9YJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3VibWl0U2VuZEJveChtZXRob2QgPSAna2V5Ym9hcmQnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU1VCTUlUX1NFTkRfQk9YLFxuICAgIHBheWxvYWQ6IHsgbWV0aG9kIH1cbiAgfTtcbn1cblxuZXhwb3J0IHsgU1VCTUlUX1NFTkRfQk9YIH07XG4iXX0=
