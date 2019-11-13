'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connectUploadButton = exports.default = void 0;

var _glamor = require('glamor');

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _AttachmentIcon = _interopRequireDefault(require('./Assets/AttachmentIcon'));

var _connectToWebChat = _interopRequireDefault(require('../connectToWebChat'));

var _downscaleImageToDataURL = _interopRequireDefault(require('../Utils/downscaleImageToDataURL'));

var _IconButton = _interopRequireDefault(require('./IconButton'));

var _useLocalize = _interopRequireDefault(require('../hooks/useLocalize'));

var _useStyleSet3 = _interopRequireDefault(require('../hooks/useStyleSet'));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  if (obj != null) {
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === '[object Arguments]')) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}

var ROOT_CSS = (0, _glamor.css)({
  overflow: 'hidden',
  position: 'relative',
  '& > input': {
    height: 0,
    width: 0,
    opacity: 0,
    position: 'absolute',
    left: 0,
    top: 0
  }
});

function makeThumbnail(_x, _x2, _x3, _x4, _x5) {
  return _makeThumbnail.apply(this, arguments);
}

function _makeThumbnail() {
  _makeThumbnail = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(file, width, height, contentType, quality) {
      return regeneratorRuntime.wrap(
        function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                if (!/\.(gif|jpe?g|png)$/i.test(file.name)) {
                  _context3.next = 10;
                  break;
                }

                _context3.prev = 1;
                _context3.next = 4;
                return (0, _downscaleImageToDataURL.default)(file, width, height, contentType, quality);

              case 4:
                return _context3.abrupt('return', _context3.sent);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3['catch'](1);
                console.warn('Web Chat: Failed to downscale image due to '.concat(_context3.t0, '.'));

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        },
        _callee3,
        null,
        [[1, 7]]
      );
    })
  );
  return _makeThumbnail.apply(this, arguments);
}

var connectUploadButton = function connectUploadButton() {
  for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
    selectors[_key] = arguments[_key];
  }

  return _connectToWebChat.default.apply(
    void 0,
    [
      function(_ref) {
        var disabled = _ref.disabled,
          language = _ref.language,
          _sendFiles = _ref.sendFiles,
          _ref$styleSet$options = _ref.styleSet.options,
          enableUploadThumbnail = _ref$styleSet$options.enableUploadThumbnail,
          uploadThumbnailContentType = _ref$styleSet$options.uploadThumbnailContentType,
          uploadThumbnailHeight = _ref$styleSet$options.uploadThumbnailHeight,
          uploadThumbnailQuality = _ref$styleSet$options.uploadThumbnailQuality,
          uploadThumbnailWidth = _ref$styleSet$options.uploadThumbnailWidth;
        return {
          disabled: disabled,
          language: language,
          sendFiles: (function() {
            var _sendFiles2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2(files) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        if (!(files && files.length)) {
                          _context2.next = 6;
                          break;
                        }

                        _context2.t0 = _sendFiles;
                        _context2.next = 4;
                        return Promise.all(
                          [].map.call(
                            files,
                            /*#__PURE__*/
                            (function() {
                              var _ref2 = _asyncToGenerator(
                                /*#__PURE__*/
                                regeneratorRuntime.mark(function _callee(file) {
                                  return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                      switch ((_context.prev = _context.next)) {
                                        case 0:
                                          _context.t0 = _objectSpread;
                                          _context.t1 = {
                                            name: file.name,
                                            size: file.size,
                                            url: window.URL.createObjectURL(file)
                                          };
                                          _context.t2 = enableUploadThumbnail;

                                          if (!_context.t2) {
                                            _context.next = 8;
                                            break;
                                          }

                                          _context.next = 6;
                                          return makeThumbnail(
                                            file,
                                            uploadThumbnailWidth,
                                            uploadThumbnailHeight,
                                            uploadThumbnailContentType,
                                            uploadThumbnailQuality
                                          );

                                        case 6:
                                          _context.t3 = _context.sent;
                                          _context.t2 = {
                                            thumbnail: _context.t3
                                          };

                                        case 8:
                                          _context.t4 = _context.t2;
                                          return _context.abrupt('return', (0, _context.t0)(_context.t1, _context.t4));

                                        case 10:
                                        case 'end':
                                          return _context.stop();
                                      }
                                    }
                                  }, _callee);
                                })
                              );

                              return function(_x7) {
                                return _ref2.apply(this, arguments);
                              };
                            })()
                          )
                        );

                      case 4:
                        _context2.t1 = _context2.sent;
                        (0, _context2.t0)(_context2.t1);

                      case 6:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })
            );

            function sendFiles(_x6) {
              return _sendFiles2.apply(this, arguments);
            }

            return sendFiles;
          })()
        };
      }
    ].concat(selectors)
  );
};

exports.connectUploadButton = connectUploadButton;

var UploadButton = function UploadButton(_ref3) {
  var disabled = _ref3.disabled,
    sendFiles = _ref3.sendFiles;

  var _useStyleSet = (0, _useStyleSet3.default)(),
    _useStyleSet2 = _slicedToArray(_useStyleSet, 1),
    uploadButtonStyleSet = _useStyleSet2[0].uploadButton;

  var uploadFileString = (0, _useLocalize.default)('Upload file');
  var inputRef = (0, _react.useRef)();
  var current = inputRef.current;
  var handleClick = (0, _react.useCallback)(
    function() {
      current && current.click();
    },
    [current]
  );
  var handleFileChange = (0, _react.useCallback)(
    function(_ref4) {
      var files = _ref4.target.files;
      sendFiles(files);

      if (current) {
        current.value = null;
      }
    },
    [current, sendFiles]
  );
  return _react.default.createElement(
    'div',
    {
      className: (0, _classnames.default)(ROOT_CSS + '', uploadButtonStyleSet + '')
    },
    _react.default.createElement('input', {
      'aria-hidden': 'true',
      disabled: disabled,
      multiple: true,
      onChange: handleFileChange,
      ref: inputRef,
      role: 'button',
      tabIndex: -1,
      type: 'file'
    }),
    _react.default.createElement(
      _IconButton.default,
      {
        alt: uploadFileString,
        'aria-label': uploadFileString,
        disabled: disabled,
        onClick: handleClick
      },
      _react.default.createElement(_AttachmentIcon.default, null)
    )
  );
};

UploadButton.defaultProps = {
  disabled: false
};
UploadButton.propTypes = {
  disabled: _propTypes.default.bool,
  sendFiles: _propTypes.default.func.isRequired
};

var _default = connectUploadButton()(UploadButton);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZW5kQm94L1VwbG9hZEJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJST09UX0NTUyIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJoZWlnaHQiLCJ3aWR0aCIsIm9wYWNpdHkiLCJsZWZ0IiwidG9wIiwibWFrZVRodW1ibmFpbCIsImZpbGUiLCJjb250ZW50VHlwZSIsInF1YWxpdHkiLCJ0ZXN0IiwibmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwiY29ubmVjdFVwbG9hZEJ1dHRvbiIsInNlbGVjdG9ycyIsImNvbm5lY3RUb1dlYkNoYXQiLCJkaXNhYmxlZCIsImxhbmd1YWdlIiwic2VuZEZpbGVzIiwic3R5bGVTZXQiLCJvcHRpb25zIiwiZW5hYmxlVXBsb2FkVGh1bWJuYWlsIiwidXBsb2FkVGh1bWJuYWlsQ29udGVudFR5cGUiLCJ1cGxvYWRUaHVtYm5haWxIZWlnaHQiLCJ1cGxvYWRUaHVtYm5haWxRdWFsaXR5IiwidXBsb2FkVGh1bWJuYWlsV2lkdGgiLCJmaWxlcyIsImxlbmd0aCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJjYWxsIiwic2l6ZSIsInVybCIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInRodW1ibmFpbCIsIlVwbG9hZEJ1dHRvbiIsInVwbG9hZEJ1dHRvblN0eWxlU2V0IiwidXBsb2FkQnV0dG9uIiwidXBsb2FkRmlsZVN0cmluZyIsImlucHV0UmVmIiwiY3VycmVudCIsImhhbmRsZUNsaWNrIiwiY2xpY2siLCJoYW5kbGVGaWxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUcs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WjtBQUtFLElBQUEsR0FBRyxFQUFFSixRQUxQO0FBTUUsSUFBQSxJQUFJLEVBQUMsUUFOUDtBQU9FLElBQUEsUUFBUSxFQUFFLENBQUMsQ0FQYjtBQVFFLElBQUEsSUFBSSxFQUFDO0FBUlAsSUFERixFQVdFLDZCQUFDLG1CQUFEO0FBQVksSUFBQSxHQUFHLEVBQUVELGdCQUFqQjtBQUFtQyxrQkFBWUEsZ0JBQS9DO0FBQWlFLElBQUEsUUFBUSxFQUFFekIsUUFBM0U7QUFBcUYsSUFBQSxPQUFPLEVBQUU0QjtBQUE5RixLQUNFLDZCQUFDLHVCQUFELE9BREYsQ0FYRixDQURGO0FBaUJELENBdkNEOztBQXlDQU4sWUFBWSxDQUFDVyxZQUFiLEdBQTRCO0FBQzFCakMsRUFBQUEsUUFBUSxFQUFFO0FBRGdCLENBQTVCO0FBSUFzQixZQUFZLENBQUNZLFNBQWIsR0FBeUI7QUFDdkJsQyxFQUFBQSxRQUFRLEVBQUVtQyxtQkFBVUMsSUFERztBQUV2QmxDLEVBQUFBLFNBQVMsRUFBRWlDLG1CQUFVRSxJQUFWLENBQWVDO0FBRkgsQ0FBekI7O2VBS2V6QyxtQkFBbUIsR0FBR3lCLFlBQUgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEF0dGFjaG1lbnRJY29uIGZyb20gJy4vQXNzZXRzL0F0dGFjaG1lbnRJY29uJztcbmltcG9ydCBjb25uZWN0VG9XZWJDaGF0IGZyb20gJy4uL2Nvbm5lY3RUb1dlYkNoYXQnO1xuaW1wb3J0IGRvd25zY2FsZUltYWdlVG9EYXRhVVJMIGZyb20gJy4uL1V0aWxzL2Rvd25zY2FsZUltYWdlVG9EYXRhVVJMJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJy4vSWNvbkJ1dHRvbic7XG5pbXBvcnQgdXNlTG9jYWxpemUgZnJvbSAnLi4vaG9va3MvdXNlTG9jYWxpemUnO1xuaW1wb3J0IHVzZVN0eWxlU2V0IGZyb20gJy4uL2hvb2tzL3VzZVN0eWxlU2V0JztcblxuY29uc3QgUk9PVF9DU1MgPSBjc3Moe1xuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICcmID4gaW5wdXQnOiB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogMCxcbiAgICB0b3A6IDBcbiAgfVxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIG1ha2VUaHVtYm5haWwoZmlsZSwgd2lkdGgsIGhlaWdodCwgY29udGVudFR5cGUsIHF1YWxpdHkpIHtcbiAgaWYgKC9cXC4oZ2lmfGpwZT9nfHBuZykkL2l1LnRlc3QoZmlsZS5uYW1lKSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgZG93bnNjYWxlSW1hZ2VUb0RhdGFVUkwoZmlsZSwgd2lkdGgsIGhlaWdodCwgY29udGVudFR5cGUsIHF1YWxpdHkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFdlYiBDaGF0OiBGYWlsZWQgdG8gZG93bnNjYWxlIGltYWdlIGR1ZSB0byAke2Vycm9yfS5gKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgY29ubmVjdFVwbG9hZEJ1dHRvbiA9ICguLi5zZWxlY3RvcnMpID0+XG4gIGNvbm5lY3RUb1dlYkNoYXQoXG4gICAgKHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgbGFuZ3VhZ2UsXG4gICAgICBzZW5kRmlsZXMsXG4gICAgICBzdHlsZVNldDoge1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgZW5hYmxlVXBsb2FkVGh1bWJuYWlsLFxuICAgICAgICAgIHVwbG9hZFRodW1ibmFpbENvbnRlbnRUeXBlLFxuICAgICAgICAgIHVwbG9hZFRodW1ibmFpbEhlaWdodCxcbiAgICAgICAgICB1cGxvYWRUaHVtYm5haWxRdWFsaXR5LFxuICAgICAgICAgIHVwbG9hZFRodW1ibmFpbFdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSA9PiAoe1xuICAgICAgZGlzYWJsZWQsXG4gICAgICBsYW5ndWFnZSxcbiAgICAgIHNlbmRGaWxlczogYXN5bmMgZmlsZXMgPT4ge1xuICAgICAgICBpZiAoZmlsZXMgJiYgZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gVE9ETzogW1AzXSBXZSBuZWVkIHRvIGZpbmQgcmV2b2tlT2JqZWN0VVJMIG9uIHRoZSBVSSBzaWRlXG4gICAgICAgICAgLy8gICAgICAgUmVkdXggc3RvcmUgc2hvdWxkIG5vdCBrbm93IGFib3V0IHRoZSBicm93c2VyIGVudmlyb25tZW50XG4gICAgICAgICAgLy8gICAgICAgT25lIGZpeCBpcyB0byB1c2UgQXJyYXlCdWZmZXIgaW5zdGVhZCBvZiBvYmplY3QgVVJMLCBidXQgdGhhdCB3b3VsZCByZXF1aXJlcyBjaGFuZ2UgdG8gRGlyZWN0TGluZUpTXG4gICAgICAgICAgc2VuZEZpbGVzKFxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgIFtdLm1hcC5jYWxsKGZpbGVzLCBhc3luYyBmaWxlID0+ICh7XG4gICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpLFxuICAgICAgICAgICAgICAgIC4uLihlbmFibGVVcGxvYWRUaHVtYm5haWwgJiYge1xuICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsOiBhd2FpdCBtYWtlVGh1bWJuYWlsKFxuICAgICAgICAgICAgICAgICAgICBmaWxlLFxuICAgICAgICAgICAgICAgICAgICB1cGxvYWRUaHVtYm5haWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkVGh1bWJuYWlsSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB1cGxvYWRUaHVtYm5haWxDb250ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkVGh1bWJuYWlsUXVhbGl0eVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcbiAgICAuLi5zZWxlY3RvcnNcbiAgKTtcblxuY29uc3QgVXBsb2FkQnV0dG9uID0gKHsgZGlzYWJsZWQsIHNlbmRGaWxlcyB9KSA9PiB7XG4gIGNvbnN0IFt7IHVwbG9hZEJ1dHRvbjogdXBsb2FkQnV0dG9uU3R5bGVTZXQgfV0gPSB1c2VTdHlsZVNldCgpO1xuICBjb25zdCB1cGxvYWRGaWxlU3RyaW5nID0gdXNlTG9jYWxpemUoJ1VwbG9hZCBmaWxlJyk7XG5cbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgeyBjdXJyZW50IH0gPSBpbnB1dFJlZjtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjdXJyZW50ICYmIGN1cnJlbnQuY2xpY2soKTtcbiAgfSwgW2N1cnJlbnRdKTtcblxuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKHsgdGFyZ2V0OiB7IGZpbGVzIH0gfSkgPT4ge1xuICAgICAgc2VuZEZpbGVzKGZpbGVzKTtcblxuICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgY3VycmVudC52YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBbY3VycmVudCwgc2VuZEZpbGVzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoUk9PVF9DU1MgKyAnJywgdXBsb2FkQnV0dG9uU3R5bGVTZXQgKyAnJyl9PlxuICAgICAgPGlucHV0XG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgbXVsdGlwbGU9e3RydWV9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfVxuICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAvPlxuICAgICAgPEljb25CdXR0b24gYWx0PXt1cGxvYWRGaWxlU3RyaW5nfSBhcmlhLWxhYmVsPXt1cGxvYWRGaWxlU3RyaW5nfSBkaXNhYmxlZD17ZGlzYWJsZWR9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgPEF0dGFjaG1lbnRJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5VcGxvYWRCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2Vcbn07XG5cblVwbG9hZEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2VuZEZpbGVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VXBsb2FkQnV0dG9uKCkoVXBsb2FkQnV0dG9uKTtcblxuZXhwb3J0IHsgY29ubmVjdFVwbG9hZEJ1dHRvbiB9O1xuIl19
