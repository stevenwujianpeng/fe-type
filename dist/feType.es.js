function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var feType = function feType(input) {
  if (_typeof(input) !== 'object') {
    return _typeof(input);
  }

  if (input === null) {
    return 'null';
  }

  return input.constructor.name;
};

export default feType;
