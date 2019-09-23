'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = foreverEffect;

var _effects = require('redux-saga/effects');

var promiseSingleton = new Promise(function() {
  return 0;
});

var getPromise = function getPromise() {
  return promiseSingleton;
}; // This function helps improve our coding pattern on redux-saga

function foreverEffect() {
  return (0, _effects.call)(getPromise);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zYWdhcy9lZmZlY3RzL2ZvcmV2ZXIuanMiXSwibmFtZXMiOlsicHJvbWlzZVNpbmdsZXRvbiIsIlByb21pc2UiLCJnZXRQcm9taXNlIiwiZm9yZXZlckVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLElBQUlDLE9BQUosQ0FBWTtBQUFBLFNBQU0sQ0FBTjtBQUFBLENBQVosQ0FBekI7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUFNRixnQkFBTjtBQUFBLENBQW5CLEMsQ0FFQTs7O0FBQ2UsU0FBU0csYUFBVCxHQUF5QjtBQUN0QyxTQUFPLG1CQUFLRCxVQUFMLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5jb25zdCBwcm9taXNlU2luZ2xldG9uID0gbmV3IFByb21pc2UoKCkgPT4gMCk7XG5jb25zdCBnZXRQcm9taXNlID0gKCkgPT4gcHJvbWlzZVNpbmdsZXRvbjtcblxuLy8gVGhpcyBmdW5jdGlvbiBoZWxwcyBpbXByb3ZlIG91ciBjb2RpbmcgcGF0dGVybiBvbiByZWR1eC1zYWdhXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JldmVyRWZmZWN0KCkge1xuICByZXR1cm4gY2FsbChnZXRQcm9taXNlKTtcbn1cbiJdfQ==
