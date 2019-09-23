'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = inputtableKey;
// For auto-focus in some browsers, we synthetically insert keys into the chatbox.
// By default, we insert keys when:
// 1. evt.key.length === 1 (e.g. "1", "A", "=" keys), or
// 2. evt.key is one of the map keys below (e.g. "Add" will insert "+", "Decimal" will insert ".")
var INPUTTABLE_KEY = {
  Add: '+',
  // Numpad add key
  Decimal: '.',
  // Numpad decimal key
  Divide: '/',
  // Numpad divide key
  Multiply: '*',
  // Numpad multiply key
  Subtract: '-' // Numpad subtract key
};

function inputtableKey(key) {
  return key.length === 1 ? key : INPUTTABLE_KEY[key];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9VdGlscy9UeXBlRm9jdXNTaW5rL2lucHV0dGFibGVLZXkudHMiXSwibmFtZXMiOlsiSU5QVVRUQUJMRV9LRVkiLCJBZGQiLCJEZWNpbWFsIiwiRGl2aWRlIiwiTXVsdGlwbHkiLCJTdWJ0cmFjdCIsImlucHV0dGFibGVLZXkiLCJrZXkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsY0FBYyxHQUFHO0FBQ3JCQyxFQUFBQSxHQUFHLEVBQUUsR0FEZ0I7QUFDWDtBQUNWQyxFQUFBQSxPQUFPLEVBQUUsR0FGWTtBQUVQO0FBQ2RDLEVBQUFBLE1BQU0sRUFBRSxHQUhhO0FBR1I7QUFDYkMsRUFBQUEsUUFBUSxFQUFFLEdBSlc7QUFJTjtBQUNmQyxFQUFBQSxRQUFRLEVBQUUsR0FMVyxDQUtQOztBQUxPLENBQXZCOztBQVFlLFNBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCO0FBQ3pDLFNBQU9BLEdBQUcsQ0FBQ0MsTUFBSixLQUFlLENBQWYsR0FBbUJELEdBQW5CLEdBQXlCUCxjQUFjLENBQUNPLEdBQUQsQ0FBOUM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvciBhdXRvLWZvY3VzIGluIHNvbWUgYnJvd3NlcnMsIHdlIHN5bnRoZXRpY2FsbHkgaW5zZXJ0IGtleXMgaW50byB0aGUgY2hhdGJveC5cbi8vIEJ5IGRlZmF1bHQsIHdlIGluc2VydCBrZXlzIHdoZW46XG4vLyAxLiBldnQua2V5Lmxlbmd0aCA9PT0gMSAoZS5nLiBcIjFcIiwgXCJBXCIsIFwiPVwiIGtleXMpLCBvclxuLy8gMi4gZXZ0LmtleSBpcyBvbmUgb2YgdGhlIG1hcCBrZXlzIGJlbG93IChlLmcuIFwiQWRkXCIgd2lsbCBpbnNlcnQgXCIrXCIsIFwiRGVjaW1hbFwiIHdpbGwgaW5zZXJ0IFwiLlwiKVxuY29uc3QgSU5QVVRUQUJMRV9LRVkgPSB7XG4gIEFkZDogJysnLCAvLyBOdW1wYWQgYWRkIGtleVxuICBEZWNpbWFsOiAnLicsIC8vIE51bXBhZCBkZWNpbWFsIGtleVxuICBEaXZpZGU6ICcvJywgLy8gTnVtcGFkIGRpdmlkZSBrZXlcbiAgTXVsdGlwbHk6ICcqJywgLy8gTnVtcGFkIG11bHRpcGx5IGtleVxuICBTdWJ0cmFjdDogJy0nIC8vIE51bXBhZCBzdWJ0cmFjdCBrZXlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlucHV0dGFibGVLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkubGVuZ3RoID09PSAxID8ga2V5IDogSU5QVVRUQUJMRV9LRVlba2V5XTtcbn1cbiJdfQ==
