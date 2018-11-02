'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _typeof = _interopDefault(require('@babel/runtime/helpers/typeof'));

var feType = function feType(input) {
  if (_typeof(input) !== 'object') {
    return _typeof(input);
  }

  if (input === null) {
    return 'null';
  }

  return input.constructor.name;
};

module.exports = feType;
