const type = (input) => {
  if (typeof input !== 'object') {
    return typeof input;
  }

  if (input === null) return 'null';

  // const toString = Object.prototype.toString;
  // const typeRegx = /\[object\s(\w+?)\]/;
  // const matchedArray = typeRegx.exec(toString.call(input));

  try {
    const name = input.constructor.name;

    return name;
  } catch (e) {
    console.error(e.message);
    return 'unknown';
  }
}

export default type;
