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

var _getLocaleString = _interopRequireDefault(require('./getLocaleString'));

var _useLocalize = _interopRequireDefault(require('../hooks/useLocalize'));

var _bgBG = _interopRequireDefault(require('./bg-BG'));

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

  if (language.startsWith('bg')) {
    return 'bg-BG';
  } else if (language.startsWith('cs')) {
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
    case 'bg-BG':
      return _bgBG.default;

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

var _default = function _default(_ref) {
  var args = _ref.args,
    text = _ref.text;
  return _useLocalize.default.apply(void 0, [text].concat(_toConsumableArray(args || [])));
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb2NhbGl6YXRpb24vTG9jYWxpemUuanMiXSwibmFtZXMiOlsibm9ybWFsaXplTGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInRvTG93ZXJDYXNlIiwic3RhcnRzV2l0aCIsImdldFN0cmluZ3MiLCJiZ0JHIiwiY3NDWiIsImRhREsiLCJkZURFIiwiZWxHUiIsImVzRVMiLCJmaUZJIiwiZnJGUiIsImhlSUwiLCJodUhVIiwiaXRJVCIsImphSlAiLCJrb0tSIiwibHZMViIsIm5iTk8iLCJubE5MIiwicGxQTCIsInB0QlIiLCJwdFBUIiwicnVSVSIsInN2U0UiLCJ0clRSIiwiemhIQU5TIiwiemhIQU5UIiwiemhZVUUiLCJlblVTIiwibG9jYWxpemUiLCJ0ZXh0Iiwic3RyaW5nIiwiYXJncyIsInVzZUxvY2FsaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxpQkFBVCxDQUEyQkMsUUFBM0IsRUFBcUM7QUFDbkNBLEVBQUFBLFFBQVEsR0FBR0EsUUFBUSxDQUFDQyxXQUFULEVBQVg7O0FBRUEsTUFBSUQsUUFBUSxDQUFDRSxVQUFULENBQW9CLElBQXBCLENBQUosRUFBK0I7QUFDN0IsV0FBTyxPQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlGLFFBQVEsQ0FBQ0UsVUFBVCxDQUFvQixJQUFwQixDQUFKLEVBQStCO0FBQ3BDLFdBQU8sT0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJRixRQUFRLENBQUNFLFVBQVQsQ0FBb0IsSUFBcEIsQ0FBSixFQUErQjtBQUNwQyxXQUFPLE9BQVA7QUFDRCxHQUZNLE1BRUEsSUFB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LFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCL0IsUUFBeEIsRUFBMkM7QUFDekMsTUFBTWdDLE1BQU0sR0FBRyxDQUFDN0IsVUFBVSxDQUFDSCxRQUFELENBQVYsSUFBd0IsRUFBekIsRUFBNkIrQixJQUE3QixLQUFzQ0YsY0FBS0UsSUFBTCxDQUFyRDs7QUFFQSxNQUFJLE9BQU9DLE1BQVAsS0FBa0IsVUFBdEIsRUFBa0M7QUFBQSxzQ0FIQ0MsSUFHRDtBQUhDQSxNQUFBQSxJQUdEO0FBQUE7O0FBQ2hDLFdBQU9ELE1BQU0sTUFBTixTQUFVQyxJQUFWLENBQVA7QUFDRDs7QUFFRCxTQUFPRCxNQUFNLElBQUlELElBQWpCO0FBQ0Q7O2VBRWM7QUFBQSxNQUFHRSxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTRixJQUFULFFBQVNBLElBQVQ7QUFBQSxTQUFvQkcsb0NBQVlILElBQVosNEJBQXNCRSxJQUFJLElBQUksRUFBOUIsR0FBcEI7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTG9jYWxpemUgaXMgZGVzaWduZWQgdG8gYmUgZWxhYm9yYXRpdmVseSByZXR1cm4gbXVsdGlwbGUgcmVzdWx0cyBhbmQgcG9zc2libHkgZXhjZWVkaW5nIGNvbXBsZXhpdHkgcmVxdWlyZW1lbnRcbi8qIGVzbGludCBjb21wbGV4aXR5OiBcIm9mZlwiICovXG5cbmltcG9ydCBnZXRMb2NhbGVTdHJpbmcgZnJvbSAnLi9nZXRMb2NhbGVTdHJpbmcnO1xuaW1wb3J0IHVzZUxvY2FsaXplIGZyb20gJy4uL2hvb2tzL3VzZUxvY2FsaXplJztcblxuaW1wb3J0IGJnQkcgZnJvbSAnLi9iZy1CRyc7XG5pbXBvcnQgY3NDWiBmcm9tICcuL2NzLUNaJztcbmltcG9ydCBkYURLIGZyb20gJy4vZGEtREsnO1xuaW1wb3J0IGRlREUgZnJvbSAnLi9kZS1ERSc7XG5pbXBvcnQgZWxHUiBmcm9tICcuL2VsLUdSJztcbmltcG9ydCBlblVTIGZyb20gJy4vZW4tVVMnO1xuaW1wb3J0IGVzRVMgZnJvbSAnLi9lcy1FUyc7XG5pbXBvcnQgZmlGSSBmcm9tICcuL2ZpLUZJJztcbmltcG9ydCBmckZSIGZyb20gJy4vZnItRlInO1xuaW1wb3J0IGhlSUwgZnJvbSAnLi9oZS1JTCc7XG5pbXBvcnQgaHVIVSBmcm9tICcuL2h1LUhVJztcbmltcG9ydCBpdElUIGZyb20gJy4vaXQtSVQnO1xuaW1wb3J0IGphSlAgZnJvbSAnLi9qYS1KUCc7XG5pbXBvcnQga29LUiBmcm9tICcuL2tvLUtSJztcbmltcG9ydCBsdkxWIGZyb20gJy4vbHYtTFYnO1xuaW1wb3J0IG5iTk8gZnJvbSAnLi9uYi1OTyc7XG5pbXBvcnQgbmxOTCBmcm9tICcuL25sLU5MJztcbmltcG9ydCBwbFBMIGZyb20gJy4vcGwtUEwnO1xuaW1wb3J0IHB0QlIgZnJvbSAnLi9wdC1CUic7XG5pbXBvcnQgcHRQVCBmcm9tICcuL3B0LVBUJztcbmltcG9ydCBydVJVIGZyb20gJy4vcnUtUlUnO1xuaW1wb3J0IHN2U0UgZnJvbSAnLi9zdi1TRSc7XG5pbXBvcnQgdHJUUiBmcm9tICcuL3RyLVRSJztcbmltcG9ydCB6aEhBTlMgZnJvbSAnLi96aC1IQU5TJztcbmltcG9ydCB6aEhBTlQgZnJvbSAnLi96aC1IQU5UJztcbmltcG9ydCB6aFlVRSBmcm9tICcuL3poLVlVRSc7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxhbmd1YWdlKGxhbmd1YWdlKSB7XG4gIGxhbmd1YWdlID0gbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKTtcblxuICBpZiAobGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnYmcnKSkge1xuICAgIHJldHVybiAnYmctQkcnO1xuICB9IGVsc2UgaWYgKGxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2NzJykpIHtcbiAgICByZXR1cm4gJ2NzLUNaJztcbiAgfSBlbHNlIGlmIChsYW5ndWFnZS5zdGFydHNXaXRoKCdkYScpKSB7XG4gICAgcmV0dXJuICdkYS1ESyc7XG4gIH0gZWxzZSBpZiAobGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnZGUnKSkge1xuICAgIHJldHVybiAnZGUtREUnO1xuICB9IGVsc2UgaWYgKGxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2VsJykpIHtcbiAgICByZXR1cm4gJ2VsLUdSJztcbiAgfSBlbHNlIGlmIChsYW5ndWFnZS5zdGFydHNXaXRoKCdlcycpKSB7XG4gICAgcmV0dXJuICdlcy1FUyc7XG4gIH0gZWxzZSBpZiAobGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnZmknKSkge1xuICAgIHJldHVybiAnZmktRkknO1xuICB9IGVsc2UgaWYgKGxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2ZyJykpIHtcbiAgICByZXR1cm4gJ2ZyLUZSJztcbiAgfSBlbHNlIGlmIChsYW5ndWFnZS5zdGFydHNXaXRoKCdoZScpKSB7XG4gICAgcmV0dXJuICdoZS1JTCc7XG4gIH0gZWxzZSBpZiAobGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnaHUnKSkge1xuICAgIHJldHVybiAnaHUtSFUnO1xuICB9IGVsc2UgaWYgKGxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2l0JykpIHtcbiAgICByZXR1cm4gJ2l0LUlUJztcbiAgfSBlbHNlIGlmIChsYW5ndWFnZS5zdGFydHNXaXRoKCdqYScpKSB7XG4gICAgcmV0dXJuICdqYS1KUCc7XG4gIH0gZWxzZSBpZiAobGFuZ3VhZ2Uuc3RhcnRzV2l0aCgna28nKSkge1xuICAgIHJldHVybiAna28tS1InO1xuICB9IGVsc2UgaWYgKGxhbmd1YWdlLnN0YXJ0c1dpdGgoJ2x2JykpIHtcbiAgICByZXR1cm4gJ2x2LUxWJztcbiAgfSBlbHNlIGlmIChsYW5ndWFnZS5zdGFydHNXaXRoKCduYicpIHx8IGxhbmd1YWdlLnN0YXJ0c1dpdGgoJ25uJykgfHwgbGFuZ3VhZ2Uuc3RhcnRzV2l0aCgnbm8nKSkge1xuICAgIHJldHVybiAnbmItTk8nO1xuICB9IGVsc2UgaWYgKGxhbmd1YWdlLnN0YXJ0c1dpdGgoJ25sJykpIHtcbiAgICByZXR1cm4gJ25sLU5MJztcbiAgfSBlbHNlIGlmIChsYW5ndWFnZS5zdGFydHNXaXRoKCdwbCcpKSB7XG4gICAgcmV0dXJuICdwbC1QTCc7XG4gIH0gZWxzZSBpZiAobGFuZ3VhZ2UgPT09ICdwdC1icicpIHtcbiAgICByZXR1cm4gJ3B0LUJSJztcbiAgfSBlbHNlIGlmIChsYW5ndWFnZS5zdGFydHNXaXRoKCdwdCcpKSB7XG4gICAgcmV0dXJuICdwdC1QVCc7XG4gIH0gZWxzZSBpZiAobGFuZ3VhZ2Uuc3RhcnRzV2l0aCgncnUnKSkge1xuICAgIHJldHVybiAncnUtUlUnO1xuICB9IGVsc2UgaWYgKGxhbmd1YWdlLnN0YXJ0c1dpdGgoJ3N2JykpIHtcbiAgICByZXR1cm4gJ3N2LVNFJztcbiAgfSBlbHNlIGlmIChsYW5ndWFnZS5zdGFydHNXaXRoKCd0cicpKSB7XG4gICAgcmV0dXJuICd0ci1UUic7XG4gIH0gZWxzZSBpZiAobGFuZ3VhZ2UgPT09ICd6aC15dWUnKSB7XG4gICAgcmV0dXJuICd6aC1ZVUUnO1xuICB9IGVsc2UgaWYgKGxhbmd1YWdlID09PSAnemgtaGFudCcgfHwgbGFuZ3VhZ2UgPT09ICd6aC1oaycgfHwgbGFuZ3VhZ2UgPT09ICd6aC1tbycgfHwgbGFuZ3VhZ2UgPT09ICd6aC10dycpIHtcbiAgICByZXR1cm4gJ3poLUhBTlQnO1xuICB9IGVsc2UgaWYgKGxhbmd1YWdlLnN0YXJ0c1dpdGgoJ3poJykpIHtcbiAgICByZXR1cm4gJ3poLUhBTlMnO1xuICB9XG5cbiAgcmV0dXJuICdlbi1VUyc7XG59XG5cbmZ1bmN0aW9uIGdldFN0cmluZ3MobGFuZ3VhZ2UpIHtcbiAgc3dpdGNoIChub3JtYWxpemVMYW5ndWFnZShsYW5ndWFnZSB8fCAnJykpIHtcbiAgICBjYXNlICdiZy1CRyc6XG4gICAgICByZXR1cm4gYmdCRztcbiAgICBjYXNlICdjcy1DWic6XG4gICAgICByZXR1cm4gY3NDWjtcbiAgICBjYXNlICdkYS1ESyc6XG4gICAgICByZXR1cm4gZGFESztcbiAgICBjYXNlICdkZS1ERSc6XG4gICAgICByZXR1cm4gZGVERTtcbiAgICBjYXNlICdlbC1HUic6XG4gICAgICByZXR1cm4gZWxHUjtcbiAgICBjYXNlICdlcy1FUyc6XG4gICAgICByZXR1cm4gZXNFUztcbiAgICBjYXNlICdmaS1GSSc6XG4gICAgICByZXR1cm4gZmlGSTtcbiAgICBjYXNlICdmci1GUic6XG4gICAgICByZXR1cm4gZnJGUjtcbiAgICBjYXNlICdoZS1JTCc6XG4gICAgICByZXR1cm4gaGVJTDtcbiAgICBjYXNlICdodS1IVSc6XG4gICAgICByZXR1cm4gaHVIVTtcbiAgICBjYXNlICdpdC1JVCc6XG4gICAgICByZXR1cm4gaXRJVDtcbiAgICBjYXNlICdqYS1KUCc6XG4gICAgICByZXR1cm4gamFKUDtcbiAgICBjYXNlICdrby1LUic6XG4gICAgICByZXR1cm4ga29LUjtcbiAgICBjYXNlICdsdi1MVic6XG4gICAgICByZXR1cm4gbHZMVjtcbiAgICBjYXNlICduYi1OTyc6XG4gICAgICByZXR1cm4gbmJOTztcbiAgICBjYXNlICdubC1OTCc6XG4gICAgICByZXR1cm4gbmxOTDtcbiAgICBjYXNlICdwbC1QTCc6XG4gICAgICByZXR1cm4gcGxQTDtcbiAgICBjYXNlICdwdC1CUic6XG4gICAgICByZXR1cm4gcHRCUjtcbiAgICBjYXNlICdwdC1QVCc6XG4gICAgICByZXR1cm4gcHRQVDtcbiAgICBjYXNlICdydS1SVSc6XG4gICAgICByZXR1cm4gcnVSVTtcbiAgICBjYXNlICdzdi1TRSc6XG4gICAgICByZXR1cm4gc3ZTRTtcbiAgICBjYXNlICd0ci1UUic6XG4gICAgICByZXR1cm4gdHJUUjtcbiAgICBjYXNlICd6aC1IQU5TJzpcbiAgICAgIHJldHVybiB6aEhBTlM7XG4gICAgY2FzZSAnemgtSEFOVCc6XG4gICAgICByZXR1cm4gemhIQU5UO1xuICAgIGNhc2UgJ3poLVlVRSc6XG4gICAgICByZXR1cm4gemhZVUU7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGVuVVM7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9jYWxpemUodGV4dCwgbGFuZ3VhZ2UsIC4uLmFyZ3MpIHtcbiAgY29uc3Qgc3RyaW5nID0gKGdldFN0cmluZ3MobGFuZ3VhZ2UpIHx8IHt9KVt0ZXh0XSB8fCBlblVTW3RleHRdO1xuXG4gIGlmICh0eXBlb2Ygc3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHN0cmluZyguLi5hcmdzKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmcgfHwgdGV4dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgYXJncywgdGV4dCB9KSA9PiB1c2VMb2NhbGl6ZSh0ZXh0LCAuLi4oYXJncyB8fCBbXSkpO1xuXG5leHBvcnQgeyBnZXRMb2NhbGVTdHJpbmcsIGxvY2FsaXplIH07XG4iXX0=
