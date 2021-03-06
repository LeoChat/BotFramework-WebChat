'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = createElement;

function createElement(tagName, attributes) {
  var element = document.createElement(tagName);
  Object.keys(attributes).forEach(function(name) {
    var value = attributes[name];

    if (/^on[A-Z]/.test(name)) {
      element.addEventListener(name.substr(2).toLowerCase(), value.bind(element));
    } else if (name === 'style') {
      var styles = value;
      var elementStyle = element.style;
      Object.keys(styles).forEach(function(name) {
        elementStyle[name] = styles[name];
      });
    } else if (typeof value === 'boolean') {
      value && element.setAttribute(name, '');
    } else if (typeof value !== 'undefined') {
      element.setAttribute(name, value);
    }
  });
  var childrenFragment = document.createDocumentFragment();

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  children.forEach(function(child) {
    return childrenFragment.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  });
  element.appendChild(childrenFragment);
  return element;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXR1cHMvY3JlYXRlRWxlbWVudC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwidGFnTmFtZSIsImF0dHJpYnV0ZXMiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIm5hbWUiLCJ2YWx1ZSIsInRlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJiaW5kIiwic3R5bGVzIiwiZWxlbWVudFN0eWxlIiwic3R5bGUiLCJzZXRBdHRyaWJ1dGUiLCJjaGlsZHJlbkZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNoaWxkcmVuIiwiY2hpbGQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsYUFBVCxDQUF1QkMsT0FBdkIsRUFBZ0NDLFVBQWhDLEVBQXlEO0FBQ3RFLE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDSixhQUFULENBQXVCQyxPQUF2QixDQUFoQjtBQUVBSSxFQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUosVUFBWixFQUF3QkssT0FBeEIsQ0FBZ0MsVUFBQUMsSUFBSSxFQUFJO0FBQ3RDLFFBQU1DLEtBQUssR0FBR1AsVUFBVSxDQUFDTSxJQUFELENBQXhCOztBQUVBLFFBQUksV0FBV0UsSUFBWCxDQUFnQkYsSUFBaEIsQ0FBSixFQUEyQjtBQUN6QkwsTUFBQUEsT0FBTyxDQUFDUSxnQkFBUixDQUF5QkgsSUFBSSxDQUFDSSxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLEVBQXpCLEVBQXVESixLQUFLLENBQUNLLElBQU4sQ0FBV1gsT0FBWCxDQUF2RDtBQUNELEtBRkQsTUFFTyxJQUFJSyxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUMzQixVQUFNTyxNQUFNLEdBQUdOLEtBQWY7QUFDQSxVQUFNTyxZQUFZLEdBQUdiLE9BQU8sQ0FBQ2MsS0FBN0I7QUFFQVosTUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlTLE1BQVosRUFBb0JSLE9BQXBCLENBQTRCLFVBQUFDLElBQUksRUFBSTtBQUNsQ1EsUUFBQUEsWUFBWSxDQUFDUixJQUFELENBQVosR0FBcUJPLE1BQU0sQ0FBQ1AsSUFBRCxDQUEzQjtBQUNELE9BRkQ7QUFHRCxLQVBNLE1BT0EsSUFBSSxPQUFPQyxLQUFQLEtBQWlCLFNBQXJCLEVBQWdDO0FBQ3JDQSxNQUFBQSxLQUFLLElBQUlOLE9BQU8sQ0FBQ2UsWUFBUixDQUFxQlYsSUFBckIsRUFBMkIsRUFBM0IsQ0FBVDtBQUNELEtBRk0sTUFFQSxJQUFJLE9BQU9DLEtBQVAsS0FBaUIsV0FBckIsRUFBa0M7QUFDdkNOLE1BQUFBLE9BQU8sQ0FBQ2UsWUFBUixDQUFxQlYsSUFBckIsRUFBMkJDLEtBQTNCO0FBQ0Q7QUFDRixHQWpCRDtBQW1CQSxNQUFNVSxnQkFBZ0IsR0FBR2YsUUFBUSxDQUFDZ0Isc0JBQVQsRUFBekI7O0FBdEJzRSxvQ0FBVkMsUUFBVTtBQUFWQSxJQUFBQSxRQUFVO0FBQUE7O0FBd0J0RUEsRUFBQUEsUUFBUSxDQUFDZCxPQUFULENBQWlCLFVBQUFlLEtBQUs7QUFBQSxXQUNwQkgsZ0JBQWdCLENBQUNJLFdBQWpCLENBQTZCLE9BQU9ELEtBQVAsS0FBaUIsUUFBakIsR0FBNEJsQixRQUFRLENBQUNvQixjQUFULENBQXdCRixLQUF4QixDQUE1QixHQUE2REEsS0FBMUYsQ0FEb0I7QUFBQSxHQUF0QjtBQUdBbkIsRUFBQUEsT0FBTyxDQUFDb0IsV0FBUixDQUFvQkosZ0JBQXBCO0FBRUEsU0FBT2hCLE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgYXR0cmlidXRlcywgLi4uY2hpbGRyZW4pIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICBpZiAoL15vbltBLVpdLy50ZXN0KG5hbWUpKSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgdmFsdWUuYmluZChlbGVtZW50KSk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnc3R5bGUnKSB7XG4gICAgICBjb25zdCBzdHlsZXMgPSB2YWx1ZTtcbiAgICAgIGNvbnN0IGVsZW1lbnRTdHlsZSA9IGVsZW1lbnQuc3R5bGU7XG5cbiAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgZWxlbWVudFN0eWxlW25hbWVdID0gc3R5bGVzW25hbWVdO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgdmFsdWUgJiYgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgJycpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY2hpbGRyZW5GcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+XG4gICAgY2hpbGRyZW5GcmFnbWVudC5hcHBlbmRDaGlsZCh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpIDogY2hpbGQpXG4gICk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW5GcmFnbWVudCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iXX0=
