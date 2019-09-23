'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.localize = localize;
Object.defineProperty(exports, 'getLocaleString', {
  enumerable: true,
  get: function get() {
    return _getLocaleString.default;
  }
});
exports.default = void 0;

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _getLocaleString = _interopRequireDefault(require('./getLocaleString'));

var _csCZ = _interopRequireDefault(require('./cs-CZ'));

var _daDK = _interopRequireDefault(require('./da-DK'));

var _deDE = _interopRequireDefault(require('./de-DE'));

var _elGR = _interopRequireDefault(require('./el-GR'));

var _enUS = _interopRequireDefault(require('./en-US'));

var _esES = _interopRequireDefault(require('./es-ES'));

var _fiFI = _interopRequireDefault(require('./fi-FI'));

var _frFR = _interopRequireDefault(require('./fr-FR'));

var _heIL = _interopRequireDefault(require('./he-IL'));

var _huHU = _interopRequireDefault(require('./hu-HU'));

var _itIT = _interopRequireDefault(require('./it-IT'));

var _jaJP = _interopRequireDefault(require('./ja-JP'));

var _koKR = _interopRequireDefault(require('./ko-KR'));

var _lvLV = _interopRequireDefault(require('./lv-LV'));

var _nbNO = _interopRequireDefault(require('./nb-NO'));

var _nlNL = _interopRequireDefault(require('./nl-NL'));

var _plPL = _interopRequireDefault(require('./pl-PL'));

var _ptBR = _interopRequireDefault(require('./pt-BR'));

var _ptPT = _interopRequireDefault(require('./pt-PT'));

var _ruRU = _interopRequireDefault(require('./ru-RU'));

var _svSE = _interopRequireDefault(require('./sv-SE'));

var _trTR = _interopRequireDefault(require('./tr-TR'));

var _zhHANS = _interopRequireDefault(require('./zh-HANS'));

var _zhHANT = _interopRequireDefault(require('./zh-HANT'));

var _zhYUE = _interopRequireDefault(require('./zh-YUE'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === '[object Arguments]')
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

function normalizeLanguage(language) {
  language = language.toLowerCase();

  if (language.startsWith('cs')) {
    return 'cs-CZ';
  } else if (language.startsWith('da')) {
    return 'da-DK';
  } else if (language.startsWith('de')) {
    return 'de-DE';
  } else if (language.startsWith('el')) {
    return 'el-GR';
  } else if (language.startsWith('es')) {
    return 'es-ES';
  } else if (language.startsWith('fi')) {
    return 'fi-FI';
  } else if (language.startsWith('fr')) {
    return 'fr-FR';
  } else if (language.startsWith('he')) {
    return 'he-IL';
  } else if (language.startsWith('hu')) {
    return 'hu-HU';
  } else if (language.startsWith('it')) {
    return 'it-IT';
  } else if (language.startsWith('ja')) {
    return 'ja-JP';
  } else if (language.startsWith('ko')) {
    return 'ko-KR';
  } else if (language.startsWith('lv')) {
    return 'lv-LV';
  } else if (language.startsWith('nb') || language.startsWith('nn') || language.startsWith('no')) {
    return 'nb-NO';
  } else if (language.startsWith('nl')) {
    return 'nl-NL';
  } else if (language.startsWith('pl')) {
    return 'pl-PL';
  } else if (language === 'pt-br') {
    return 'pt-BR';
  } else if (language.startsWith('pt')) {
    return 'pt-PT';
  } else if (language.startsWith('ru')) {
    return 'ru-RU';
  } else if (language.startsWith('sv')) {
    return 'sv-SE';
  } else if (language.startsWith('tr')) {
    return 'tr-TR';
  } else if (language === 'zh-yue') {
    return 'zh-YUE';
  } else if (language === 'zh-hant' || language === 'zh-hk' || language === 'zh-mo' || language === 'zh-tw') {
    return 'zh-HANT';
  } else if (language.startsWith('zh')) {
    return 'zh-HANS';
  }

  return 'en-US';
}

function getStrings(language) {
  switch (normalizeLanguage(language || '')) {
    case 'cs-CZ':
      return _csCZ.default;

    case 'da-DK':
      return _daDK.default;

    case 'de-DE':
      return _deDE.default;

    case 'el-GR':
      return _elGR.default;

    case 'es-ES':
      return _esES.default;

    case 'fi-FI':
      return _fiFI.default;

    case 'fr-FR':
      return _frFR.default;

    case 'he-IL':
      return _heIL.default;

    case 'hu-HU':
      return _huHU.default;

    case 'it-IT':
      return _itIT.default;

    case 'ja-JP':
      return _jaJP.default;

    case 'ko-KR':
      return _koKR.default;

    case 'lv-LV':
      return _lvLV.default;

    case 'nb-NO':
      return _nbNO.default;

    case 'nl-NL':
      return _nlNL.default;

    case 'pl-PL':
      return _plPL.default;

    case 'pt-BR':
      return _ptBR.default;

    case 'pt-PT':
      return _ptPT.default;

    case 'ru-RU':
      return _ruRU.default;

    case 'sv-SE':
      return _svSE.default;

    case 'tr-TR':
      return _trTR.default;

    case 'zh-HANS':
      return _zhHANS.default;

    case 'zh-HANT':
      return _zhHANT.default;

    case 'zh-YUE':
      return _zhYUE.default;

    default:
      return _enUS.default;
  }
}

function localize(text, language) {
  var string = (getStrings(language) || {})[text] || _enUS.default[text];

  if (typeof string === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return string.apply(void 0, args);
  }

  return string || text;
}

var _default = (0, _connectToWebChat.default)(function(_ref) {
  var language = _ref.language;
  return {
    language: language
  };
})(function(_ref2) {
  var args = _ref2.args,
    language = _ref2.language,
    text = _ref2.text;
  return localize.apply(void 0, [text, language].concat(_toConsumableArray(args || [])));
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb2NhbGl6YXRpb24vTG9jYWxpemUuanMiXSwibmFtZXMiOlsibm9ybWFsaXplTGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInRvTG93ZXJDYXNlIiwic3RhcnRzV2l0aCIsImdldFN0cmluZ3MiLCJjc0NaIiwiZGFESyIsImRlREUiLCJlbEdSIiwiZXNFUyIsImZpRkkiLCJmckZSIiwiaGVJTCIsImh1SFUiLCJpdElUIiwiamFKUCIsImtvS1IiLCJsdkxWIiwibmJOTyIsIm5sTkwiLCJwbFBMIiwicHRCUiIsInB0UFQiLCJydVJVIiwic3ZTRSIsInRyVFIiLCJ6aEhBTlMiLCJ6aEhBTlQiLCJ6aFlVRSIsImVuVVMiLCJsb2NhbGl6ZSIsInRleHQiLCJzdHJpbmciLCJhcmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxpQkFBVCxDQUEyQkMsUUFBM0IsRUFBcUM7QUFDbkNBLEVBQUFBLFFBQVEsR0FBR0EsUUFBUSxDQUFDQyxXQUFULEVBQVg7O0FBRUEsTUFBSUQsUUFBUSxDQUFDRSxVQUFULENBQW9CLElBQXBCLENBQUosRUFBK0I7QUFDN0IsV0FBTyxPQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlGLFFBQVEsQ0FBQ0UsVUFBVCxDQUFvQixJQUFwQixDQUFKLEVBQStCO0FBQ3BDLFdBQU8sT0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJRixRQUFRLENBQUNFLFVBQVQsQ0FBb0IsSUFBcEIsQ0FBSixFQUErQjtBQUNwQyxXQUFPLE9BQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUYsUUFBUSxDQUFDRSxVQUFULENBQW9CLElB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QUFyRDs7QUFFQSxNQUFJLE9BQU9DLE1BQVAsS0FBa0IsVUFBdEIsRUFBa0M7QUFBQSxzQ0FIQ0MsSUFHRDtBQUhDQSxNQUFBQSxJQUdEO0FBQUE7O0FBQ2hDLFdBQU9ELE1BQU0sTUFBTixTQUFVQyxJQUFWLENBQVA7QUFDRDs7QUFFRCxTQUFPRCxNQUFNLElBQUlELElBQWpCO0FBQ0Q7O2VBRWMsK0JBQWlCO0FBQUEsTUFBRzlCLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQUVBLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUFuQjtBQUFBLENBQWpCLEVBQW1EO0FBQUEsTUFBR2dDLElBQUgsU0FBR0EsSUFBSDtBQUFBLE1BQVNoQyxRQUFULFNBQVNBLFFBQVQ7QUFBQSxNQUFtQjhCLElBQW5CLFNBQW1CQSxJQUFuQjtBQUFBLFNBQ2hFRCxRQUFRLE1BQVIsVUFBU0MsSUFBVCxFQUFlOUIsUUFBZiw0QkFBNkJnQyxJQUFJLElBQUksRUFBckMsR0FEZ0U7QUFBQSxDQUFuRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTG9jYWxpemUgaXMgZGVzaWduZWQgdG8gYmUgZWxhYm9yYXRpdmVseSByZXR1cm4gbXVsdGlwbGUgcmVzdWx0cyBhbmQgcG9zc2libHkgZXhjZWVkaW5nIGNvbXBsZXhpdHkgcmVxdWlyZW1lbnRcbi8qIGVzbGludCBjb21wbGV4aXR5OiBcIm9mZlwiICovXG5cbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IGdldExvY2FsZVN0cmluZyBmcm9tICcuL2dldExvY2FsZVN0cmluZyc7XG5cbmltcG9ydCBjc0NaIGZyb20gJy4vY3MtQ1onO1xuaW1wb3J0IGRhREsgZnJvbSAnLi9kYS1ESyc7XG5pbXBvcnQgZGVERSBmcm9tICcuL2RlLURFJztcbmltcG9ydCBlbEdSIGZyb20gJy4vZWwtR1InO1xuaW1wb3J0IGVuVVMgZnJvbSAnLi9lbi1VUyc7XG5pbXBvcnQgZXNFUyBmcm9tICcuL2VzLUVTJztcbmltcG9ydCBmaUZJIGZyb20gJy4vZmktRkknO1xuaW1wb3J0IGZyRlIgZnJvbSAnLi9mci1GUic7XG5pbXBvcnQgaGVJTCBmcm9tICcuL2hlLUlMJztcbmltcG9ydCBodUhVIGZyb20gJy4vaHUtSFUnO1xuaW1wb3J0IGl0SVQgZnJvbSAnLi9pdC1JVCc7XG5pbXBvcnQgamFKUCBmcm9tICcuL2phLUpQJztcbmltcG9ydCBrb0tSIGZyb20gJy4va28tS1InO1xuaW1wb3J0IGx2TFYgZnJvbSAnLi9sdi1MVic7XG5pbXBvcnQgbmJOTyBmcm9tICcuL25iLU5PJztcbmltcG9ydCBubE5MIGZyb20gJy4vbmwtTkwnO1xuaW1wb3J0IHBsUEwgZnJvbSAnLi9wbC1QTCc7XG5pbXBvcnQgcHRCUiBmcm9tICcuL3B0LUJSJztcbmltcG9ydCBwdFBUIGZyb20gJy4vcHQtUFQnO1xuaW1wb3J0IHJ1UlUgZnJvbSAnLi9ydS1SVSc7XG5pbXBvcnQgc3ZTRSBmcm9tICcuL3N2LVNFJztcbmltcG9ydCB0clRSIGZyb20gJy4vdHItVFInO1xuaW1wb3J0IHpoSEFOUyBmcm9tICcuL3poLUhBTlMnO1xuaW1wb3J0IHpoSEFOVCBmcm9tICcuL3poLUhBTlQnO1xuaW1wb3J0IHpoWVVFIGZyb20gJy4vemgtWVVFJztcblxuZnVuY3Rpb24gbm9ybWFsaXplTGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcbiAgbGFuZ3VhZ2UgPSBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChsYW5ndWFnZS5zdGFydHNXaXRoKCdjcycpKSB7XG4gICAgcmV0dXJuICdjcy1DWic7XG4gIH0gZWxzZSBpZiAobGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnZGEnKSkge1xuICAgIHJldHVybiAnZGEtREsnO1xuICB9IGVsc2UgaWYgKGxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2RlJykpIHtcbiAgICByZXR1cm4gJ2RlLURFJztcbiAgfSBlbHNlIGlmIChsYW5ndWFnZS5zdGFydHNXaXRoKCdlbCcpKSB7XG4gICAgcmV0dXJuICdlbC1HUic7XG4gIH0gZWxzZSBpZiAobGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnZXMnKSkge1xuICAgIHJldHVybiAnZXMtRVMnO1xuICB9IGVsc2UgaWYgKGxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2ZpJykpIHtcbiAgICByZXR1cm4gJ2ZpLUZJJztcbiAgfSBlbHNlIGlmIChsYW5ndWFnZS5zdGFydHNXaXRoKCdmcicpKSB7XG4gICAgcmV0dXJuICdmci1GUic7XG4gIH0gZWxzZSBpZiAobGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaGUnKSkge1xuICAgIHJldHVybiAnaGUtSUwnO1xuICB9IGVsc2UgaWYgKGxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2h1JykpIHtcbiAgICByZXR1cm4gJ2h1LUhVJztcbiAgfSBlbHNlIGlmIChsYW5ndWFnZS5zdGFydHNXaXRoKCdpdCcpKSB7XG4gICAgcmV0dXJuICdpdC1JVCc7XG4gIH0gZWxzZSBpZiAobGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnamEnKSkge1xuICAgIHJldHVybiAnamEtSlAnO1xuICB9IGVsc2UgaWYgKGxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2tvJykpIHtcbiAgICByZXR1cm4gJ2tvLUtSJztcbiAgfSBlbHNlIGlmIChsYW5ndWFnZS5zdGFydHNXaXRoKCdsdicpKSB7XG4gICAgcmV0dXJuICdsdi1MVic7XG4gIH0gZWxzZSBpZiAobGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnbmInKSB8fCBsYW5ndWFnZS5zdGFydHNXaXRoKCdubicpIHx8IGxhbmd1YWdlLnN0YXJ0c1dpdGgoJ25vJykpIHtcbiAgICByZXR1cm4gJ25iLU5PJztcbiAgfSBlbHNlIGlmIChsYW5ndWFnZS5zdGFydHNXaXRoKCdubCcpKSB7XG4gICAgcmV0dXJuICdubC1OTCc7XG4gIH0gZWxzZSBpZiAobGFuZ3VhZ2Uuc3RhcnRzV2l0aCgncGwnKSkge1xuICAgIHJldHVybiAncGwtUEwnO1xuICB9IGVsc2UgaWYgKGxhbmd1YWdlID09PSAncHQtYnInKSB7XG4gICAgcmV0dXJuICdwdC1CUic7XG4gIH0gZWxzZSBpZiAobGFuZ3VhZ2Uuc3RhcnRzV2l0aCgncHQnKSkge1xuICAgIHJldHVybiAncHQtUFQnO1xuICB9IGVsc2UgaWYgKGxhbmd1YWdlLnN0YXJ0c1dpdGgoJ3J1JykpIHtcbiAgICByZXR1cm4gJ3J1LVJVJztcbiAgfSBlbHNlIGlmIChsYW5ndWFnZS5zdGFydHNXaXRoKCdzdicpKSB7XG4gICAgcmV0dXJuICdzdi1TRSc7XG4gIH0gZWxzZSBpZiAobGFuZ3VhZ2Uuc3RhcnRzV2l0aCgndHInKSkge1xuICAgIHJldHVybiAndHItVFInO1xuICB9IGVsc2UgaWYgKGxhbmd1YWdlID09PSAnemgteXVlJykge1xuICAgIHJldHVybiAnemgtWVVFJztcbiAgfSBlbHNlIGlmIChsYW5ndWFnZSA9PT0gJ3poLWhhbnQnIHx8IGxhbmd1YWdlID09PSAnemgtaGsnIHx8IGxhbmd1YWdlID09PSAnemgtbW8nIHx8IGxhbmd1YWdlID09PSAnemgtdHcnKSB7XG4gICAgcmV0dXJuICd6aC1IQU5UJztcbiAgfSBlbHNlIGlmIChsYW5ndWFnZS5zdGFydHNXaXRoKCd6aCcpKSB7XG4gICAgcmV0dXJuICd6aC1IQU5TJztcbiAgfVxuXG4gIHJldHVybiAnZW4tVVMnO1xufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmdzKGxhbmd1YWdlKSB7XG4gIHN3aXRjaCAobm9ybWFsaXplTGFuZ3VhZ2UobGFuZ3VhZ2UgfHwgJycpKSB7XG4gICAgY2FzZSAnY3MtQ1onOlxuICAgICAgcmV0dXJuIGNzQ1o7XG4gICAgY2FzZSAnZGEtREsnOlxuICAgICAgcmV0dXJuIGRhREs7XG4gICAgY2FzZSAnZGUtREUnOlxuICAgICAgcmV0dXJuIGRlREU7XG4gICAgY2FzZSAnZWwtR1InOlxuICAgICAgcmV0dXJuIGVsR1I7XG4gICAgY2FzZSAnZXMtRVMnOlxuICAgICAgcmV0dXJuIGVzRVM7XG4gICAgY2FzZSAnZmktRkknOlxuICAgICAgcmV0dXJuIGZpRkk7XG4gICAgY2FzZSAnZnItRlInOlxuICAgICAgcmV0dXJuIGZyRlI7XG4gICAgY2FzZSAnaGUtSUwnOlxuICAgICAgcmV0dXJuIGhlSUw7XG4gICAgY2FzZSAnaHUtSFUnOlxuICAgICAgcmV0dXJuIGh1SFU7XG4gICAgY2FzZSAnaXQtSVQnOlxuICAgICAgcmV0dXJuIGl0SVQ7XG4gICAgY2FzZSAnamEtSlAnOlxuICAgICAgcmV0dXJuIGphSlA7XG4gICAgY2FzZSAna28tS1InOlxuICAgICAgcmV0dXJuIGtvS1I7XG4gICAgY2FzZSAnbHYtTFYnOlxuICAgICAgcmV0dXJuIGx2TFY7XG4gICAgY2FzZSAnbmItTk8nOlxuICAgICAgcmV0dXJuIG5iTk87XG4gICAgY2FzZSAnbmwtTkwnOlxuICAgICAgcmV0dXJuIG5sTkw7XG4gICAgY2FzZSAncGwtUEwnOlxuICAgICAgcmV0dXJuIHBsUEw7XG4gICAgY2FzZSAncHQtQlInOlxuICAgICAgcmV0dXJuIHB0QlI7XG4gICAgY2FzZSAncHQtUFQnOlxuICAgICAgcmV0dXJuIHB0UFQ7XG4gICAgY2FzZSAncnUtUlUnOlxuICAgICAgcmV0dXJuIHJ1UlU7XG4gICAgY2FzZSAnc3YtU0UnOlxuICAgICAgcmV0dXJuIHN2U0U7XG4gICAgY2FzZSAndHItVFInOlxuICAgICAgcmV0dXJuIHRyVFI7XG4gICAgY2FzZSAnemgtSEFOUyc6XG4gICAgICByZXR1cm4gemhIQU5TO1xuICAgIGNhc2UgJ3poLUhBTlQnOlxuICAgICAgcmV0dXJuIHpoSEFOVDtcbiAgICBjYXNlICd6aC1ZVUUnOlxuICAgICAgcmV0dXJuIHpoWVVFO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBlblVTO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvY2FsaXplKHRleHQsIGxhbmd1YWdlLCAuLi5hcmdzKSB7XG4gIGNvbnN0IHN0cmluZyA9IChnZXRTdHJpbmdzKGxhbmd1YWdlKSB8fCB7fSlbdGV4dF0gfHwgZW5VU1t0ZXh0XTtcblxuICBpZiAodHlwZW9mIHN0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBzdHJpbmcoLi4uYXJncyk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nIHx8IHRleHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1dlYkNoYXQoKHsgbGFuZ3VhZ2UgfSkgPT4gKHsgbGFuZ3VhZ2UgfSkpKCh7IGFyZ3MsIGxhbmd1YWdlLCB0ZXh0IH0pID0+XG4gIGxvY2FsaXplKHRleHQsIGxhbmd1YWdlLCAuLi4oYXJncyB8fCBbXSkpXG4pO1xuXG5leHBvcnQgeyBnZXRMb2NhbGVTdHJpbmcsIGxvY2FsaXplIH07XG4iXX0=
