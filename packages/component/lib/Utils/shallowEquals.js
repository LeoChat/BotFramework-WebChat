'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = shallowEquals;

function shallowEquals(x, y) {
  if (x === y) {
    return true;
  }

  var xKeys = Object.keys(x);
  var yKeys = Object.keys(y);
  return (
    xKeys.length === yKeys.length &&
    xKeys.every(function(key) {
      return yKeys.includes(key) && x[key] === y[key];
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VdGlscy9zaGFsbG93RXF1YWxzLmpzIl0sIm5hbWVzIjpbInNoYWxsb3dFcXVhbHMiLCJ4IiwieSIsInhLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInlLZXlzIiwibGVuZ3RoIiwiZXZlcnkiLCJrZXkiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCQyxDQUExQixFQUE2QjtBQUMxQyxNQUFJRCxDQUFDLEtBQUtDLENBQVYsRUFBYTtBQUNYLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLENBQVosQ0FBZDtBQUNBLE1BQU1LLEtBQUssR0FBR0YsTUFBTSxDQUFDQyxJQUFQLENBQVlILENBQVosQ0FBZDtBQUVBLFNBQU9DLEtBQUssQ0FBQ0ksTUFBTixLQUFpQkQsS0FBSyxDQUFDQyxNQUF2QixJQUFpQ0osS0FBSyxDQUFDSyxLQUFOLENBQVksVUFBQUMsR0FBRztBQUFBLFdBQUlILEtBQUssQ0FBQ0ksUUFBTixDQUFlRCxHQUFmLEtBQXVCUixDQUFDLENBQUNRLEdBQUQsQ0FBRCxLQUFXUCxDQUFDLENBQUNPLEdBQUQsQ0FBdkM7QUFBQSxHQUFmLENBQXhDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGFsbG93RXF1YWxzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHhLZXlzID0gT2JqZWN0LmtleXMoeCk7XG4gIGNvbnN0IHlLZXlzID0gT2JqZWN0LmtleXMoeSk7XG5cbiAgcmV0dXJuIHhLZXlzLmxlbmd0aCA9PT0geUtleXMubGVuZ3RoICYmIHhLZXlzLmV2ZXJ5KGtleSA9PiB5S2V5cy5pbmNsdWRlcyhrZXkpICYmIHhba2V5XSA9PT0geVtrZXldKTtcbn1cbiJdfQ==
