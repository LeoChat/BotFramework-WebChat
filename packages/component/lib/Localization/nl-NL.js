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
    return 'Zojuist';
  } else if (deltaInMinutes === 1) {
    return 'Een minuut geleden';
  } else if (deltaInHours < 1) {
    return ''.concat(deltaInMinutes, ' minuten geleden');
  } else if (deltaInHours === 1) {
    return 'Een uur geleden';
  } else if (deltaInHours < 5) {
    return ''.concat(deltaInHours, ' uur geleden');
  } else if (deltaInHours <= 24) {
    return 'Vandaag';
  } else if (deltaInHours <= 48) {
    return 'Gisteren';
  } else if (window.Intl) {
    return new Intl.DateTimeFormat('nl-NL').format(date);
  }

  return date.toLocaleString('nl-NL', {
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

function botSaidSomething(avatarInitials, text) {
  return 'Bot '.concat(avatarInitials, ' zei; ').concat(text);
}

function userSaidSomething(avatarInitials, text) {
  return 'Gebruiker '.concat(avatarInitials, ' zei; ').concat(text);
}

var _default = {
  FAILED_CONNECTION_NOTIFICATION: 'Verbinding maken niet mogelijk.',
  SEND_FAILED_KEY: 'Versturen mislukt, {Retry}.',
  SLOW_CONNECTION_NOTIFICATION: 'Verbinding maken duurt langer dan normaal…',
  'Bot said something': botSaidSomething,
  Chat: 'Chat',
  'Download file': 'Bestand downloaden',
  'Listening…': 'Aan het luisteren…',
  'Microphone off': 'Microfoon uit',
  'Microphone on': 'Microfoon aan',
  Retry: 'probeer opnieuw',
  Send: 'Verstuur',
  Sending: 'versturen',
  Speak: 'Spreek',
  'Starting…': 'Starten…',
  Tax: 'BTW',
  Total: 'Totaal',
  'Type your message': 'Typ je bericht',
  'Upload file': 'Bestand uploaden',
  'User said something': userSaidSomething,
  VAT: 'VAT',
  'X minutes ago': xMinutesAgo
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb2NhbGl6YXRpb24vbmwtTkwuanMiXSwibmFtZXMiOlsieE1pbnV0ZXNBZ28iLCJkYXRlU3RyIiwiZGF0ZSIsIkRhdGUiLCJkYXRlVGltZSIsImdldFRpbWUiLCJpc05hTiIsIm5vdyIsImRlbHRhSW5NcyIsImRlbHRhSW5NaW51dGVzIiwiTWF0aCIsImZsb29yIiwiZGVsdGFJbkhvdXJzIiwid2luZG93IiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwiZm9ybWF0IiwidG9Mb2NhbGVTdHJpbmciLCJkYXkiLCJob3VyIiwiaG91cjEyIiwibWludXRlIiwibW9udGgiLCJ5ZWFyIiwiYm90U2FpZFNvbWV0aGluZyIsImF2YXRhckluaXRpYWxzIiwidGV4dCIsInVzZXJTYWlkU29tZXRoaW5nIiwiRkFJTEVEX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OIiwiU0VORF9GQUlMRURfS0VZIiwiU0xPV19DT05ORUNUSU9OX05PVElGSUNBVElPTiIsIkNoYXQiLCJSZXRyeSIsIlNlbmQiLCJTZW5kaW5nIiwiU3BlYWsiLCJUYXgiLCJUb3RhbCIsIlZBVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI7QUFDNUIsTUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU0YsT0FBVCxDQUFiO0FBQ0EsTUFBTUcsUUFBUSxHQUFHRixJQUFJLENBQUNHLE9BQUwsRUFBakI7O0FBRUEsTUFBSUMsS0FBSyxDQUFDRixRQUFELENBQVQsRUFBcUI7QUFDbkIsV0FBT0gsT0FBUDtBQUNEOztBQUVELE1BQU1NLEdBQUcsR0FBR0osSUFBSSxDQUFDSSxHQUFMLEVBQVo7QUFDQSxNQUFNQyxTQUFTLEdBQUdELEdBQUcsR0FBR0gsUUFBeEI7QUFDQSxNQUFNSyxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxTQUFTLEdBQUcsS0FBdkIsQ0FBdkI7QUFDQSxNQUFNSSxZQUFZLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxTQUFTLEdBQUcsT0FBdkIsQ0FBckI7O0FBRUEsTUFBSUMsY0FBYyxHQUFHLENBQXJCLEVBQXdCO0FBQ3RCLFdBQU8sU0FBUDtBQUNELEdBRkQsTUFFTyxJQUFJQSxjQUFjLEtBQUssQ0FBdkIsRUFBMEI7QUFDL0IsV0FBTyxvQkFBUDtBQUNELEdBRk0sTUFFQSxJQUFJRyxZQUFZLEdBQUcsQ0FBbkIsRUFBc0I7QUFDM0IscUJBQVVILGNBQVY7QUFDRCxHQUZNLE1BRUEsSUFBSUcsWUFBWSxLQUFLLENBQXJCLEVBQXdCO0FBQzdCO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFlBQVksR0FBRyxDQUFuQixFQUFzQjtBQUMzQixxQkFBVUEsWUFBVjtBQUNELEdBRk0sTUFFQSxJQUFJQSxZQUFZLElBQUksRUFBcEIsRUFBd0I7QUFDN0I7QUFDRCxHQUZNLE1BRUEsSUFBSUEsWUFBWSxJQUFJLEVBQXBCLEVBQXdCO0FBQzdCO0FBQ0QsR0FGTSxNQUVBLElBQUlDLE1BQU0sQ0FBQ0MsSUFBWCxFQUFpQjtBQUN0QixXQUFPLElBQUlBLElBQUksQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsTUFBakMsQ0FBd0NkLElBQXhDLENBQVA7QUFDRDs7QUFFRCxTQUFPQSxJQUFJLENBQUNlLGNBQUwsQ0FBb0IsT0FBcEIsRUFBNkI7QUFDbENDLElBQUFBLEdBQUcsRUFBRSxTQUQ2QjtBQUVsQ0MsSUFBQUEsSUFBSSxFQUFFLFNBRjRCO0FBR2xDQyxJQUFBQSxNQUFNLEVBQUUsS0FIMEI7QUFJbENDLElBQUFBLE1BQU0sRUFBRSxTQUowQjtBQUtsQ0MsSUFBQUEsS0FBSyxFQUFFLFNBTDJCO0FBTWxDQyxJQUFBQSxJQUFJLEVBQUU7QUFONEIsR0FBN0IsQ0FBUDtBQVFEOztBQUVELFNBQVNDLGdCQUFULENBQTBCQyxjQUExQixFQUEwQ0MsSUFBMUMsRUFBZ0Q7QUFDOUMsdUJBQWNELGNBQWQsbUJBQXFDQyxJQUFyQztBQUNEOztBQUVELFNBQVNDLGlCQUFULENBQTJCRixjQUEzQixFQUEyQ0MsSUFBM0MsRUFBaUQ7QUFDL0MsNkJBQW9CRCxjQUFwQixtQkFBMkNDLElBQTNDO0FBQ0Q7O2VBRWM7QUFDYkUsRUFBQUEsOEJBQThCLEVBQUUsaUNBRG5CO0FBRWJDLEVBQUFBLGVBQWUsRUFBRSw2QkFGSjtBQUdiQyxFQUFBQSw0QkFBNEIsRUFBRSw0Q0FIakI7QUFJYix3QkFBc0JOLGdCQUpUO0FBS2JPLEVBQUFBLElBQUksRUFBRSxNQUxPO0FBTWIsbUJBQWlCLG9CQU5KO0FBT2IsZ0JBQWMsb0JBUEQ7QUFRYixvQkFBa0IsZUFSTDtBQVNiLG1CQUFpQixlQVRKO0FBVWJDLEVBQUFBLEtBQUssRUFBRSxpQkFWTTtBQVdiQyxFQUFBQSxJQUFJLEVBQUUsVUFYTztBQVliQyxFQUFBQSxPQUFPLEVBQUUsV0FaSTtBQWFiQyxFQUFBQSxLQUFLLEVBQUUsUUFiTTtBQWNiLGVBQWEsVUFkQTtBQWViQyxFQUFBQSxHQUFHLEVBQUUsS0FmUTtBQWdCYkMsRUFBQUEsS0FBSyxFQUFFLFFBaEJNO0FBaUJiLHVCQUFxQixnQkFqQlI7QUFrQmIsaUJBQWUsa0JBbEJGO0FBbUJiLHlCQUF1QlYsaUJBbkJWO0FBb0JiVyxFQUFBQSxHQUFHLEVBQUUsS0FwQlE7QUFxQmIsbUJBQWlCdEM7QUFyQkosQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiBbXCJlcnJvclwiLCB7IFwiaWdub3JlXCI6IFsxLCA1LCAyNCwgNDgsIDYwMDAwLCAzNjAwMDAwXSB9XSAqL1xuXG5mdW5jdGlvbiB4TWludXRlc0FnbyhkYXRlU3RyKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyKTtcbiAgY29uc3QgZGF0ZVRpbWUgPSBkYXRlLmdldFRpbWUoKTtcblxuICBpZiAoaXNOYU4oZGF0ZVRpbWUpKSB7XG4gICAgcmV0dXJuIGRhdGVTdHI7XG4gIH1cblxuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICBjb25zdCBkZWx0YUluTXMgPSBub3cgLSBkYXRlVGltZTtcbiAgY29uc3QgZGVsdGFJbk1pbnV0ZXMgPSBNYXRoLmZsb29yKGRlbHRhSW5NcyAvIDYwMDAwKTtcbiAgY29uc3QgZGVsdGFJbkhvdXJzID0gTWF0aC5mbG9vcihkZWx0YUluTXMgLyAzNjAwMDAwKTtcblxuICBpZiAoZGVsdGFJbk1pbnV0ZXMgPCAxKSB7XG4gICAgcmV0dXJuICdab2p1aXN0JztcbiAgfSBlbHNlIGlmIChkZWx0YUluTWludXRlcyA9PT0gMSkge1xuICAgIHJldHVybiAnRWVuIG1pbnV1dCBnZWxlZGVuJztcbiAgfSBlbHNlIGlmIChkZWx0YUluSG91cnMgPCAxKSB7XG4gICAgcmV0dXJuIGAke2RlbHRhSW5NaW51dGVzfSBtaW51dGVuIGdlbGVkZW5gO1xuICB9IGVsc2UgaWYgKGRlbHRhSW5Ib3VycyA9PT0gMSkge1xuICAgIHJldHVybiBgRWVuIHV1ciBnZWxlZGVuYDtcbiAgfSBlbHNlIGlmIChkZWx0YUluSG91cnMgPCA1KSB7XG4gICAgcmV0dXJuIGAke2RlbHRhSW5Ib3Vyc30gdXVyIGdlbGVkZW5gO1xuICB9IGVsc2UgaWYgKGRlbHRhSW5Ib3VycyA8PSAyNCkge1xuICAgIHJldHVybiBgVmFuZGFhZ2A7XG4gIH0gZWxzZSBpZiAoZGVsdGFJbkhvdXJzIDw9IDQ4KSB7XG4gICAgcmV0dXJuIGBHaXN0ZXJlbmA7XG4gIH0gZWxzZSBpZiAod2luZG93LkludGwpIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ25sLU5MJykuZm9ybWF0KGRhdGUpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoJ25sLU5MJywge1xuICAgIGRheTogJzItZGlnaXQnLFxuICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICBob3VyMTI6IGZhbHNlLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgeWVhcjogJ251bWVyaWMnXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBib3RTYWlkU29tZXRoaW5nKGF2YXRhckluaXRpYWxzLCB0ZXh0KSB7XG4gIHJldHVybiBgQm90ICR7YXZhdGFySW5pdGlhbHN9IHplaTsgJHt0ZXh0fWA7XG59XG5cbmZ1bmN0aW9uIHVzZXJTYWlkU29tZXRoaW5nKGF2YXRhckluaXRpYWxzLCB0ZXh0KSB7XG4gIHJldHVybiBgR2VicnVpa2VyICR7YXZhdGFySW5pdGlhbHN9IHplaTsgJHt0ZXh0fWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgRkFJTEVEX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OOiAnVmVyYmluZGluZyBtYWtlbiBuaWV0IG1vZ2VsaWprLicsXG4gIFNFTkRfRkFJTEVEX0tFWTogJ1ZlcnN0dXJlbiBtaXNsdWt0LCB7UmV0cnl9LicsXG4gIFNMT1dfQ09OTkVDVElPTl9OT1RJRklDQVRJT046ICdWZXJiaW5kaW5nIG1ha2VuIGR1dXJ0IGxhbmdlciBkYW4gbm9ybWFhbOKApicsXG4gICdCb3Qgc2FpZCBzb21ldGhpbmcnOiBib3RTYWlkU29tZXRoaW5nLFxuICBDaGF0OiAnQ2hhdCcsXG4gICdEb3dubG9hZCBmaWxlJzogJ0Jlc3RhbmQgZG93bmxvYWRlbicsXG4gICdMaXN0ZW5pbmfigKYnOiAnQWFuIGhldCBsdWlzdGVyZW7igKYnLFxuICAnTWljcm9waG9uZSBvZmYnOiAnTWljcm9mb29uIHVpdCcsXG4gICdNaWNyb3Bob25lIG9uJzogJ01pY3JvZm9vbiBhYW4nLFxuICBSZXRyeTogJ3Byb2JlZXIgb3BuaWV1dycsXG4gIFNlbmQ6ICdWZXJzdHV1cicsXG4gIFNlbmRpbmc6ICd2ZXJzdHVyZW4nLFxuICBTcGVhazogJ1NwcmVlaycsXG4gICdTdGFydGluZ+KApic6ICdTdGFydGVu4oCmJyxcbiAgVGF4OiAnQlRXJyxcbiAgVG90YWw6ICdUb3RhYWwnLFxuICAnVHlwZSB5b3VyIG1lc3NhZ2UnOiAnVHlwIGplIGJlcmljaHQnLFxuICAnVXBsb2FkIGZpbGUnOiAnQmVzdGFuZCB1cGxvYWRlbicsXG4gICdVc2VyIHNhaWQgc29tZXRoaW5nJzogdXNlclNhaWRTb21ldGhpbmcsXG4gIFZBVDogJ1ZBVCcsXG4gICdYIG1pbnV0ZXMgYWdvJzogeE1pbnV0ZXNBZ29cbn07XG4iXX0=