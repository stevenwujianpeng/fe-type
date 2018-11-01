const feType = (input) => {
  if (typeof input !== 'object') {
    return typeof input;
  }

  if (input === null) {
    return 'null';
  }

  return input.constructor.name;
}

export default feType;
