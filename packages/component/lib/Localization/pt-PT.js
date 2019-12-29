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
    return 'Agora mesmo';
  } else if (deltaInMinutes === 1) {
    return 'Um minuto atrás';
  } else if (deltaInHours < 1) {
    return ''.concat(deltaInMinutes, ' minutos atr\xE1s');
  } else if (deltaInHours === 1) {
    return 'Uma hora atr\xE1s';
  } else if (deltaInHours < 5) {
    return ''.concat(deltaInHours, ' horas atr\xE1s');
  } else if (deltaInHours <= 24) {
    return 'Hoje';
  } else if (deltaInHours <= 48) {
    return 'Ontem';
  } else if (window.Intl) {
    return new Intl.DateTimeFormat('pt-PT').format(date);
  }

  return date.toLocaleString('pt-PT', {
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

function botSaidSomething(avatarInitials, text) {
  return 'Bot '.concat(avatarInitials, ' disse, ').concat(text);
}

function userSaidSomething(avatarInitials, text) {
  return 'User '.concat(avatarInitials, ' disse, ').concat(text);
}

var _default = {
  FAILED_CONNECTION_NOTIFICATION: 'Não foi possível ligar.',
  INITIAL_CONNECTION_NOTIFICATION: 'A ligar…',
  INTERRUPTED_CONNECTION_NOTIFICATION: 'Interrupção de Rede. Reconectando…',
  RENDER_ERROR_NOTIFICATION:
    'Ocorreu um erro a renderizar. Por favor verifique a consola ou contacte o developer do bot.',
  // Do not localize {Retry}; it is a placeholder for "Retry". English translation should be, "Send failed. Retry."
  SEND_FAILED_KEY: 'O envio falhou. {Retry}.',
  SLOW_CONNECTION_NOTIFICATION: 'A ligação está a demorar mais tempo que o normal',
  'Bot said something': botSaidSomething,
  'User said something': userSaidSomething,
  'X minutes ago': xMinutesAgo,
  // '[File of type '%1']': '[File of type '%1']",
  // '[Unknown Card '%1']': '[Unknown Card '%1']',
  'Adaptive Card parse error': 'Erro ao fazer parse do Adaptive Card',
  'Adaptive Card render error': 'Erro ao renderizar o Adaptive Card',
  Chat: 'Chat',
  'Download file': 'Descarregar ficheiro',
  Left: 'Esquerda',
  'Listening…': 'A escutar…',
  'Microphone off': 'Desligar microfone',
  'Microphone on': 'Ligar microfone',
  'New messages': 'Novas mensagens',
  Retry: 'Tentar novamente',
  Right: 'Direita',
  Send: 'Enviar',
  Sending: 'A enviar',
  Speak: 'Falar',
  'Starting…': 'A iniciar…',
  Tax: 'Imposto',
  Total: 'Total',
  'Type your message': 'Escreva a sua mensagem',
  'Upload file': 'Enviar ficheiro',
  VAT: 'IVA'
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb2NhbGl6YXRpb24vcHQtUFQuanMiXSwibmFtZXMiOlsieE1pbnV0ZXNBZ28iLCJkYXRlU3RyIiwiZGF0ZSIsIkRhdGUiLCJkYXRlVGltZSIsImdldFRpbWUiLCJpc05hTiIsIm5vdyIsImRlbHRhSW5NcyIsImRlbHRhSW5NaW51dGVzIiwiTWF0aCIsImZsb29yIiwiZGVsdGFJbkhvdXJzIiwid2luZG93IiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwiZm9ybWF0IiwidG9Mb2NhbGVTdHJpbmciLCJkYXkiLCJob3VyIiwiaG91cjEyIiwibWludXRlIiwibW9udGgiLCJ5ZWFyIiwiYm90U2FpZFNvbWV0aGluZyIsImF2YXRhckluaXRpYWxzIiwidGV4dCIsInVzZXJTYWlkU29tZXRoaW5nIiwiRkFJTEVEX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OIiwiSU5JVElBTF9DT05ORUNUSU9OX05PVElGSUNBVElPTiIsIklOVEVSUlVQVEVEX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OIiwiUkVOREVSX0VSUk9SX05PVElGSUNBVElPTiIsIlNFTkRfRkFJTEVEX0tFWSIsIlNMT1dfQ09OTkVDVElPTl9OT1RJRklDQVRJT04iLCJDaGF0IiwiTGVmdCIsIlJldHJ5IiwiUmlnaHQiLCJTZW5kIiwiU2VuZGluZyIsIlNwZWFrIiwiVGF4IiwiVG90YWwiLCJWQVQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQThCO0FBQzVCLE1BQU1DLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNGLE9BQVQsQ0FBYjtBQUNBLE1BQU1HLFFBQVEsR0FBR0YsSUFBSSxDQUFDRyxPQUFMLEVBQWpCOztBQUVBLE1BQUlDLEtBQUssQ0FBQ0YsUUFBRCxDQUFULEVBQXFCO0FBQ25CLFdBQU9ILE9BQVA7QUFDRDs7QUFFRCxNQUFNTSxHQUFHLEdBQUdKLElBQUksQ0FBQ0ksR0FBTCxFQUFaO0FBQ0EsTUFBTUMsU0FBUyxH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RUFBRTtBQWpDUSxDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IFtcImVycm9yXCIsIHsgXCJpZ25vcmVcIjogWzEsIDUsIDI0LCA0OCwgNjAwMDAsIDM2MDAwMDBdIH1dICovXG5cbmZ1bmN0aW9uIHhNaW51dGVzQWdvKGRhdGVTdHIpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xuICBjb25zdCBkYXRlVGltZSA9IGRhdGUuZ2V0VGltZSgpO1xuXG4gIGlmIChpc05hTihkYXRlVGltZSkpIHtcbiAgICByZXR1cm4gZGF0ZVN0cjtcbiAgfVxuXG4gIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gIGNvbnN0IGRlbHRhSW5NcyA9IG5vdyAtIGRhdGVUaW1lO1xuICBjb25zdCBkZWx0YUluTWludXRlcyA9IE1hdGguZmxvb3IoZGVsdGFJbk1zIC8gNjAwMDApO1xuICBjb25zdCBkZWx0YUluSG91cnMgPSBNYXRoLmZsb29yKGRlbHRhSW5NcyAvIDM2MDAwMDApO1xuXG4gIGlmIChkZWx0YUluTWludXRlcyA8IDEpIHtcbiAgICByZXR1cm4gJ0Fnb3JhIG1lc21vJztcbiAgfSBlbHNlIGlmIChkZWx0YUluTWludXRlcyA9PT0gMSkge1xuICAgIHJldHVybiAnVW0gbWludXRvIGF0csOhcyc7XG4gIH0gZWxzZSBpZiAoZGVsdGFJbkhvdXJzIDwgMSkge1xuICAgIHJldHVybiBgJHtkZWx0YUluTWludXRlc30gbWludXRvcyBhdHLDoXNgO1xuICB9IGVsc2UgaWYgKGRlbHRhSW5Ib3VycyA9PT0gMSkge1xuICAgIHJldHVybiBgVW1hIGhvcmEgYXRyw6FzYDtcbiAgfSBlbHNlIGlmIChkZWx0YUluSG91cnMgPCA1KSB7XG4gICAgcmV0dXJuIGAke2RlbHRhSW5Ib3Vyc30gaG9yYXMgYXRyw6FzYDtcbiAgfSBlbHNlIGlmIChkZWx0YUluSG91cnMgPD0gMjQpIHtcbiAgICByZXR1cm4gYEhvamVgO1xuICB9IGVsc2UgaWYgKGRlbHRhSW5Ib3VycyA8PSA0OCkge1xuICAgIHJldHVybiBgT250ZW1gO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5JbnRsKSB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdwdC1QVCcpLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCdwdC1QVCcsIHtcbiAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgaG91cjEyOiBmYWxzZSxcbiAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICBtb250aDogJzItZGlnaXQnLFxuICAgIHllYXI6ICdudW1lcmljJ1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYm90U2FpZFNvbWV0aGluZyhhdmF0YXJJbml0aWFscywgdGV4dCkge1xuICByZXR1cm4gYEJvdCAke2F2YXRhckluaXRpYWxzfSBkaXNzZSwgJHt0ZXh0fWA7XG59XG5cbmZ1bmN0aW9uIHVzZXJTYWlkU29tZXRoaW5nKGF2YXRhckluaXRpYWxzLCB0ZXh0KSB7XG4gIHJldHVybiBgVXNlciAke2F2YXRhckluaXRpYWxzfSBkaXNzZSwgJHt0ZXh0fWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgRkFJTEVEX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OOiAnTsOjbyBmb2kgcG9zc8OtdmVsIGxpZ2FyLicsXG4gIElOSVRJQUxfQ09OTkVDVElPTl9OT1RJRklDQVRJT046ICdBIGxpZ2Fy4oCmJyxcbiAgSU5URVJSVVBURURfQ09OTkVDVElPTl9OT1RJRklDQVRJT046ICdJbnRlcnJ1cMOnw6NvIGRlIFJlZGUuIFJlY29uZWN0YW5kb+KApicsXG4gIFJFTkRFUl9FUlJPUl9OT1RJRklDQVRJT046XG4gICAgJ09jb3JyZXUgdW0gZXJybyBhIHJlbmRlcml6YXIuIFBvciBmYXZvciB2ZXJpZmlxdWUgYSBjb25zb2xhIG91IGNvbnRhY3RlIG8gZGV2ZWxvcGVyIGRvIGJvdC4nLFxuICAvLyBEbyBub3QgbG9jYWxpemUge1JldHJ5fTsgaXQgaXMgYSBwbGFjZWhvbGRlciBmb3IgXCJSZXRyeVwiLiBFbmdsaXNoIHRyYW5zbGF0aW9uIHNob3VsZCBiZSwgXCJTZW5kIGZhaWxlZC4gUmV0cnkuXCJcbiAgU0VORF9GQUlMRURfS0VZOiAnTyBlbnZpbyBmYWxob3UuIHtSZXRyeX0uJyxcbiAgU0xPV19DT05ORUNUSU9OX05PVElGSUNBVElPTjogJ0EgbGlnYcOnw6NvIGVzdMOhIGEgZGVtb3JhciBtYWlzIHRlbXBvIHF1ZSBvIG5vcm1hbCcsXG4gICdCb3Qgc2FpZCBzb21ldGhpbmcnOiBib3RTYWlkU29tZXRoaW5nLFxuICAnVXNlciBzYWlkIHNvbWV0aGluZyc6IHVzZXJTYWlkU29tZXRoaW5nLFxuICAnWCBtaW51dGVzIGFnbyc6IHhNaW51dGVzQWdvLFxuICAvLyAnW0ZpbGUgb2YgdHlwZSAnJTEnXSc6ICdbRmlsZSBvZiB0eXBlICclMSddXCIsXG4gIC8vICdbVW5rbm93biBDYXJkICclMSddJzogJ1tVbmtub3duIENhcmQgJyUxJ10nLFxuICAnQWRhcHRpdmUgQ2FyZCBwYXJzZSBlcnJvcic6ICdFcnJvIGFvIGZhemVyIHBhcnNlIGRvIEFkYXB0aXZlIENhcmQnLFxuICAnQWRhcHRpdmUgQ2FyZCByZW5kZXIgZXJyb3InOiAnRXJybyBhbyByZW5kZXJpemFyIG8gQWRhcHRpdmUgQ2FyZCcsXG4gIENoYXQ6ICdDaGF0JyxcbiAgJ0Rvd25sb2FkIGZpbGUnOiAnRGVzY2FycmVnYXIgZmljaGVpcm8nLFxuICBMZWZ0OiAnRXNxdWVyZGEnLFxuICAnTGlzdGVuaW5n4oCmJzogJ0EgZXNjdXRhcuKApicsXG4gICdNaWNyb3Bob25lIG9mZic6ICdEZXNsaWdhciBtaWNyb2ZvbmUnLFxuICAnTWljcm9waG9uZSBvbic6ICdMaWdhciBtaWNyb2ZvbmUnLFxuICAnTmV3IG1lc3NhZ2VzJzogJ05vdmFzIG1lbnNhZ2VucycsXG4gIFJldHJ5OiAnVGVudGFyIG5vdmFtZW50ZScsXG4gIFJpZ2h0OiAnRGlyZWl0YScsXG4gIFNlbmQ6ICdFbnZpYXInLFxuICBTZW5kaW5nOiAnQSBlbnZpYXInLFxuICBTcGVhazogJ0ZhbGFyJyxcbiAgJ1N0YXJ0aW5n4oCmJzogJ0EgaW5pY2lhcuKApicsXG4gIFRheDogJ0ltcG9zdG8nLFxuICBUb3RhbDogJ1RvdGFsJyxcbiAgJ1R5cGUgeW91ciBtZXNzYWdlJzogJ0VzY3JldmEgYSBzdWEgbWVuc2FnZW0nLFxuICAnVXBsb2FkIGZpbGUnOiAnRW52aWFyIGZpY2hlaXJvJyxcbiAgVkFUOiAnSVZBJ1xufTtcbiJdfQ==