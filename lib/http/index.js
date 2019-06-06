"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var http = [1, 2];
/** Class representing a point. */

var Point =
/*#__PURE__*/
function () {
  /**
   * Create a point.
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   */
  function Point(x, y) {
    _classCallCheck(this, Point);
  } // ...

  /**
   * Get the x value.
   * @return {number} The x value.
   */


  _createClass(Point, [{
    key: "getX",
    value: function getX() {} // ...

    /**
     * Get the y value.
     * @return {number} The y value.
     */

  }, {
    key: "getY",
    value: function getY() {} // ...

    /**
     * Convert a string containing two comma-separated numbers into a point.
     * @param {string} str - The string containing two comma-separated numbers.
     * @return {Point} A Point object.
     */

  }], [{
    key: "fromString",
    value: function fromString(str) {// ...
    }
  }]);

  return Point;
}();

var _default = http;
exports.default = _default;