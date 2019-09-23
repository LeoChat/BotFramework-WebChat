'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = addVersion;

var _botframeworkWebchatComponent = require('botframework-webchat-component');

var _botframeworkWebchatCore = require('botframework-webchat-core');

/* global global:readonly, process:readonly */

/* eslint no-empty: ["error", { "allowEmptyCatch": true }] */
function setMetaTag(name, content) {
  try {
    var _global = global,
      document = _global.document;

    if (typeof document !== 'undefined' && document.createElement && document.head && document.head.appendChild) {
      var meta =
        document.querySelector('html meta[name="'.concat(encodeURI(name), '"]')) || document.createElement('meta');
      meta.setAttribute('name', name);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    }
  } catch (err) {}
}

function addVersion(variant) {
  setMetaTag('botframework-webchat:bundle:variant', variant);
  setMetaTag('botframework-webchat:bundle:version', undefined);
  setMetaTag('botframework-webchat:core:version', _botframeworkWebchatCore.version);
  setMetaTag('botframework-webchat:ui:version', _botframeworkWebchatComponent.version);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hZGRWZXJzaW9uLmpzIl0sIm5hbWVzIjpbInNldE1ldGFUYWciLCJuYW1lIiwiY29udGVudCIsImdsb2JhbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIm1ldGEiLCJxdWVyeVNlbGVjdG9yIiwiZW5jb2RlVVJJIiwic2V0QXR0cmlidXRlIiwiZXJyIiwiYWRkVmVyc2lvbiIsInZhcmlhbnQiLCJjb3JlVmVyc2lvbiIsImNvbXBvbmVudFZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFKQTs7QUFDQTtBQUtBLFNBQVNBLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCQyxPQUExQixFQUFtQztBQUNqQyxNQUFJO0FBQUEsa0JBQ21CQyxNQURuQjtBQUFBLFFBQ01DLFFBRE4sV0FDTUEsUUFETjs7QUFHRixRQUFJLE9BQU9BLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUNBLFFBQVEsQ0FBQ0MsYUFBNUMsSUFBNkRELFFBQVEsQ0FBQ0UsSUFBdEUsSUFBOEVGLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxXQUFoRyxFQUE2RztBQUMzRyxVQUFNQyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0ssYUFBVCw0QkFBMENDLFNBQVMsQ0FBQ1QsSUFBRCxDQUFuRCxhQUFrRUcsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQS9FO0FBRUFHLE1BQUFBLElBQUksQ0FBQ0csWUFBTCxDQUFrQixNQUFsQixFQUEwQlYsSUFBMUI7QUFDQU8sTUFBQUEsSUFBSSxDQUFDRyxZQUFMLENBQWtCLFNBQWxCLEVBQTZCVCxPQUE3QjtBQUVBRSxNQUFBQSxRQUFRLENBQUNFLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkMsSUFBMUI7QUFDRDtBQUNGLEdBWEQsQ0FXRSxPQUFPSSxHQUFQLEVBQVksQ0FBRTtBQUNqQjs7QUFFYyxTQUFTQyxVQUFULENBQW9CQyxPQUFwQixFQUE2QjtBQUMxQ2QsRUFBQUEsVUFBVSxDQUFDLHFDQUFELEVBQXdDYyxPQUF4QyxDQUFWO0FBQ0FkLEVBQUFBLFVBQVUsQ0FBQyxxQ0FBRCxZQUFWO0FBQ0FBLEVBQUFBLFVBQVUsQ0FBQyxtQ0FBRCxFQUFzQ2UsZ0NBQXRDLENBQVY7QUFDQWYsRUFBQUEsVUFBVSxDQUFDLGlDQUFELEVBQW9DZ0IscUNBQXBDLENBQVY7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBnbG9iYWw6cmVhZG9ubHksIHByb2Nlc3M6cmVhZG9ubHkgKi9cbi8qIGVzbGludCBuby1lbXB0eTogW1wiZXJyb3JcIiwgeyBcImFsbG93RW1wdHlDYXRjaFwiOiB0cnVlIH1dICovXG5cbmltcG9ydCB7IHZlcnNpb24gYXMgY29tcG9uZW50VmVyc2lvbiB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyB2ZXJzaW9uIGFzIGNvcmVWZXJzaW9uIH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29yZSc7XG5cbmZ1bmN0aW9uIHNldE1ldGFUYWcobmFtZSwgY29udGVudCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZG9jdW1lbnQgfSA9IGdsb2JhbDtcblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJiYgZG9jdW1lbnQuaGVhZCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKSB7XG4gICAgICBjb25zdCBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaHRtbCBtZXRhW25hbWU9XCIke2VuY29kZVVSSShuYW1lKX1cIl1gKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJyk7XG5cbiAgICAgIG1ldGEuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG4gICAgICBtZXRhLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIGNvbnRlbnQpO1xuXG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGEpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRWZXJzaW9uKHZhcmlhbnQpIHtcbiAgc2V0TWV0YVRhZygnYm90ZnJhbWV3b3JrLXdlYmNoYXQ6YnVuZGxlOnZhcmlhbnQnLCB2YXJpYW50KTtcbiAgc2V0TWV0YVRhZygnYm90ZnJhbWV3b3JrLXdlYmNoYXQ6YnVuZGxlOnZlcnNpb24nLCBwcm9jZXNzLmVudi5OUE1fUEFDS0FHRV9WRVJTSU9OKTtcbiAgc2V0TWV0YVRhZygnYm90ZnJhbWV3b3JrLXdlYmNoYXQ6Y29yZTp2ZXJzaW9uJywgY29yZVZlcnNpb24pO1xuICBzZXRNZXRhVGFnKCdib3RmcmFtZXdvcmstd2ViY2hhdDp1aTp2ZXJzaW9uJywgY29tcG9uZW50VmVyc2lvbik7XG59XG4iXX0=
