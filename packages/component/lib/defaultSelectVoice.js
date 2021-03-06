'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = _default;

function _default(_ref, voices, activity) {
  var language = _ref.language;
  // Find the first voice based on this order:
  // 1. Voice with language same as locale as defined in the activity
  // 2. Voice with language same as locale as passed into Web Chat
  // 3. Voice with language same as browser
  // 4. English (United States)
  // 5. First voice
  // We also prioritize voices powered by deep neural network (with keyword "neural" in the voice name).
  return (
    [activity.locale, language, window.navigator.language, 'en-US'].reduce(function(result, targetLanguage) {
      return (
        result ||
        voices.find(function(_ref2) {
          var lang = _ref2.lang,
            name = _ref2.name;
          return lang === targetLanguage && /neural/i.test(name);
        }) ||
        voices.find(function(_ref3) {
          var lang = _ref3.lang;
          return lang === targetLanguage;
        })
      );
    }, null) || voices[0]
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZhdWx0U2VsZWN0Vm9pY2UuanMiXSwibmFtZXMiOlsidm9pY2VzIiwiYWN0aXZpdHkiLCJsYW5ndWFnZSIsImxvY2FsZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsInJlZHVjZSIsInJlc3VsdCIsInRhcmdldExhbmd1YWdlIiwiZmluZCIsImxhbmciLCJuYW1lIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLHdCQUF1QkEsTUFBdkIsRUFBK0JDLFFBQS9CLEVBQXlDO0FBQUEsTUFBOUJDLFFBQThCLFFBQTlCQSxRQUE4QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLFNBQ0UsQ0FBQ0QsUUFBUSxDQUFDRSxNQUFWLEVBQWtCRCxRQUFsQixFQUE0QkUsTUFBTSxDQUFDQyxTQUFQLENBQWlCSCxRQUE3QyxFQUF1RCxPQUF2RCxFQUFnRUksTUFBaEUsQ0FDRSxVQUFDQyxNQUFELEVBQVNDLGNBQVQ7QUFBQSxXQUNFRCxNQUFNLElBQ05QLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZO0FBQUEsVUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsVUFBU0MsSUFBVCxTQUFTQSxJQUFUO0FBQUEsYUFBb0JELElBQUksS0FBS0YsY0FBVCxJQUEyQixVQUFXSSxJQUFYLENBQWdCRCxJQUFoQixDQUEvQztBQUFBLEtBQVosQ0FEQSxJQUVBWCxNQUFNLENBQUNTLElBQVAsQ0FBWTtBQUFBLFVBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLGFBQWNBLElBQUksS0FBS0YsY0FBdkI7QUFBQSxLQUFaLENBSEY7QUFBQSxHQURGLEVBS0UsSUFMRixLQU1LUixNQUFNLENBQUMsQ0FBRCxDQVBiO0FBU0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih7IGxhbmd1YWdlIH0sIHZvaWNlcywgYWN0aXZpdHkpIHtcbiAgLy8gRmluZCB0aGUgZmlyc3Qgdm9pY2UgYmFzZWQgb24gdGhpcyBvcmRlcjpcbiAgLy8gMS4gVm9pY2Ugd2l0aCBsYW5ndWFnZSBzYW1lIGFzIGxvY2FsZSBhcyBkZWZpbmVkIGluIHRoZSBhY3Rpdml0eVxuICAvLyAyLiBWb2ljZSB3aXRoIGxhbmd1YWdlIHNhbWUgYXMgbG9jYWxlIGFzIHBhc3NlZCBpbnRvIFdlYiBDaGF0XG4gIC8vIDMuIFZvaWNlIHdpdGggbGFuZ3VhZ2Ugc2FtZSBhcyBicm93c2VyXG4gIC8vIDQuIEVuZ2xpc2ggKFVuaXRlZCBTdGF0ZXMpXG4gIC8vIDUuIEZpcnN0IHZvaWNlXG5cbiAgLy8gV2UgYWxzbyBwcmlvcml0aXplIHZvaWNlcyBwb3dlcmVkIGJ5IGRlZXAgbmV1cmFsIG5ldHdvcmsgKHdpdGgga2V5d29yZCBcIm5ldXJhbFwiIGluIHRoZSB2b2ljZSBuYW1lKS5cbiAgcmV0dXJuIChcbiAgICBbYWN0aXZpdHkubG9jYWxlLCBsYW5ndWFnZSwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSwgJ2VuLVVTJ10ucmVkdWNlKFxuICAgICAgKHJlc3VsdCwgdGFyZ2V0TGFuZ3VhZ2UpID0+XG4gICAgICAgIHJlc3VsdCB8fFxuICAgICAgICB2b2ljZXMuZmluZCgoeyBsYW5nLCBuYW1lIH0pID0+IGxhbmcgPT09IHRhcmdldExhbmd1YWdlICYmIC9uZXVyYWwvaXUudGVzdChuYW1lKSkgfHxcbiAgICAgICAgdm9pY2VzLmZpbmQoKHsgbGFuZyB9KSA9PiBsYW5nID09PSB0YXJnZXRMYW5ndWFnZSksXG4gICAgICBudWxsXG4gICAgKSB8fCB2b2ljZXNbMF1cbiAgKTtcbn1cbiJdfQ==
