'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = disconnect;
exports.DISCONNECT_FULFILLED = exports.DISCONNECT_REJECTED = exports.DISCONNECT_PENDING = exports.DISCONNECT = void 0;
var DISCONNECT = 'DIRECT_LINE/DISCONNECT';
exports.DISCONNECT = DISCONNECT;
var DISCONNECT_PENDING = ''.concat(DISCONNECT, '_PENDING');
exports.DISCONNECT_PENDING = DISCONNECT_PENDING;
var DISCONNECT_REJECTED = ''.concat(DISCONNECT, '_REJECTED');
exports.DISCONNECT_REJECTED = DISCONNECT_REJECTED;
var DISCONNECT_FULFILLED = ''.concat(DISCONNECT, '_FULFILLED');
exports.DISCONNECT_FULFILLED = DISCONNECT_FULFILLED;

function disconnect() {
  return {
    type: DISCONNECT
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2Rpc2Nvbm5lY3QuanMiXSwibmFtZXMiOlsiRElTQ09OTkVDVCIsIkRJU0NPTk5FQ1RfUEVORElORyIsIkRJU0NPTk5FQ1RfUkVKRUNURUQiLCJESVNDT05ORUNUX0ZVTEZJTExFRCIsImRpc2Nvbm5lY3QiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBTUEsVUFBVSxHQUFHLHdCQUFuQjs7QUFDQSxJQUFNQyxrQkFBa0IsYUFBTUQsVUFBTixhQUF4Qjs7QUFDQSxJQUFNRSxtQkFBbUIsYUFBTUYsVUFBTixjQUF6Qjs7QUFDQSxJQUFNRyxvQkFBb0IsYUFBTUgsVUFBTixlQUExQjs7O0FBRWUsU0FBU0ksVUFBVCxHQUFzQjtBQUNuQyxTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRUw7QUFERCxHQUFQO0FBR0QiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBESVNDT05ORUNUID0gJ0RJUkVDVF9MSU5FL0RJU0NPTk5FQ1QnO1xuY29uc3QgRElTQ09OTkVDVF9QRU5ESU5HID0gYCR7RElTQ09OTkVDVH1fUEVORElOR2A7XG5jb25zdCBESVNDT05ORUNUX1JFSkVDVEVEID0gYCR7RElTQ09OTkVDVH1fUkVKRUNURURgO1xuY29uc3QgRElTQ09OTkVDVF9GVUxGSUxMRUQgPSBgJHtESVNDT05ORUNUfV9GVUxGSUxMRURgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IERJU0NPTk5FQ1RcbiAgfTtcbn1cblxuZXhwb3J0IHsgRElTQ09OTkVDVCwgRElTQ09OTkVDVF9QRU5ESU5HLCBESVNDT05ORUNUX1JFSkVDVEVELCBESVNDT05ORUNUX0ZVTEZJTExFRCB9O1xuIl19