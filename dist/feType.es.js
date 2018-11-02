import _typeof from '@babel/runtime/helpers/typeof';

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
