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
    return 'Adesso';
  } else if (deltaInMinutes === 1) {
    return 'Un minuto fa';
  } else if (deltaInHours < 1) {
    return ''.concat(deltaInMinutes, ' minuti fa');
  } else if (deltaInHours === 1) {
    return 'Un ora fa';
  } else if (deltaInHours < 5) {
    return ''.concat(deltaInHours, ' ore fa');
  } else if (deltaInHours <= 24) {
    return 'Oggi';
  } else if (deltaInHours <= 48) {
    return 'Ieri';
  } else if (window.Intl) {
    return new Intl.DateTimeFormat('it-IT').format(date);
  }

  return date.toLocaleString('it-IT', {
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

function botSaidSomething(avatarInitials, text) {
  return 'Il Bot '.concat(avatarInitials, ' ha detto, ').concat(text);
}

function downloadFileWithFileSize(downloadFileText, fileName, size) {
  // Full text should read: "Download file <filename> of size <filesize>"
  return ''
    .concat(downloadFileText, ' ')
    .concat(fileName, ' di dimensione ')
    .concat(size);
}

function uploadFileWithFileSize(fileName, size) {
  return ''.concat(fileName, ' di dimensione ').concat(size);
}

function userSaidSomething(avatarInitials, text) {
  return "L'utente ".concat(avatarInitials, ' ha detto, ').concat(text);
}

var _default = {
  CONNECTED_NOTIFICATION: 'Connesso',
  FAILED_CONNECTION_NOTIFICATION: 'Impossibile connettersi.',
  INITIAL_CONNECTION_NOTIFICATION: 'In connessione…',
  INTERRUPTED_CONNECTION_NOTIFICATION: 'La connessione è stata interrotta. Riconnessione…',
  RENDER_ERROR_NOTIFICATION: 'Errore di visualizzazione. Contatta lo sviluppatore del bot.',
  // Do not localize {Retry}; it is a placeholder for "Retry". English translation should be, "Send failed. Retry."
  SEND_FAILED_KEY: 'Impossibile inviare, {Retry}.',
  SLOW_CONNECTION_NOTIFICATION: 'Il Bot sta impiegando più tempo del solito per connettersi.',
  'Bot said something': botSaidSomething,
  'User said something': userSaidSomething,
  'X minutes ago': xMinutesAgo,
  'Adaptive Card parse error': 'Adaptive Card, errore di interpretazione',
  'Adaptive Card render error': 'Adaptive Card, errore di visualizzazione',
  BotSent: 'Il Bot ha inviato: ',
  Chat: 'Chat',
  'Download file': 'Download file',
  DownloadFileWithFileSize: downloadFileWithFileSize,
  ErrorMessage: 'Messaggio di errore',
  'Microphone off': 'Microfono spento',
  'Microphone on': 'Microfono acceso',
  Left: 'Sinistra',
  'Listening…': 'Ascoltando…',
  'New messages': 'Nuovi messaggi',
  Retry: 'Riprova',
  Right: 'Destra',
  Send: 'Invia',
  Sending: 'invio',
  SendStatus: 'Stato di invio: ',
  SentAt: 'Inviato a: ',
  Speak: 'Parla',
  'Starting…': 'Inizializzando…',
  Tax: 'Tasse',
  Total: 'Totale',
  'Type your message': 'Scrivi il tuo messaggio',
  'Upload file': 'Carica un file',
  UploadFileWithFileSize: uploadFileWithFileSize,
  VAT: 'IVA'
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb2NhbGl6YXRpb24vaXQtSVQuanMiXSwibmFtZXMiOlsieE1pbnV0ZXNBZ28iLCJkYXRlU3RyIiwiZGF0ZSIsIkRhdGUiLCJkYXRlVGltZSIsImdldFRpbWUiLCJpc05hTiIsIm5vdyIsImRlbHRhSW5NcyIsImRlbHRhSW5NaW51dGVzIiwiTWF0aCIsImZsb29yIiwiZGVsdGFJbkhvdXJzIiwid2luZG93IiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwiZm9ybWF0IiwidG9Mb2NhbGVTdHJpbmciLCJkYXkiLCJob3VyIiwiaG91cjEyIiwibWludXRlIiwibW9udGgiLCJ5ZWFyIiwiYm90U2FpZFNvbWV0aGluZyIsImF2YXRhckluaXRpYWxzIiwidGV4dCIsImRvd25sb2FkRmlsZVdpdGhGaWxlU2l6ZSIsImRvd25sb2FkRmlsZVRleHQiLCJmaWxlTmFtZSIsInNpemUiLCJ1cGxvYWRGaWxlV2l0aEZpbGVTaXplIiwidXNlclNhaWRTb21ldGhpbmciLCJDT05ORUNURURfTk9USUZJQ0FUSU9OIiwiRkFJTEVEX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OIiwiSU5JVElBTF9DT05ORUNUSU9OX05PVElGSUNBVElPTiIsIklOVEVSUlVQVEVEX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OIiwiUkVOREVSX0VSUk9SX05PVElGSUNBVElPTiIsIlNFTkRfRkFJTEVEX0tFWSIsIlNMT1dfQ09OTkVDVElPTl9OT1RJRklDQVRJT04iLCJCb3RTZW50IiwiQ2hhdCIsIkRvd25sb2FkRmlsZVdpdGhGaWxlU2l6ZSIsIkVycm9yTWVzc2FnZSIsIkxlZnQiLCJSZXRyeSIsIlJpZ2h0IiwiU2VuZCIsIlNlbmRpbmciLCJTZW5kU3RhdHVzIiwiU2VudEF0IiwiU3BlYWsiLCJUYXgiLCJUb3RhbCIsIlVwbG9hZEZpbGVXaXRoRmlsZVNpemUiLCJWQVQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQThCO0FB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QjtBQWNid0MsRUFBQUEsT0FBTyxFQUFFLHFCQWRJO0FBZWJDLEVBQUFBLElBQUksRUFBRSxNQWZPO0FBZ0JiLG1CQUFpQixlQWhCSjtBQWlCYkMsRUFBQUEsd0JBQXdCLEVBQUVmLHdCQWpCYjtBQWtCYmdCLEVBQUFBLFlBQVksRUFBRSxxQkFsQkQ7QUFtQmIsb0JBQWtCLGtCQW5CTDtBQW9CYixtQkFBaUIsa0JBcEJKO0FBcUJiQyxFQUFBQSxJQUFJLEVBQUUsVUFyQk87QUFzQmIsZ0JBQWMsYUF0QkQ7QUF1QmIsa0JBQWdCLGdCQXZCSDtBQXdCYkMsRUFBQUEsS0FBSyxFQUFFLFNBeEJNO0FBeUJiQyxFQUFBQSxLQUFLLEVBQUUsUUF6Qk07QUEwQmJDLEVBQUFBLElBQUksRUFBRSxPQTFCTztBQTJCYkMsRUFBQUEsT0FBTyxFQUFFLE9BM0JJO0FBNEJiQyxFQUFBQSxVQUFVLEVBQUUsa0JBNUJDO0FBNkJiQyxFQUFBQSxNQUFNLEVBQUUsYUE3Qks7QUE4QmJDLEVBQUFBLEtBQUssRUFBRSxPQTlCTTtBQStCYixlQUFhLGlCQS9CQTtBQWdDYkMsRUFBQUEsR0FBRyxFQUFFLE9BaENRO0FBaUNiQyxFQUFBQSxLQUFLLEVBQUUsUUFqQ007QUFrQ2IsdUJBQXFCLHlCQWxDUjtBQW1DYixpQkFBZSxnQkFuQ0Y7QUFvQ2JDLEVBQUFBLHNCQUFzQixFQUFFdkIsc0JBcENYO0FBcUNid0IsRUFBQUEsR0FBRyxFQUFFO0FBckNRLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVwiOiBbMSwgNSwgMjQsIDQ4LCA2MDAwMCwgMzYwMDAwMF0gfV0gKi9cblxuZnVuY3Rpb24geE1pbnV0ZXNBZ28oZGF0ZVN0cikge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cik7XG4gIGNvbnN0IGRhdGVUaW1lID0gZGF0ZS5nZXRUaW1lKCk7XG5cbiAgaWYgKGlzTmFOKGRhdGVUaW1lKSkge1xuICAgIHJldHVybiBkYXRlU3RyO1xuICB9XG5cbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgY29uc3QgZGVsdGFJbk1zID0gbm93IC0gZGF0ZVRpbWU7XG4gIGNvbnN0IGRlbHRhSW5NaW51dGVzID0gTWF0aC5mbG9vcihkZWx0YUluTXMgLyA2MDAwMCk7XG4gIGNvbnN0IGRlbHRhSW5Ib3VycyA9IE1hdGguZmxvb3IoZGVsdGFJbk1zIC8gMzYwMDAwMCk7XG5cbiAgaWYgKGRlbHRhSW5NaW51dGVzIDwgMSkge1xuICAgIHJldHVybiAnQWRlc3NvJztcbiAgfSBlbHNlIGlmIChkZWx0YUluTWludXRlcyA9PT0gMSkge1xuICAgIHJldHVybiAnVW4gbWludXRvIGZhJztcbiAgfSBlbHNlIGlmIChkZWx0YUluSG91cnMgPCAxKSB7XG4gICAgcmV0dXJuIGAke2RlbHRhSW5NaW51dGVzfSBtaW51dGkgZmFgO1xuICB9IGVsc2UgaWYgKGRlbHRhSW5Ib3VycyA9PT0gMSkge1xuICAgIHJldHVybiBgVW4gb3JhIGZhYDtcbiAgfSBlbHNlIGlmIChkZWx0YUluSG91cnMgPCA1KSB7XG4gICAgcmV0dXJuIGAke2RlbHRhSW5Ib3Vyc30gb3JlIGZhYDtcbiAgfSBlbHNlIGlmIChkZWx0YUluSG91cnMgPD0gMjQpIHtcbiAgICByZXR1cm4gYE9nZ2lgO1xuICB9IGVsc2UgaWYgKGRlbHRhSW5Ib3VycyA8PSA0OCkge1xuICAgIHJldHVybiBgSWVyaWA7XG4gIH0gZWxzZSBpZiAod2luZG93LkludGwpIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2l0LUlUJykuZm9ybWF0KGRhdGUpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2l0LUlUJywge1xuICAgIGRheTogJzItZGlnaXQnLFxuICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICBob3VyMTI6IGZhbHNlLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgeWVhcjogJ251bWVyaWMnXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBib3RTYWlkU29tZXRoaW5nKGF2YXRhckluaXRpYWxzLCB0ZXh0KSB7XG4gIHJldHVybiBgSWwgQm90ICR7YXZhdGFySW5pdGlhbHN9IGhhIGRldHRvLCAke3RleHR9YDtcbn1cblxuZnVuY3Rpb24gZG93bmxvYWRGaWxlV2l0aEZpbGVTaXplKGRvd25sb2FkRmlsZVRleHQsIGZpbGVOYW1lLCBzaXplKSB7XG4gIC8vIEZ1bGwgdGV4dCBzaG91bGQgcmVhZDogXCJEb3dubG9hZCBmaWxlIDxmaWxlbmFtZT4gb2Ygc2l6ZSA8ZmlsZXNpemU+XCJcbiAgcmV0dXJuIGAke2Rvd25sb2FkRmlsZVRleHR9ICR7ZmlsZU5hbWV9IGRpIGRpbWVuc2lvbmUgJHtzaXplfWA7XG59XG5cbmZ1bmN0aW9uIHVwbG9hZEZpbGVXaXRoRmlsZVNpemUoZmlsZU5hbWUsIHNpemUpIHtcbiAgcmV0dXJuIGAke2ZpbGVOYW1lfSBkaSBkaW1lbnNpb25lICR7c2l6ZX1gO1xufVxuXG5mdW5jdGlvbiB1c2VyU2FpZFNvbWV0aGluZyhhdmF0YXJJbml0aWFscywgdGV4dCkge1xuICByZXR1cm4gYEwndXRlbnRlICR7YXZhdGFySW5pdGlhbHN9IGhhIGRldHRvLCAke3RleHR9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBDT05ORUNURURfTk9USUZJQ0FUSU9OOiAnQ29ubmVzc28nLFxuICBGQUlMRURfQ09OTkVDVElPTl9OT1RJRklDQVRJT046ICdJbXBvc3NpYmlsZSBjb25uZXR0ZXJzaS4nLFxuICBJTklUSUFMX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OOiAnSW4gY29ubmVzc2lvbmXigKYnLFxuICBJTlRFUlJVUFRFRF9DT05ORUNUSU9OX05PVElGSUNBVElPTjogJ0xhIGNvbm5lc3Npb25lIMOoIHN0YXRhIGludGVycm90dGEuIFJpY29ubmVzc2lvbmXigKYnLFxuICBSRU5ERVJfRVJST1JfTk9USUZJQ0FUSU9OOiAnRXJyb3JlIGRpIHZpc3VhbGl6emF6aW9uZS4gQ29udGF0dGEgbG8gc3ZpbHVwcGF0b3JlIGRlbCBib3QuJyxcbiAgLy8gRG8gbm90IGxvY2FsaXplIHtSZXRyeX07IGl0IGlzIGEgcGxhY2Vob2xkZXIgZm9yIFwiUmV0cnlcIi4gRW5nbGlzaCB0cmFuc2xhdGlvbiBzaG91bGQgYmUsIFwiU2VuZCBmYWlsZWQuIFJldHJ5LlwiXG4gIFNFTkRfRkFJTEVEX0tFWTogYEltcG9zc2liaWxlIGludmlhcmUsIHtSZXRyeX0uYCxcbiAgU0xPV19DT05ORUNUSU9OX05PVElGSUNBVElPTjogJ0lsIEJvdCBzdGEgaW1waWVnYW5kbyBwacO5IHRlbXBvIGRlbCBzb2xpdG8gcGVyIGNvbm5ldHRlcnNpLicsXG4gICdCb3Qgc2FpZCBzb21ldGhpbmcnOiBib3RTYWlkU29tZXRoaW5nLFxuICAnVXNlciBzYWlkIHNvbWV0aGluZyc6IHVzZXJTYWlkU29tZXRoaW5nLFxuICAnWCBtaW51dGVzIGFnbyc6IHhNaW51dGVzQWdvLFxuICAnQWRhcHRpdmUgQ2FyZCBwYXJzZSBlcnJvcic6ICdBZGFwdGl2ZSBDYXJkLCBlcnJvcmUgZGkgaW50ZXJwcmV0YXppb25lJyxcbiAgJ0FkYXB0aXZlIENhcmQgcmVuZGVyIGVycm9yJzogJ0FkYXB0aXZlIENhcmQsIGVycm9yZSBkaSB2aXN1YWxpenphemlvbmUnLFxuICBCb3RTZW50OiAnSWwgQm90IGhhIGludmlhdG86ICcsXG4gIENoYXQ6ICdDaGF0JyxcbiAgJ0Rvd25sb2FkIGZpbGUnOiAnRG93bmxvYWQgZmlsZScsXG4gIERvd25sb2FkRmlsZVdpdGhGaWxlU2l6ZTogZG93bmxvYWRGaWxlV2l0aEZpbGVTaXplLFxuICBFcnJvck1lc3NhZ2U6ICdNZXNzYWdnaW8gZGkgZXJyb3JlJyxcbiAgJ01pY3JvcGhvbmUgb2ZmJzogJ01pY3JvZm9ubyBzcGVudG8nLFxuICAnTWljcm9waG9uZSBvbic6ICdNaWNyb2Zvbm8gYWNjZXNvJyxcbiAgTGVmdDogJ1NpbmlzdHJhJyxcbiAgJ0xpc3RlbmluZ+KApic6ICdBc2NvbHRhbmRv4oCmJyxcbiAgJ05ldyBtZXNzYWdlcyc6ICdOdW92aSBtZXNzYWdnaScsXG4gIFJldHJ5OiAnUmlwcm92YScsXG4gIFJpZ2h0OiAnRGVzdHJhJyxcbiAgU2VuZDogJ0ludmlhJyxcbiAgU2VuZGluZzogJ2ludmlvJyxcbiAgU2VuZFN0YXR1czogJ1N0YXRvIGRpIGludmlvOiAnLFxuICBTZW50QXQ6ICdJbnZpYXRvIGE6ICcsXG4gIFNwZWFrOiAnUGFybGEnLFxuICAnU3RhcnRpbmfigKYnOiAnSW5pemlhbGl6emFuZG/igKYnLFxuICBUYXg6ICdUYXNzZScsXG4gIFRvdGFsOiAnVG90YWxlJyxcbiAgJ1R5cGUgeW91ciBtZXNzYWdlJzogJ1Njcml2aSBpbCB0dW8gbWVzc2FnZ2lvJyxcbiAgJ1VwbG9hZCBmaWxlJzogJ0NhcmljYSB1biBmaWxlJyxcbiAgVXBsb2FkRmlsZVdpdGhGaWxlU2l6ZTogdXBsb2FkRmlsZVdpdGhGaWxlU2l6ZSxcbiAgVkFUOiAnSVZBJ1xufTtcbiJdfQ==
