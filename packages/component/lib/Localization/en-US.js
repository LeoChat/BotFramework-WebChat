'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _getLocaleString = _interopRequireDefault(require('./getLocaleString'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* eslint no-magic-numbers: ["error", { "ignore": [1, 5, 24, 48, 60000, 3600000] }] */
function xMinutesAgo(dateStr) {
  var date = new Date(dateStr);
  var dateTime = date.getTime();

  if (isNaN(dateTime)) {
    return dateStr;
  }

  var now = Date.now();
  var deltaInMs = now - dateTime;
  var deltaInMinutes = Math.floor(deltaInMs / 60000);
  var deltaInHours = Math.floor(deltaInMs / 3600000);

  if (deltaInMinutes < 1) {
    return 'Just now';
  } else if (deltaInMinutes === 1) {
    return 'A minute ago';
  } else if (deltaInHours < 1) {
    return ''.concat(deltaInMinutes, ' minutes ago');
  } else if (deltaInHours === 1) {
    return 'An hour ago';
  } else if (deltaInHours < 5) {
    return ''.concat(deltaInHours, ' hours ago');
  } else if (deltaInHours <= 24) {
    return 'Today';
  } else if (deltaInHours <= 48) {
    return 'Yesterday';
  }

  return (0, _getLocaleString.default)(date, 'en-US');
}

function botSaidSomething(avatarInitials, text) {
  return 'Bot '.concat(avatarInitials, ' said, ').concat(text);
}

function downloadFileWithFileSize(downloadFileText, fileName, size) {
  // Full text should read: "Download file <filename> of size <filesize>"
  return ''
    .concat(downloadFileText, ' ')
    .concat(fileName, ' of size ')
    .concat(size);
}

function uploadFileWithFileSize(fileName, size) {
  return ''.concat(fileName, ' of size ').concat(size);
}

function userSaidSomething(avatarInitials, text) {
  return 'User '.concat(avatarInitials, ' said, ').concat(text);
}

var _default = {
  CONNECTED_NOTIFICATION: 'Connected',
  FAILED_CONNECTION_NOTIFICATION: 'Unable to connect.',
  INITIAL_CONNECTION_NOTIFICATION: 'Connecting…',
  INTERRUPTED_CONNECTION_NOTIFICATION: 'Network interruption occurred. Reconnecting…',
  RENDER_ERROR_NOTIFICATION: 'Render error. Please check the console or contact the bot developer.',
  // Do not localize {Retry}; it is a placeholder for "Retry". English translation should be, "Send failed. Retry."
  SEND_FAILED_KEY: 'Send failed. {Retry}.',
  SLOW_CONNECTION_NOTIFICATION: 'Taking longer than usual to connect.',
  'Bot said something': botSaidSomething,
  'User said something': userSaidSomething,
  'X minutes ago': xMinutesAgo,
  // '[File of type '%1']': '[File of type '%1']",
  // '[Unknown Card '%1']': '[Unknown Card '%1']',
  'Adaptive Card parse error': 'Adaptive Card parse error',
  'Adaptive Card render error': 'Adaptive Card render error',
  BotSent: 'Bot sent: ',
  Chat: 'Chat',
  'Download file': 'Download file',
  DownloadFileWithFileSize: downloadFileWithFileSize,
  ErrorMessage: 'Error message',
  'Microphone off': 'Microphone off',
  'Microphone on': 'Microphone on',
  Left: 'Left',
  'Listening…': 'Listening…',
  'New messages': 'New messages',
  Retry: 'Retry',
  Right: 'Right',
  Send: 'Send',
  SendBox: 'Sendbox',
  Sending: 'Sending',
  SendStatus: 'Send status: ',
  SentAt: 'Sent at: ',
  Speak: 'Speak',
  'Starting…': 'Starting…',
  Tax: 'Tax',
  Total: 'Total',
  'Type your message': 'Type your message',
  TypingIndicator: 'Showing typing indicator',
  'Upload file': 'Upload file',
  UploadFileWithFileSize: uploadFileWithFileSize,
  UserSent: 'User sent: ',
  VAT: 'VAT'
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb2NhbGl6YXRpb24vZW4tVVMuanMiXSwibmFtZXMiOlsieE1pbnV0ZXNBZ28iLCJkYXRlU3RyIiwiZGF0ZSIsIkRhdGUiLCJkYXRlVGltZSIsImdldFRpbWUiLCJpc05hTiIsIm5vdyIsImRlbHRhSW5NcyIsImRlbHRhSW5NaW51dGVzIiwiTWF0aCIsImZsb29yIiwiZGVsdGFJbkhvdXJzIiwiYm90U2FpZFNvbWV0aGluZyIsImF2YXRhckluaXRpYWxzIiwidGV4dCIsImRvd25sb2FkRmlsZVdpdGhGaWxlU2l6ZSIsImRvd25sb2FkRmlsZVRleHQiLCJmaWxlTmFtZSIsInNpemUiLCJ1cGxvYWRGaWxlV2l0aEZpbGVTaXplIiwidXNlclNhaWRTb21ldGhpbmciLCJDT05ORUNURURfTk9USUZJQ0FUSU9OIiwiRkFJTEVEX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OIiwiSU5JVElBTF9DT05ORUNUSU9OX05PVElGSUNBVElPTiIsIklOVEVSUlVQVEVEX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OIiwiUkVOREVSX0VSUk9SX05PVElGSUNBVElPTiIsIlNFTkRfRkFJTEVEX0tFWSIsIlNMT1dfQ09OTkVDVElPTl9OT1RJRklDQVRJT04iLCJCb3RTZW50IiwiQ2hhdCIsIkRvd25sb2FkRmlsZVdpdGhGaWxlU2l6ZSIsIkVycm9yTWVzc2FnZSIsIkxlZnQiLCJSZXRyeSIsIlJpZ2h0IiwiU2VuZCIsIlNlbmRCb3giLCJTZW5kaW5nIiwiU2VuZFN0YXR1cyIsIlNlbnRBdCIsIlNwZWFrIiwiVGF4IiwiVG90YWwiLCJUeXBpbmdJbmRpY2F0b3IiLCJVcGxvYWRGaWxlV2l0aEZpbGVTaXplIiwiVXNlclNlbnQiLCJWQVQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7OztBQUZBO0FBSUEsU0FBU0EsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI7QUFDNUIsTUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU0YsT0FBVCxDQUFiO0FBQ0EsTUFBTUcs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Qkk7QUE4QmJDLEVBQUFBLE9BQU8sRUFBRSxTQTlCSTtBQStCYkMsRUFBQUEsVUFBVSxFQUFFLGVBL0JDO0FBZ0NiQyxFQUFBQSxNQUFNLEVBQUUsV0FoQ0s7QUFpQ2JDLEVBQUFBLEtBQUssRUFBRSxPQWpDTTtBQWtDYixlQUFhLFdBbENBO0FBbUNiQyxFQUFBQSxHQUFHLEVBQUUsS0FuQ1E7QUFvQ2JDLEVBQUFBLEtBQUssRUFBRSxPQXBDTTtBQXFDYix1QkFBcUIsbUJBckNSO0FBc0NiQyxFQUFBQSxlQUFlLEVBQUUsMEJBdENKO0FBdUNiLGlCQUFlLGFBdkNGO0FBd0NiQyxFQUFBQSxzQkFBc0IsRUFBRXpCLHNCQXhDWDtBQXlDYjBCLEVBQUFBLFFBQVEsRUFBRSxhQXpDRztBQTBDYkMsRUFBQUEsR0FBRyxFQUFFO0FBMUNRLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVwiOiBbMSwgNSwgMjQsIDQ4LCA2MDAwMCwgMzYwMDAwMF0gfV0gKi9cblxuaW1wb3J0IGdldExvY2FsZVN0cmluZyBmcm9tICcuL2dldExvY2FsZVN0cmluZyc7XG5cbmZ1bmN0aW9uIHhNaW51dGVzQWdvKGRhdGVTdHIpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xuICBjb25zdCBkYXRlVGltZSA9IGRhdGUuZ2V0VGltZSgpO1xuXG4gIGlmIChpc05hTihkYXRlVGltZSkpIHtcbiAgICByZXR1cm4gZGF0ZVN0cjtcbiAgfVxuXG4gIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gIGNvbnN0IGRlbHRhSW5NcyA9IG5vdyAtIGRhdGVUaW1lO1xuICBjb25zdCBkZWx0YUluTWludXRlcyA9IE1hdGguZmxvb3IoZGVsdGFJbk1zIC8gNjAwMDApO1xuICBjb25zdCBkZWx0YUluSG91cnMgPSBNYXRoLmZsb29yKGRlbHRhSW5NcyAvIDM2MDAwMDApO1xuXG4gIGlmIChkZWx0YUluTWludXRlcyA8IDEpIHtcbiAgICByZXR1cm4gJ0p1c3Qgbm93JztcbiAgfSBlbHNlIGlmIChkZWx0YUluTWludXRlcyA9PT0gMSkge1xuICAgIHJldHVybiAnQSBtaW51dGUgYWdvJztcbiAgfSBlbHNlIGlmIChkZWx0YUluSG91cnMgPCAxKSB7XG4gICAgcmV0dXJuIGAke2RlbHRhSW5NaW51dGVzfSBtaW51dGVzIGFnb2A7XG4gIH0gZWxzZSBpZiAoZGVsdGFJbkhvdXJzID09PSAxKSB7XG4gICAgcmV0dXJuIGBBbiBob3VyIGFnb2A7XG4gIH0gZWxzZSBpZiAoZGVsdGFJbkhvdXJzIDwgNSkge1xuICAgIHJldHVybiBgJHtkZWx0YUluSG91cnN9IGhvdXJzIGFnb2A7XG4gIH0gZWxzZSBpZiAoZGVsdGFJbkhvdXJzIDw9IDI0KSB7XG4gICAgcmV0dXJuIGBUb2RheWA7XG4gIH0gZWxzZSBpZiAoZGVsdGFJbkhvdXJzIDw9IDQ4KSB7XG4gICAgcmV0dXJuIGBZZXN0ZXJkYXlgO1xuICB9XG4gIHJldHVybiBnZXRMb2NhbGVTdHJpbmcoZGF0ZSwgJ2VuLVVTJyk7XG59XG5cbmZ1bmN0aW9uIGJvdFNhaWRTb21ldGhpbmcoYXZhdGFySW5pdGlhbHMsIHRleHQpIHtcbiAgcmV0dXJuIGBCb3QgJHthdmF0YXJJbml0aWFsc30gc2FpZCwgJHt0ZXh0fWA7XG59XG5cbmZ1bmN0aW9uIGRvd25sb2FkRmlsZVdpdGhGaWxlU2l6ZShkb3dubG9hZEZpbGVUZXh0LCBmaWxlTmFtZSwgc2l6ZSkge1xuICAvLyBGdWxsIHRleHQgc2hvdWxkIHJlYWQ6IFwiRG93bmxvYWQgZmlsZSA8ZmlsZW5hbWU+IG9mIHNpemUgPGZpbGVzaXplPlwiXG4gIHJldHVybiBgJHtkb3dubG9hZEZpbGVUZXh0fSAke2ZpbGVOYW1lfSBvZiBzaXplICR7c2l6ZX1gO1xufVxuXG5mdW5jdGlvbiB1cGxvYWRGaWxlV2l0aEZpbGVTaXplKGZpbGVOYW1lLCBzaXplKSB7XG4gIHJldHVybiBgJHtmaWxlTmFtZX0gb2Ygc2l6ZSAke3NpemV9YDtcbn1cblxuZnVuY3Rpb24gdXNlclNhaWRTb21ldGhpbmcoYXZhdGFySW5pdGlhbHMsIHRleHQpIHtcbiAgcmV0dXJuIGBVc2VyICR7YXZhdGFySW5pdGlhbHN9IHNhaWQsICR7dGV4dH1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIENPTk5FQ1RFRF9OT1RJRklDQVRJT046ICdDb25uZWN0ZWQnLFxuICBGQUlMRURfQ09OTkVDVElPTl9OT1RJRklDQVRJT046ICdVbmFibGUgdG8gY29ubmVjdC4nLFxuICBJTklUSUFMX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OOiAnQ29ubmVjdGluZ+KApicsXG4gIElOVEVSUlVQVEVEX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OOiAnTmV0d29yayBpbnRlcnJ1cHRpb24gb2NjdXJyZWQuIFJlY29ubmVjdGluZ+KApicsXG4gIFJFTkRFUl9FUlJPUl9OT1RJRklDQVRJT046ICdSZW5kZXIgZXJyb3IuIFBsZWFzZSBjaGVjayB0aGUgY29uc29sZSBvciBjb250YWN0IHRoZSBib3QgZGV2ZWxvcGVyLicsXG4gIC8vIERvIG5vdCBsb2NhbGl6ZSB7UmV0cnl9OyBpdCBpcyBhIHBsYWNlaG9sZGVyIGZvciBcIlJldHJ5XCIuIEVuZ2xpc2ggdHJhbnNsYXRpb24gc2hvdWxkIGJlLCBcIlNlbmQgZmFpbGVkLiBSZXRyeS5cIlxuICBTRU5EX0ZBSUxFRF9LRVk6IGBTZW5kIGZhaWxlZC4ge1JldHJ5fS5gLFxuICBTTE9XX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OOiAnVGFraW5nIGxvbmdlciB0aGFuIHVzdWFsIHRvIGNvbm5lY3QuJyxcbiAgJ0JvdCBzYWlkIHNvbWV0aGluZyc6IGJvdFNhaWRTb21ldGhpbmcsXG4gICdVc2VyIHNhaWQgc29tZXRoaW5nJzogdXNlclNhaWRTb21ldGhpbmcsXG4gICdYIG1pbnV0ZXMgYWdvJzogeE1pbnV0ZXNBZ28sXG4gIC8vICdbRmlsZSBvZiB0eXBlICclMSddJzogJ1tGaWxlIG9mIHR5cGUgJyUxJ11cIixcbiAgLy8gJ1tVbmtub3duIENhcmQgJyUxJ10nOiAnW1Vua25vd24gQ2FyZCAnJTEnXScsXG4gICdBZGFwdGl2ZSBDYXJkIHBhcnNlIGVycm9yJzogJ0FkYXB0aXZlIENhcmQgcGFyc2UgZXJyb3InLFxuICAnQWRhcHRpdmUgQ2FyZCByZW5kZXIgZXJyb3InOiAnQWRhcHRpdmUgQ2FyZCByZW5kZXIgZXJyb3InLFxuICBCb3RTZW50OiAnQm90IHNlbnQ6ICcsXG4gIENoYXQ6ICdDaGF0JyxcbiAgJ0Rvd25sb2FkIGZpbGUnOiAnRG93bmxvYWQgZmlsZScsXG4gIERvd25sb2FkRmlsZVdpdGhGaWxlU2l6ZTogZG93bmxvYWRGaWxlV2l0aEZpbGVTaXplLFxuICBFcnJvck1lc3NhZ2U6ICdFcnJvciBtZXNzYWdlJyxcbiAgJ01pY3JvcGhvbmUgb2ZmJzogJ01pY3JvcGhvbmUgb2ZmJyxcbiAgJ01pY3JvcGhvbmUgb24nOiAnTWljcm9waG9uZSBvbicsXG4gIExlZnQ6ICdMZWZ0JyxcbiAgJ0xpc3RlbmluZ+KApic6ICdMaXN0ZW5pbmfigKYnLFxuICAnTmV3IG1lc3NhZ2VzJzogJ05ldyBtZXNzYWdlcycsXG4gIFJldHJ5OiAnUmV0cnknLFxuICBSaWdodDogJ1JpZ2h0JyxcbiAgU2VuZDogJ1NlbmQnLFxuICBTZW5kQm94OiAnU2VuZGJveCcsXG4gIFNlbmRpbmc6ICdTZW5kaW5nJyxcbiAgU2VuZFN0YXR1czogJ1NlbmQgc3RhdHVzOiAnLFxuICBTZW50QXQ6ICdTZW50IGF0OiAnLFxuICBTcGVhazogJ1NwZWFrJyxcbiAgJ1N0YXJ0aW5n4oCmJzogJ1N0YXJ0aW5n4oCmJyxcbiAgVGF4OiAnVGF4JyxcbiAgVG90YWw6ICdUb3RhbCcsXG4gICdUeXBlIHlvdXIgbWVzc2FnZSc6ICdUeXBlIHlvdXIgbWVzc2FnZScsXG4gIFR5cGluZ0luZGljYXRvcjogJ1Nob3dpbmcgdHlwaW5nIGluZGljYXRvcicsXG4gICdVcGxvYWQgZmlsZSc6ICdVcGxvYWQgZmlsZScsXG4gIFVwbG9hZEZpbGVXaXRoRmlsZVNpemU6IHVwbG9hZEZpbGVXaXRoRmlsZVNpemUsXG4gIFVzZXJTZW50OiAnVXNlciBzZW50OiAnLFxuICBWQVQ6ICdWQVQnXG59O1xuIl19
