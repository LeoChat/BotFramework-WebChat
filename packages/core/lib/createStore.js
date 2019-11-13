'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = createWebChatStore;

var _redux = require('redux');

var _reduxSaga = _interopRequireDefault(require('redux-saga'));

var _reducer = _interopRequireDefault(require('./reducer'));

var _sagas = _interopRequireDefault(require('./sagas'));

// This is for the racing between sagaMiddleware and store

/* eslint no-use-before-define: "off" */
function createWebChatStore(initialState) {
  var sagaMiddleware = (0, _reduxSaga['default'])({
    onError: function onError() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var err = args[0];
      console.error(err);
      store.dispatch({
        type: 'WEB_CHAT/SAGA_ERROR'
      });
    }
  });

  for (var _len = arguments.length, middlewares = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    middlewares[_key - 1] = arguments[_key];
  }

  var store = (0, _redux.createStore)(
    _reducer['default'],
    initialState || {},
    _redux.applyMiddleware.apply(void 0, middlewares.concat([sagaMiddleware]))
  );
  sagaMiddleware.run(_sagas['default']);
  return store;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVTdG9yZS50cyJdLCJuYW1lcyI6WyJjcmVhdGVXZWJDaGF0U3RvcmUiLCJpbml0aWFsU3RhdGUiLCJzYWdhTWlkZGxld2FyZSIsIm9uRXJyb3IiLCJhcmdzIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic3RvcmUiLCJkaXNwYXRjaCIsInR5cGUiLCJtaWRkbGV3YXJlcyIsInJlZHVjZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJydW4iLCJzYWdhcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBUEE7O0FBQ0E7QUFRZSxTQUFTQSxrQkFBVCxDQUE0QkMsWUFBNUIsRUFBMEQ7QUFDdkUsTUFBTUMsY0FBYyxHQUFHLDJCQUFxQjtBQUMxQ0MsSUFBQUEsT0FBTyxFQUFFLG1CQUFhO0FBQUEseUNBQVRDLElBQVM7QUFBVEEsUUFBQUEsSUFBUztBQUFBOztBQUFBLFVBQ2JDLEdBRGEsR0FDTkQsSUFETTtBQUdwQkUsTUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFFQUcsTUFBQUEsS0FBSyxDQUFDQyxRQUFOLENBQWU7QUFBRUMsUUFBQUEsSUFBSSxFQUFFO0FBQVIsT0FBZjtBQUNEO0FBUHlDLEdBQXJCLENBQXZCOztBQUR1RSxvQ0FBYkMsV0FBYTtBQUFiQSxJQUFBQSxXQUFhO0FBQUE7O0FBV3ZFLE1BQU1ILEtBQUssR0FBRyx3QkFBWUksbUJBQVosRUFBcUJYLFlBQVksSUFBSSxFQUFyQyxFQUF5Q1kscUNBQW1CRixXQUFuQixTQUFnQ1QsY0FBaEMsR0FBekMsQ0FBZDtBQUVBQSxFQUFBQSxjQUFjLENBQUNZLEdBQWYsQ0FBbUJDLGlCQUFuQjtBQUVBLFNBQU9QLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgZm9yIHRoZSByYWNpbmcgYmV0d2VlbiBzYWdhTWlkZGxld2FyZSBhbmQgc3RvcmVcbi8qIGVzbGludCBuby11c2UtYmVmb3JlLWRlZmluZTogXCJvZmZcIiAqL1xuXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IHNhZ2FzIGZyb20gJy4vc2FnYXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVXZWJDaGF0U3RvcmUoaW5pdGlhbFN0YXRlLCAuLi5taWRkbGV3YXJlcykge1xuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKHtcbiAgICBvbkVycm9yOiAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgW2Vycl0gPSBhcmdzO1xuXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG5cbiAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ1dFQl9DSEFUL1NBR0FfRVJST1InIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUgfHwge30sIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcywgc2FnYU1pZGRsZXdhcmUpKTtcblxuICBzYWdhTWlkZGxld2FyZS5ydW4oc2FnYXMpO1xuXG4gIHJldHVybiBzdG9yZTtcbn1cbiJdfQ==
