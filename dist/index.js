(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['fe-classNames'] = factory());
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var type = function type(input) {
  if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object') {
    return typeof input === 'undefined' ? 'undefined' : _typeof(input);
  }

  if (input === null) return 'null';

  // const toString = Object.prototype.toString;
  // const typeRegx = /\[object\s(\w+?)\]/;
  // const matchedArray = typeRegx.exec(toString.call(input));

  return input.constructor.name;
};

return type;

})));
