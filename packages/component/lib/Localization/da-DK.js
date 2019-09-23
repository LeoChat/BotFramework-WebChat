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
    return 'Lige nu';
  } else if (deltaInMinutes === 1) {
    return 'Et minut siden';
  } else if (deltaInHours < 1) {
    return ''.concat(deltaInMinutes, ' minutter siden');
  } else if (deltaInHours === 1) {
    return 'En time siden';
  } else if (deltaInHours < 5) {
    return ''.concat(deltaInHours, ' timer siden');
  } else if (deltaInHours <= 24) {
    return 'Idag';
  } else if (deltaInHours <= 48) {
    return 'Ig\xE5r';
  } else if (window.Intl) {
    return new Intl.DateTimeFormat('da-DK').format(date);
  }

  return date.toLocaleString('da-DK', {
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

function botSaidSomething(avatarInitials, text) {
  return 'Bot '.concat(avatarInitials, ' sagde, ').concat(text);
}

function userSaidSomething(avatarInitials, text) {
  return 'Bruger '.concat(avatarInitials, ' sagde, ').concat(text);
}

var _default = {
  FAILED_CONNECTION_NOTIFICATION: 'Kunne ikke tilslutte',
  // Do not localize {Retry}; it is a placeholder for "Retry". English translation should be, "Send failed. Retry."
  SEND_FAILED_KEY: 'ikke sendt, {Retry}.',
  SLOW_CONNECTION_NOTIFICATION: 'Det tager længere tid at tilslutte end forventet',
  'Bot said something': botSaidSomething,
  'User said something': userSaidSomething,
  'X minutes ago': xMinutesAgo,
  // '[File of type '%1']': '[File of type '%1']",
  // '[Unknown Card '%1']': '[Unknown Card '%1']',
  'Adaptive Card parse error': 'Adaptive Card parse fejl',
  'Adaptive Card render error': 'Adaptive Card renderings-fejl',
  Chat: 'Chat',
  'Download file': 'Hent fil',
  'Microphone off': 'Mikrofon slukket',
  'Microphone on': 'Mikrofon tændt',
  'Listening…': 'Lytter…',
  Left: 'Venstre',
  'New messages': 'Ny besked',
  Right: 'Højre',
  Retry: 'prøv igen',
  Sending: 'Sender',
  'Starting…': 'Starter...',
  Tax: 'Skat',
  Total: 'Total',
  VAT: 'Moms',
  Send: 'Send',
  Speak: 'Tal',
  'Upload file': 'Upload fil',
  'Type your message': 'Skriv din besked'
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb2NhbGl6YXRpb24vZGEtREsuanMiXSwibmFtZXMiOlsieE1pbnV0ZXNBZ28iLCJkYXRlU3RyIiwiZGF0ZSIsIkRhdGUiLCJkYXRlVGltZSIsImdldFRpbWUiLCJpc05hTiIsIm5vdyIsImRlbHRhSW5NcyIsImRlbHRhSW5NaW51dGVzIiwiTWF0aCIsImZsb29yIiwiZGVsdGFJbkhvdXJzIiwid2luZG93IiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwiZm9ybWF0IiwidG9Mb2NhbGVTdHJpbmciLCJkYXkiLCJob3VyIiwiaG91cjEyIiwibWludXRlIiwibW9udGgiLCJ5ZWFyIiwiYm90U2FpZFNvbWV0aGluZyIsImF2YXRhckluaXRpYWxzIiwidGV4dCIsInVzZXJTYWlkU29tZXRoaW5nIiwiRkFJTEVEX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OIiwiU0VORF9GQUlMRURfS0VZIiwiU0xPV19DT05ORUNUSU9OX05PVElGSUNBVElPTiIsIkNoYXQiLCJMZWZ0IiwiUmlnaHQiLCJSZXRyeSIsIlNlbmRpbmciLCJUYXgiLCJUb3RhbCIsIlZBVCIsIlNlbmQiLCJTcGVhayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI7QUFDNUIsTUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU0YsT0FBVCxDQUFiO0FBQ0EsTUFBTUcsUUFBUSxHQUFHRixJQUFJLENBQUNHLE9BQUwsRUFBakI7O0FBRUEsTUFBSUMsS0FBSyxDQUFDRixRQUFELENBQVQsRUFBcUI7QUFDbkIsV0FBT0gsT0FBUDtBQUNEOztBQUVELE1BQU1NLEdBQUcsR0FBR0osSUFBSSxDQUFDSSxHQUFMLEVBQVo7QUFDQSxNQUFNQyxTQUFTLEdBQUdELEdBQUcsR0FBR0gsUUFBeEI7QUFDQSxNQUFNSyxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxTQUFTLEdBQUcsS0FBdkIsQ0FBdkI7QUFDQSxNQUFNSSxZQUFZLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxTQUFTLEdBQUcsT0FBdkIsQ0FBckI7O0FBRUEsTUFBSUMsY0FBYyxHQUFHLENBQXJCLEVBQXdCO0FBQ3RCLFdBQU8sU0FBUDtBQUNELEdBRkQsTUFFTyxJQUFJQSxjQUFjLEtBQUssQ0FBdkIsRUFBMEI7QUFDL0IsV0FBTyxnQkFBUDtBQUNELEdBRk0sTUFFQSxJQUFJRyxZQUFZLEdBQUcsQ0FBbkIsRUFBc0I7QUFDM0IscUJBQVVILGNBQVY7QUFDRCxHQUZNLE1BRUEsSUFBSUcsWUFBWSxLQUFLLENBQXJCLEVBQXdCO0FBQzdCO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFlBQVksR0FBRyxDQUFuQixFQUFzQjtBQUMzQixxQkFBVUEsWUFBVjtBQUNELEdBRk0sTUFFQSxJQUFJQSxZQUFZLElBQUksRUFBcEIsRUFBd0I7QUFDN0I7QUFDRCxHQUZNLE1BRUEsSUFBSUEsWUFBWSxJQUFJLEVBQXBCLEVBQXdCO0FBQzdCO0FBQ0QsR0FGTSxNQUVBLElBQUlDLE1BQU0sQ0FBQ0MsSUFBWCxFQUFpQjtBQUN0QixXQUFPLElBQUlBLElBQUksQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsTUFBakMsQ0FBd0NkLElBQXhDLENBQVA7QUFDRDs7QUFFRCxTQUFPQSxJQUFJLENBQUNlLGNBQUwsQ0FBb0IsT0FBcEIsRUFBNkI7QUFDbENDLElBQUFBLEdBQUcsRUFBRSxTQUQ2QjtBQUVsQ0MsSUFBQUEsSUFBSSxFQUFFLFNBRjRCO0FBR2xDQyxJQUFBQSxNQUFNLEVBQUUsS0FIMEI7QUFJbENDLElBQUFBLE1BQU0sRUFBRSxTQUowQjtBQUtsQ0MsSUFBQUEsS0FBSyxFQUFFLFNBTDJCO0FBTWxDQyxJQUFBQSxJQUFJLEVBQUU7QUFONEIsR0FBN0IsQ0FBUDtBQVFEOztBQUVELFNBQVNDLGdCQUFULENBQTBCQyxjQUExQixFQUEwQ0MsSUFBMUMsRUFBZ0Q7QUFDOUMsdUJBQWNELGNBQWQscUJBQXVDQyxJQUF2QztBQUNEOztBQUVELFNBQVNDLGlCQUFULENBQTJCRixjQUEzQixFQUEyQ0MsSUFBM0MsRUFBaUQ7QUFDL0MsMEJBQWlCRCxjQUFqQixxQkFBMENDLElBQTFDO0FBQ0Q7O2VBRWM7QUFDYkUsRUFBQUEsOEJBQThCLEVBQUUsc0JBRG5CO0FBRWI7QUFDQUMsRUFBQUEsZUFBZSx3QkFIRjtBQUliQyxFQUFBQSw0QkFBNEIsRUFBRSxrREFKakI7QUFLYix3QkFBc0JOLGdCQUxUO0FBTWIseUJBQXVCRyxpQkFOVjtBQU9iLG1CQUFpQjNCLFdBUEo7QUFRYjtBQUNBO0FBQ0EsK0JBQTZCLDBCQVZoQjtBQVdiLGdDQUE4QiwrQkFYakI7QUFZYitCLEVBQUFBLElBQUksRUFBRSxNQVpPO0FBYWIsbUJBQWlCLFVBYko7QUFjYixvQkFBa0Isa0JBZEw7QUFlYixtQkFBaUIsZ0JBZko7QUFnQmIsZ0JBQWMsU0FoQkQ7QUFpQmJDLEVBQUFBLElBQUksRUFBRSxTQWpCTztBQWtCYixrQkFBZ0IsV0FsQkg7QUFtQmJDLEVBQUFBLEtBQUssRUFBRSxPQW5CTTtBQW9CYkMsRUFBQUEsS0FBSyxFQUFFLFdBcEJNO0FBcUJiQyxFQUFBQSxPQUFPLEVBQUUsUUFyQkk7QUFzQmIsZUFBYSxZQXRCQTtBQXVCYkMsRUFBQUEsR0FBRyxFQUFFLE1BdkJRO0FBd0JiQyxFQUFBQSxLQUFLLEVBQUUsT0F4Qk07QUF5QmJDLEVBQUFBLEdBQUcsRUFBRSxNQXpCUTtBQTBCYkMsRUFBQUEsSUFBSSxFQUFFLE1BMUJPO0FBMkJiQyxFQUFBQSxLQUFLLEVBQUUsS0EzQk07QUE0QmIsaUJBQWUsWUE1QkY7QUE2QmIsdUJBQXFCO0FBN0JSLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVwiOiBbMSwgNSwgMjQsIDQ4LCA2MDAwMCwgMzYwMDAwMF0gfV0gKi9cblxuZnVuY3Rpb24geE1pbnV0ZXNBZ28oZGF0ZVN0cikge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cik7XG4gIGNvbnN0IGRhdGVUaW1lID0gZGF0ZS5nZXRUaW1lKCk7XG5cbiAgaWYgKGlzTmFOKGRhdGVUaW1lKSkge1xuICAgIHJldHVybiBkYXRlU3RyO1xuICB9XG5cbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgY29uc3QgZGVsdGFJbk1zID0gbm93IC0gZGF0ZVRpbWU7XG4gIGNvbnN0IGRlbHRhSW5NaW51dGVzID0gTWF0aC5mbG9vcihkZWx0YUluTXMgLyA2MDAwMCk7XG4gIGNvbnN0IGRlbHRhSW5Ib3VycyA9IE1hdGguZmxvb3IoZGVsdGFJbk1zIC8gMzYwMDAwMCk7XG5cbiAgaWYgKGRlbHRhSW5NaW51dGVzIDwgMSkge1xuICAgIHJldHVybiAnTGlnZSBudSc7XG4gIH0gZWxzZSBpZiAoZGVsdGFJbk1pbnV0ZXMgPT09IDEpIHtcbiAgICByZXR1cm4gJ0V0IG1pbnV0IHNpZGVuJztcbiAgfSBlbHNlIGlmIChkZWx0YUluSG91cnMgPCAxKSB7XG4gICAgcmV0dXJuIGAke2RlbHRhSW5NaW51dGVzfSBtaW51dHRlciBzaWRlbmA7XG4gIH0gZWxzZSBpZiAoZGVsdGFJbkhvdXJzID09PSAxKSB7XG4gICAgcmV0dXJuIGBFbiB0aW1lIHNpZGVuYDtcbiAgfSBlbHNlIGlmIChkZWx0YUluSG91cnMgPCA1KSB7XG4gICAgcmV0dXJuIGAke2RlbHRhSW5Ib3Vyc30gdGltZXIgc2lkZW5gO1xuICB9IGVsc2UgaWYgKGRlbHRhSW5Ib3VycyA8PSAyNCkge1xuICAgIHJldHVybiBgSWRhZ2A7XG4gIH0gZWxzZSBpZiAoZGVsdGFJbkhvdXJzIDw9IDQ4KSB7XG4gICAgcmV0dXJuIGBJZ8OlcmA7XG4gIH0gZWxzZSBpZiAod2luZG93LkludGwpIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2RhLURLJykuZm9ybWF0KGRhdGUpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2RhLURLJywge1xuICAgIGRheTogJzItZGlnaXQnLFxuICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICBob3VyMTI6IGZhbHNlLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgeWVhcjogJ251bWVyaWMnXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBib3RTYWlkU29tZXRoaW5nKGF2YXRhckluaXRpYWxzLCB0ZXh0KSB7XG4gIHJldHVybiBgQm90ICR7YXZhdGFySW5pdGlhbHN9IHNhZ2RlLCAke3RleHR9YDtcbn1cblxuZnVuY3Rpb24gdXNlclNhaWRTb21ldGhpbmcoYXZhdGFySW5pdGlhbHMsIHRleHQpIHtcbiAgcmV0dXJuIGBCcnVnZXIgJHthdmF0YXJJbml0aWFsc30gc2FnZGUsICR7dGV4dH1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEZBSUxFRF9DT05ORUNUSU9OX05PVElGSUNBVElPTjogJ0t1bm5lIGlra2UgdGlsc2x1dHRlJyxcbiAgLy8gRG8gbm90IGxvY2FsaXplIHtSZXRyeX07IGl0IGlzIGEgcGxhY2Vob2xkZXIgZm9yIFwiUmV0cnlcIi4gRW5nbGlzaCB0cmFuc2xhdGlvbiBzaG91bGQgYmUsIFwiU2VuZCBmYWlsZWQuIFJldHJ5LlwiXG4gIFNFTkRfRkFJTEVEX0tFWTogYGlra2Ugc2VuZHQsIHtSZXRyeX0uYCxcbiAgU0xPV19DT05ORUNUSU9OX05PVElGSUNBVElPTjogJ0RldCB0YWdlciBsw6ZuZ2VyZSB0aWQgYXQgdGlsc2x1dHRlIGVuZCBmb3J2ZW50ZXQnLFxuICAnQm90IHNhaWQgc29tZXRoaW5nJzogYm90U2FpZFNvbWV0aGluZyxcbiAgJ1VzZXIgc2FpZCBzb21ldGhpbmcnOiB1c2VyU2FpZFNvbWV0aGluZyxcbiAgJ1ggbWludXRlcyBhZ28nOiB4TWludXRlc0FnbyxcbiAgLy8gJ1tGaWxlIG9mIHR5cGUgJyUxJ10nOiAnW0ZpbGUgb2YgdHlwZSAnJTEnXVwiLFxuICAvLyAnW1Vua25vd24gQ2FyZCAnJTEnXSc6ICdbVW5rbm93biBDYXJkICclMSddJyxcbiAgJ0FkYXB0aXZlIENhcmQgcGFyc2UgZXJyb3InOiAnQWRhcHRpdmUgQ2FyZCBwYXJzZSBmZWpsJyxcbiAgJ0FkYXB0aXZlIENhcmQgcmVuZGVyIGVycm9yJzogJ0FkYXB0aXZlIENhcmQgcmVuZGVyaW5ncy1mZWpsJyxcbiAgQ2hhdDogJ0NoYXQnLFxuICAnRG93bmxvYWQgZmlsZSc6ICdIZW50IGZpbCcsXG4gICdNaWNyb3Bob25lIG9mZic6ICdNaWtyb2ZvbiBzbHVra2V0JyxcbiAgJ01pY3JvcGhvbmUgb24nOiAnTWlrcm9mb24gdMOmbmR0JyxcbiAgJ0xpc3RlbmluZ+KApic6ICdMeXR0ZXLigKYnLFxuICBMZWZ0OiAnVmVuc3RyZScsXG4gICdOZXcgbWVzc2FnZXMnOiAnTnkgYmVza2VkJyxcbiAgUmlnaHQ6ICdIw7hqcmUnLFxuICBSZXRyeTogJ3Byw7h2IGlnZW4nLFxuICBTZW5kaW5nOiAnU2VuZGVyJyxcbiAgJ1N0YXJ0aW5n4oCmJzogJ1N0YXJ0ZXIuLi4nLFxuICBUYXg6ICdTa2F0JyxcbiAgVG90YWw6ICdUb3RhbCcsXG4gIFZBVDogJ01vbXMnLFxuICBTZW5kOiAnU2VuZCcsXG4gIFNwZWFrOiAnVGFsJyxcbiAgJ1VwbG9hZCBmaWxlJzogJ1VwbG9hZCBmaWwnLFxuICAnVHlwZSB5b3VyIG1lc3NhZ2UnOiAnU2tyaXYgZGluIGJlc2tlZCdcbn07XG4iXX0=
