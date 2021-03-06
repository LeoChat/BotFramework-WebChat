'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.normalize = normalize;
exports.toAzureLocale = toAzureLocale;
// Supported Azure language as of 2019-04-25
// The first part is language (localization), the second part is regional format (internationalization)
// en.en-us
// cs.cs-cz
// de.de-de
// es.es-es
// fr.fr-fr
// hu.hu-hu
// it.it-it
// ja.ja-jp
// ko.ko-kr
// nl.nl-nl
// pl.pl-pl
// pt-br.pt-br
// pt-pt.pt-pt
// ru.ru-ru
// sv.sv-se
// tr.tr-tr
// zh-hans.zh-cn
// zh-hant.zh-tw
var AZURE_LOCALE_PATTERN = /^(([a-z]{2})(-[a-z]{2,})?)\.([a-z]{2})/;
var JAVASCRIPT_LOCALE_PATTERN = /^([a-z]{2})-([A-Z]{2,})?$/;
var AZURE_LOCALE_MAPPING = {
  cs: 'cs-CZ',
  de: 'de-DE',
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  hu: 'hu-HU',
  it: 'it-IT',
  ja: 'ja-JP',
  ko: 'ko-KR',
  nl: 'nl-NL',
  pl: 'pl-PL',
  'pt-br': 'pt-BR',
  'pt-pt': 'pt-PT',
  ru: 'ru-RU',
  sv: 'sv-SE',
  tr: 'tr-TR',
  'zh-hans': 'zh-HANS',
  'zh-hant': 'zh-HANT'
};

function normalize(language) {
  var azureLocaleMatch = AZURE_LOCALE_PATTERN.exec(language);
  var javaScriptLocaleMatch = JAVASCRIPT_LOCALE_PATTERN.exec(language);
  var result;

  if (javaScriptLocaleMatch) {
    result = language;
  } else if (azureLocaleMatch) {
    result = AZURE_LOCALE_MAPPING[azureLocaleMatch[1]];
  }

  return result || 'en-US';
}

function toAzureLocale(language) {
  switch (language) {
    case 'fr':
      // This is for Firefox, which default French to "fr" instead of "fr-FR".
      return 'fr.fr-fr';

    case 'pt-BR':
      return 'pt-br.pt-br';

    case 'pt-PT':
      return 'pt-pt.pt-pt';

    case 'zh-CN':
    case 'zh-SG':
      return 'zh-hans.'.concat(language.toLowerCase());

    case 'zh-HANS':
      return 'zh-hans.zh-cn';

    case 'zh-HANT':
      return 'zh-hant.zh-tw';

    case 'zh-HK':
    case 'zh-MO':
    case 'zh-TW':
      return 'zh-hant.'.concat(language.toLowerCase());
  }

  var match = JAVASCRIPT_LOCALE_PATTERN.exec(language);

  if (match) {
    return ''
      .concat(match[1], '.')
      .concat(match[1], '-')
      .concat(match[2].toLowerCase());
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2NhbGUuanMiXSwibmFtZXMiOlsiQVpVUkVfTE9DQUxFX1BBVFRFUk4iLCJKQVZBU0NSSVBUX0xPQ0FMRV9QQVRURVJOIiwiQVpVUkVfTE9DQUxFX01BUFBJTkciLCJjcyIsImRlIiwiZW4iLCJlcyIsImZyIiwiaHUiLCJpdCIsImphIiwia28iLCJubCIsInBsIiwicnUiLCJzdiIsInRyIiwibm9ybWFsaXplIiwibGFuZ3VhZ2UiLCJhenVyZUxvY2FsZU1hdGNoIiwiZXhlYyIsImphdmFTY3JpcHRMb2NhbGVNYXRjaCIsInJlc3VsdCIsInRvQXp1cmVMb2NhbGUiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHLHdDQUE3QjtBQUNBLElBQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUVBLElBQU1DLG9CQUFvQixHQUFHO0FBQzNCQyxFQUFBQSxFQUFFLEVBQUUsT0FEdUI7QUFFM0JDLEVBQUFBLEVBQUUsRUFBRSxPQUZ1QjtBQUczQkMsRUFBQUEsRUFBRSxFQUFFLE9BSHVCO0FBSTNCQyxFQUFBQSxFQUFFLEVBQUUsT0FKdUI7QUFLM0JDLEVBQUFBLEVBQUUsRUFBRSxPQUx1QjtBQU0zQkMsRUFBQUEsRUFBRSxFQUFFLE9BTnVCO0FBTzNCQyxFQUFBQSxFQUFFLEVBQUUsT0FQdUI7QUFRM0JDLEVBQUFBLEVBQUUsRUFBRSxPQVJ1QjtBQVMzQkMsRUFBQUEsRUFBRSxFQUFFLE9BVHVCO0FBVTNCQyxFQUFBQSxFQUFFLEVBQUUsT0FWdUI7QUFXM0JDLEVBQUFBLEVBQUUsRUFBRSxPQVh1QjtBQVkzQixXQUFTLE9BWmtCO0FBYTNCLFdBQVMsT0Fia0I7QUFjM0JDLEVBQUFBLEVBQUUsRUFBRSxPQWR1QjtBQWUzQkMsRUFBQUEsRUFBRSxFQUFFLE9BZnVCO0FBZ0IzQkMsRUFBQUEsRUFBRSxFQUFFLE9BaEJ1QjtBQWlCM0IsYUFBVyxTQWpCZ0I7QUFrQjNCLGFBQVc7QUFsQmdCLENBQTdCOztBQXFCQSxTQUFTQyxTQUFULENBQW1CQyxRQUFuQixFQUE2QjtBQUMzQixNQUFNQyxnQkFBZ0IsR0FBR25CLG9CQUFvQixDQUFDb0IsSUFBckIsQ0FBMEJGLFFBQTFCLENBQXpCO0FBQ0EsTUFBTUcscUJBQXFCLEdBQUdwQix5QkFBeUIsQ0FBQ21CLElBQTFCLENBQStCRixRQUEvQixDQUE5QjtBQUNBLE1BQUlJLE1BQUo7O0FBRUEsTUFBSUQscUJBQUosRUFBMkI7QUFDekJDLElBQUFBLE1BQU0sR0FBR0osUUFBVDtBQUNELEdBRkQsTUFFTyxJQUFJQyxnQkFBSixFQUFzQjtBQUMzQkcsSUFBQUEsTUFBTSxHQUFHcEIsb0JBQW9CLENBQUNpQixnQkFBZ0IsQ0FBQyxDQUFELENBQWpCLENBQTdCO0FBQ0Q7O0FBRUQsU0FBT0csTUFBTSxJQUFJLE9BQWpCO0FBQ0Q7O0FBRUQsU0FBU0MsYUFBVCxDQUF1QkwsUUFBdkIsRUFBaUM7QUFDL0IsVUFBUUEsUUFBUjtBQUNFLFNBQUssSUFBTDtBQUNFO0FBQ0EsYUFBTyxVQUFQOztBQUVGLFNBQUssT0FBTDtBQUNFLGFBQU8sYUFBUDs7QUFFRixTQUFLLE9BQUw7QUFDRSxhQUFPLGFBQVA7O0FBRUYsU0FBSyxPQUFMO0FBQ0EsU0FBSyxPQUFMO0FBQ0UsK0JBQWtCQSxRQUFRLENBQUNNLFdBQVQsRUFBbEI7O0FBRUYsU0FBSyxTQUFMO0FBQ0UsYUFBTyxlQUFQOztBQUVGLFNBQUssU0FBTDtBQUNFLGFBQU8sZUFBUDs7QUFFRixTQUFLLE9BQUw7QUFDQSxTQUFLLE9BQUw7QUFDQSxTQUFLLE9BQUw7QUFDRSwrQkFBa0JOLFFBQVEsQ0FBQ00sV0FBVCxFQUFsQjtBQXhCSjs7QUEyQkEsTUFBTUMsS0FBSyxHQUFHeEIseUJBQXlCLENBQUNtQixJQUExQixDQUErQkYsUUFBL0IsQ0FBZDs7QUFFQSxNQUFJTyxLQUFKLEVBQVc7QUFDVCxxQkFBVUEsS0FBSyxDQUFDLENBQUQsQ0FBZixjQUFzQkEsS0FBSyxDQUFDLENBQUQsQ0FBM0IsY0FBa0NBLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0QsV0FBVCxFQUFsQztBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdXBwb3J0ZWQgQXp1cmUgbGFuZ3VhZ2UgYXMgb2YgMjAxOS0wNC0yNVxuLy8gVGhlIGZpcnN0IHBhcnQgaXMgbGFuZ3VhZ2UgKGxvY2FsaXphdGlvbiksIHRoZSBzZWNvbmQgcGFydCBpcyByZWdpb25hbCBmb3JtYXQgKGludGVybmF0aW9uYWxpemF0aW9uKVxuXG4vLyBlbi5lbi11c1xuLy8gY3MuY3MtY3pcbi8vIGRlLmRlLWRlXG4vLyBlcy5lcy1lc1xuLy8gZnIuZnItZnJcbi8vIGh1Lmh1LWh1XG4vLyBpdC5pdC1pdFxuLy8gamEuamEtanBcbi8vIGtvLmtvLWtyXG4vLyBubC5ubC1ubFxuLy8gcGwucGwtcGxcbi8vIHB0LWJyLnB0LWJyXG4vLyBwdC1wdC5wdC1wdFxuLy8gcnUucnUtcnVcbi8vIHN2LnN2LXNlXG4vLyB0ci50ci10clxuLy8gemgtaGFucy56aC1jblxuLy8gemgtaGFudC56aC10d1xuXG5jb25zdCBBWlVSRV9MT0NBTEVfUEFUVEVSTiA9IC9eKChbYS16XXsyfSkoLVthLXpdezIsfSk/KVxcLihbYS16XXsyfSkvO1xuY29uc3QgSkFWQVNDUklQVF9MT0NBTEVfUEFUVEVSTiA9IC9eKFthLXpdezJ9KS0oW0EtWl17Mix9KT8kLztcblxuY29uc3QgQVpVUkVfTE9DQUxFX01BUFBJTkcgPSB7XG4gIGNzOiAnY3MtQ1onLFxuICBkZTogJ2RlLURFJyxcbiAgZW46ICdlbi1VUycsXG4gIGVzOiAnZXMtRVMnLFxuICBmcjogJ2ZyLUZSJyxcbiAgaHU6ICdodS1IVScsXG4gIGl0OiAnaXQtSVQnLFxuICBqYTogJ2phLUpQJyxcbiAga286ICdrby1LUicsXG4gIG5sOiAnbmwtTkwnLFxuICBwbDogJ3BsLVBMJyxcbiAgJ3B0LWJyJzogJ3B0LUJSJyxcbiAgJ3B0LXB0JzogJ3B0LVBUJyxcbiAgcnU6ICdydS1SVScsXG4gIHN2OiAnc3YtU0UnLFxuICB0cjogJ3RyLVRSJyxcbiAgJ3poLWhhbnMnOiAnemgtSEFOUycsXG4gICd6aC1oYW50JzogJ3poLUhBTlQnXG59O1xuXG5mdW5jdGlvbiBub3JtYWxpemUobGFuZ3VhZ2UpIHtcbiAgY29uc3QgYXp1cmVMb2NhbGVNYXRjaCA9IEFaVVJFX0xPQ0FMRV9QQVRURVJOLmV4ZWMobGFuZ3VhZ2UpO1xuICBjb25zdCBqYXZhU2NyaXB0TG9jYWxlTWF0Y2ggPSBKQVZBU0NSSVBUX0xPQ0FMRV9QQVRURVJOLmV4ZWMobGFuZ3VhZ2UpO1xuICBsZXQgcmVzdWx0O1xuXG4gIGlmIChqYXZhU2NyaXB0TG9jYWxlTWF0Y2gpIHtcbiAgICByZXN1bHQgPSBsYW5ndWFnZTtcbiAgfSBlbHNlIGlmIChhenVyZUxvY2FsZU1hdGNoKSB7XG4gICAgcmVzdWx0ID0gQVpVUkVfTE9DQUxFX01BUFBJTkdbYXp1cmVMb2NhbGVNYXRjaFsxXV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0IHx8ICdlbi1VUyc7XG59XG5cbmZ1bmN0aW9uIHRvQXp1cmVMb2NhbGUobGFuZ3VhZ2UpIHtcbiAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgIGNhc2UgJ2ZyJzpcbiAgICAgIC8vIFRoaXMgaXMgZm9yIEZpcmVmb3gsIHdoaWNoIGRlZmF1bHQgRnJlbmNoIHRvIFwiZnJcIiBpbnN0ZWFkIG9mIFwiZnItRlJcIi5cbiAgICAgIHJldHVybiAnZnIuZnItZnInO1xuXG4gICAgY2FzZSAncHQtQlInOlxuICAgICAgcmV0dXJuICdwdC1ici5wdC1icic7XG5cbiAgICBjYXNlICdwdC1QVCc6XG4gICAgICByZXR1cm4gJ3B0LXB0LnB0LXB0JztcblxuICAgIGNhc2UgJ3poLUNOJzpcbiAgICBjYXNlICd6aC1TRyc6XG4gICAgICByZXR1cm4gYHpoLWhhbnMuJHtsYW5ndWFnZS50b0xvd2VyQ2FzZSgpfWA7XG5cbiAgICBjYXNlICd6aC1IQU5TJzpcbiAgICAgIHJldHVybiAnemgtaGFucy56aC1jbic7XG5cbiAgICBjYXNlICd6aC1IQU5UJzpcbiAgICAgIHJldHVybiAnemgtaGFudC56aC10dyc7XG5cbiAgICBjYXNlICd6aC1ISyc6XG4gICAgY2FzZSAnemgtTU8nOlxuICAgIGNhc2UgJ3poLVRXJzpcbiAgICAgIHJldHVybiBgemgtaGFudC4ke2xhbmd1YWdlLnRvTG93ZXJDYXNlKCl9YDtcbiAgfVxuXG4gIGNvbnN0IG1hdGNoID0gSkFWQVNDUklQVF9MT0NBTEVfUEFUVEVSTi5leGVjKGxhbmd1YWdlKTtcblxuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4gYCR7bWF0Y2hbMV19LiR7bWF0Y2hbMV19LSR7bWF0Y2hbMl0udG9Mb3dlckNhc2UoKX1gO1xuICB9XG59XG5cbmV4cG9ydCB7IG5vcm1hbGl6ZSwgdG9BenVyZUxvY2FsZSB9O1xuIl19
