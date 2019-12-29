'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

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
    return '剛剛';
  } else if (deltaInMinutes === 1) {
    return '一分鐘前';
  } else if (deltaInHours < 1) {
    return ''.concat(deltaInMinutes, ' \u5206\u9418\u524D');
  } else if (deltaInHours === 1) {
    return '\u4E00\u500B\u9418\u524D';
  } else if (deltaInHours < 5) {
    return ''.concat(deltaInHours, ' \u500B\u9418\u524D');
  } else if (deltaInHours <= 24) {
    return '\u4ECA\u65E5';
  } else if (deltaInHours <= 48) {
    return '\u6628\u65E5';
  } else if (window.Intl) {
    return new Intl.DateTimeFormat('zh-HANT').format(date);
  }

  return date.toLocaleString('zh-HANT', {
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

function botSaidSomething(avatarInitials, text) {
  return 'Bot '.concat(avatarInitials, ' \u8AAA\uFF1A').concat(text);
}

function userSaidSomething(avatarInitials, text) {
  return '\u4F7F\u7528\u8005 '.concat(avatarInitials, ' \u8AAA\uFF1A').concat(text);
}

var _default = {
  FAILED_CONNECTION_NOTIFICATION: '接駁失敗。',
  // Do not localize {Retry}; it is a placeholder for "Retry". English translation should be, "Send failed. Retry."
  INITIAL_CONNECTION_NOTIFICATION: '接駁中...',
  INTERRUPTED_CONNECTION_NOTIFICATION: '網絡暫時中斷，正嘗試再接駁…',
  RENDER_ERROR_NOTIFICATION: 'Render 失敗，請檢查控制台或與 Bot 開發人員聯絡。',
  SEND_FAILED_KEY: '\u7121\u6CD5\u767C\u9001\u3002{Retry}',
  SLOW_CONNECTION_NOTIFICATION: '接駁時間比平時長。',
  'Bot said something': botSaidSomething,
  'User said something': userSaidSomething,
  'X minutes ago': xMinutesAgo,
  'Adaptive Card parse error': 'Adaptive Card 解析失敗',
  'Adaptive Card render error': 'Adaptive Card render 失敗',
  Chat: '聊天',
  'Download file': '下載檔案',
  'Microphone off': '關掉麥克風',
  'Microphone on': '開啟麥克風',
  Left: '左',
  'Listening…': '正在聆聽…',
  'New messages': '新訊息',
  Retry: '重試',
  Right: '右',
  Send: '發送',
  Sending: '正在發送',
  Speak: '發言',
  'Starting…': '開始中…',
  Tax: '稅',
  Total: '總共',
  'Type your message': '請輸入您的訊息',
  'Upload file': '上載檔案',
  VAT: '消費稅'
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb2NhbGl6YXRpb24vemgtSEFOVC5qcyJdLCJuYW1lcyI6WyJ4TWludXRlc0FnbyIsImRhdGVTdHIiLCJkYXRlIiwiRGF0ZSIsImRhdGVUaW1lIiwiZ2V0VGltZSIsImlzTmFOIiwibm93IiwiZGVsdGFJbk1zIiwiZGVsdGFJbk1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJkZWx0YUluSG91cnMiLCJ3aW5kb3ciLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJmb3JtYXQiLCJ0b0xvY2FsZVN0cmluZyIsImRheSIsImhvdXIiLCJob3VyMTIiLCJtaW51dGUiLCJtb250aCIsInllYXIiLCJib3RTYWlkU29tZXRoaW5nIiwiYXZhdGFySW5pdGlhbHMiLCJ0ZXh0IiwidXNlclNhaWRTb21ldGhpbmciLCJGQUlMRURfQ09OTkVDVElPTl9OT1RJRklDQVRJT04iLCJJTklUSUFMX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OIiwiSU5URVJSVVBURURfQ09OTkVDVElPTl9OT1RJRklDQVRJT04iLCJSRU5ERVJfRVJST1JfTk9USUZJQ0FUSU9OIiwiU0VORF9GQUlMRURfS0VZIiwiU0xPV19DT05ORUNUSU9OX05PVElGSUNBVElPTiIsIkNoYXQiLCJMZWZ0IiwiUmV0cnkiLCJSaWdodCIsIlNlbmQiLCJTZW5kaW5nIiwiU3BlYWsiLCJUYXgiLCJUb3RhbCIsIlZBVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI7QUFDNUIsTUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU0YsT0FBVCxDQUFiO0FBQ0EsTUFBTUcsUUFBUSxHQUFHRixJQUFJLENBQUNHLE9BQUwsRUFBakI7O0FBRUEsTUFBSUMsS0FBSyxDQUFDRixRQUFELENBQVQsRUFBcUI7QUFDbkIsV0FBT0gsT0FBUDtBQUNEOztBQUVELE1BQU1NLEdBQUcsR0FBR0osSUFBSSxDQUFDSSxHQUFMLEVBQVo7QUFDQSxNQUFNQyxTQUFT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OlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IFtcImVycm9yXCIsIHsgXCJpZ25vcmVcIjogWzEsIDUsIDI0LCA0OCwgNjAwMDAsIDM2MDAwMDBdIH1dICovXG5cbmZ1bmN0aW9uIHhNaW51dGVzQWdvKGRhdGVTdHIpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xuICBjb25zdCBkYXRlVGltZSA9IGRhdGUuZ2V0VGltZSgpO1xuXG4gIGlmIChpc05hTihkYXRlVGltZSkpIHtcbiAgICByZXR1cm4gZGF0ZVN0cjtcbiAgfVxuXG4gIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gIGNvbnN0IGRlbHRhSW5NcyA9IG5vdyAtIGRhdGVUaW1lO1xuICBjb25zdCBkZWx0YUluTWludXRlcyA9IE1hdGguZmxvb3IoZGVsdGFJbk1zIC8gNjAwMDApO1xuICBjb25zdCBkZWx0YUluSG91cnMgPSBNYXRoLmZsb29yKGRlbHRhSW5NcyAvIDM2MDAwMDApO1xuXG4gIGlmIChkZWx0YUluTWludXRlcyA8IDEpIHtcbiAgICByZXR1cm4gJ+WJm+WJmyc7XG4gIH0gZWxzZSBpZiAoZGVsdGFJbk1pbnV0ZXMgPT09IDEpIHtcbiAgICByZXR1cm4gJ+S4gOWIhumQmOWJjSc7XG4gIH0gZWxzZSBpZiAoZGVsdGFJbkhvdXJzIDwgMSkge1xuICAgIHJldHVybiBgJHtkZWx0YUluTWludXRlc30g5YiG6ZCY5YmNYDtcbiAgfSBlbHNlIGlmIChkZWx0YUluSG91cnMgPT09IDEpIHtcbiAgICByZXR1cm4gYOS4gOWAi+mQmOWJjWA7XG4gIH0gZWxzZSBpZiAoZGVsdGFJbkhvdXJzIDwgNSkge1xuICAgIHJldHVybiBgJHtkZWx0YUluSG91cnN9IOWAi+mQmOWJjWA7XG4gIH0gZWxzZSBpZiAoZGVsdGFJbkhvdXJzIDw9IDI0KSB7XG4gICAgcmV0dXJuIGDku4rml6VgO1xuICB9IGVsc2UgaWYgKGRlbHRhSW5Ib3VycyA8PSA0OCkge1xuICAgIHJldHVybiBg5pio5pelYDtcbiAgfSBlbHNlIGlmICh3aW5kb3cuSW50bCkge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnemgtSEFOVCcpLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCd6aC1IQU5UJywge1xuICAgIGRheTogJzItZGlnaXQnLFxuICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICBob3VyMTI6IGZhbHNlLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgeWVhcjogJ251bWVyaWMnXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBib3RTYWlkU29tZXRoaW5nKGF2YXRhckluaXRpYWxzLCB0ZXh0KSB7XG4gIHJldHVybiBgQm90ICR7YXZhdGFySW5pdGlhbHN9IOiqqu+8miR7dGV4dH1gO1xufVxuXG5mdW5jdGlvbiB1c2VyU2FpZFNvbWV0aGluZyhhdmF0YXJJbml0aWFscywgdGV4dCkge1xuICByZXR1cm4gYOS9v+eUqOiAhSAke2F2YXRhckluaXRpYWxzfSDoqqrvvJoke3RleHR9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBGQUlMRURfQ09OTkVDVElPTl9OT1RJRklDQVRJT046ICfmjqXpp4HlpLHmlZfjgIInLFxuICAvLyBEbyBub3QgbG9jYWxpemUge1JldHJ5fTsgaXQgaXMgYSBwbGFjZWhvbGRlciBmb3IgXCJSZXRyeVwiLiBFbmdsaXNoIHRyYW5zbGF0aW9uIHNob3VsZCBiZSwgXCJTZW5kIGZhaWxlZC4gUmV0cnkuXCJcbiAgSU5JVElBTF9DT05ORUNUSU9OX05PVElGSUNBVElPTjogJ+aOpemngeS4rS4uLicsXG4gIElOVEVSUlVQVEVEX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OOiAn57ay57Wh5pqr5pmC5Lit5pa377yM5q2j5ZiX6Kmm5YaN5o6l6aeB4oCmJyxcbiAgUkVOREVSX0VSUk9SX05PVElGSUNBVElPTjogJ1JlbmRlciDlpLHmlZfvvIzoq4vmqqLmn6XmjqfliLblj7DmiJboiIcgQm90IOmWi+eZvOS6uuWToeiBr+e1oeOAgicsXG4gIFNFTkRfRkFJTEVEX0tFWTogYOeEoeazleeZvOmAgeOAgntSZXRyeX1gLFxuICBTTE9XX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OOiAn5o6l6aeB5pmC6ZaT5q+U5bmz5pmC6ZW344CCJyxcbiAgJ0JvdCBzYWlkIHNvbWV0aGluZyc6IGJvdFNhaWRTb21ldGhpbmcsXG4gICdVc2VyIHNhaWQgc29tZXRoaW5nJzogdXNlclNhaWRTb21ldGhpbmcsXG4gICdYIG1pbnV0ZXMgYWdvJzogeE1pbnV0ZXNBZ28sXG4gICdBZGFwdGl2ZSBDYXJkIHBhcnNlIGVycm9yJzogJ0FkYXB0aXZlIENhcmQg6Kej5p6Q5aSx5pWXJyxcbiAgJ0FkYXB0aXZlIENhcmQgcmVuZGVyIGVycm9yJzogJ0FkYXB0aXZlIENhcmQgcmVuZGVyIOWkseaVlycsXG4gIENoYXQ6ICfogYrlpKknLFxuICAnRG93bmxvYWQgZmlsZSc6ICfkuIvovInmqpTmoYgnLFxuICAnTWljcm9waG9uZSBvZmYnOiAn6Zec5o6J6bql5YWL6aKoJyxcbiAgJ01pY3JvcGhvbmUgb24nOiAn6ZaL5ZWf6bql5YWL6aKoJyxcbiAgTGVmdDogJ+W3picsXG4gICdMaXN0ZW5pbmfigKYnOiAn5q2j5Zyo6IGG6IG94oCmJyxcbiAgJ05ldyBtZXNzYWdlcyc6ICfmlrDoqIrmga8nLFxuICBSZXRyeTogJ+mHjeippicsXG4gIFJpZ2h0OiAn5Y+zJyxcbiAgU2VuZDogJ+eZvOmAgScsXG4gIFNlbmRpbmc6ICfmraPlnKjnmbzpgIEnLFxuICBTcGVhazogJ+eZvOiogCcsXG4gICdTdGFydGluZ+KApic6ICfplovlp4vkuK3igKYnLFxuICBUYXg6ICfnqIUnLFxuICBUb3RhbDogJ+e4veWFsScsXG4gICdUeXBlIHlvdXIgbWVzc2FnZSc6ICfoq4vovLjlhaXmgqjnmoToqIrmga8nLFxuICAnVXBsb2FkIGZpbGUnOiAn5LiK6LyJ5qqU5qGIJyxcbiAgVkFUOiAn5raI6LK756iFJ1xufTtcbiJdfQ==