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
  bg: 'bg-BG',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2NhbGUuanMiXSwibmFtZXMiOlsiQVpVUkVfTE9DQUxFX1BBVFRFUk4iLCJKQVZBU0NSSVBUX0xPQ0FMRV9QQVRURVJOIiwiQVpVUkVfTE9DQUxFX01BUFBJTkciLCJiZyIsImNzIiwiZGUiLCJlbiIsImVzIiwiZnIiLCJodSIsIml0IiwiamEiLCJrbyIsIm5sIiwicGwiLCJydSIsInN2IiwidHIiLCJub3JtYWxpemUiLCJsYW5ndWFnZSIsImF6dXJlTG9jYWxlTWF0Y2giLCJleGVjIiwiamF2YVNjcmlwdExvY2FsZU1hdGNoIiwicmVzdWx0IiwidG9BenVyZUxvY2FsZSIsInRvTG93ZXJDYXNlIiwibWF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsd0NBQTdCO0FBQ0EsSUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsSUFBTUMsb0JBQW9CLEdBQUc7QUFDM0JDLEVBQUFBLEVBQUUsRUFBRSxPQUR1QjtBQUUzQkMsRUFBQUEsRUFBRSxFQUFFLE9BRnVCO0FBRzNCQyxFQUFBQSxFQUFFLEVBQUUsT0FIdUI7QUFJM0JDLEVBQUFBLEVBQUUsRUFBRSxPQUp1QjtBQUszQkMsRUFBQUEsRUFBRSxFQUFFLE9BTHVCO0FBTTNCQyxFQUFBQSxFQUFFLEVBQUUsT0FOdUI7QUFPM0JDLEVBQUFBLEVBQUUsRUFBRSxPQVB1QjtBQVEzQkMsRUFBQUEsRUFBRSxFQUFFLE9BUnVCO0FBUzNCQyxFQUFBQSxFQUFFLEVBQUUsT0FUdUI7QUFVM0JDLEVBQUFBLEVBQUUsRUFBRSxPQVZ1QjtBQVczQkMsRUFBQUEsRUFBRSxFQUFFLE9BWHVCO0FBWTNCQyxFQUFBQSxFQUFFLEVBQUUsT0FadUI7QUFhM0IsV0FBUyxPQWJrQjtBQWMzQixXQUFTLE9BZGtCO0FBZTNCQyxFQUFBQSxFQUFFLEVBQUUsT0FmdUI7QUFnQjNCQyxFQUFBQSxFQUFFLEVBQUUsT0FoQnVCO0FBaUIzQkMsRUFBQUEsRUFBRSxFQUFFLE9BakJ1QjtBQWtCM0IsYUFBVyxTQWxCZ0I7QUFtQjNCLGFBQVc7QUFuQmdCLENBQTdCOztBQXNCQSxTQUFTQyxTQUFULENBQW1CQyxRQUFuQixFQUE2QjtBQUMzQixNQUFNQyxnQkFBZ0IsR0FBR3BCLG9CQUFvQixDQUFDcUIsSUFBckIsQ0FBMEJGLFFBQTFCLENBQXpCO0FBQ0EsTUFBTUcscUJBQXFCLEdBQUdyQix5QkFBeUIsQ0FBQ29CLElBQTFCLENBQStCRixRQUEvQixDQUE5QjtBQUNBLE1BQUlJLE1BQUo7O0FBRUEsTUFBSUQscUJBQUosRUFBMkI7QUFDekJDLElBQUFBLE1BQU0sR0FBR0osUUFBVDtBQUNELEdBRkQsTUFFTyxJQUFJQyxnQkFBSixFQUFzQjtBQUMzQkcsSUFBQUEsTUFBTSxHQUFHckIsb0JBQW9CLENBQUNrQixnQkFBZ0IsQ0FBQyxDQUFELENBQWpCLENBQTdCO0FBQ0Q7O0FBRUQsU0FBT0csTUFBTSxJQUFJLE9BQWpCO0FBQ0Q7O0FBRUQsU0FBU0MsYUFBVCxDQUF1QkwsUUFBdkIsRUFBaUM7QUFDL0IsVUFBUUEsUUFBUjtBQUNFLFNBQUssSUFBTDtBQUNFO0FBQ0EsYUFBTyxVQUFQOztBQUVGLFNBQUssT0FBTDtBQUNFLGFBQU8sYUFBUDs7QUFFRixTQUFLLE9BQUw7QUFDRSxhQUFPLGFBQVA7O0FBRUYsU0FBSyxPQUFMO0FBQ0EsU0FBSyxPQUFMO0FBQ0UsK0JBQWtCQSxRQUFRLENBQUNNLFdBQVQsRUFBbEI7O0FBRUYsU0FBSyxTQUFMO0FBQ0UsYUFBTyxlQUFQOztBQUVGLFNBQUssU0FBTDtBQUNFLGFBQU8sZUFBUDs7QUFFRixTQUFLLE9BQUw7QUFDQSxTQUFLLE9BQUw7QUFDQSxTQUFLLE9BQUw7QUFDRSwrQkFBa0JOLFFBQVEsQ0FBQ00sV0FBVCxFQUFsQjtBQXhCSjs7QUEyQkEsTUFBTUMsS0FBSyxHQUFHekIseUJBQXlCLENBQUNvQixJQUExQixDQUErQkYsUUFBL0IsQ0FBZDs7QUFFQSxNQUFJTyxLQUFKLEVBQVc7QUFDVCxxQkFBVUEsS0FBSyxDQUFDLENBQUQsQ0FBZixjQUFzQkEsS0FBSyxDQUFDLENBQUQsQ0FBM0IsY0FBa0NBLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0QsV0FBVCxFQUFsQztBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdXBwb3J0ZWQgQXp1cmUgbGFuZ3VhZ2UgYXMgb2YgMjAxOS0wNC0yNVxuLy8gVGhlIGZpcnN0IHBhcnQgaXMgbGFuZ3VhZ2UgKGxvY2FsaXphdGlvbiksIHRoZSBzZWNvbmQgcGFydCBpcyByZWdpb25hbCBmb3JtYXQgKGludGVybmF0aW9uYWxpemF0aW9uKVxuXG4vLyBlbi5lbi11c1xuLy8gY3MuY3MtY3pcbi8vIGRlLmRlLWRlXG4vLyBlcy5lcy1lc1xuLy8gZnIuZnItZnJcbi8vIGh1Lmh1LWh1XG4vLyBpdC5pdC1pdFxuLy8gamEuamEtanBcbi8vIGtvLmtvLWtyXG4vLyBubC5ubC1ubFxuLy8gcGwucGwtcGxcbi8vIHB0LWJyLnB0LWJyXG4vLyBwdC1wdC5wdC1wdFxuLy8gcnUucnUtcnVcbi8vIHN2LnN2LXNlXG4vLyB0ci50ci10clxuLy8gemgtaGFucy56aC1jblxuLy8gemgtaGFudC56aC10d1xuXG5jb25zdCBBWlVSRV9MT0NBTEVfUEFUVEVSTiA9IC9eKChbYS16XXsyfSkoLVthLXpdezIsfSk/KVxcLihbYS16XXsyfSkvO1xuY29uc3QgSkFWQVNDUklQVF9MT0NBTEVfUEFUVEVSTiA9IC9eKFthLXpdezJ9KS0oW0EtWl17Mix9KT8kLztcblxuY29uc3QgQVpVUkVfTE9DQUxFX01BUFBJTkcgPSB7XG4gIGJnOiAnYmctQkcnLFxuICBjczogJ2NzLUNaJyxcbiAgZGU6ICdkZS1ERScsXG4gIGVuOiAnZW4tVVMnLFxuICBlczogJ2VzLUVTJyxcbiAgZnI6ICdmci1GUicsXG4gIGh1OiAnaHUtSFUnLFxuICBpdDogJ2l0LUlUJyxcbiAgamE6ICdqYS1KUCcsXG4gIGtvOiAna28tS1InLFxuICBubDogJ25sLU5MJyxcbiAgcGw6ICdwbC1QTCcsXG4gICdwdC1icic6ICdwdC1CUicsXG4gICdwdC1wdCc6ICdwdC1QVCcsXG4gIHJ1OiAncnUtUlUnLFxuICBzdjogJ3N2LVNFJyxcbiAgdHI6ICd0ci1UUicsXG4gICd6aC1oYW5zJzogJ3poLUhBTlMnLFxuICAnemgtaGFudCc6ICd6aC1IQU5UJ1xufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplKGxhbmd1YWdlKSB7XG4gIGNvbnN0IGF6dXJlTG9jYWxlTWF0Y2ggPSBBWlVSRV9MT0NBTEVfUEFUVEVSTi5leGVjKGxhbmd1YWdlKTtcbiAgY29uc3QgamF2YVNjcmlwdExvY2FsZU1hdGNoID0gSkFWQVNDUklQVF9MT0NBTEVfUEFUVEVSTi5leGVjKGxhbmd1YWdlKTtcbiAgbGV0IHJlc3VsdDtcblxuICBpZiAoamF2YVNjcmlwdExvY2FsZU1hdGNoKSB7XG4gICAgcmVzdWx0ID0gbGFuZ3VhZ2U7XG4gIH0gZWxzZSBpZiAoYXp1cmVMb2NhbGVNYXRjaCkge1xuICAgIHJlc3VsdCA9IEFaVVJFX0xPQ0FMRV9NQVBQSU5HW2F6dXJlTG9jYWxlTWF0Y2hbMV1dO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdCB8fCAnZW4tVVMnO1xufVxuXG5mdW5jdGlvbiB0b0F6dXJlTG9jYWxlKGxhbmd1YWdlKSB7XG4gIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICBjYXNlICdmcic6XG4gICAgICAvLyBUaGlzIGlzIGZvciBGaXJlZm94LCB3aGljaCBkZWZhdWx0IEZyZW5jaCB0byBcImZyXCIgaW5zdGVhZCBvZiBcImZyLUZSXCIuXG4gICAgICByZXR1cm4gJ2ZyLmZyLWZyJztcblxuICAgIGNhc2UgJ3B0LUJSJzpcbiAgICAgIHJldHVybiAncHQtYnIucHQtYnInO1xuXG4gICAgY2FzZSAncHQtUFQnOlxuICAgICAgcmV0dXJuICdwdC1wdC5wdC1wdCc7XG5cbiAgICBjYXNlICd6aC1DTic6XG4gICAgY2FzZSAnemgtU0cnOlxuICAgICAgcmV0dXJuIGB6aC1oYW5zLiR7bGFuZ3VhZ2UudG9Mb3dlckNhc2UoKX1gO1xuXG4gICAgY2FzZSAnemgtSEFOUyc6XG4gICAgICByZXR1cm4gJ3poLWhhbnMuemgtY24nO1xuXG4gICAgY2FzZSAnemgtSEFOVCc6XG4gICAgICByZXR1cm4gJ3poLWhhbnQuemgtdHcnO1xuXG4gICAgY2FzZSAnemgtSEsnOlxuICAgIGNhc2UgJ3poLU1PJzpcbiAgICBjYXNlICd6aC1UVyc6XG4gICAgICByZXR1cm4gYHpoLWhhbnQuJHtsYW5ndWFnZS50b0xvd2VyQ2FzZSgpfWA7XG4gIH1cblxuICBjb25zdCBtYXRjaCA9IEpBVkFTQ1JJUFRfTE9DQUxFX1BBVFRFUk4uZXhlYyhsYW5ndWFnZSk7XG5cbiAgaWYgKG1hdGNoKSB7XG4gICAgcmV0dXJuIGAke21hdGNoWzFdfS4ke21hdGNoWzFdfS0ke21hdGNoWzJdLnRvTG93ZXJDYXNlKCl9YDtcbiAgfVxufVxuXG5leHBvcnQgeyBub3JtYWxpemUsIHRvQXp1cmVMb2NhbGUgfTtcbiJdfQ==
