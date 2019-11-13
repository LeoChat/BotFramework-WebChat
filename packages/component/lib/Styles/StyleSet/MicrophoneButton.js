'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createMicrophoneButtonStyle;

function createMicrophoneButtonStyle(_ref) {
  var microphoneButtonColorOnDictate = _ref.microphoneButtonColorOnDictate;
  return {
    // TODO: [P3] This path should not know anything about the DOM tree of <IconButton>
    '&.dictating > button': {
      '&, &:focus, &:hover': {
        '& svg': {
          fill: microphoneButtonColorOnDictate
        }
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdHlsZXMvU3R5bGVTZXQvTWljcm9waG9uZUJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJjcmVhdGVNaWNyb3Bob25lQnV0dG9uU3R5bGUiLCJtaWNyb3Bob25lQnV0dG9uQ29sb3JPbkRpY3RhdGUiLCJmaWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsMkJBQVQsT0FBeUU7QUFBQSxNQUFsQ0MsOEJBQWtDLFFBQWxDQSw4QkFBa0M7QUFDdEYsU0FBTztBQUNMO0FBQ0EsNEJBQXdCO0FBQ3RCLDZCQUF1QjtBQUNyQixpQkFBUztBQUNQQyxVQUFBQSxJQUFJLEVBQUVEO0FBREM7QUFEWTtBQUREO0FBRm5CLEdBQVA7QUFVRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1pY3JvcGhvbmVCdXR0b25TdHlsZSh7IG1pY3JvcGhvbmVCdXR0b25Db2xvck9uRGljdGF0ZSB9KSB7XG4gIHJldHVybiB7XG4gICAgLy8gVE9ETzogW1AzXSBUaGlzIHBhdGggc2hvdWxkIG5vdCBrbm93IGFueXRoaW5nIGFib3V0IHRoZSBET00gdHJlZSBvZiA8SWNvbkJ1dHRvbj5cbiAgICAnJi5kaWN0YXRpbmcgPiBidXR0b24nOiB7XG4gICAgICAnJiwgJjpmb2N1cywgJjpob3Zlcic6IHtcbiAgICAgICAgJyYgc3ZnJzoge1xuICAgICAgICAgIGZpbGw6IG1pY3JvcGhvbmVCdXR0b25Db2xvck9uRGljdGF0ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl19
