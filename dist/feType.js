'use strict';

function feType(input) {
  if (typeof input !== 'object') {
    return typeof input;
  }

  if (input === null) {
    return 'null';
  } else {
    return input.constructor.name;
  }
}

module.exports = feType;
