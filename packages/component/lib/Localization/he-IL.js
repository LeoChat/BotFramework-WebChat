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
    return 'עכשיו';
  } else if (deltaInMinutes === 1) {
    return 'לפני דקה';
  } else if (deltaInHours < 1) {
    return ' \u05DC\u05E4\u05E0\u05D9 '.concat(deltaInMinutes, ' \u05D3\u05E7\u05D5\u05EA ');
  } else if (deltaInHours === 1) {
    return '\u05DC\u05E4\u05E0\u05D9 \u05E9\u05E2\u05D4';
  } else if (deltaInHours < 5) {
    return ' \u05DC\u05E4\u05E0\u05D9 '.concat(deltaInHours, ' \u05E9\u05E2\u05D5\u05EA ');
  } else if (deltaInHours <= 24) {
    return '\u05D4\u05D9\u05D5\u05DD';
  } else if (deltaInHours <= 48) {
    return '\u05D0\u05EA\u05DE\u05D5\u05DC';
  } else if (window.Intl) {
    return new Intl.DateTimeFormat('he-IL').format(date);
  }

  return date.toLocaleString('he-IL', {
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

function botSaidSomething(avatarInitials, text) {
  return '\u05D4\u05D1\u05D5\u05D8 '.concat(avatarInitials, ' \u05D0\u05DE\u05E8, ').concat(text);
}

function downloadFileWithFileSize(downloadFileText, fileName, size) {
  // Full text should read: "Download file <filename> of size <filesize>"
  return ''
    .concat(downloadFileText, ' ')
    .concat(fileName, ' \u05D1\u05D2\u05D5\u05D3\u05DC ')
    .concat(size);
}

function uploadFileWithFileSize(fileName, size) {
  return ''.concat(fileName, ' \u05D1\u05D2\u05D5\u05D3\u05DC ').concat(size);
}

function userSaidSomething(avatarInitials, text) {
  return '\u05D4\u05DE\u05E9\u05EA\u05DE\u05E9 '.concat(avatarInitials, ' \u05D0\u05DE\u05E8, ').concat(text);
}

var _default = {
  FAILED_CONNECTION_NOTIFICATION: 'החיבור נכשל.',
  INITIAL_CONNECTION_NOTIFICATION: 'מתחבר…',
  INTERRUPTED_CONNECTION_NOTIFICATION: 'ניתוקים ברשת. מנסה להתחבר מחדש…',
  // Do not localize {Retry}; it is a placeholder for "Retry". English translation should be, "Send failed. Retry."
  RENDER_ERROR_NOTIFICATION: 'שגירה בהצגת הרכיב. בבקשה בדוק את הדפדפן שלך או צור קשר עם צוות הפיתוח.',
  SEND_FAILED_KEY: 'שליחה נכשלה. {Retry}.',
  SLOW_CONNECTION_NOTIFICATION: 'זמן ההתחברות ארוך מהרגיל.',
  'X minutes ago': xMinutesAgo,
  // '[File of type '%1']",
  // '[Unknown Card '%1']',
  'Adaptive Card parse error': 'Adaptive Card parse error',
  'Adaptive Card render error': 'Adaptive Card render error',
  Chat: "צ'אט",
  Left: 'שמאל',
  'Listening…': 'מאזין…',
  'New messages': 'הודעות חדשות',
  retry: 'נסה שנית',
  Right: 'ימין',
  // Do not localize {retry}, it is a placeholder for "retry"
  'Send failed, {retry}': 'שליחה נכשלה, {retry}',
  Send: 'שלח',
  Sending: 'שולח',
  Speak: 'דבר',
  'Starting…': 'מתחיל…',
  Tax: 'מס',
  Total: 'סה"כ',
  'Type your message': 'הכנס הודעה',
  'Upload file': 'העלה קובץ',
  VAT: 'מע"מ'
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb2NhbGl6YXRpb24vaGUtSUwuanMiXSwibmFtZXMiOlsieE1pbnV0ZXNBZ28iLCJkYXRlU3RyIiwiZGF0ZSIsIkRhdGUiLCJkYXRlVGltZSIsImdldFRpbWUiLCJpc05hTiIsIm5vdyIsImRlbHRhSW5NcyIsImRlbHRhSW5NaW51dGVzIiwiTWF0aCIsImZsb29yIiwiZGVsdGFJbkhvdXJzIiwid2luZG93IiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwiZm9ybWF0IiwidG9Mb2NhbGVTdHJpbmciLCJkYXkiLCJob3VyIiwiaG91cjEyIiwibWludXRlIiwibW9udGgiLCJ5ZWFyIiwiYm90U2FpZFNvbWV0aGluZyIsImF2YXRhckluaXRpYWxzIiwidGV4dCIsImRvd25sb2FkRmlsZVdpdGhGaWxlU2l6ZSIsImRvd25sb2FkRmlsZVRleHQiLCJmaWxlTmFtZSIsInNpemUiLCJ1cGxvYWRGaWxlV2l0aEZpbGVTaXplIiwidXNlclNhaWRTb21ldGhpbmciLCJGQUlMRURfQ09OTkVDVElPTl9OT1RJRklDQVRJT04iLCJJTklUSUFMX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OIiwiSU5URVJSVVBURURfQ09OTkVDVElPTl9OT1RJRklDQVRJT04iLCJSRU5ERVJfRVJST1JfTk9USUZJQ0FUSU9OIiwiU0VORF9GQUlMRURfS0VZIiwiU0xPV19DT05ORUNUSU9OX05PVElGSUNBVElPTiIsIkNoYXQiLCJMZWZ0IiwicmV0cnkiLCJSaWdodCIsIlNlbmQiLCJTZW5kaW5nIiwiU3BlYWsiLCJUYXgiLCJUb3RhbCIsIlZBVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI7QUFDNUIsTUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU0YsT0FBVCxDQUFiO0FBQ0EsTUFBTUcsUUFBUSxHQUFHRixJQUFJLENBQUNHLE9BQUwsRUFBakI7O0FBRUEsTUFBSUMsS0FBSyxDQUFDRixRQUFELENBQVQs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QXFCYkMsRUFBQUEsSUFBSSxFQUFFLEtBckJPO0FBc0JiQyxFQUFBQSxPQUFPLEVBQUUsTUF0Qkk7QUF1QmJDLEVBQUFBLEtBQUssRUFBRSxLQXZCTTtBQXdCYixlQUFhLFFBeEJBO0FBeUJiQyxFQUFBQSxHQUFHLEVBQUUsSUF6QlE7QUEwQmJDLEVBQUFBLEtBQUssRUFBRSxNQTFCTTtBQTJCYix1QkFBcUIsWUEzQlI7QUE0QmIsaUJBQWUsV0E1QkY7QUE2QmJDLEVBQUFBLEdBQUcsRUFBRTtBQTdCUSxDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IFtcImVycm9yXCIsIHsgXCJpZ25vcmVcIjogWzEsIDUsIDI0LCA0OCwgNjAwMDAsIDM2MDAwMDBdIH1dICovXG5cbmZ1bmN0aW9uIHhNaW51dGVzQWdvKGRhdGVTdHIpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xuICBjb25zdCBkYXRlVGltZSA9IGRhdGUuZ2V0VGltZSgpO1xuXG4gIGlmIChpc05hTihkYXRlVGltZSkpIHtcbiAgICByZXR1cm4gZGF0ZVN0cjtcbiAgfVxuXG4gIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gIGNvbnN0IGRlbHRhSW5NcyA9IG5vdyAtIGRhdGVUaW1lO1xuICBjb25zdCBkZWx0YUluTWludXRlcyA9IE1hdGguZmxvb3IoZGVsdGFJbk1zIC8gNjAwMDApO1xuICBjb25zdCBkZWx0YUluSG91cnMgPSBNYXRoLmZsb29yKGRlbHRhSW5NcyAvIDM2MDAwMDApO1xuXG4gIGlmIChkZWx0YUluTWludXRlcyA8IDEpIHtcbiAgICByZXR1cm4gJ9ei15vXqdeZ15UnO1xuICB9IGVsc2UgaWYgKGRlbHRhSW5NaW51dGVzID09PSAxKSB7XG4gICAgcmV0dXJuICfXnNek16DXmSDXk9en15QnO1xuICB9IGVsc2UgaWYgKGRlbHRhSW5Ib3VycyA8IDEpIHtcbiAgICByZXR1cm4gYCDXnNek16DXmSAke2RlbHRhSW5NaW51dGVzfSDXk9en15XXqiBgO1xuICB9IGVsc2UgaWYgKGRlbHRhSW5Ib3VycyA9PT0gMSkge1xuICAgIHJldHVybiBg15zXpNeg15kg16nXoteUYDtcbiAgfSBlbHNlIGlmIChkZWx0YUluSG91cnMgPCA1KSB7XG4gICAgcmV0dXJuIGAg15zXpNeg15kgJHtkZWx0YUluSG91cnN9INep16LXldeqIGA7XG4gIH0gZWxzZSBpZiAoZGVsdGFJbkhvdXJzIDw9IDI0KSB7XG4gICAgcmV0dXJuIGDXlNeZ15XXnWA7XG4gIH0gZWxzZSBpZiAoZGVsdGFJbkhvdXJzIDw9IDQ4KSB7XG4gICAgcmV0dXJuIGDXkNeq157XldecYDtcbiAgfSBlbHNlIGlmICh3aW5kb3cuSW50bCkge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnaGUtSUwnKS5mb3JtYXQoZGF0ZSk7XG4gIH1cbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2hlLUlMJywge1xuICAgIGRheTogJzItZGlnaXQnLFxuICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICBob3VyMTI6IGZhbHNlLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgeWVhcjogJ251bWVyaWMnXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBib3RTYWlkU29tZXRoaW5nKGF2YXRhckluaXRpYWxzLCB0ZXh0KSB7XG4gIHJldHVybiBg15TXkdeV15ggJHthdmF0YXJJbml0aWFsc30g15DXnteoLCAke3RleHR9YDtcbn1cblxuZnVuY3Rpb24gZG93bmxvYWRGaWxlV2l0aEZpbGVTaXplKGRvd25sb2FkRmlsZVRleHQsIGZpbGVOYW1lLCBzaXplKSB7XG4gIC8vIEZ1bGwgdGV4dCBzaG91bGQgcmVhZDogXCJEb3dubG9hZCBmaWxlIDxmaWxlbmFtZT4gb2Ygc2l6ZSA8ZmlsZXNpemU+XCJcbiAgcmV0dXJuIGAke2Rvd25sb2FkRmlsZVRleHR9ICR7ZmlsZU5hbWV9INeR15LXldeT15wgJHtzaXplfWA7XG59XG5cbmZ1bmN0aW9uIHVwbG9hZEZpbGVXaXRoRmlsZVNpemUoZmlsZU5hbWUsIHNpemUpIHtcbiAgcmV0dXJuIGAke2ZpbGVOYW1lfSDXkdeS15XXk9ecICR7c2l6ZX1gO1xufVxuXG5mdW5jdGlvbiB1c2VyU2FpZFNvbWV0aGluZyhhdmF0YXJJbml0aWFscywgdGV4dCkge1xuICByZXR1cm4gYNeU157Xqdeq157XqSAke2F2YXRhckluaXRpYWxzfSDXkNee16gsICR7dGV4dH1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEZBSUxFRF9DT05ORUNUSU9OX05PVElGSUNBVElPTjogJ9eU15fXmdeR15XXqCDXoNeb16nXnC4nLFxuICBJTklUSUFMX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OOiAn157XqteX15HXqOKApicsXG4gIElOVEVSUlVQVEVEX0NPTk5FQ1RJT05fTk9USUZJQ0FUSU9OOiAn16DXmdeq15XXp9eZ150g15HXqNep16ouINee16DXodeUINec15TXqteX15HXqCDXnteX15PXqeKApicsXG4gIC8vIERvIG5vdCBsb2NhbGl6ZSB7UmV0cnl9OyBpdCBpcyBhIHBsYWNlaG9sZGVyIGZvciBcIlJldHJ5XCIuIEVuZ2xpc2ggdHJhbnNsYXRpb24gc2hvdWxkIGJlLCBcIlNlbmQgZmFpbGVkLiBSZXRyeS5cIlxuICBSRU5ERVJfRVJST1JfTk9USUZJQ0FUSU9OOiAn16nXkteZ16jXlCDXkdeU16bXkteqINeU16jXm9eZ15EuINeR15HXp9ep15Qg15HXk9eV16cg15DXqiDXlNeT16TXk9ek158g16nXnNeaINeQ15Ug16bXldeoINen16nXqCDXotedINem15XXldeqINeU16TXmdeq15XXly4nLFxuICBTRU5EX0ZBSUxFRF9LRVk6ICfXqdec15nXl9eUINeg15vXqdec15QuIHtSZXRyeX0uJyxcbiAgU0xPV19DT05ORUNUSU9OX05PVElGSUNBVElPTjogJ9eW157XnyDXlNeU16rXl9eR16jXldeqINeQ16jXldeaINee15TXqNeS15nXnC4nLFxuICAnWCBtaW51dGVzIGFnbyc6IHhNaW51dGVzQWdvLFxuICAvLyAnW0ZpbGUgb2YgdHlwZSAnJTEnXVwiLFxuICAvLyAnW1Vua25vd24gQ2FyZCAnJTEnXScsXG4gICdBZGFwdGl2ZSBDYXJkIHBhcnNlIGVycm9yJzogJ0FkYXB0aXZlIENhcmQgcGFyc2UgZXJyb3InLFxuICAnQWRhcHRpdmUgQ2FyZCByZW5kZXIgZXJyb3InOiAnQWRhcHRpdmUgQ2FyZCByZW5kZXIgZXJyb3InLFxuICBDaGF0OiBcItemJ9eQ15hcIixcbiAgTGVmdDogJ9ep157XkNecJyxcbiAgJ0xpc3RlbmluZ+KApic6ICfXnteQ15bXmdef4oCmJyxcbiAgJ05ldyBtZXNzYWdlcyc6ICfXlNeV15PXoteV16og15fXk9ep15XXqicsXG4gIHJldHJ5OiAn16DXodeUINep16DXmdeqJyxcbiAgUmlnaHQ6ICfXmdee15nXnycsXG4gIC8vIERvIG5vdCBsb2NhbGl6ZSB7cmV0cnl9LCBpdCBpcyBhIHBsYWNlaG9sZGVyIGZvciBcInJldHJ5XCJcbiAgJ1NlbmQgZmFpbGVkLCB7cmV0cnl9JzogJ9ep15zXmdeX15Qg16DXm9ep15zXlCwge3JldHJ5fScsXG4gIFNlbmQ6ICfXqdec15cnLFxuICBTZW5kaW5nOiAn16nXldec15cnLFxuICBTcGVhazogJ9eT15HXqCcsXG4gICdTdGFydGluZ+KApic6ICfXnteq15fXmdec4oCmJyxcbiAgVGF4OiAn157XoScsXG4gIFRvdGFsOiAn16HXlFwi15snLFxuICAnVHlwZSB5b3VyIG1lc3NhZ2UnOiAn15TXm9eg16Eg15TXldeT16LXlCcsXG4gICdVcGxvYWQgZmlsZSc6ICfXlNei15zXlCDXp9eV15HXpScsXG4gIFZBVDogJ9ee16JcIteeJ1xufTtcbiJdfQ==